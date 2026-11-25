import React, { useState } from 'react';
import { Mic, MicOff, CheckCircle2, AlertCircle } from 'lucide-react';
import { sound } from '../utils/audio';

interface ShadowingMicButtonProps {
  targetJapanese: string;
}

function calcSimilarity(a: string, b: string): number {
  const clean = (s: string) =>
    s
      .replace(/[。、！？「」『』\s.,!?・～…]/g, '')
      .trim();
  const s1 = clean(a);
  const s2 = clean(b);
  if (!s1 || !s2) return 0;
  if (s1 === s2) return 100;

  let matches = 0;
  const minLen = Math.min(s1.length, s2.length);
  const maxLen = Math.max(s1.length, s2.length);
  for (let i = 0; i < minLen; i++) {
    if (s1[i] === s2[i]) matches++;
    else if (s2.includes(s1[i])) matches += 0.5;
  }
  return Math.min(100, Math.round((matches / maxLen) * 100));
}

export const ShadowingMicButton: React.FC<ShadowingMicButtonProps> = ({ targetJapanese }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleListen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setErrorMsg('Browser belum mendukung Speech Recognition (gunakan Chrome/Edge).');
      return;
    }

    if (isListening) return;

    try {
      sound.playClick();
      setErrorMsg(null);
      setTranscript(null);
      setAccuracy(null);
      const recognition = new SpeechRecognition();
      recognition.lang = 'ja-JP';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const spoken = event.results[0][0].transcript;
        const pct = calcSimilarity(spoken, targetJapanese);
        setTranscript(spoken);
        setAccuracy(pct);
        if (pct >= 70) sound.playCorrect();
        else sound.playIncorrect();
      };

      recognition.onerror = () => {
        setErrorMsg('Suara tidak terdeteksi. Coba ucapkan lebih jelas.');
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
      setErrorMsg('Gagal mengakses mikrofon.');
    }
  };

  return (
    <div className="inline-flex flex-col items-end gap-1.5">
      <button
        type="button"
        onClick={handleListen}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-bold border transition-all ${
          isListening
            ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 animate-pulse'
            : 'bg-[#172945] hover:bg-[#111F38] text-[#69C9DF] border-[#69C9DF]/30'
        }`}
        title="Latihan Shadowing (Ucapkan dengan Mikrofon)"
      >
        {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
        <span>{isListening ? 'Mendengarkan...' : 'Shadowing'}</span>
      </button>

      {transcript && accuracy !== null && (
        <div
          className={`text-[11px] px-2.5 py-1 rounded-lg border flex items-center gap-1.5 ${
            accuracy >= 70
              ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
              : 'bg-amber-500/15 border-amber-500/40 text-amber-300'
          }`}
        >
          <CheckCircle2 className="w-3 h-3 shrink-0" />
          <span>
            "{transcript}" · <strong>{accuracy}%</strong>
          </span>
        </div>
      )}

      {errorMsg && (
        <div className="text-[10px] text-rose-300 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          <span>{errorMsg}</span>
        </div>
      )}
    </div>
  );
};
