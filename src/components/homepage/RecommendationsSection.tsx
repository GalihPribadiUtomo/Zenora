import React from 'react';
import { 
  Star, 
  ArrowRight, 
  BookOpen, 
  Layers, 
  PenTool, 
  Award
} from 'lucide-react';
import { sound } from '../../utils/audio';

interface RecommendationsSectionProps {
  onNavigate: (tab: 'kana' | 'kotoba' | 'kanji' | 'latihan') => void;
  totalKanji: number;
  totalKotoba: number;
}

export const RecommendationsSection: React.FC<RecommendationsSectionProps> = ({
  onNavigate,
  totalKanji,
  totalKotoba
}) => {
  const cards = [
    {
      id: 'materi',
      title: 'Materi Bab 1 – 50',
      description: 'Tata bahasa (Bunpou), pola & contoh kalimat (Bentuk Keigo).',
      badge: 'Populer',
      image: '/assets/homepage/zenora-materials.jpg',
      meta: '50 Bab Materi',
      icon: BookOpen,
      action: () => onNavigate('kotoba')
    },
    {
      id: 'kana',
      title: 'Hiragana & Katakana',
      description: '312 karakter lengkap dengan pelafalan audio dan contoh.',
      badge: 'Dasar',
      image: '/assets/homepage/zenora-kana.jpg',
      meta: '312 Aksara',
      icon: Layers,
      action: () => onNavigate('kana')
    },
    {
      id: 'kanji',
      title: 'Kanji Interaktif',
      description: `${totalKanji || 424} Kanji lengkap dengan animasi urutan goresan & kanvas.`,
      badge: 'Interaktif',
      image: '/assets/homepage/zenora-kanji.jpg',
      meta: `${totalKanji || 424} Kanji`,
      icon: PenTool,
      action: () => onNavigate('kanji')
    },
    {
      id: 'jlpt',
      title: 'Latihan & Simulasi JLPT',
      description: 'Latihan soal sesuai level JLPT N5–N4 & JFT-Basic A2.',
      badge: 'Ujian Resmi',
      image: '/assets/homepage/zenora-jlpt.jpg',
      meta: '18 Mode Ujian',
      icon: Award,
      action: () => onNavigate('latihan')
    }
  ];

  return (
    <div className="space-y-4 text-left">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-[#E9BD72] fill-[#E9BD72]" />
          <h3 className="text-lg font-black text-[#F2F6FC] font-['Manrope'] tracking-wide">
            Rekomendasi Untukmu
          </h3>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onNavigate('kotoba');
          }}
          className="text-xs font-bold text-[#3978D6] hover:text-[#83B7EE] flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>Lihat Semua</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 4 Cards Grid - Luxury Midnight Ocean */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              onClick={() => {
                sound.playClick();
                card.action();
              }}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#111F38] border border-[#263D60] hover:border-[#3978D6]/60 shadow-[0_10px_30px_rgba(8,21,47,0.7)] hover:shadow-[0_16px_40px_rgba(36,86,166,0.3)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image with Midnight Ocean Badge */}
                <div className="relative h-36 w-full overflow-hidden bg-[#08152F]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111F38] via-transparent to-black/40" />
                  
                  {/* Category Badge - Midnight Ocean Pill */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-black border backdrop-blur-md uppercase tracking-wider bg-[#2456A6]/35 text-[#83B7EE] border-[#3978D6]/40 shadow-[0_0_10px_rgba(36,86,166,0.3)]">
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h4 className="font-black text-sm text-[#F2F6FC] group-hover:text-[#83B7EE] transition-colors font-['Manrope'] leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#A9BBD3] line-clamp-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 pt-0 flex items-center justify-between border-t border-[#263D60] mt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#A9BBD3] font-semibold">
                  <Icon className="w-3.5 h-3.5 text-[#3978D6]" />
                  <span>{card.meta}</span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#172945] border border-[#263D60] flex items-center justify-center text-white group-hover:bg-[#2456A6] group-hover:shadow-[0_0_12px_rgba(36,86,166,0.6)] transition-all">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
