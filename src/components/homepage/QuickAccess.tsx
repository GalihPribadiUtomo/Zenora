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
      title: 'Kana',
      subtitle: 'Hiragana & Katakana',
      icon: Languages,
      action: () => onNavigate('kana')
    },
    {
      id: 'kanji',
      title: 'Kanji',
      subtitle: 'N5 & N4 Interaktif',
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
      title: 'Analitik',
      subtitle: 'Statistik Belajar',
      icon: BarChart3,
      action: onScrollToStats
    }
  ];

  return (
    <section className="text-left space-y-3.5">
      
      {/* Section Title */}
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-[var(--accent-gold)] fill-[var(--accent-gold)]" />
        <h3 className="text-lg font-black text-[var(--text-primary)] font-['Manrope'] tracking-wide">
          Akses Cepat
        </h3>
      </div>

      {/* 5 Horizontal Cards - Consistent Luxury Arctic / Midnight Ocean */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                sound.playClick();
                item.action();
              }}
              className="group text-left cursor-pointer rounded-2xl p-4 bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] border border-[var(--border)] hover:border-[var(--primary)]/45 shadow-[var(--card-shadow)] hover:shadow-[var(--card-hover-shadow)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-between gap-2.5"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[var(--primary)]/16 transition-all">
                  <Icon className="w-[18px] h-[18px] text-[var(--primary)] transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="quick-access-title text-xs sm:text-sm font-black text-[var(--text-primary)] truncate font-['Manrope'] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[var(--text-secondary)] truncate font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#2866B5] group-hover:to-[#4389D4] group-hover:border-transparent transition-all shrink-0">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

    </section>
  );
};
