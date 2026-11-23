import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  SkipBack, 
  Gauge, 
  Sparkles
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
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);

  const activeChar = chars.length > 1 ? chars[selectedSubIndex] : char;
  const strokeData: KanaStrokeData | undefined = KANA_STROKE_DATA[activeChar] || KANA_STROKE_DATA[char];

  const [visibleStrokes, setVisibleStrokes] = useState<number>(strokeData ? strokeData.paths.length : 0);
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

  const totalStrokes = strokeData ? strokeData.paths.length : strokeCount;

  useEffect(() => {
    isPausedRef.current = isPaused;
    isAnimatingRef.current = isAnimating;
    speedRef.current = speed;
  }, [isPaused, isAnimating, speed]);

  useEffect(() => {
    setVisibleStrokes(totalStrokes);
    setActiveStroke(null);
    setIsAnimating(false);
    setIsPaused(false);
    setAnimProgress({});
    if (animRef.current) cancelAnimationFrame(animRef.current);
  }, [char, activeChar, totalStrokes]);

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
    if (!strokeData || strokeData.paths.length === 0) return;

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
      if (idx >= strokeData.paths.length) {
        setIsAnimating(false);
        setIsPaused(false);
        setActiveStroke(null);
        setVisibleStrokes(strokeData.paths.length);
        sound.playCorrect();
        return;
      }

      currentStepRef.current = idx;
      setActiveStroke(idx);
      setVisibleStrokes(idx);

      const pathLen = getPathLength(strokeData.paths[idx]);
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
        setAnimProgress(prev => ({ ...prev, [idx]: progress }));

        if (progress < 1) {
          animRef.current = requestAnimationFrame(animate);
        } else {
          setVisibleStrokes(idx + 1);
          const pauseBeforeNext = 140 / (speedRef.current || 1);
          setTimeout(() => {
            if (isAnimatingRef.current && !isPausedRef.current) {
              drawStep(idx + 1);
            }
          }, pauseBeforeNext);
        }
      };

      animRef.current = requestAnimationFrame(animate);
    };

    drawStep(0);
  }, [strokeData, isPaused, getPathLength]);

  const pauseAnimation = () => {
    sound.playClick();
    setIsPaused(true);
  };

  const resetAnimation = () => {
    sound.playClick();
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setActiveStroke(null);
    setAnimProgress({});
    setVisibleStrokes(totalStrokes);
  };

  const nextStroke = () => {
    sound.playClick();
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setActiveStroke(null);
    setVisibleStrokes(prev => Math.min(totalStrokes, prev + 1));
  };

  const prevStroke = () => {
    sound.playClick();
    if (animRef.current) cancelAnimationFrame(animRef.current);
    setIsAnimating(false);
    setIsPaused(false);
    setActiveStroke(null);
    setVisibleStrokes(prev => Math.max(0, prev - 1));
  };

  // Midnight Navy & Biru Perak (Palet 04) stroke colors:
  const strokeColors = [
    '#7857FF', // Biru Perak
    '#F5F6FF', // Putih Teks
    '#5B8AC9', // Soft Navy Blue
    '#A2C2ED', // Bright Silver Blue
    '#6E96CE', // Slate Blue
    '#4A76B8', // Deep Silver Blue
  ];

  return (
    <div className="space-y-5">
      {/* Compound Character Component Selector */}
      {chars.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 rounded-2xl bg-[#080D2B]/60 border border-[#7857FF]/25">
          <span className="text-xs font-bold text-[#737FA8]">Karakter Komponen:</span>
          {chars.map((c, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                setSelectedSubIndex(idx);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all ${
                selectedSubIndex === idx
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40 shadow-xs'
                  : 'bg-[#080D2B] text-[#737FA8] hover:text-[#F5F6FF] border border-[#7857FF]/25'
              }`}
            >
              <span className="font-japanese text-base">{c}</span>
              <span className="text-[10px] font-normal opacity-80">
                ({idx === 0 ? 'Induk' : 'Kecil'})
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Visual Canvas Area with Crosshair Guidelines */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto rounded-3xl bg-[#080D2B] border border-[#7857FF]/25 shadow-md flex items-center justify-center overflow-hidden">
        
        {/* Delicate Crosshair Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 109 109">
            <line x1="54.5" y1="0" x2="54.5" y2="109" stroke="#7857FF" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="0" y1="54.5" x2="109" y2="54.5" stroke="#7857FF" strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="54.5" cy="54.5" r="50" stroke="#7857FF" strokeOpacity="0.15" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        {/* Dynamic KanjiVG Stroke Render */}
        {strokeData && strokeData.paths.length > 0 ? (
          <svg 
            className="w-full h-full p-4 relative z-10" 
            viewBox="0 0 109 109"
          >
            {/* Background Faint Ghost Guide */}
            {strokeData.paths.map((d, i) => (
              <path
                key={`ghost-${i}`}
                d={d}
                fill="none"
                stroke="#7857FF"
                strokeOpacity="0.2"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Completed Strokes */}
            {strokeData.paths.map((d, i) => {
              if (i >= visibleStrokes) return null;
              const color = strokeColors[i % strokeColors.length];

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
            {isAnimating && activeStroke !== null && strokeData.paths[activeStroke] && (
              (() => {
                const d = strokeData.paths[activeStroke];
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
            {strokeData.starts && strokeData.starts.map((start, i) => {
              if (i >= visibleStrokes && i !== activeStroke) return null;
              const color = strokeColors[i % strokeColors.length];

              return (
                <g key={`num-${i}`} className="animate-in fade-in duration-150">
                  <circle
                    cx={start.x}
                    cy={start.y}
                    r="4.2"
                    fill={color}
                    stroke="#0D1238"
                    strokeWidth="1"
                    className="shadow-2xs"
                  />
                  <text
                    x={start.x}
                    y={start.y + 1.6}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#080D2B"
                    fontSize="3.8"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {i + 1}
                  </text>
                </g>
              );
            })}
          </svg>
        ) : (
          /* Fallback large static char */
          <span className="kanji-font text-8xl font-black text-[#F5F6FF]">
            {char}
          </span>
        )}

        {/* Current Step Pill Overlay */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-[#0D1238]/95 backdrop-blur-xs border border-[#7857FF]/25 shadow-xs text-[11px] font-bold font-mono text-[#F5F6FF]">
          Goresan: {visibleStrokes} / {totalStrokes}
        </div>
      </div>

      {/* Control Buttons Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-3 rounded-2xl bg-[#080D2B]/60 border border-[#7857FF]/25">
        
        {/* Step backward */}
        <button
          onClick={prevStroke}
          disabled={visibleStrokes <= 0 || isAnimating}
          className="p-2.5 rounded-xl bg-[#080D2B] hover:bg-[#12194A] text-[#F5F6FF] border border-[#7857FF]/25 disabled:opacity-40 transition-colors shadow-2xs"
          title="Goresan Sebelumnya"
          aria-label="Previous stroke"
        >
          <SkipBack className="w-4 h-4" />
        </button>

        {/* Play / Pause Toggle */}
        {isAnimating && !isPaused ? (
          <button
            onClick={pauseAnimation}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs shadow-xs transition-all active:scale-95"
            title="Jeda Animasi"
          >
            <Pause className="w-4 h-4" />
            <span>Jeda</span>
          </button>
        ) : (
          <button
            onClick={playAnimation}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7857FF] to-[#945CFF] border border-[#7857FF]/40 hover:brightness-110 text-[#F5F6FF] font-bold text-xs shadow-xs transition-all active:scale-95"
            title="Putar Animasi Goresan"
          >
            <Play className="w-4 h-4 text-[#7857FF]" />
            <span>{isPaused ? 'Lanjutkan' : 'Putar Animasi'}</span>
          </button>
        )}

        {/* Step forward */}
        <button
          onClick={nextStroke}
          disabled={visibleStrokes >= totalStrokes || isAnimating}
          className="p-2.5 rounded-xl bg-[#080D2B] hover:bg-[#12194A] text-[#F5F6FF] border border-[#7857FF]/25 disabled:opacity-40 transition-colors shadow-2xs"
          title="Goresan Berikutnya"
          aria-label="Next stroke"
        >
          <SkipForward className="w-4 h-4" />
        </button>

        {/* Reset / Replay */}
        <button
          onClick={resetAnimation}
          className="p-2.5 rounded-xl bg-[#080D2B] hover:bg-[#12194A] text-[#737FA8] hover:text-[#F5F6FF] border border-[#7857FF]/25 transition-colors shadow-2xs"
          title="Tampilkan Utuh / Reset"
          aria-label="Reset strokes"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="h-5 w-px bg-[#7857FF]/20 mx-1"></div>

        {/* Speed Selector Pill */}
        <div className="flex items-center gap-1 bg-[#080D2B] p-1 rounded-xl border border-[#7857FF]/25">
          <Gauge className="w-3.5 h-3.5 text-[#737FA8] ml-1.5" />
          {[0.5, 1, 1.5, 2].map((s) => (
            <button
              key={s}
              onClick={() => {
                sound.playClick();
                setSpeed(s);
              }}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-black font-mono transition-colors ${
                speed === s
                  ? 'bg-gradient-to-r from-[#7857FF] to-[#945CFF] text-[#F5F6FF] border border-[#7857FF]/40 shadow-xs'
                  : 'text-[#737FA8] hover:text-[#F5F6FF]'
              }`}
            >
              {s}x
            </button>
          ))}
        </div>

      </div>

      {/* Writing Tips Banner */}
      {writingTips && (
        <div className="p-4 rounded-2xl bg-[#080D2B]/60 border border-[#7857FF]/25 text-left text-xs leading-relaxed">
          <div className="flex items-center gap-1.5 font-black text-[#F5F6FF] uppercase tracking-wider text-[11px] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#7857FF]" />
            <span>Kaidah & Arah Penulisan:</span>
          </div>
          <p className="text-[#F5F6FF] font-medium">
            {writingTips}
          </p>
        </div>
      )}

    </div>
  );
};
