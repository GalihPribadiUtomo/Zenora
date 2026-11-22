import React, { useRef, useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  CheckCircle2, 
  RotateCcw, 
  PenTool, 
  Sparkles, 
  BookOpen, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  ListOrdered, 
  Undo2, 
  Redo2, 
  Check, 
  Award 
} from 'lucide-react';
import { KanjiItem, KanjiSentenceExample } from '../types';
import { speakJapanese, sound } from '../utils/audio';
import { KanjiStrokeViewer } from './KanjiStrokeViewer';
import { getKanjiSentences } from '../data/kanjiSentencesData';
import { SentenceCard } from './SentenceCard';

interface KanjiModalProps {
  kanji: KanjiItem | null;
  onClose: () => void;
  isLearned: boolean;
  onToggleLearned: (id: number) => void;
}

interface StrokePoint {
  x: number;
  y: number;
}

interface CanvasStroke {
  points: StrokePoint[];
  color: string;
  size: number;
}

export const KanjiModal: React.FC<KanjiModalProps> = ({
  kanji,
  onClose,
  isLearned,
  onToggleLearned
}) => {
  if (!kanji) return null;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTab, setActiveTab] = useState<'goresan' | 'kalimat' | 'menulis' | 'jukugo'>('goresan');
  
  // Handwriting Canvas States
  const [isDrawing, setIsDrawing] = useState(false);
  const [showGhost, setShowGhost] = useState(true);
  const [isGuidedMode, setIsGuidedMode] = useState(true);
  const [brushColor, setBrushColor] = useState('#101C3D');
  const [brushSize, setBrushSize] = useState(12);
  const [strokes, setStrokes] = useState<CanvasStroke[]>([]);
  const [redoStack, setRedoStack] = useState<CanvasStroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<StrokePoint[]>([]);
  
  // Canvas Evaluation Feedback State
  const [evalResult, setEvalResult] = useState<{
    status: 'success' | 'incomplete' | 'excess' | null;
    message: string;
    scoreText: string;
  } | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Fetch educational sentence examples for this kanji
  const sentenceExamples: KanjiSentenceExample[] = getKanjiSentences(kanji);

  // Re-draw canvas whenever strokes, ghost, or mode change
  useEffect(() => {
    redrawCanvas();
  }, [strokes, kanji]);

  // Reset states on kanji change
  useEffect(() => {
    setStrokes([]);
    setRedoStack([]);
    setCurrentStroke([]);
    setEvalResult(null);
    setShowHint(false);
  }, [kanji]);

  // Redraw full canvas from strokes history
  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, 320, 320);
    drawGrid(ctx);

    // Draw all recorded strokes
    strokes.forEach(stroke => {
      if (stroke.points.length === 0) return;
      ctx.beginPath();
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
    });
  };

  const drawGrid = (ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.strokeStyle = '#D2E2FC';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    // Horizontal crosshair
    ctx.beginPath();
    ctx.moveTo(0, 160);
    ctx.lineTo(320, 160);
    ctx.stroke();

    // Vertical crosshair
    ctx.beginPath();
    ctx.moveTo(160, 0);
    ctx.lineTo(160, 320);
    ctx.stroke();

    ctx.restore();
  };

  const getCanvasCoordinates = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    setEvalResult(null); // Clear previous evaluation on new draw
    const pos = getCanvasCoordinates(e);
    setCurrentStroke([pos]);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getCanvasCoordinates(e);
    setCurrentStroke(prev => [...prev, pos]);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  };

  const stopDrawing = (e?: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    if (e) e.preventDefault();
    setIsDrawing(false);

    if (currentStroke.length > 0) {
      const newStroke: CanvasStroke = {
        points: currentStroke,
        color: brushColor,
        size: brushSize
      };
      setStrokes(prev => [...prev, newStroke]);
      setRedoStack([]); // New action clears redo
      setCurrentStroke([]);
    }
  };

  // Undo last stroke
  const handleUndo = () => {
    if (strokes.length === 0) return;
    sound.playClick();
    const last = strokes[strokes.length - 1];
    setStrokes(prev => prev.slice(0, prev.length - 1));
    setRedoStack(prev => [...prev, last]);
    setEvalResult(null);
  };

  // Redo stroke
  const handleRedo = () => {
    if (redoStack.length === 0) return;
    sound.playClick();
    const restored = redoStack[redoStack.length - 1];
    setRedoStack(prev => prev.slice(0, prev.length - 1));
    setStrokes(prev => [...prev, restored]);
    setEvalResult(null);
  };

  // Clear all strokes
  const handleClear = () => {
    sound.playClick();
    setStrokes([]);
    setRedoStack([]);
    setCurrentStroke([]);
    setEvalResult(null);
  };

  // Stroke evaluation check
  const handleCheckWriting = () => {
    const userStrokeCount = strokes.length;
    const expected = kanji.strokeCount;

    if (userStrokeCount === expected) {
      sound.playCorrect();
      setEvalResult({
        status: 'success',
        scoreText: 'たいへんよくできました！',
        message: `Luar biasa! Jumlah goresan tepat (${userStrokeCount}/${expected} goresan). Terus pertahankan memori otot penulisanmu!`
      });
    } else if (userStrokeCount < expected) {
      sound.playIncorrect();
      const diff = expected - userStrokeCount;
      setEvalResult({
        status: 'incomplete',
        scoreText: 'もうすこし！ (Sedikit lagi!)',
        message: `Goresan masih kurang ${diff} langkah lagi (${userStrokeCount}/${expected}). Periksa urutan nomor goresan pada tab 書き順.`
      });
    } else {
      sound.playIncorrect();
      const diff = userStrokeCount - expected;
      setEvalResult({
        status: 'excess',
        scoreText: 'おしい！ (Hampir!)',
        message: `Terlalu banyak tarikan goresan (${userStrokeCount}/${expected}, lebih ${diff} goresan). Usahakan menarik garis menyatu sesuai kaidah goresan.`
      });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#101C3D]/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl my-auto rounded-3xl bg-[#0D1830] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-[#2457C5]/30 text-[#DCE9FF] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Gradient Header Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#101C3D] via-[#2457C5] to-[#55B9F5]"></div>

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2457C5]/25 bg-[#0D1830]/8/80">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#101C3D] to-[#2457C5] text-white text-xs font-black uppercase tracking-wider shadow-xs font-mono">
              {kanji.jlpt} · #{kanji.id}
            </span>
            <span className="text-xs font-bold text-[#6B85B5]">
              Kategori: {kanji.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onToggleLearned(kanji.id);
                if (!isLearned) sound.playCorrect();
              }}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isLearned 
                  ? 'bg-emerald-500/15 text-emerald-700 border border-emerald-200 shadow-xs' 
                  : 'bg-[#0D1830] hover:bg-emerald-500/15 hover:text-emerald-700 text-[#DCE9FF] border border-[#2457C5]/25'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              {isLearned ? 'Sudah Dikuasai' : 'Tandai Hafal'}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-[#0D1830]/15/12 text-[#6B85B5] hover:text-[#DCE9FF] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          
          {/* Main Info Row (Blue Sakura Future Study Banner Card) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Big Kanji Display with Furigana & Meaning */}
            <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b from-[#101C3D] via-[#1B367A] to-[#2457C5] text-white shadow-md relative overflow-hidden">
              
              {/* Subtle decorative watermark */}
              <div className="absolute -right-6 -bottom-6 text-[180px] font-black kanji-font text-white/5 pointer-events-none select-none">
                {kanji.kanji}
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DCE9FF] bg-[#0D1830]/10 px-2.5 py-1 rounded-lg">
                    JLPT {kanji.jlpt}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#55B9F5]">
                    {kanji.strokeCount} Goresan
                  </span>
                </div>

                {/* Furigana & Master Kanji */}
                <div className="text-center py-4">
                  <span className="text-sm font-bold text-[#DCE9FF] tracking-wider block mb-1">
                    {kanji.reading}
                  </span>
                  <h1 className="kanji-font text-8xl font-black text-white select-none drop-shadow-sm">
                    {kanji.kanji}
                  </h1>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#DCE9FF] font-medium block">Arti Bahasa Indonesia:</span>
                    <h3 className="text-2xl font-black text-white tracking-tight font-['Manrope']">
                      {kanji.meaning}
                    </h3>
                    <p className="text-xs text-[#DCE9FF]/80 font-medium mt-0.5">
                      English: {kanji.meaningEn}
                    </p>
                  </div>

                  <button
                    onClick={() => speakJapanese(kanji.reading)}
                    className="p-3 rounded-2xl bg-[#0D1830]/15 hover:bg-[#0D1830]/15/25 text-white transition-all shadow-xs"
                    title="Dengarkan pelafalan"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Comprehensive Reading Breakdown & Writing Keys */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-4">
              
              <div className="card-soft p-5 rounded-3xl space-y-4 border border-[#2457C5]/25 flex-1">
                
                <div className="flex items-center justify-between border-b border-[#2457C5]/25 pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#55B9F5]" />
                    <h4 className="text-xs font-bold text-[#DCE9FF] uppercase tracking-wider">
                      Sistem Pelafalan Huruf (Onyomi & Kunyomi)
                    </h4>
                  </div>
                  <span className="text-[11px] font-bold text-[#6B85B5]">
                    Kaidah Standar Minna no Nihongo
                  </span>
                </div>

                {/* ONYOMI */}
                <div className="p-3.5 rounded-2xl bg-[#0D1830]/8 border border-[#2457C5]/20 flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#55B9F5]">
                      <span className="px-1.5 py-0.5 rounded bg-[#2457C5] text-white text-[10px]">音 ON</span>
                      Onyomi (Bacaan Serapan Han / Katakana)
                    </span>
                    <p className="font-mono text-lg font-black text-[#DCE9FF] tracking-wider mt-0.5">
                      {kanji.onyomi || '—'}
                    </p>
                  </div>

                  {kanji.onyomi && kanji.onyomi !== '—' && (
                    <button
                      onClick={() => speakJapanese(kanji.onyomi)}
                      className="text-[#55B9F5] hover:text-[#DCE9FF] p-2 rounded-xl bg-[#0D1830] hover:bg-blue-50 border border-[#2457C5]/25 transition-colors"
                      title="Dengarkan Onyomi"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* KUNYOMI */}
                <div className="p-3.5 rounded-2xl bg-[#2457C5]/12 border border-[#55B9F5]/30 flex items-center justify-between">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-black text-[#1B6EB5]">
                      <span className="px-1.5 py-0.5 rounded bg-[#1B6EB5] text-white text-[10px]">訓 KUN</span>
                      Kunyomi (Bacaan Asli Jepang / Hiragana)
                    </span>
                    <p className="font-mono text-lg font-black text-[#DCE9FF] tracking-wider mt-0.5">
                      {kanji.kunyomi || '—'}
                    </p>
                  </div>

                  {kanji.kunyomi && kanji.kunyomi !== '—' && (
                    <button
                      onClick={() => speakJapanese(kanji.kunyomi)}
                      className="text-[#1B6EB5] hover:text-[#DCE9FF] p-2 rounded-xl bg-[#0D1830] hover:bg-blue-50 border border-[#2457C5]/25 transition-colors"
                      title="Dengarkan Kunyomi"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Stroke Rules & Writing Key */}
                {kanji.strokeRules && (
                  <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200">
                    <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 mb-1">
                      <HelpCircle className="w-4 h-4 text-amber-600" />
                      Kaidah & Kunci Urutan Penulisan:
                    </div>
                    <p className="text-xs text-amber-950 font-medium leading-relaxed">
                      {kanji.strokeRules}
                    </p>
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* LOWER SECTION: INTERACTIVE EDUCATIONAL TABS */}
          <div className="card-soft rounded-3xl overflow-hidden border border-[#2457C5]/25 bg-[#0D1830]">
            
            {/* Tab Switcher */}
            <div className="flex items-center border-b border-[#2457C5]/25 bg-[#0D1830]/8/80 px-4 py-2 gap-2 overflow-x-auto">
              
              {/* Tab 1: Stroke Order */}
              <button
                onClick={() => setActiveTab('goresan')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  activeTab === 'goresan'
                    ? 'bg-[#0D1830] shadow-xs text-[#55B9F5] border border-[#2457C5]/25'
                    : 'text-[#6B85B5] hover:text-[#DCE9FF]'
                }`}
              >
                <ListOrdered className="w-3.5 h-3.5 text-[#55B9F5]" />
                <span>書き順 Urutan Goresan</span>
              </button>

              {/* Tab 2: Sentence Examples */}
              <button
                onClick={() => setActiveTab('kalimat')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  activeTab === 'kalimat'
                    ? 'bg-[#0D1830] shadow-xs text-[#55B9F5] border border-[#2457C5]/25'
                    : 'text-[#6B85B5] hover:text-[#DCE9FF]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-[#55B9F5]" />
                <span>例文 4 Contoh Kalimat ({sentenceExamples.length})</span>
              </button>

              {/* Tab 3: Advanced Handwriting Canvas */}
              <button
                onClick={() => setActiveTab('menulis')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                  activeTab === 'menulis'
                    ? 'bg-[#0D1830] shadow-xs text-[#55B9F5] border border-[#2457C5]/25'
                    : 'text-[#6B85B5] hover:text-[#DCE9FF]'
                }`}
              >
                <PenTool className="w-3.5 h-3.5 text-[#8975E8]" />
                <span>なぞり書き Kanvas Latihan Menulis</span>
              </button>

              {/* Tab 4: Compounds / Jukugo */}
              {kanji.examples && kanji.examples.length > 0 && (
                <button
                  onClick={() => setActiveTab('jukugo')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                    activeTab === 'jukugo'
                      ? 'bg-[#0D1830] shadow-xs text-[#55B9F5] border border-[#2457C5]/25'
                      : 'text-[#6B85B5] hover:text-[#DCE9FF]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#55B9F5]" />
                  <span>語彙 Kata Majemuk ({kanji.examples.length})</span>
                </button>
              )}

            </div>

            {/* TAB 1: VISUAL STROKE ORDER VIEWER */}
            {activeTab === 'goresan' && (
              <div className="p-6">
                <KanjiStrokeViewer kanji={kanji.kanji} strokeCount={kanji.strokeCount} />

                {/* Stroke step descriptions below */}
                {kanji.strokeOrderGuide && kanji.strokeOrderGuide.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-[#2457C5]/25">
                    <h5 className="text-xs font-bold text-[#6B85B5] uppercase tracking-wider mb-3">
                      Deskripsi Kaidah Langkah Goresan:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {kanji.strokeOrderGuide.map((stepDesc, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0D1830]/8 border border-[#2457C5]/25 hover:bg-[#2457C5]/12 transition-colors"
                        >
                          <span 
                            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black shrink-0 mt-0.5 bg-gradient-to-r from-[#101C3D] to-[#2457C5] shadow-xs"
                          >
                            {idx + 1}
                          </span>
                          <p className="text-xs font-medium text-[#DCE9FF] leading-relaxed">
                            {stepDesc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: SENTENCE EXAMPLES (DIGITAL TEXTBOOK MATERIAL - 4 CONTOH KALIMAT) */}
            {activeTab === 'kalimat' && (
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2457C5]/25 pb-4">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#DCE9FF] flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#55B9F5]" />
                      <span>4 Contoh Kalimat Kanji 「{kanji.kanji}」</span>
                    </h4>
                    <p className="text-xs text-[#6B85B5] mt-0.5">
                      Empat variasi kalimat alami untuk memahami makna, cara baca, dan konteks penggunaan kanji ini dalam 3 bahasa (日本語, English, Indonesia).
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#0D1830]/12 border border-[#2457C5]/30 text-[#DCE9FF] text-xs font-black font-mono">
                    4 Kalimat Lengkap
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {sentenceExamples.map((item, idx) => (
                    <SentenceCard
                      key={idx}
                      index={idx}
                      sentence={item.sentence}
                      furigana={item.furigana}
                      romaji={item.romaji}
                      english={item.english}
                      indonesian={item.indonesian}
                      highlight={kanji.kanji}
                      grammarNote={item.grammarNote}
                      isPlaceholder={item.isPlaceholder}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: ADVANCED HANDWRITING CANVAS */}
            {activeTab === 'menulis' && (
              <div className="p-6 space-y-5">
                
                {/* Header & Modes Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#2457C5]/25">
                  <div>
                    <h4 className="text-sm font-extrabold text-[#DCE9FF] font-['Manrope'] flex items-center gap-2">
                      <PenTool className="w-4 h-4 text-[#55B9F5]" />
                      <span>Digital Handwriting Learning Canvas</span>
                    </h4>
                    <p className="text-xs text-[#6B85B5] mt-0.5">
                      Latih memori otot tulisan tangan Anda. Didukung mouse, stylus, dan layar sentuh.
                    </p>
                  </div>

                  {/* Mode Selector Pill: Guided vs Freehand */}
                  <div className="flex items-center gap-1 bg-[#0D1830]/8 p-1 rounded-2xl border border-[#2457C5]/25">
                    <button
                      onClick={() => {
                        setIsGuidedMode(true);
                        setShowGhost(true);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isGuidedMode
                          ? 'bg-[#0D1830] shadow-xs text-[#55B9F5]'
                          : 'text-[#6B85B5] hover:text-[#DCE9FF]'
                      }`}
                    >
                      Mode Berpanduan
                    </button>
                    <button
                      onClick={() => {
                        setIsGuidedMode(false);
                        setShowGhost(false);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        !isGuidedMode
                          ? 'bg-[#0D1830] shadow-xs text-[#55B9F5]'
                          : 'text-[#6B85B5] hover:text-[#DCE9FF]'
                      }`}
                    >
                      Mode Mandiri (Ujian)
                    </button>
                  </div>
                </div>

                {/* Canvas Toolbar Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-[#0D1830]/8 border border-[#2457C5]/25">
                  
                  {/* Colors & Pen Sizes */}
                  <div className="flex items-center gap-4">
                    
                    {/* Color Swatches */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-bold text-[#6B85B5] mr-1">Tinta:</span>
                      {[
                        { color: '#101C3D', label: 'Midnight Navy' },
                        { color: '#2457C5', label: 'Royal Blue' },
                        { color: '#55B9F5', label: 'Electric Sky' },
                        { color: '#8975E8', label: 'Soft Violet' },
                        { color: '#EF4444', label: 'Merah Koreksi' }
                      ].map((swatch) => (
                        <button
                          key={swatch.color}
                          onClick={() => setBrushColor(swatch.color)}
                          className={`w-6 h-6 rounded-lg transition-transform ${
                            brushColor === swatch.color 
                              ? 'ring-2 ring-[#2457C5] scale-110 shadow-xs' 
                              : 'opacity-80 hover:opacity-100'
                          }`}
                          style={{ backgroundColor: swatch.color }}
                          title={swatch.label}
                        />
                      ))}
                    </div>

                    <div className="h-5 w-px bg-[#D2E2FC]"></div>

                    {/* Pen Size Buttons */}
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-bold text-[#6B85B5] mr-1">Tebal:</span>
                      {[
                        { size: 7, label: 'Tipis' },
                        { size: 12, label: 'Sedang' },
                        { size: 18, label: 'Tebal' }
                      ].map((item) => (
                        <button
                          key={item.size}
                          onClick={() => setBrushSize(item.size)}
                          className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors ${
                            brushSize === item.size
                              ? 'bg-[#0D1830] text-[#55B9F5] shadow-xs border border-[#2457C5]/25'
                              : 'text-[#6B85B5] hover:bg-[#0D1830]/15/12'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Canvas Operations: Undo, Redo, Ghost, Hint, Clear */}
                  <div className="flex items-center gap-1.5">
                    
                    <button
                      onClick={handleUndo}
                      disabled={strokes.length === 0}
                      className="p-2 rounded-xl bg-[#0D1830] hover:bg-[#121F3D] text-[#DCE9FF] border border-[#2457C5]/25 disabled:opacity-30 transition-colors"
                      title="Undo (Batalkan goresan)"
                    >
                      <Undo2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={handleRedo}
                      disabled={redoStack.length === 0}
                      className="p-2 rounded-xl bg-[#0D1830] hover:bg-[#121F3D] text-[#DCE9FF] border border-[#2457C5]/25 disabled:opacity-30 transition-colors"
                      title="Redo (Ulangi goresan)"
                    >
                      <Redo2 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setShowGhost(!showGhost)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                        showGhost 
                          ? 'bg-[#0D1830]/12 border-[#2457C5]/30 text-[#DCE9FF]' 
                          : 'bg-[#0D1830] text-[#6B85B5] border-[#2457C5]/25'
                      }`}
                    >
                      {showGhost ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                      <span>Pola Bayangan</span>
                    </button>

                    <button
                      onClick={() => setShowHint(!showHint)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                        showHint 
                          ? 'bg-amber-100 border-amber-300 text-amber-900' 
                          : 'bg-[#0D1830] text-[#6B85B5] border-[#2457C5]/25'
                      }`}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Petunjuk</span>
                    </button>

                    <button
                      onClick={handleClear}
                      className="p-2 rounded-xl bg-[#0D1830] hover:bg-[#121F3D] text-[#6B85B5] hover:text-[#DCE9FF] border border-[#2457C5]/25 transition-colors"
                      title="Bersihkan Kanvas"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                  </div>

                </div>

                {/* Educational Hint Banner if triggered */}
                {showHint && kanji.strokeRules && (
                  <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium leading-relaxed flex items-center gap-2">
                    <span className="font-bold text-amber-800 shrink-0">💡 Kunci:</span>
                    <span>{kanji.strokeRules}</span>
                  </div>
                )}

                {/* Centered Large Canvas Area */}
                <div className="relative mx-auto w-[320px] h-[320px] rounded-3xl bg-[#0D1830] border-2 border-[#2457C5]/25 shadow-inner overflow-hidden select-none touch-none flex items-center justify-center">
                  
                  {/* Ghost Kanji Reference */}
                  {showGhost && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                      <span className="kanji-font text-[210px] font-black text-[#DCE9FF] select-none">
                        {kanji.kanji}
                      </span>
                    </div>
                  )}

                  {/* Actual Interactive Canvas */}
                  <canvas
                    ref={canvasRef}
                    width={320}
                    height={320}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                    className="relative z-10 w-full h-full cursor-crosshair"
                  />

                  {/* Stroke counter floating badge */}
                  <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-xl bg-[#0D1830]/90 backdrop-blur-xs border border-[#2457C5]/25 text-[11px] font-mono font-bold text-[#DCE9FF] shadow-xs">
                    {strokes.length} / {kanji.strokeCount} Goresan
                  </div>
                </div>

                {/* Evaluation Feedback Panel */}
                {evalResult && (
                  <div className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                    evalResult.status === 'success'
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-950'
                      : evalResult.status === 'incomplete'
                      ? 'bg-amber-50 border-amber-300 text-amber-950'
                      : 'bg-red-50 border-red-300 text-red-950'
                  }`}>
                    <Award className={`w-5 h-5 shrink-0 mt-0.5 ${
                      evalResult.status === 'success' ? 'text-emerald-600' : evalResult.status === 'incomplete' ? 'text-amber-600' : 'text-red-600'
                    }`} />
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider block">
                        {evalResult.scoreText}
                      </span>
                      <p className="text-xs font-medium mt-0.5">
                        {evalResult.message}
                      </p>
                    </div>
                  </div>
                )}

                {/* Bottom Canvas Footer Action */}
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-[#6B85B5] font-medium">
                    Tarik goresan dari atas ke bawah, kiri ke kanan sesuai urutan.
                  </p>

                  <button
                    onClick={handleCheckWriting}
                    className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#101C3D] to-[#2457C5] hover:brightness-110 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Periksa Tulisan</span>
                  </button>
                </div>

              </div>
            )}

            {/* TAB 4: COMPOUND WORDS (JUKUGO) */}
            {activeTab === 'jukugo' && kanji.examples && (
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-extrabold text-[#DCE9FF] font-['Manrope'] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#55B9F5]" />
                    <span>Contoh Penggunaan Kata Majemuk (Jukugo)</span>
                  </h4>
                  <p className="text-xs text-[#6B85B5] mt-0.5">
                    Kombinasi kanji 「{kanji.kanji}」 dengan kanji lain yang membentuk kosakata baru.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {kanji.examples.map((ex, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#0D1830]/8 border border-[#2457C5]/25 hover:border-[#55B9F5]/50 flex items-center justify-between transition-colors"
                    >
                      <div>
                        <span className="kanji-font text-lg font-black text-[#DCE9FF] mr-2">{ex.word}</span>
                        <span className="text-xs font-bold text-[#55B9F5] mr-2">【{ex.reading}】</span>
                        <p className="text-xs text-[#6B85B5] mt-0.5 font-medium">{ex.meaning}</p>
                      </div>
                      <button
                        onClick={() => speakJapanese(ex.word)}
                        className="p-2 rounded-xl bg-[#0D1830] hover:bg-[#0D1830]/15/12 text-[#DCE9FF] border border-[#2457C5]/25 transition-colors shadow-2xs"
                        title="Dengarkan kata"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};
