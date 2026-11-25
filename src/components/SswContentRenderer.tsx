import React from 'react';

interface SswContentRendererProps {
  content: string;
}

export const SswContentRenderer: React.FC<SswContentRendererProps> = ({ content }) => {
  if (!content) return null;

  // Helper to parse inline formatting: **bold**, *italic*, and `code`
  const renderInlineFormatted = (text: string) => {
    // Regex for bold **text**, italic *text*, and Japanese parentheses
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    // Pattern matching **bold** or *italic*
    const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      // Push preceding plain text
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      if (match[2]) {
        // Bold: **text**
        parts.push(
          <strong
            key={`b-${keyIdx++}`}
            className="font-black text-[#FFFFFF] bg-[var(--bg-elevated)]/70 px-1.5 py-0.5 rounded-md border border-[#3978D6]/30 tracking-wide inline-block my-0.5"
          >
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        // Italic: *text*
        parts.push(
          <span
            key={`i-${keyIdx++}`}
            className="italic text-[#3978D6] font-medium"
          >
            {match[3]}
          </span>
        );
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Split content into lines and group into paragraphs and lists
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: { type: 'ol' | 'ul'; items: string[] } | null = null;
  let elementKey = 0;

  const flushList = () => {
    if (!currentList) return;
    const ListTag = currentList.type;
    const isOrdered = currentList.type === 'ol';

    elements.push(
      <div key={`list-${elementKey++}`} className="my-3 space-y-2 pl-1">
        {currentList.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
            <span className={`flex items-center justify-center shrink-0 mt-0.5 ${
              isOrdered 
                ? 'w-5 h-5 rounded-md bg-[var(--bg-elevated)] text-[#3978D6] border border-[#3978D6]/30 text-[11px] font-black font-mono' 
                : 'w-2 h-2 rounded-full bg-[#3978D6] mt-2'
            }`}>
              {isOrdered ? idx + 1 : ''}
            </span>
            <div className="flex-1">
              {renderInlineFormatted(item)}
            </div>
          </div>
        ))}
      </div>
    );
    currentList = null;
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      flushList();
      return;
    }

    // Image syntax: ![caption](url)
    const imgMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imgMatch) {
      flushList();
      const caption = imgMatch[1];
      const src = imgMatch[2];
      elements.push(
        <figure
          key={`img-${elementKey++}`}
          className="my-5 rounded-2xl overflow-hidden border border-[#3978D6]/25 bg-[var(--bg-sidebar)]/80 p-3 sm:p-4 space-y-2.5 shadow-lg group"
        >
          <div className="relative rounded-xl overflow-hidden bg-black/40 flex items-center justify-center border border-[#3978D6]/10 p-2">
            <img
              src={src}
              alt={caption}
              className="max-h-[500px] w-auto max-w-full object-contain mx-auto transition-transform duration-300 group-hover:scale-[1.01] rounded-lg"
              loading="lazy"
            />
          </div>
          {caption && (
            <figcaption className="text-center text-xs text-[var(--text-secondary)] flex items-center justify-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3978D6]" />
              <span className="font-medium">{renderInlineFormatted(caption)}</span>
            </figcaption>
          )}
        </figure>
      );
      return;
    }

    // Header 3: ### Title
    const h3Match = line.match(/^###\s+(.*)$/);
    if (h3Match) {
      flushList();
      elements.push(
        <h4 key={`h3-${elementKey++}`} className="text-sm sm:text-base font-bold text-[var(--text-primary)] pt-3 pb-1 border-b border-[#3978D6]/20 flex items-center gap-2">
          <span className="w-2 h-2 rounded-xs bg-[#3978D6]" />
          {renderInlineFormatted(h3Match[1])}
        </h4>
      );
      return;
    }

    // Numbered list: 1. Item, 2. Item
    const numMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (numMatch) {
      if (!currentList || currentList.type !== 'ol') {
        flushList();
        currentList = { type: 'ol', items: [] };
      }
      currentList.items.push(numMatch[2]);
      return;
    }

    // Bullet list: - Item or * Item
    const bulletMatch = line.match(/^[-*•]\s+(.*)$/);
    if (bulletMatch) {
      if (!currentList || currentList.type !== 'ul') {
        flushList();
        currentList = { type: 'ul', items: [] };
      }
      currentList.items.push(bulletMatch[1]);
      return;
    }

    // Note line: *(Catatan: ...)* or ※ ...
    if (line.startsWith('*(') || line.startsWith('※') || line.startsWith('(Catatan')) {
      flushList();
      elements.push(
        <div
          key={`note-${elementKey++}`}
          className="my-3 p-3 rounded-2xl bg-[var(--bg-sidebar)]/80 border border-[#3978D6]/25 text-xs text-[var(--text-secondary)] leading-relaxed flex items-start gap-2 shadow-xs"
        >
          <span className="text-[#3978D6] font-bold shrink-0">※</span>
          <div>{renderInlineFormatted(line.replace(/^\*\(/, '(').replace(/\)\*$/, ')'))}</div>
        </div>
      );
      return;
    }

    // Normal paragraph
    flushList();
    elements.push(
      <p key={`p-${elementKey++}`} className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed my-2.5">
        {renderInlineFormatted(line)}
      </p>
    );
  });

  flushList();

  return <div className="space-y-1 text-left">{elements}</div>;
};
