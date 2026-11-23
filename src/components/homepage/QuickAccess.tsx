import React from 'react';
import { 
  Zap, 
  BookOpen, 
  Languages, 
  PenTool, 
  CheckCircle2, 
  BarChart3, 
  ArrowRight
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface QuickAccessProps {
  onNavigate: (tab: 'kana' | 'kotoba' | 'kanji' | 'latihan' | 'analitik') => void;
  onScrollToStats: () => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({
  onNavigate,
  onScrollToStats
}) => {
  const items = [
    {
      id: 'materi',
      title: 'Materi',
      subtitle: 'Bab 1 – 50',
      icon: BookOpen,
      action: () => onNavigate('kotoba')
    },
    {
      id: 'kana',
      title: 'Hiragana &',
      subtitle: 'Katakana',
      icon: Languages,
      action: () => onNavigate('kana')
    },
    {
      id: 'kanji',
      title: 'Kanji',
      subtitle: 'Interaktif',
      icon: PenTool,
      action: () => onNavigate('kanji')
    },
    {
      id: 'jlpt',
      title: 'Latihan',
      subtitle: 'JLPT & JFT',
      icon: CheckCircle2,
      action: () => onNavigate('latihan')
    },
    {
      id: 'analitik',
      title: 'Lihat',
      subtitle: 'Analitik',
      icon: BarChart3,
      action: onScrollToStats
    }
  ];

  return (
    <section className="text-left space-y-3.5">
      
      {/* Section Title */}
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-[#FFC857] fill-[#FFC857]" />
        <h3 className="text-lg font-black text-white font-['Manrope'] tracking-wide">
          Akses Cepat
        </h3>
      </div>

      {/* 5 Horizontal Cards - Unified Palette */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => {
                sound.playClick();
                item.action();
              }}
              className="group cursor-pointer rounded-2xl p-4 bg-[#0D1238]/90 hover:bg-[#12194A] border border-[#7857FF]/20 hover:border-[#7857FF]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(120,87,255,0.3)] flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#7857FF]/25 to-[#945CFF]/25 border border-[#7857FF]/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#7857FF]/35 transition-all">
                  <Icon className="w-5 h-5 text-[#945CFF] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-white group-hover:text-[#945CFF] truncate font-['Manrope'] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#AAB3D5] truncate font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-[#171D50] border border-[#7857FF]/25 flex items-center justify-center text-[#AAB3D5] group-hover:text-white group-hover:bg-[#7857FF] group-hover:border-[#7857FF] group-hover:shadow-[0_0_10px_rgba(120,87,255,0.5)] transition-all shrink-0">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
