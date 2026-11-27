import React, { useState, useEffect, useMemo } from 'react';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  AlertCircle,
  Video,
  CheckCircle2,
} from 'lucide-react';
import {
  ChapterVideoItem,
  getVideosByChapter,
  getUncategorizedVideos,
  YOUTUBE_PLAYLIST_URL,
  YOUTUBE_PLAYLIST_2_URL,
} from '../data/chapterVideos';
import { sound } from '../utils/audio';

interface ChapterVideoSectionProps {
  bab: number;
}

export const ChapterVideoSection: React.FC<ChapterVideoSectionProps> = ({ bab }) => {
  const chapterVideos = useMemo(() => getVideosByChapter(bab), [bab]);
  const uncategorizedVideos = useMemo(() => getUncategorizedVideos(), []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [embedBlocked, setEmbedBlocked] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setEmbedBlocked(false);
  }, [bab]);

  const activeVideo: ChapterVideoItem | undefined = chapterVideos[activeIndex];

  const handleSelectVideo = (idx: number) => {
    sound.playClick();
    setActiveIndex(idx);
    setEmbedBlocked(false);
  };

  if (chapterVideos.length === 0) {
    return (
      <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/25 p-6 sm:p-8 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] text-white flex items-center justify-center shadow-md shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope']">
                Video Pembelajaran Bab {bab}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {bab <= 25
                  ? `Playlist sumber (Minna no Nihongo 1) saat ini mencakup materi Bab 1–25. Belum ada video khusus untuk Bab ${bab}.`
                  : `Playlist sumber (Minna no Nihongo 2) saat ini mencakup materi Bab 26–47. Belum ada video khusus untuk Bab ${bab}.`}
              </p>
            </div>
          </div>
          <a
            href={bab <= 25 ? YOUTUBE_PLAYLIST_URL : YOUTUBE_PLAYLIST_2_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#3978D6]/15 border border-[#3978D6]/30 text-xs font-bold text-[var(--text-primary)] transition-colors shrink-0"
          >
            <Video className="w-4 h-4 text-red-500" />
            <span>Lihat Playlist Asli</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {bab <= 25 && uncategorizedVideos.length > 0 && (
          <div className="pt-4 border-t border-[#3978D6]/15 space-y-2">
            <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">
              Video Latihan Lintas Bab (Bab 1–25)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              {uncategorizedVideos.map((v) => (
                <a
                  key={v.video_id}
                  href={v.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[var(--bg-elevated)] hover:border-[#3978D6]/50 border border-[var(--border)] flex items-center justify-between gap-2 transition-all"
                >
                  <span className="text-xs font-bold text-[var(--text-primary)] line-clamp-2">
                    {v.title}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#3978D6] shrink-0" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-[var(--bg-surface)] border border-[#3978D6]/30 p-4 sm:p-6 lg:p-8 space-y-6 shadow-[0_4px_24px_rgba(8,21,47,0.12)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#3978D6]/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2456A6] to-[#3978D6] text-white flex items-center justify-center shadow-md shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-black text-[var(--text-primary)] font-['Manrope']">
              Video Pembelajaran · Bab {bab}
            </h3>
            <p className="text-xs text-[var(--text-secondary)]">
              {chapterVideos.length} video terintegrasi dari playlist resmi YouTube
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleSelectVideo(Math.max(0, activeIndex - 1))}
            disabled={activeIndex === 0}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#3978D6]/15 border border-[#3978D6]/25 text-xs font-bold text-[var(--text-primary)] disabled:opacity-40 cursor-pointer transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>
          <span className="text-xs font-mono font-bold text-[var(--text-muted)] px-2">
            {activeIndex + 1} / {chapterVideos.length}
          </span>
          <button
            type="button"
            onClick={() => handleSelectVideo(Math.min(chapterVideos.length - 1, activeIndex + 1))}
            disabled={activeIndex >= chapterVideos.length - 1}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[var(--bg-elevated)] hover:bg-[#3978D6]/15 border border-[#3978D6]/25 text-xs font-bold text-[var(--text-primary)] disabled:opacity-40 cursor-pointer transition-all"
          >
            <span className="hidden sm:inline">Berikutnya</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Grid: Player + Playlist */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player & Details */}
        <div className="lg:col-span-2 space-y-4">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#08152F] border border-[#3978D6]/30 shadow-lg">
            {!embedBlocked ? (
              <iframe
                key={activeVideo.youtube_id}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtube_id}?rel=0`}
                title={activeVideo.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onError={() => setEmbedBlocked(true)}
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#08152F] text-white">
                <AlertCircle className="w-10 h-10 text-amber-400" />
                <p className="text-sm font-bold">
                  Video ini tidak mengizinkan pemutaran embed di luar YouTube.
                </p>
                <a
                  href={activeVideo.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white text-xs font-bold shadow-md"
                >
                  <Video className="w-4 h-4" />
                  <span>Tonton Langsung di YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Active Video Info */}
          <div className="p-4 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#3978D6]/15 border border-[#3978D6]/30 text-[11px] font-bold text-[#3978D6]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Sedang Diputar • {activeVideo.category}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setEmbedBlocked((prev) => !prev)}
                  className="text-[11px] font-semibold text-[var(--text-muted)] hover:text-[#3978D6] transition-colors cursor-pointer"
                >
                  {embedBlocked ? 'Coba Embed Lagi' : 'Video tidak muncul?'}
                </button>
                <a
                  href={activeVideo.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#3978D6] hover:underline"
                >
                  <span>Buka di YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <h4 className="text-base sm:text-lg font-black text-[var(--text-primary)] font-['Manrope']">
              {activeVideo.title}
            </h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {activeVideo.description}
            </p>
          </div>
        </div>

        {/* Chapter Video Playlist */}
        <div className="space-y-2.5">
          <h4 className="text-xs font-black uppercase tracking-wider text-[var(--text-muted)] px-1">
            Daftar Video Bab {bab} ({chapterVideos.length})
          </h4>
          <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
            {chapterVideos.map((vid, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={vid.video_id}
                  type="button"
                  onClick={() => handleSelectVideo(idx)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#2456A6]/20 to-[#3978D6]/15 border-[#3978D6] shadow-sm'
                      : 'bg-[var(--bg-elevated)]/70 hover:bg-[var(--bg-elevated)] border-[var(--border)]'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 mt-0.5 text-xs font-black ${
                      isActive
                        ? 'bg-[#3978D6] text-white'
                        : 'bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border)]'
                    }`}
                  >
                    {isActive ? <Play className="w-3.5 h-3.5 fill-current" /> : idx + 1}
                  </div>
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="text-xs font-bold text-[var(--text-primary)] line-clamp-2 leading-snug">
                      {vid.title}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-semibold text-[var(--text-muted)]">
                      <span>{vid.category}</span>
                      {isActive && (
                        <span className="text-[#3978D6] font-bold">• Sedang Diputar</span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
