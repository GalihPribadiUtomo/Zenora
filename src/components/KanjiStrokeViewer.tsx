import React, { useState, useEffect, useCallback, useRef } from 'react';
import { RotateCcw, Play, Pause, SkipForward, SkipBack, Check } from 'lucide-react';
import { KANJI_STROKE_DATA } from '../data/kanjiStrokeData';

interface KanjiStrokeViewerProps {
  kanji: string;
  strokeCount: number;
}

export const KanjiStrokeViewer: React.FC<KanjiStrokeViewerProps> = ({ kanji, strokeCount }) => {
  const strokeData = KANJI_STROKE_DATA[kanji];
  const [visibleStrokes, setVisibleStrokes] = useState<number>(strokeData ? strokeData.paths.length : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeStroke, setActiveStroke] = useState<number | null>(null);
  const [animProgress, setAnimProgress] = useState<Record<number, number>>({});
  const animRef = useRef<number | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const isAnimatingRef = useRef<boolean>(false);
  const currentStepRef = useRef<number>(0);

  const totalStrokes = strokeData ? strokeData.paths.length : strokeCount;

  // Sync refs
  useEffect(() => {
    isPausedRef.current = isPaused;
    isAnimatingRef.current = isAnimating;
  }, [isPaused, isAnimating]);

  // Reset state on kanji change
  useEffect(() => {
    setVisibleStrokes(totalStrokes);
    setActiveStroke(null);
    setIsAnimating(false);
    setIsPaused(false);
    setAnimProgress({});
    if (animRef.current) cancelAnimationFrame(animRef.current);
  }, [kanji, totalStrokes]);

  // Calculate path length for animation
  const getPathLength = useCallback((pathD: string): number => {
    try {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', pathD);
      svg.appendChild(path);
      document.body.appendChild(svg);
      const len = path.getTotalLength();
      document.body.removeChild(svg);
      return len;
    } catch {
      return 200;
    }
  }, []);

  // Play animation (draw strokes one by one)
  const playAnimation = useCallback(() => {
    if (!strokeData) return;

    if (isPaused) {
      // Resume
      setIsPaused(false);
      setIsAnimating(true);
      return;
    }

    setIsAnimating(true);
    setIsPaused(false);
    setVisibleStrokes(0);
    setActiveStroke(0);
    setAnimProgress({});
    currentStepRef.current = 0;

    const drawStep = (idx: number) => {
      if (idx >= strokeData.paths.length) {
        setIsAnimating(false);
        setIsPaused(false);
        setActiveStroke(null);
        setVisibleStrokes(strokeData.paths.length);
        return;
      }

      currentStepRef.current = idx;
      setActiveStroke(idx);
      setVisibleStrokes(idx);

      const pathLen = getPathLength(strokeData.paths[idx]);
      const duration = Math.min(650, Math.max(350, pathLen * 3.2));
      const startTime = performance.now();

      const animate = (now: number) => {
        if (!isAnimatingRef.current) return;
        if (isPausedRef.current) {
          animRef.current = requestAnimationFrame(animate);
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        setAnimProgress(prev => ({ ...prev, [idx]: progress }));

        if (progress < 1) {
          animRef.current = requestAnimationFrame(animate);
        } else {
          setVisibleStrokes(idx + 1);
          setTimeout(() => {
            if (isAnimatingRef.current && !isPausedRef.current) {
              drawStep(idx + 1);
            }
          }, 180);
        }
      };

      animRef.current = requestAnimationFrame(animate);
    };

    drawStep(0);
  }, [strokeData, isPaused, getPathLength]);

  const pauseAnimation = () => {
    setIsPaused(true);
  };

  const resumeAnimation = () => {
    setIsPaused(false);
  };

  const resetView = () => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setVisibleStrokes(totalStrokes);
    setActiveStroke(null);
    setAnimProgress({});
  };

  const prevStroke = () => {
    if (isAnimating) {
      setIsAnimating(false);
      setIsPaused(false);
    }
    setVisibleStrokes(prev => Math.max(0, prev - 1));
    setActiveStroke(null);
  };

  const nextStroke = () => {
    if (isAnimating) {
      setIsAnimating(false);
      setIsPaused(false);
    }
    setVisibleStrokes(prev => Math.min(totalStrokes, prev + 1));
    setActiveStroke(null);
  };

  if (!strokeData) {
    return (
      <div className="flex items-center justify-center h-64 bg-[var(--bg-surface)] rounded-2xl border border-[#3978D6]/20">
        <p className="text-sm text-[var(--text-muted)] font-medium">Panduan data goresan tidak tersedia untuk kanji ini.</p>
      </div>
    );
  }

  const progressPercent = totalStrokes > 0 ? Math.round((visibleStrokes / totalStrokes) * 100) : 0;

  return (
    <div className="space-y-5">
      
      {/* Top Header & Progress */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#3978D6]/20">
        <div>
          <h4 className="text-sm font-extrabold text-[var(--text-primary)] flex items-center gap-2">
            <span className="text-[#3978D6] font-black kanji-font text-base">書き順</span>
            <span>Panduan Urutan Goresan Interaktif</span>
          </h4>
          <p className="text-xs text-[var(--text-muted)] mt-0.5">
            Pelajari arah dan nomor urutan goresan standar resmi Jepang.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] font-bold text-[var(--text-muted)] block">Progres Goresan</span>
            <span className="text-xs font-black text-[var(--text-primary)]">
              {visibleStrokes} / {totalStrokes} Goresan ({progressPercent}%)
            </span>
          </div>
          <div className="w-20 h-2 bg-[var(--bg-sidebar)] rounded-full overflow-hidden border border-[#3978D6]/25">
            <div 
              className="h-full bg-gradient-to-r from-[var(--bg-elevated)] via-[#3978D6] to-[#F2F6FC] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
        
        {/* SVG Drawing Blackboard */}
        <div className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-3xl bg-[var(--bg-sidebar)] border-2 border-[#3978D6]/25 shadow-sm overflow-hidden shrink-0 flex items-center justify-center">
          
          {/* Subtle Grid crosshair lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 109 109"
            preserveAspectRatio="xMidYMid meet"
          >
            <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#3978D6" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#3978D6" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
          </svg>

          {/* Stroke paths */}
          <svg
            className="absolute inset-0 w-full h-full p-2"
            viewBox="0 0 109 109"
            preserveAspectRatio="xMidYMid meet"
            style={{ fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}
          >
            {strokeData.paths.map((pathD, idx) => {
              const isVisible = idx < visibleStrokes;
              const isBeingDrawn = idx === activeStroke && animProgress[idx] !== undefined && animProgress[idx] < 1;
              const pathLen = isBeingDrawn ? getPathLength(pathD) : 0;
              const progress = animProgress[idx] ?? 1;

              if (!isVisible && !isBeingDrawn) return null;

              const isCurrentStroke = idx === visibleStrokes - 1 || idx === activeStroke;

              return (
                <path
                  key={idx}
                  d={pathD}
                  stroke={isCurrentStroke ? '#3978D6' : '#F2F6FC'}
                  strokeWidth={isCurrentStroke ? '4.8' : '4.2'}
                  style={
                    isBeingDrawn
                      ? {
                          strokeDasharray: pathLen,
                          strokeDashoffset: pathLen * (1 - progress),
                          transition: 'none',
                        }
                      : undefined
                  }
                />
              );
            })}

            {/* Numbered circles at stroke start positions */}
            {strokeData.starts.map((start, idx) => {
              const isVisible = idx < visibleStrokes || idx === activeStroke;
              if (!isVisible) return null;

              const isCurrent = idx === activeStroke || (activeStroke === null && idx === visibleStrokes - 1);

              return (
                <g key={`label-${idx}`}>
                  {/* Outer circle */}
                  <circle
                    cx={start.x}
                    cy={start.y}
                    r={isCurrent ? '7.5' : '6'}
                    fill={isCurrent ? '#3978D6' : '#172945'}
                    stroke="#111F38"
                    strokeWidth="1.8"
                    opacity={isCurrent ? 1 : 0.9}
                  />
                  {/* Number */}
                  <text
                    x={start.x}
                    y={start.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={isCurrent ? '#08152F' : '#F2F6FC'}
                    fontSize={isCurrent ? '6.5' : '5.5'}
                    fontWeight="800"
                    fontFamily="'Manrope', sans-serif"
                  >
                    {idx + 1}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Kanji Ghost Overlay if zero strokes displayed */}
          {visibleStrokes === 0 && !isAnimating && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-15">
              <span className="kanji-font text-[160px] font-black text-[#3978D6]">
                {kanji}
              </span>
            </div>
          )}
        </div>

        {/* Right side: Interactive Controls & Stroke Step Grid */}
        <div className="flex-1 min-w-0 w-full space-y-4">
          
          {/* Action Button Bar */}
          <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[var(--bg-sidebar)] border border-[#3978D6]/25">
            
            {/* Play / Pause / Replay Button */}
            {!isAnimating ? (
              <button
                onClick={playAnimation}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] border border-[#3978D6]/40 hover:brightness-110 text-[var(--text-primary)] text-xs font-bold shadow-xs transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Putar Animasi</span>
              </button>
            ) : isPaused ? (
              <button
                onClick={resumeAnimation}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#2456A6] to-[#3978D6] border border-[#3978D6]/40 hover:brightness-110 text-[var(--text-primary)] text-xs font-bold shadow-xs transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Lanjutkan</span>
              </button>
            ) : (
              <button
                onClick={pauseAnimation}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold shadow-xs transition-all"
              >
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Jeda</span>
              </button>
            )}

            {/* Stepper Buttons */}
            <button
              onClick={prevStroke}
              disabled={visibleStrokes <= 0}
              className="p-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/25 disabled:opacity-40 transition-colors"
              title="Goresan Sebelumnya"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={nextStroke}
              disabled={visibleStrokes >= totalStrokes}
              className="p-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/25 disabled:opacity-40 transition-colors"
              title="Goresan Berikutnya"
            >
              <SkipForward className="w-4 h-4" />
            </button>

            <button
              onClick={resetView}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[var(--bg-sidebar)] hover:bg-[var(--bg-elevated)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[#3978D6]/25 text-xs font-bold transition-colors ml-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Stroke Step List */}
          <div className="space-y-1.5 max-h-[200px] overflow-y-auto pr-1">
            <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
              Daftar Langkah Goresan (Klik untuk melompat):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {strokeData.paths.map((_, idx) => {
                const isDrawn = idx < visibleStrokes;
                const isCurrent = idx === visibleStrokes - 1 || idx === activeStroke;

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (!isAnimating) {
                        setVisibleStrokes(idx + 1);
                        setActiveStroke(null);
                      }
                    }}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all text-left ${
                      isCurrent && isDrawn
                        ? 'bg-[var(--bg-elevated)] border-[#3978D6]/60 text-[var(--text-primary)] shadow-xs'
                        : isDrawn
                        ? 'bg-[var(--bg-sidebar)] border-[#3978D6]/25 text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                        : 'bg-[var(--bg-sidebar)]/40 border-dashed border-[#3978D6]/15 text-[var(--text-muted)]/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                        isCurrent
                          ? 'bg-[#3978D6] text-[#08152F]'
                          : isDrawn
                          ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[#3978D6]/30'
                          : 'bg-[var(--bg-sidebar)] text-[var(--text-muted)]'
                      }`}>
                        {idx + 1}
                      </span>
                      <span>Goresan ke-{idx + 1}</span>
                    </span>
                    {isDrawn && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
