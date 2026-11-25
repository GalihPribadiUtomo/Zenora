import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  SkipBack, 
  Gauge, 
  Sparkles,
  Layers
} from 'lucide-react';
import { KANA_STROKE_DATA, KanaStrokeData } from '../data/kanaStrokeData';
import { sound } from '../utils/audio';

interface KanaStrokePlayerProps {
  char: string;
  strokeCount: number;
  writingTips?: string;
}

export const KanaStrokePlayer: React.FC<KanaStrokePlayerProps> = ({
  char,
  strokeCount,
  writingTips
}) => {
  const chars = Array.from(char);
  const isCompound = chars.length > 1;

  // View mode for compound characters: 'compound' (both side-by-side) or specific sub-char (0 or 1)
  const [viewMode, setViewMode] = useState<'compound' | 0 | 1>('compound');

  // Reset view mode whenever char changes
  useEffect(() => {
    setViewMode('compound');
  }, [char]);

  // Stroke data for component characters
  const c1 = chars[0];
  const c2 = chars[1] || '';
  const d1 = KANA_STROKE_DATA[c1];
  const d2 = isCompound ? KANA_STROKE_DATA[c2] : undefined;

  // Determine active stroke sequence based on viewMode
  let activePaths: string[] = [];
  let activeStarts: { x: number; y: number }[] = [];
  let char1StrokeCount = d1 ? d1.paths.length : 0;
  let char2StrokeCount = d2 ? d2.paths.length : 0;

  if (isCompound && viewMode === 'compound') {
    activePaths = [...(d1?.paths || []), ...(d2?.paths || [])];
    activeStarts = [...(d1?.starts || []), ...(d2?.starts || [])];
  } else if (isCompound && viewMode === 1) {
    activePaths = d2?.paths || [];
    activeStarts = d2?.starts || [];
  } else {
    // Single char or viewMode === 0 (first char of compound)
    const singleData = (isCompound && viewMode === 0) ? d1 : (KANA_STROKE_DATA[char] || d1);
    activePaths = singleData?.paths || [];
    activeStarts = singleData?.starts || [];
  }

  const totalStrokes = activePaths.length > 0 ? activePaths.length : strokeCount;

  // Animation states
  const [visibleStrokes, setVisibleStrokes] = useState<number>(totalStrokes);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeStroke, setActiveStroke] = useState<number | null>(null);
  const [speed, setSpeed] = useState<number>(1);
  const [animProgress, setAnimProgress] = useState<Record<number, number>>({});

  const animRef = useRef<number | null>(null);
  const isPausedRef = useRef<boolean>(false);
  const isAnimatingRef = useRef<boolean>(false);
  const speedRef = useRef<number>(1);
  const currentStepRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    isPausedRef.current = isPaused;
    isAnimatingRef.current = isAnimating;
    speedRef.current = speed;
  }, [isPaused, isAnimating, speed]);

  // Reset animation state whenever char or viewMode changes
  useEffect(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisibleStrokes(totalStrokes);
    setActiveStroke(null);
    setIsAnimating(false);
    setIsPaused(false);
    setAnimProgress({});
    currentStepRef.current = 0;
  }, [char, viewMode, totalStrokes]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

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
      return 150;
    }
  }, []);

  const playAnimation = useCallback(() => {
    if (activePaths.length === 0) return;

    if (isPaused) {
      setIsPaused(false);
      setIsAnimating(true);
      return;
    }

    sound.playClick();
    setIsAnimating(true);
    setIsPaused(false);
    setVisibleStrokes(0);
    setActiveStroke(0);
    setAnimProgress({});
    currentStepRef.current = 0;

    const drawStep = (idx: number) => {
      if (idx >= activePaths.length) {
        setIsAnimating(false);
        setIsPaused(false);
        setActiveStroke(null);
        setVisibleStrokes(activePaths.length);
        sound.playCorrect();
        return;
      }

      currentStepRef.current = idx;
      setActiveStroke(idx);
      setVisibleStrokes(idx);

      const pathLen = getPathLength(activePaths[idx]);
      const baseDuration = Math.min(600, Math.max(300, pathLen * 2.8));
      const duration = baseDuration / (speedRef.current || 1);
      const startTime = performance.now();

      const animate = (now: number) => {
        if (!isAnimatingRef.current) return;
        if (isPausedRef.current) {
          animRef.current = requestAnimationFrame(animate);
          return;
        }

        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        setAnimProgress((prev) => ({ ...prev, [idx]: progress }));

        if (progress < 1) {
          animRef.current = requestAnimationFrame(animate);
        } else {
          setVisibleStrokes(idx + 1);
          const pauseBeforeNext = 140 / (speedRef.current || 1);
          timeoutRef.current = setTimeout(() => {
            if (isAnimatingRef.current && !isPausedRef.current) {
              drawStep(idx + 1);
            }
          }, pauseBeforeNext);
        }
      };

      animRef.current = requestAnimationFrame(animate);
    };

    drawStep(0);
  }, [activePaths, isPaused, getPathLength]);

  const pauseAnimation = () => {
    sound.playClick();
    setIsPaused(true);
  };

  const resetAnimation = () => {
    sound.playClick();
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setActiveStroke(null);
    setAnimProgress({});
    setVisibleStrokes(totalStrokes);
  };

  const nextStroke = () => {
    sound.playClick();
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setActiveStroke(null);
    setVisibleStrokes((prev) => Math.min(totalStrokes, prev + 1));
  };

  const prevStroke = () => {
    sound.playClick();
    if (animRef.current) cancelAnimationFrame(animRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setActiveStroke(null);
    setVisibleStrokes((prev) => Math.max(0, prev - 1));
  };

  // Modern Midnight Japan stroke colors
  const strokeColors = [
    '#3978D6', // Neon Purple Primary
    '#69C9DF', // Electric Blue
    '#45C6A5', // Success Mint
    '#FF70C8', // Sakura Pink
    '#E9BD72', // Achieve Gold
    '#69C9DF', // Light Cyan
    '#83B7EE', // Violet Glow
    '#F2F6FC'  // Clean White
  ];

  // Helper to render a single kana SVG box
  const renderSvgBox = (
    strokeData: KanaStrokeData | undefined,
    strokeOffset: number,
    totalCharStrokes: number,
    label?: string
  ) => {
    if (!strokeData || strokeData.paths.length === 0) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <span className="kanji-font text-7xl font-black text-[#F2F6FC]">
            {label ? label.slice(-1) : char}
          </span>
        </div>
      );
    }

    return (
      <svg className="w-full h-full p-3 sm:p-4 relative z-10" viewBox="0 0 109 109">
        {/* Ghost background guide */}
        {strokeData.paths.map((d, i) => (
          <path
            key={`ghost-${i}`}
            d={d}
            fill="none"
            stroke="#3978D6"
            strokeOpacity="0.22"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Completed strokes */}
        {strokeData.paths.map((d, i) => {
          const globalStrokeIndex = strokeOffset + i;
          if (globalStrokeIndex >= visibleStrokes) return null;
          const color = strokeColors[globalStrokeIndex % strokeColors.length];

          return (
            <path
              key={`done-${i}`}
              d={d}
              fill="none"
              stroke={color}
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        })}

        {/* Currently Animating Active Stroke */}
        {isAnimating &&
          activeStroke !== null &&
          activeStroke >= strokeOffset &&
          activeStroke < strokeOffset + totalCharStrokes && (
            (() => {
              const localIndex = activeStroke - strokeOffset;
              const d = strokeData.paths[localIndex];
              if (!d) return null;
              const pathLen = getPathLength(d);
              const progress = animProgress[activeStroke] ?? 0;
              const dashOffset = pathLen * (1 - progress);
              const color = strokeColors[activeStroke % strokeColors.length];

              return (
                <path
                  key={`active-${activeStroke}`}
                  d={d}
                  fill="none"
                  stroke={color}
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={pathLen}
                  strokeDashoffset={dashOffset}
                />
              );
            })()
          )}

        {/* Number Markers at Stroke Start Positions */}
        {strokeData.starts &&
          strokeData.starts.map((start, i) => {
            const globalStrokeIndex = strokeOffset + i;
            if (globalStrokeIndex >= visibleStrokes && globalStrokeIndex !== activeStroke) return null;
            const color = strokeColors[globalStrokeIndex % strokeColors.length];

            return (
              <g key={`num-${i}`} className="animate-in fade-in duration-150">
                <circle
                  cx={start.x}
                  cy={start.y}
                  r="4.4"
                  fill={color}
                  stroke="#08152F"
                  strokeWidth="1.2"
                  className="shadow-2xs"
                />
                <text
                  x={start.x}
                  y={start.y + 1.6}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#08152F"
                  fontSize="4.2"
                  fontWeight="900"
                  fontFamily="monospace"
                >
                  {globalStrokeIndex + 1}
                </text>
              </g>
            );
          })}
      </svg>
    );
  };

  return (
    <div className="space-y-5">
      {/* Compound Character View Selector */}
      {isCompound && (
        <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 rounded-2xl bg-[#08152F]/80 border border-[#3978D6]/30">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#A9BBD3] mr-1">
            <Layers className="w-3.5 h-3.5 text-[#69C9DF]" />
            <span>Mode Tampilan:</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              setViewMode('compound');
            }}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-mono text-xs font-black transition-all ${
              viewMode === 'compound'
                ? 'bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white border border-[#3978D6]/50 shadow-md shadow-[#3978D6]/20'
                : 'bg-[#111F38] text-[#7186A5] hover:text-white border border-[#3978D6]/25'
            }`}
          >
            <span className="font-japanese text-sm">{char}</span>
            <span className="text-[11px] font-normal opacity-90">
              ✦ Gabungan ({char1StrokeCount + char2StrokeCount} Goresan)
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setViewMode(0);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all ${
              viewMode === 0
                ? 'bg-gradient-to-r from-[#2456A6] to-[#3978D6] text-white border border-[#3978D6]/50 shadow-xs'
                : 'bg-[#111F38] text-[#7186A5] hover:text-white border border-[#3978D6]/25'
            }`}
          >
            <span className="font-japanese text-sm">{c1}</span>
            <span className="text-[10px] font-normal opacity-80">
              1. Induk ({char1StrokeCount} Goresan)
            </span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setViewMode(1);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all ${
              viewMode === 1
                ? 'bg-gradient-to-r from-[#69C9DF] to-[#69C9DF] text-white border border-[#69C9DF]/50 shadow-xs'
                : 'bg-[#111F38] text-[#7186A5] hover:text-white border border-[#3978D6]/25'
            }`}
          >
            <span className="font-japanese text-sm">{c2}</span>
            <span className="text-[10px] font-normal opacity-80">
              2. Kecil ({char2StrokeCount} Goresan)
            </span>
          </button>
        </div>
      )}

      {/* Visual Canvas Area */}
      {isCompound && viewMode === 'compound' ? (
        /* Dual Canvas Box for Compound Kana (Side-by-Side: Main + Small) */
        <div className="w-full max-w-xl mx-auto grid grid-cols-2 gap-3 sm:gap-4">
          {/* Box 1: Induk Character */}
          <div className="relative aspect-square rounded-3xl bg-[#08152F] border border-[#3978D6]/30 shadow-lg flex flex-col items-center justify-center overflow-hidden">
            {/* Delicate Crosshair Grid */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 109 109">
                <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#3978D6" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#3978D6" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
                <circle cx="54.5" cy="54.5" r="50" stroke="#3978D6" strokeOpacity="0.15" strokeWidth="0.8" fill="none" />
              </svg>
            </div>

            {renderSvgBox(d1, 0, char1StrokeCount, c1)}

            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-[#111F38]/90 border border-[#3978D6]/30 text-[10px] font-black text-[#A9BBD3]">
              1. Induk: {c1} ({char1StrokeCount})
            </div>
          </div>

          {/* Box 2: Kecil / Pengikut Character */}
          <div className="relative aspect-square rounded-3xl bg-[#08152F] border border-[#69C9DF]/30 shadow-lg flex flex-col items-center justify-center overflow-hidden">
            {/* Delicate Crosshair Grid */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 109 109">
                <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#69C9DF" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
                <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#69C9DF" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
                <circle cx="54.5" cy="54.5" r="50" stroke="#69C9DF" strokeOpacity="0.15" strokeWidth="0.8" fill="none" />
              </svg>
            </div>

            {renderSvgBox(d2, char1StrokeCount, char2StrokeCount, c2)}

            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-lg bg-[#111F38]/90 border border-[#69C9DF]/30 text-[10px] font-black text-[#69C9DF]">
              2. Kecil: {c2} ({char2StrokeCount})
            </div>
          </div>
        </div>
      ) : (
        /* Single Canvas Box (for Single Kana or Single Sub-Character view) */
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-3xl bg-[#08152F] border border-[#3978D6]/30 shadow-lg flex items-center justify-center overflow-hidden">
          {/* Delicate Crosshair Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 109 109">
              <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#3978D6" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
              <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#3978D6" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
              <circle cx="54.5" cy="54.5" r="50" stroke="#3978D6" strokeOpacity="0.15" strokeWidth="0.8" fill="none" />
            </svg>
          </div>

          {renderSvgBox(
            (isCompound && viewMode === 1) ? d2 : ((isCompound && viewMode === 0) ? d1 : (KANA_STROKE_DATA[char] || d1)),
            0,
            totalStrokes,
            (isCompound && viewMode === 1) ? c2 : ((isCompound && viewMode === 0) ? c1 : char)
          )}
        </div>
      )}

      {/* Current Step Pill Overlay */}
      <div className="flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#111F38] border border-[#3978D6]/30 shadow-md text-xs font-bold font-mono text-[#F2F6FC]">
          <span className="w-2 h-2 rounded-full bg-[#45C6A5] animate-pulse" />
          <span>Goresan Selesai: <span className="text-[#69C9DF] font-black">{visibleStrokes}</span> / {totalStrokes}</span>
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-[#08152F]/80 border border-[#3978D6]/30 shadow-md">
        {/* Step backward */}
        <button
          onClick={prevStroke}
          disabled={visibleStrokes <= 0 || isAnimating}
          className="p-2.5 rounded-xl bg-[#111F38] hover:bg-[#172945] text-[#F2F6FC] border border-[#3978D6]/30 disabled:opacity-35 transition-all shadow-xs cursor-pointer active:scale-95"
          title="Goresan Sebelumnya"
          aria-label="Previous stroke"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        {/* Play / Pause Toggle */}
        {isAnimating && !isPaused ? (
          <button
            onClick={pauseAnimation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:brightness-110 text-white font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            title="Jeda Animasi"
          >
            <Pause className="w-4 h-4" />
            <span>Jeda</span>
          </button>
        ) : (
          <button
            onClick={playAnimation}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#3978D6] to-[#69C9DF] border border-[#3978D6]/40 hover:brightness-115 text-white font-black text-xs shadow-lg shadow-[#3978D6]/25 transition-all active:scale-95 cursor-pointer"
            title="Putar Animasi Goresan"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{isPaused ? 'Lanjutkan Animasi' : 'Putar Animasi'}</span>
          </button>
        )}

        {/* Step forward */}
        <button
          onClick={nextStroke}
          disabled={visibleStrokes >= totalStrokes || isAnimating}
          className="p-2.5 rounded-xl bg-[#111F38] hover:bg-[#172945] text-[#F2F6FC] border border-[#3978D6]/30 disabled:opacity-35 transition-all shadow-xs cursor-pointer active:scale-95"
          title="Goresan Berikutnya"
          aria-label="Next stroke"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        {/* Reset / Replay */}
        <button
          onClick={resetAnimation}
          className="p-2.5 rounded-xl bg-[#111F38] hover:bg-[#172945] text-[#A9BBD3] hover:text-white border border-[#3978D6]/30 transition-all shadow-xs cursor-pointer active:scale-95"
          title="Tampilkan Utuh / Reset"
          aria-label="Reset strokes"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="h-5 w-px bg-[#3978D6]/30 mx-1"></div>

        {/* Speed Selector Pill */}
        <div className="flex items-center gap-1 bg-[#111F38] p-1 rounded-xl border border-[#3978D6]/30">
          <Gauge className="w-3.5 h-3.5 text-[#7186A5] ml-1.5" />
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              onClick={() => {
                sound.playClick();
                setSpeed(s);
              }}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-black font-mono transition-colors cursor-pointer ${
                speed === s
                  ? 'bg-gradient-to-r from-[#3978D6] to-[#69C9DF] text-white shadow-xs'
                  : 'text-[#7186A5] hover:text-[#F2F6FC]'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>

      {/* Writing Tips Banner */}
      {writingTips && (
        <div className="p-4 rounded-2xl bg-[#08152F]/80 border border-[#3978D6]/30 text-left text-xs leading-relaxed shadow-sm">
          <div className="flex items-center gap-1.5 font-black text-[#F2F6FC] uppercase tracking-wider text-[11px] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#3978D6]" />
            <span>Kaidah & Arah Penulisan:</span>
          </div>
          <p className="text-[#A9BBD3] font-medium">
            {writingTips}
          </p>
        </div>
      )}
    </div>
  );
};
