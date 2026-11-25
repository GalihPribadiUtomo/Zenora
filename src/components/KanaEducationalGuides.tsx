import React, { useState } from 'react';
import { 
  Volume2, 
  CheckCircle2
} from 'lucide-react';
import { KANA_EDUCATIONAL_DATA } from '../data/kanaEducationalData';
import { speakJapanese } from '../utils/audio';

export const KanaEducationalGuides: React.FC = () => {
  const [activeGuideTab, setActiveGuideTab] = useState<'dakuon' | 'youon' | 'sokuon' | 'choonpu' | 'hiragana_vs_katakana'>('dakuon');

  const { dakuon, youon, sokuon, choonpu, hiragana_vs_katakana } = KANA_EDUCATIONAL_DATA;

  return (
    <div className="card-soft p-6 sm:p-8 rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 space-y-6 text-left">
      
      {/* Header of Educational Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3978D6]/20 pb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-sidebar)] border border-[#3978D6]/25 text-[#3978D6] text-xs font-black uppercase tracking-wider mb-2 font-mono">
            Materi Tambahan Sistem Aksara
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] font-['Manrope'] tracking-tight">
            Panduan Lengkap Variasi & Aturan Menulis Kana
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Pelajari konsep bunyi modifikasi Dakuten, gabungan Youon, konsonan ganda Sokuon, vokal panjang Choonpu, serta kaidah penggunaan Hiragana vs Katakana.
          </p>
        </div>
      </div>

      {/* Guide Tabs Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#3978D6]/20">
        {[
          { id: 'dakuon', label: '1. Dakuten & Handakuten (が・ぱ)' },
          { id: 'youon', label: '2. Youon (きゃ・しゅ)' },
          { id: 'sokuon', label: '3. Sokuon (っ・ッ)' },
          { id: 'choonpu', label: '4. Choonpu (ー)' },
          { id: 'hiragana_vs_katakana', label: '5. Hiragana vs Katakana' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveGuideTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
              activeGuideTab === tab.id
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-[var(--text-primary)] border border-[#3978D6]/40 shadow-xs'
                : 'bg-[var(--bg-sidebar)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[#3978D6]/25'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: DAKUTEN & HANDAKUTEN */}
      {activeGuideTab === 'dakuon' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/25">
            <h3 className="text-base font-black text-[var(--text-primary)]">{dakuon.title}</h3>
            <p className="text-xs font-semibold text-[#3978D6] mt-0.5">{dakuon.subtitle}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-2 font-medium">
              {dakuon.explanation}
            </p>
          </div>

          <div className="space-y-4">
            {dakuon.tables.map((table, tIdx) => (
              <div key={tIdx} className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/40 border border-[#3978D6]/20">
                <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-wider mb-3">
                  {table.groupName}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {table.items.map((item, iIdx) => (
                    <div 
                      key={iIdx}
                      className="p-3 rounded-xl bg-[var(--bg-sidebar)] border border-[#3978D6]/25 shadow-2xs text-center space-y-1.5 hover:border-[#3978D6]/50 transition-colors"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <span className="kanji-font text-2xl font-black text-[var(--text-primary)]">{item.h}</span>
                        <span className="text-xs text-[var(--text-muted)]">/</span>
                        <span className="kanji-font text-2xl font-black text-[#3978D6]">{item.k}</span>
                      </div>
                      <span className="block text-xs font-mono font-bold text-[var(--text-muted)] uppercase">
                        {item.romaji}
                      </span>
                      <button
                        onClick={() => speakJapanese(item.h)}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] text-[10px] font-bold border border-[#3978D6]/25 transition-colors"
                      >
                        <Volume2 className="w-3 h-3 text-[#3978D6]" />
                        <span>Bunyi</span>
                      </button>
                      <div className="text-[10px] text-[var(--text-muted)] font-medium pt-1 border-t border-[#3978D6]/15 leading-tight">
                        <p>{item.exH}</p>
                        <p className="text-[#3978D6]">{item.exK}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: YOUON */}
      {activeGuideTab === 'youon' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/25">
            <h3 className="text-base font-black text-[var(--text-primary)]">{youon.title}</h3>
            <p className="text-xs font-semibold text-[#3978D6] mt-0.5">{youon.subtitle}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-2 font-medium">
              {youon.explanation}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {youon.examples.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/40 border border-[#3978D6]/20 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="kanji-font text-2xl font-black text-[var(--text-primary)]">
                    {item.kana}
                  </span>
                  <button
                    onClick={() => speakJapanese(item.kana.split(' / ')[0])}
                    className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/25 shadow-2xs"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#3978D6]" />
                  </button>
                </div>
                <span className="text-xs font-mono font-black text-[#3978D6] mt-1 block">
                  {item.romaji}
                </span>
                <p className="text-xs text-[var(--text-muted)] font-medium mt-2 pt-2 border-t border-[#3978D6]/15">
                  {item.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SOKUON */}
      {activeGuideTab === 'sokuon' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/25">
            <h3 className="text-base font-black text-[var(--text-primary)]">{sokuon.title}</h3>
            <p className="text-xs font-semibold text-[#3978D6] mt-0.5">{sokuon.subtitle}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-2 font-medium">
              {sokuon.explanation}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-black text-[var(--text-primary)] uppercase tracking-wider">
              Kaidah Bunyi Konsonan Ganda:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sokuon.rules.map((rule, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[var(--bg-sidebar)]/40 border border-[#3978D6]/20 flex items-start gap-2.5 text-xs text-[var(--text-primary)] font-medium leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/30 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p>{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CHOONPU */}
      {activeGuideTab === 'choonpu' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/25">
            <h3 className="text-base font-black text-[var(--text-primary)]">{choonpu.title}</h3>
            <p className="text-xs font-semibold text-[#3978D6] mt-0.5">{choonpu.subtitle}</p>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-2 font-medium">
              {choonpu.explanation}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {choonpu.examples.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/40 border border-[#3978D6]/20 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="kanji-font text-2xl font-black text-[#3978D6]">
                    {item.word}
                  </span>
                  <button
                    onClick={() => speakJapanese(item.word)}
                    className="p-1.5 rounded-lg bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/25"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#3978D6]" />
                  </button>
                </div>
                <span className="text-xs font-mono font-bold text-[var(--text-muted)] mt-1">
                  {item.romaji}
                </span>
                <p className="text-xs font-bold text-[var(--text-primary)] mt-2 pt-2 border-t border-[#3978D6]/15">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: HIRAGANA VS KATAKANA */}
      {activeGuideTab === 'hiragana_vs_katakana' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-[var(--bg-sidebar)]/60 border border-[#3978D6]/25">
            <h3 className="text-base font-black text-[var(--text-primary)]">{hiragana_vs_katakana.title}</h3>
            <p className="text-xs font-semibold text-[#3978D6] mt-0.5">{hiragana_vs_katakana.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hiragana_vs_katakana.points.map((pt, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-3xl bg-[var(--bg-sidebar)] border border-[#3978D6]/25 shadow-xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-[#3978D6]' : 'bg-[#F2F6FC]'}`}></span>
                  <h4 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
                    {pt.aspect}
                  </h4>
                </div>
                <p className="text-xs text-[var(--text-muted)] font-medium leading-relaxed">
                  {pt.description}
                </p>
                <ul className="space-y-2 pt-2 border-t border-[#3978D6]/15">
                  {pt.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-[var(--text-primary)] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
