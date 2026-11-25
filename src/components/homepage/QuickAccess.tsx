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
        <Zap className="w-5 h-5 text-[#E9BD72] fill-[#E9BD72]" />
        <h3 className="text-lg font-black text-[#F2F6FC] font-['Manrope'] tracking-wide">
          Akses Cepat
        </h3>
      </div>

      {/* 5 Horizontal Cards - Luxury Midnight Ocean */}
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
              className="group cursor-pointer rounded-2xl p-4 bg-[#111F38]/90 hover:bg-[#172945] border border-[#263D60] hover:border-[#3978D6]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(36,86,166,0.35)] flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2456A6]/25 to-[#3978D6]/25 border border-[#3978D6]/35 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#2456A6]/35 transition-all">
                  <Icon className="w-5 h-5 text-[#83B7EE] group-hover:text-white transition-colors" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-black text-[#F2F6FC] group-hover:text-[#83B7EE] truncate font-['Manrope'] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#A9BBD3] truncate font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="w-7 h-7 rounded-full bg-[#172945] border border-[#263D60] flex items-center justify-center text-[#A9BBD3] group-hover:text-white group-hover:bg-[#2456A6] group-hover:border-[#3978D6] group-hover:shadow-[0_0_10px_rgba(36,86,166,0.6)] transition-all shrink-0">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
