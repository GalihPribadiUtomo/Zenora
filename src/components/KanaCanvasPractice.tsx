import React, { useRef, useState, useEffect } from 'react';
import { 
  Undo2, 
  Redo2, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/audio';

interface KanaCanvasPracticeProps {
  char: string;
  strokeCount: number;
  writingTips?: string;
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

export const KanaCanvasPractice: React.FC<KanaCanvasPracticeProps> = ({
  char,
  strokeCount,
  writingTips
}) => {
  const chars = Array.from(char);
  const [selectedSubIndex, setSelectedSubIndex] = useState(0);
  const activeChar = chars.length > 1 ? chars[selectedSubIndex] : char;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [showGhost, setShowGhost] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [brushColor, setBrushColor] = useState('#8FB4E3');
  const [brushSize, setBrushSize] = useState(12);
  const [strokes, setStrokes] = useState<CanvasStroke[]>([]);
  const [redoStack, setRedoStack] = useState<CanvasStroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<StrokePoint[]>([]);

  // Feedback state
  const [evalResult, setEvalResult] = useState<{
    status: 'success' | 'incomplete' | 'excess' | null;
    message: string;
    scoreText: string;
  } | null>(null);

  // Redraw canvas on stroke history change
  useEffect(() => {
    redrawCanvas();
  }, [strokes, activeChar]);

  // Reset when char or activeChar changes
  useEffect(() => {
    setStrokes([]);
    setRedoStack([]);
    setCurrentStroke([]);
    setEvalResult(null);
    setShowHint(false);
  }, [char, activeChar]);

  const redrawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, 300, 300);
    drawGrid(ctx);

    // Draw all completed strokes
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
    ctx.strokeStyle = '#8FB4E3';
    ctx.globalAlpha = 0.2;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    // Horizontal crosshair
    ctx.beginPath();
    ctx.moveTo(0, 150);
    ctx.lineTo(300, 150);
    ctx.stroke();

    // Vertical crosshair
    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(150, 300);
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
      x: (clientX - rect.left) * (300 / rect.width),
      y: (clientY - rect.top) * (300 / rect.height)
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    setIsDrawing(true);
    setEvalResult(null);
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
      setRedoStack([]);
      setCurrentStroke([]);
    }
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    sound.playClick();
    const last = strokes[strokes.length - 1];
    setStrokes(prev => prev.slice(0, prev.length - 1));
    setRedoStack(prev => [...prev, last]);
    setEvalResult(null);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    sound.playClick();
    const restored = redoStack[redoStack.length - 1];
    setRedoStack(prev => prev.slice(0, prev.length - 1));
    setStrokes(prev => [...prev, restored]);
    setEvalResult(null);
  };

  const handleClear = () => {
    sound.playClick();
    setStrokes([]);
    setRedoStack([]);
    setCurrentStroke([]);
    setEvalResult(null);
  };

  const handleCheckWriting = () => {
    const userStrokeCount = strokes.length;
    const expected = strokeCount;

    if (userStrokeCount === 0) {
      sound.playIncorrect();
      setEvalResult({
        status: 'incomplete',
        scoreText: 'Kanvas Masih Kosong',
        message: 'Silakan tulis karakter di atas kanvas terlebih dahulu menggunakan jari, mouse, atau stylus.'
      });
      return;
    }

    if (userStrokeCount === expected) {
      sound.playCorrect();
      setEvalResult({
        status: 'success',
        scoreText: 'たいへんよくできました！ (Sangat Bagus!)',
        message: `Luar biasa! Jumlah tarikan goresan tepat (${userStrokeCount}/${expected} goresan). Terus latih memori otot penulisanmu!`
      });
    } else if (userStrokeCount < expected) {
      sound.playIncorrect();
      const diff = expected - userStrokeCount;
      setEvalResult({
        status: 'incomplete',
        scoreText: 'もうすこし！ (Sedikit Lagi!)',
        message: `Goresan masih kurang ${diff} langkah (${userStrokeCount}/${expected} goresan). Perhatikan urutan goresan pada tab animasi.`
      });
    } else {
      sound.playIncorrect();
      const diff = userStrokeCount - expected;
      setEvalResult({
        status: 'excess',
        scoreText: 'おしい！ (Hampir!)',
        message: `Terlalu banyak tarikan garis terpisah (${userStrokeCount}/${expected}, lebih ${diff} goresan). Cobalah menarik garis bersambung sesuai kaidah.`
      });
    }
  };

  return (
    <div className="space-y-4 text-left">
      
      {/* Canvas Toolbar: Colors, Pen Sizes, & Tools */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-[#0C1B33]/60 border border-[#8FB4E3]/25">
        
        {/* Color Palette */}
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] font-bold text-[#8793A8] mr-1">Tinta:</span>
          {[
            { color: '#8FB4E3', label: 'Biru Perak (Aksen)' },
            { color: '#EEF1F6', label: 'Putih Teks' },
            { color: '#1F3760', label: 'Deep Surface' },
            { color: '#8793A8', label: 'Redup' },
            { color: '#EF4444', label: 'Merah Koreksi' }
          ].map((swatch) => (
            <button
              key={swatch.color}
              onClick={() => setBrushColor(swatch.color)}
              className={`w-5 h-5 rounded-lg transition-transform ${
                brushColor === swatch.color 
                  ? 'ring-2 ring-[#8FB4E3] scale-110 shadow-xs' 
                  : 'opacity-80 hover:opacity-100'
              }`}
              style={{ backgroundColor: swatch.color }}
              title={swatch.label}
            />
          ))}

          <div className="h-4 w-px bg-[#8FB4E3]/20 mx-1"></div>

          {/* Pen Size */}
          <div className="flex items-center gap-1">
            {[
              { size: 8, label: 'Tipis' },
              { size: 13, label: 'Sedang' },
              { size: 18, label: 'Tebal' }
            ].map((item) => (
              <button
                key={item.size}
                onClick={() => setBrushSize(item.size)}
                className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-colors ${
                  brushSize === item.size
                    ? 'bg-[#1F3760] text-[#EEF1F6] shadow-xs border border-[#8FB4E3]/30'
                    : 'text-[#8793A8] hover:text-[#EEF1F6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            className="p-1.5 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/25 disabled:opacity-30 transition-colors shadow-2xs"
            title="Undo"
          >
            <Undo2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleRedo}
            disabled={redoStack.length === 0}
            className="p-1.5 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#EEF1F6] border border-[#8FB4E3]/25 disabled:opacity-30 transition-colors shadow-2xs"
            title="Redo"
          >
            <Redo2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setShowGhost(!showGhost)}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold border flex items-center gap-1 transition-colors ${
              showGhost 
                ? 'bg-[#1F3760] border-[#8FB4E3]/40 text-[#EEF1F6]' 
                : 'bg-[#0C1B33] text-[#8793A8] border-[#8FB4E3]/25'
            }`}
          >
            {showGhost ? <Eye className="w-3 h-3 text-[#8FB4E3]" /> : <EyeOff className="w-3 h-3 text-[#8793A8]" />}
            <span className="text-[11px]">Bayangan</span>
          </button>

          <button
            onClick={() => setShowHint(!showHint)}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold border flex items-center gap-1 transition-colors ${
              showHint 
                ? 'bg-amber-950/40 border-amber-500/40 text-amber-300' 
                : 'bg-[#0C1B33] text-[#8793A8] border-[#8FB4E3]/25'
            }`}
          >
            <HelpCircle className="w-3 h-3 text-amber-400" />
            <span className="text-[11px]">Petunjuk</span>
          </button>

          <button
            onClick={handleClear}
            className="p-1.5 rounded-xl bg-[#0C1B33] hover:bg-[#1F3760] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/25 transition-colors shadow-2xs"
            title="Bersihkan Kanvas"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Sub-character selector if compound */}
      {chars.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 rounded-2xl bg-[#0C1B33]/60 border border-[#8FB4E3]/25">
          <span className="text-xs font-bold text-[#8793A8]">Latihan Karakter:</span>
          {chars.map((c, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playClick();
                setSelectedSubIndex(idx);
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-black transition-all ${
                selectedSubIndex === idx
                  ? 'bg-gradient-to-r from-[#1F3760] to-[#274474] text-[#EEF1F6] border border-[#8FB4E3]/40 shadow-xs'
                  : 'bg-[#0C1B33] text-[#8793A8] hover:text-[#EEF1F6] border border-[#8FB4E3]/25'
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

      {/* Interactive Canvas Box */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 mx-auto rounded-3xl bg-[#0C1B33] border border-[#8FB4E3]/25 shadow-md overflow-hidden flex items-center justify-center select-none touch-none">
        
        {/* Ghost Template Character underneath */}
        {showGhost && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="kanji-font text-[170px] sm:text-[190px] font-black text-[#8FB4E3]/20 leading-none transition-opacity">
              {activeChar}
            </span>
          </div>
        )}

        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="relative z-10 w-full h-full cursor-crosshair"
        />

        {/* Live Stroke Counter */}
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-xl bg-[#16294A]/95 backdrop-blur-xs border border-[#8FB4E3]/25 shadow-xs text-[11px] font-bold font-mono text-[#EEF1F6] z-20">
          Tarikan: {strokes.length} / {strokeCount}
        </div>
      </div>

      {/* Bottom Check Evaluation Button */}
      <div className="flex items-center justify-center pt-1">
        <button
          onClick={handleCheckWriting}
          className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#1F3760] to-[#274474] border border-[#8FB4E3]/40 hover:brightness-110 text-[#EEF1F6] font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
        >
          <CheckCircle2 className="w-4 h-4 text-[#8FB4E3]" />
          <span>Periksa Hasil Tulisan</span>
        </button>
      </div>

      {/* Evaluation Feedback Alert */}
      {evalResult && (
        <div 
          className={`p-4 rounded-2xl border text-xs animate-in fade-in duration-200 ${
            evalResult.status === 'success' 
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' 
              : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
          }`}
        >
          <div className="flex items-center gap-2 font-black text-sm mb-1">
            {evalResult.status === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            )}
            <span>{evalResult.scoreText}</span>
          </div>
          <p className="font-medium leading-relaxed">
            {evalResult.message}
          </p>
        </div>
      )}

      {/* Educational Hint if triggered */}
      {showHint && writingTips && (
        <div className="p-3.5 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200 leading-relaxed">
          <div className="flex items-center gap-1.5 font-black text-amber-400 uppercase tracking-wider text-[11px] mb-0.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Petunjuk Kaidah Goresan:</span>
          </div>
          <p className="font-medium">
            {writingTips}
          </p>
        </div>
      )}

    </div>
  );
};
