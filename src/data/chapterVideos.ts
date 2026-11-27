export type ChapterVideoCategory =
  | 'Kosakata (Kotoba)'
  | 'Tata Bahasa & Materi'
  | 'Latihan Percakapan (Kaiwa)'
  | 'Latihan Soal'
  | 'Belum Dikategorikan';

export interface ChapterVideoItem {
  video_id: string;
  youtube_id: string;
  title: string;
  description: string;
  chapter_id: number | null;
  category: ChapterVideoCategory;
  display_order: number;
  source_url: string;
}

export const YOUTUBE_PLAYLIST_ID = 'PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5';
export const YOUTUBE_PLAYLIST_URL = 'https://youtube.com/playlist?list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5';
export const YOUTUBE_PLAYLIST_2_ID = 'PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1';
export const YOUTUBE_PLAYLIST_2_URL = 'https://youtube.com/playlist?list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1';

export const CHAPTER_VIDEOS: ChapterVideoItem[] = [
  {
    "video_id": "yt-bab1-wNQWL9zNW9k",
    "youtube_id": "wNQWL9zNW9k",
    "title": "Learn Japanese – Chapter 1 Minna no Nihongo",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 1.",
    "chapter_id": 1,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=wNQWL9zNW9k&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab2-_ejkASqpF_w",
    "youtube_id": "_ejkASqpF_w",
    "title": "Learn Japanese – Chapter 2 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 2.",
    "chapter_id": 2,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=_ejkASqpF_w&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab2-bNjSGgfIxxs",
    "youtube_id": "bNjSGgfIxxs",
    "title": "Learn Japanese – Chapter 2 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 2.",
    "chapter_id": 2,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=bNjSGgfIxxs&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab3-DLeQaKQcB_Q",
    "youtube_id": "DLeQaKQcB_Q",
    "title": "Learn Japanese – Minna no Nihongo Chapter 3",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 3.",
    "chapter_id": 3,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=DLeQaKQcB_Q&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab4-NVb_ek49RvE",
    "youtube_id": "NVb_ek49RvE",
    "title": "Learn Japanese – Chapter 4 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 4.",
    "chapter_id": 4,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=NVb_ek49RvE&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab4-IAQtZkTYnm8",
    "youtube_id": "IAQtZkTYnm8",
    "title": "Learn Japanese – Chapter 4 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 4.",
    "chapter_id": 4,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=IAQtZkTYnm8&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab5-RHof1MwtdZw",
    "youtube_id": "RHof1MwtdZw",
    "title": "Learn Japanese – Chapter 5 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 5.",
    "chapter_id": 5,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=RHof1MwtdZw&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab5-Yz1dasPMReU",
    "youtube_id": "Yz1dasPMReU",
    "title": "Learn Japanese – Chapter 5 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 5.",
    "chapter_id": 5,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Yz1dasPMReU&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab6-97l_Kcy_Z-A",
    "youtube_id": "97l_Kcy_Z-A",
    "title": "Learn Japanese – Chapter 6 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 6.",
    "chapter_id": 6,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=97l_Kcy_Z-A&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab6-sASCVJ34jec",
    "youtube_id": "sASCVJ34jec",
    "title": "Learn Japanese – Chapter 6 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 6.",
    "chapter_id": 6,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=sASCVJ34jec&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab7-mSkdsjGnlns",
    "youtube_id": "mSkdsjGnlns",
    "title": "Learn Japanese – Chapter 7 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 7.",
    "chapter_id": 7,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=mSkdsjGnlns&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab7-3v9BUEgvpto",
    "youtube_id": "3v9BUEgvpto",
    "title": "Learn Japanese – Chapter 7 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 7.",
    "chapter_id": 7,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=3v9BUEgvpto&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab8-4Bkb7NhKeFg",
    "youtube_id": "4Bkb7NhKeFg",
    "title": "Learn Japanese – Chapter 8 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 8.",
    "chapter_id": 8,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=4Bkb7NhKeFg&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab8-wcXrzk8o4k0",
    "youtube_id": "wcXrzk8o4k0",
    "title": "Learn Japanese – Chapter 8 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 8.",
    "chapter_id": 8,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=wcXrzk8o4k0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab9-b6nBMKQcWd4",
    "youtube_id": "b6nBMKQcWd4",
    "title": "Learn Japanese – Chapter 9 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 9.",
    "chapter_id": 9,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=b6nBMKQcWd4&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab9-DjRYL0hdzPs",
    "youtube_id": "DjRYL0hdzPs",
    "title": "Learn Japanese – Chapter 9 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 9.",
    "chapter_id": 9,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=DjRYL0hdzPs&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab10-XSxmMlMubAI",
    "youtube_id": "XSxmMlMubAI",
    "title": "Learn Japanese – Minna no Nihongo Chapter 10 – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 10.",
    "chapter_id": 10,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=XSxmMlMubAI&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab10-Kyw7jJkBcxU",
    "youtube_id": "Kyw7jJkBcxU",
    "title": "Learn Japanese – Chapter 10 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 10.",
    "chapter_id": 10,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Kyw7jJkBcxU&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab11-ZUFiRR1YjeE",
    "youtube_id": "ZUFiRR1YjeE",
    "title": "Japanese Vocabulary – Chapter 11 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 11.",
    "chapter_id": 11,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=ZUFiRR1YjeE&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab11-55SxnKqr700",
    "youtube_id": "55SxnKqr700",
    "title": "Learn Japanese – Chapter 11 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 11.",
    "chapter_id": 11,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=55SxnKqr700&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab11-BYMnksFKl98",
    "youtube_id": "BYMnksFKl98",
    "title": "Belajar Bahasa Jepang – Bab 11 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 11.",
    "chapter_id": 11,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=BYMnksFKl98&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab11-TquEx6oTOoo",
    "youtube_id": "TquEx6oTOoo",
    "title": "Japanese Conversation Practice - Chapter 11 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 11.",
    "chapter_id": 11,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=TquEx6oTOoo&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab12-d6X13q0gGcg",
    "youtube_id": "d6X13q0gGcg",
    "title": "Japanese Vocabulary – Chapter 12 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 12.",
    "chapter_id": 12,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=d6X13q0gGcg&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab12---1ydkUc2Q4",
    "youtube_id": "--1ydkUc2Q4",
    "title": "Learn Japanese – Chapter 12 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 12.",
    "chapter_id": 12,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=--1ydkUc2Q4&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab12-3y6LuRKFFr4",
    "youtube_id": "3y6LuRKFFr4",
    "title": "Learn Japanese – Chapter 12 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 12.",
    "chapter_id": 12,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=3y6LuRKFFr4&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab12-0VwZ_KKCUEQ",
    "youtube_id": "0VwZ_KKCUEQ",
    "title": "Latihan Percakapan Bahasa Jepang - Bab 12 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 12.",
    "chapter_id": 12,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=0VwZ_KKCUEQ&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab13-XkcS9shGF_0",
    "youtube_id": "XkcS9shGF_0",
    "title": "Japanese Vocabulary – Chapter 13 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 13.",
    "chapter_id": 13,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=XkcS9shGF_0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab13-rC_Fzx8jvaM",
    "youtube_id": "rC_Fzx8jvaM",
    "title": "Learn Japanese – Chapter 13 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 13.",
    "chapter_id": 13,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=rC_Fzx8jvaM&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab13-2uC27UlLwUs",
    "youtube_id": "2uC27UlLwUs",
    "title": "Learn Japanese – Minna no Nihongo Chapter 13 – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 13.",
    "chapter_id": 13,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=2uC27UlLwUs&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab13-6pIGCrW5gVk",
    "youtube_id": "6pIGCrW5gVk",
    "title": "Japanese Conversation Practice - Chapter 13 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 13.",
    "chapter_id": 13,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=6pIGCrW5gVk&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab14-z-haU-Cu2io",
    "youtube_id": "z-haU-Cu2io",
    "title": "Japanese Vocabulary – Chapter 14 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 14.",
    "chapter_id": 14,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=z-haU-Cu2io&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab14-Kgg2Fbj21WI",
    "youtube_id": "Kgg2Fbj21WI",
    "title": "Learn Japanese – Chapter 14 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 14.",
    "chapter_id": 14,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Kgg2Fbj21WI&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab14-t9dwKOw5XsE",
    "youtube_id": "t9dwKOw5XsE",
    "title": "Learn Japanese – Chapter 14 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 14.",
    "chapter_id": 14,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=t9dwKOw5XsE&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab14-4VHvcQn3EuU",
    "youtube_id": "4VHvcQn3EuU",
    "title": "Japanese Conversation Practice - Chapter 14 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 14.",
    "chapter_id": 14,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=4VHvcQn3EuU&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab15-dvDcDl6hcZ4",
    "youtube_id": "dvDcDl6hcZ4",
    "title": "Japanese Vocabulary – Minna no Nihongo Chapter 15",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 15.",
    "chapter_id": 15,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=dvDcDl6hcZ4&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab15-_hTcHmb4Z4M",
    "youtube_id": "_hTcHmb4Z4M",
    "title": "Learn Japanese – Chapter 15 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 15.",
    "chapter_id": 15,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=_hTcHmb4Z4M&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab15-Ns4nUUienPA",
    "youtube_id": "Ns4nUUienPA",
    "title": "Learn Japanese – Minna no Nihongo Chapter 15 – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 15.",
    "chapter_id": 15,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=Ns4nUUienPA&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab16-333MERWQt6Y",
    "youtube_id": "333MERWQt6Y",
    "title": "Japanese Vocabulary – Chapter 16 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 16.",
    "chapter_id": 16,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=333MERWQt6Y&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab16-2Trz243aF9U",
    "youtube_id": "2Trz243aF9U",
    "title": "Learn Japanese – Minna no Nihongo Chapter 16 – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 16.",
    "chapter_id": 16,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=2Trz243aF9U&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab16-G9fKYfcNvO0",
    "youtube_id": "G9fKYfcNvO0",
    "title": "Belajar Bahasa Jepang – Bab 16 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 16.",
    "chapter_id": 16,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=G9fKYfcNvO0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab17-EzljMvRmVl8",
    "youtube_id": "EzljMvRmVl8",
    "title": "Japanese Vocabulary – Chapter 17 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 17.",
    "chapter_id": 17,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=EzljMvRmVl8&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab17-fmrDIaYLvI0",
    "youtube_id": "fmrDIaYLvI0",
    "title": "Learn Japanese – Chapter 17 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 17.",
    "chapter_id": 17,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=fmrDIaYLvI0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab17-FI5PYwOcPNg",
    "youtube_id": "FI5PYwOcPNg",
    "title": "Learn Japanese – Chapter 17 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 17.",
    "chapter_id": 17,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=FI5PYwOcPNg&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab17-PSs-R6kpMZY",
    "youtube_id": "PSs-R6kpMZY",
    "title": "Japanese Conversation Practice - Chapter 17 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 17.",
    "chapter_id": 17,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=PSs-R6kpMZY&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab18-Mu7qLKF4UBs",
    "youtube_id": "Mu7qLKF4UBs",
    "title": "Japanese Vocabulary – Chapter 18 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 18.",
    "chapter_id": 18,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=Mu7qLKF4UBs&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab18-2dxfxAO7pAs",
    "youtube_id": "2dxfxAO7pAs",
    "title": "Learn Japanese – Chapter 18 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 18.",
    "chapter_id": 18,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=2dxfxAO7pAs&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab18-tvEDtV7EIUc",
    "youtube_id": "tvEDtV7EIUc",
    "title": "Learn Japanese – Chapter 18 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 18.",
    "chapter_id": 18,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=tvEDtV7EIUc&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab18-0T0B_2k_OF8",
    "youtube_id": "0T0B_2k_OF8",
    "title": "Japanese Language Learning Method - Japanese Conversation Practice - Chapter 18 Minna no Nihongo -",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 18.",
    "chapter_id": 18,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=0T0B_2k_OF8&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab19-FxKyvTkrx7g",
    "youtube_id": "FxKyvTkrx7g",
    "title": "Japanese Vocabulary – Chapter 19 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 19.",
    "chapter_id": 19,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=FxKyvTkrx7g&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab19-92LSWP3s41o",
    "youtube_id": "92LSWP3s41o",
    "title": "Learn Japanese – Chapter 19 Minna no Nihongo – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 19.",
    "chapter_id": 19,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=92LSWP3s41o&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab19-ws8kJte0zFg",
    "youtube_id": "ws8kJte0zFg",
    "title": "Learn Japanese – Chapter 19 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 19.",
    "chapter_id": 19,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=ws8kJte0zFg&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab19-uYiEe-9EQ4c",
    "youtube_id": "uYiEe-9EQ4c",
    "title": "Tricks to Be Able to Speak Japanese - Japanese Conversation Practice - Chapter 19 Minna no Nihongo -",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 19.",
    "chapter_id": 19,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=uYiEe-9EQ4c&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab20-36GWk7nIGZI",
    "youtube_id": "36GWk7nIGZI",
    "title": "Japanese Vocabulary – Chapter 20 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 20.",
    "chapter_id": 20,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=36GWk7nIGZI&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab20-Qu9Z9qmfKdA",
    "youtube_id": "Qu9Z9qmfKdA",
    "title": "Learn Japanese – Minna no Nihongo Chapter 20",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 20.",
    "chapter_id": 20,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Qu9Z9qmfKdA&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab20--fC6nWQlFX0",
    "youtube_id": "-fC6nWQlFX0",
    "title": "Japanese Verb and Adjective Changes - Chapter 20 Minna no Nihongo -",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 20.",
    "chapter_id": 20,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=-fC6nWQlFX0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab21-l234EoxPzNw",
    "youtube_id": "l234EoxPzNw",
    "title": "Kosakata Bahasa Jepang – Bab 21 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 21.",
    "chapter_id": 21,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=l234EoxPzNw&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab21-LvPGuJrlkVM",
    "youtube_id": "LvPGuJrlkVM",
    "title": "Learn Japanese – Minna no Nihongo Chapter 21 – Part 1",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 1 untuk Bab 21.",
    "chapter_id": 21,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=LvPGuJrlkVM&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab21-CxrTqpgDj3E",
    "youtube_id": "CxrTqpgDj3E",
    "title": "Learn Japanese – Chapter 21 Minna no Nihongo – Part 2",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 2 untuk Bab 21.",
    "chapter_id": 21,
    "category": "Tata Bahasa & Materi",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=CxrTqpgDj3E&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab21-3q13XYrjWvM",
    "youtube_id": "3q13XYrjWvM",
    "title": "Learn Japanese – Chapter 21 Minna no Nihongo – Part 3",
    "description": "Penjelasan tata bahasa dan pola kalimat Bagian 3 untuk Bab 21.",
    "chapter_id": 21,
    "category": "Tata Bahasa & Materi",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=3q13XYrjWvM&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab22-P3OUz2KwOBM",
    "youtube_id": "P3OUz2KwOBM",
    "title": "Japanese Vocabulary – Chapter 22 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 22.",
    "chapter_id": 22,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=P3OUz2KwOBM&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab22-tCpwOUzRJw4",
    "youtube_id": "tCpwOUzRJw4",
    "title": "Learn Japanese – Chapter 22 Minna no Nihongo",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 22.",
    "chapter_id": 22,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=tCpwOUzRJw4&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab22-8ziArPS-C1Q",
    "youtube_id": "8ziArPS-C1Q",
    "title": "Japanese Practice Questions – Chapter 22 Minna no Nihongo",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 22.",
    "chapter_id": 22,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=8ziArPS-C1Q&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab22-RYXmCs0K7N0",
    "youtube_id": "RYXmCs0K7N0",
    "title": "Japanese Conversation Practice - Chapter 22 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 22.",
    "chapter_id": 22,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=RYXmCs0K7N0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab23-mkZ7zzW6orU",
    "youtube_id": "mkZ7zzW6orU",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 23",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 23.",
    "chapter_id": 23,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=mkZ7zzW6orU&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab23--0SNbcXM0_g",
    "youtube_id": "-0SNbcXM0_g",
    "title": "Belajar Bahasa Jepang – Bab 23 Minna no Nihongo",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 23.",
    "chapter_id": 23,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=-0SNbcXM0_g&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab23-1gBgPVlDjU0",
    "youtube_id": "1gBgPVlDjU0",
    "title": "Japanese Practice Questions – Chapter 23 Minna no Nihongo",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 23.",
    "chapter_id": 23,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=1gBgPVlDjU0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab23-NdNpnr2CkcA",
    "youtube_id": "NdNpnr2CkcA",
    "title": "Japanese Conversation Practice - Chapter 23 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 23.",
    "chapter_id": 23,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=NdNpnr2CkcA&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab24-CzNYP892Egs",
    "youtube_id": "CzNYP892Egs",
    "title": "Japanese Vocabulary – Chapter 24 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 24.",
    "chapter_id": 24,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=CzNYP892Egs&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab24-gJ6nKDbJDrY",
    "youtube_id": "gJ6nKDbJDrY",
    "title": "Learn Japanese – Chapter 24 Minna no Nihongo",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 24.",
    "chapter_id": 24,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=gJ6nKDbJDrY&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab24-IaoFWATVQY8",
    "youtube_id": "IaoFWATVQY8",
    "title": "Japanese Practice Questions – Chapter 24 Minna no Nihongo",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 24.",
    "chapter_id": 24,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=IaoFWATVQY8&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab24-OwCwl1fUwVo",
    "youtube_id": "OwCwl1fUwVo",
    "title": "Japanese Conversation Practice - Minna no Nihongo Chapter 24",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 24.",
    "chapter_id": 24,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=OwCwl1fUwVo&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab25-jt310KS1JO0",
    "youtube_id": "jt310KS1JO0",
    "title": "Japanese Vocabulary – Chapter 25 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 25.",
    "chapter_id": 25,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=jt310KS1JO0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab25-dWpy6jVMoA0",
    "youtube_id": "dWpy6jVMoA0",
    "title": "Learn Japanese – Chapter 25 Minna no Nihongo",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 25.",
    "chapter_id": 25,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=dWpy6jVMoA0&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab25-XmAqLoFRJms",
    "youtube_id": "XmAqLoFRJms",
    "title": "Japanese Conversation Practice - Chapter 25 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 25.",
    "chapter_id": 25,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=XmAqLoFRJms&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-uncat-admw_89o4u8",
    "youtube_id": "admw_89o4u8",
    "title": "Japanese Practice Questions – Chapter 1-25 Minna no Nihongo Part 1",
    "description": "Latihan soal gabungan Minna no Nihongo Bab 1–25 (review lintas bab, masuk kategori Belum Dikategorikan agar tidak dipaksakan ke satu bab tertentu).",
    "chapter_id": null,
    "category": "Belum Dikategorikan",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=admw_89o4u8&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-uncat-Q5_H98fZA7s",
    "youtube_id": "Q5_H98fZA7s",
    "title": "Japanese Practice Questions – Chapter 1-25 Minna no Nihongo Part 2",
    "description": "Latihan soal gabungan Minna no Nihongo Bab 1–25 (review lintas bab, masuk kategori Belum Dikategorikan agar tidak dipaksakan ke satu bab tertentu).",
    "chapter_id": null,
    "category": "Belum Dikategorikan",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Q5_H98fZA7s&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-uncat-Iv68skL9pXo",
    "youtube_id": "Iv68skL9pXo",
    "title": "Japanese Practice Questions – Chapter 1-25 Minna no Nihongo Part 3",
    "description": "Latihan soal gabungan Minna no Nihongo Bab 1–25 (review lintas bab, masuk kategori Belum Dikategorikan agar tidak dipaksakan ke satu bab tertentu).",
    "chapter_id": null,
    "category": "Belum Dikategorikan",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=Iv68skL9pXo&list=PLhQ568NlkEK3ZGH0-nt7eCyynFsCLdBB5"
  },
  {
    "video_id": "yt-bab26-8Jr0IxWTgEM",
    "youtube_id": "8Jr0IxWTgEM",
    "title": "Japanese Vocabulary – Chapter 26 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 26.",
    "chapter_id": 26,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=8Jr0IxWTgEM&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab26-88UKjcra0WI",
    "youtube_id": "88UKjcra0WI",
    "title": "Learn Japanese – Chapter 26 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 26.",
    "chapter_id": 26,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=88UKjcra0WI&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab26-O5PfQCPKJ7Y",
    "youtube_id": "O5PfQCPKJ7Y",
    "title": "Japanese Practice Questions – Chapter 26 Minna no Nihongo 2",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 26.",
    "chapter_id": 26,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=O5PfQCPKJ7Y&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab26-d0Tp0XFLlgI",
    "youtube_id": "d0Tp0XFLlgI",
    "title": "Japanese Conversation Practice - Chapter 26 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 26.",
    "chapter_id": 26,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=d0Tp0XFLlgI&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab27-DXdqme0Ey5c",
    "youtube_id": "DXdqme0Ey5c",
    "title": "Kosakata Bahasa Jepang – Bab 27 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 27.",
    "chapter_id": 27,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=DXdqme0Ey5c&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab27-Mcnln1FOpac",
    "youtube_id": "Mcnln1FOpac",
    "title": "Learn Japanese – Chapter 27 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 27.",
    "chapter_id": 27,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Mcnln1FOpac&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab27-WpzAdqFhICI",
    "youtube_id": "WpzAdqFhICI",
    "title": "Japanese Practice Questions – Chapter 27 Minna no Nihongo 2",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 27.",
    "chapter_id": 27,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=WpzAdqFhICI&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab27-S6ZsRhfK-3E",
    "youtube_id": "S6ZsRhfK-3E",
    "title": "Japanese Conversation Practice - Chapter 27 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 27.",
    "chapter_id": 27,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=S6ZsRhfK-3E&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab28-yo7KvzdPtTY",
    "youtube_id": "yo7KvzdPtTY",
    "title": "Japanese Vocabulary – Chapter 28 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 28.",
    "chapter_id": 28,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=yo7KvzdPtTY&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab28-u7lT6zJLOOA",
    "youtube_id": "u7lT6zJLOOA",
    "title": "Learn Japanese – Chapter 28 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 28.",
    "chapter_id": 28,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=u7lT6zJLOOA&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab28-p6DVNBDs1m8",
    "youtube_id": "p6DVNBDs1m8",
    "title": "Japanese Practice Questions – Chapter 28 Minna no Nihongo 2",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 28.",
    "chapter_id": 28,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=p6DVNBDs1m8&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab28-84erscD1woM",
    "youtube_id": "84erscD1woM",
    "title": "Japanese Conversation Practice - Chapter 28 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 28.",
    "chapter_id": 28,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=84erscD1woM&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab29-jNigoXZ_auc",
    "youtube_id": "jNigoXZ_auc",
    "title": "Japanese Vocabulary – Chapter 29 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 29.",
    "chapter_id": 29,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=jNigoXZ_auc&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab29-MvVQHyd2sx0",
    "youtube_id": "MvVQHyd2sx0",
    "title": "Learn Japanese – Chapter 29 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 29.",
    "chapter_id": 29,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=MvVQHyd2sx0&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab29-xbRqLhUJ0WE",
    "youtube_id": "xbRqLhUJ0WE",
    "title": "Japanese Practice Questions – Chapter 29 Minna no Nihongo 2",
    "description": "Latihan soal dan evaluasi pemahaman materi Bab 29.",
    "chapter_id": 29,
    "category": "Latihan Soal",
    "display_order": 3,
    "source_url": "https://www.youtube.com/watch?v=xbRqLhUJ0WE&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab29-FUFpE0WXdMg",
    "youtube_id": "FUFpE0WXdMg",
    "title": "Japanese Conversation Practice - Chapter 29 Minna no Nihongo",
    "description": "Latihan percakapan (Kaiwa) dan penerapan kalimat untuk materi Bab 29.",
    "chapter_id": 29,
    "category": "Latihan Percakapan (Kaiwa)",
    "display_order": 4,
    "source_url": "https://www.youtube.com/watch?v=FUFpE0WXdMg&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab30-8GAFBkMH8XQ",
    "youtube_id": "8GAFBkMH8XQ",
    "title": "Japanese Vocabulary – Chapter 30 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 30.",
    "chapter_id": 30,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=8GAFBkMH8XQ&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab30-QwoRt2A1MjE",
    "youtube_id": "QwoRt2A1MjE",
    "title": "Learn Japanese – Chapter 30 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 30.",
    "chapter_id": 30,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=QwoRt2A1MjE&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab31-3gKFRo0SAA4",
    "youtube_id": "3gKFRo0SAA4",
    "title": "Japanese Vocabulary – Chapter 31 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 31.",
    "chapter_id": 31,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=3gKFRo0SAA4&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab31-VYhh7IfLUeQ",
    "youtube_id": "VYhh7IfLUeQ",
    "title": "Learn Japanese – Chapter 31 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 31.",
    "chapter_id": 31,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=VYhh7IfLUeQ&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab32-wl7BT8BUm08",
    "youtube_id": "wl7BT8BUm08",
    "title": "Japanese Vocabulary – Chapter 32 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 32.",
    "chapter_id": 32,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=wl7BT8BUm08&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab32-n-34Vq0nRFk",
    "youtube_id": "n-34Vq0nRFk",
    "title": "Learn Japanese – Chapter 32 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 32.",
    "chapter_id": 32,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=n-34Vq0nRFk&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab33-ZArGXiETtOo",
    "youtube_id": "ZArGXiETtOo",
    "title": "Japanese Vocabulary – Chapter 33 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 33.",
    "chapter_id": 33,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=ZArGXiETtOo&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab33-DbcNuUFK-ag",
    "youtube_id": "DbcNuUFK-ag",
    "title": "Learn Japanese – Chapter 33 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 33.",
    "chapter_id": 33,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=DbcNuUFK-ag&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab34-61kmwR2Wf8Y",
    "youtube_id": "61kmwR2Wf8Y",
    "title": "Japanese Vocabulary – Chapter 34 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 34.",
    "chapter_id": 34,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=61kmwR2Wf8Y&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab34-uQFTLzQYLEw",
    "youtube_id": "uQFTLzQYLEw",
    "title": "Learn Japanese – Chapter 34 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 34.",
    "chapter_id": 34,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=uQFTLzQYLEw&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab35-D9FobDaY5rA",
    "youtube_id": "D9FobDaY5rA",
    "title": "Japanese Vocabulary – Chapter 35 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 35.",
    "chapter_id": 35,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=D9FobDaY5rA&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab35-HDt9jA3lI3Y",
    "youtube_id": "HDt9jA3lI3Y",
    "title": "Learn Japanese – Minna no Nihongo 2 Chapter 35",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 35.",
    "chapter_id": 35,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=HDt9jA3lI3Y&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab36-c7-XKyUcYtg",
    "youtube_id": "c7-XKyUcYtg",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 36",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 36.",
    "chapter_id": 36,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=c7-XKyUcYtg&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab36-jmzRyqEBLiA",
    "youtube_id": "jmzRyqEBLiA",
    "title": "Learn Japanese – Minna no Nihongo Lesson 36",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 36.",
    "chapter_id": 36,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=jmzRyqEBLiA&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab37-oLeBrPHx2Vk",
    "youtube_id": "oLeBrPHx2Vk",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 37",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 37.",
    "chapter_id": 37,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=oLeBrPHx2Vk&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab37-HNK8SUwOGn4",
    "youtube_id": "HNK8SUwOGn4",
    "title": "Learn Japanese – Chapter 37 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 37.",
    "chapter_id": 37,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=HNK8SUwOGn4&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab38-fB_6QsjR4d8",
    "youtube_id": "fB_6QsjR4d8",
    "title": "Japanese Vocabulary – Minna no Nihongo Chapter 38",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 38.",
    "chapter_id": 38,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=fB_6QsjR4d8&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab38-Uel9-7eZyqg",
    "youtube_id": "Uel9-7eZyqg",
    "title": "Learn Japanese – Minna no Nihongo Lesson 38",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 38.",
    "chapter_id": 38,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=Uel9-7eZyqg&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab39-CSYysxs8sWg",
    "youtube_id": "CSYysxs8sWg",
    "title": "Learn Japanese – Minna no Nihongo 2 Chapter 39",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 39.",
    "chapter_id": 39,
    "category": "Tata Bahasa & Materi",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=CSYysxs8sWg&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab39-2G6ZwgTK8rg",
    "youtube_id": "2G6ZwgTK8rg",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 39",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 39.",
    "chapter_id": 39,
    "category": "Kosakata (Kotoba)",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=2G6ZwgTK8rg&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab40-2YmwWkvYWy0",
    "youtube_id": "2YmwWkvYWy0",
    "title": "Japanese Vocabulary – Chapter 40 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 40.",
    "chapter_id": 40,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=2YmwWkvYWy0&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab40-I1nX7BRcEL4",
    "youtube_id": "I1nX7BRcEL4",
    "title": "Learn Japanese – Lesson 40 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 40.",
    "chapter_id": 40,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=I1nX7BRcEL4&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab41-0MDUljR3XuM",
    "youtube_id": "0MDUljR3XuM",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 41",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 41.",
    "chapter_id": 41,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=0MDUljR3XuM&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab41-yZO5u-b4Nfw",
    "youtube_id": "yZO5u-b4Nfw",
    "title": "Learning Japanese – Chapter 41 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 41.",
    "chapter_id": 41,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=yZO5u-b4Nfw&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab42-chKN_JhMshc",
    "youtube_id": "chKN_JhMshc",
    "title": "Kosakata Bahasa Jepang – Bab 42 Minna no Nihongo",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 42.",
    "chapter_id": 42,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=chKN_JhMshc&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab42-MaG3n4A7cl0",
    "youtube_id": "MaG3n4A7cl0",
    "title": "Learn Japanese – Lesson 42 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 42.",
    "chapter_id": 42,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=MaG3n4A7cl0&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab43-jGnfWXj3LU8",
    "youtube_id": "jGnfWXj3LU8",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 43",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 43.",
    "chapter_id": 43,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=jGnfWXj3LU8&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab43-jA0mSfMcnoI",
    "youtube_id": "jA0mSfMcnoI",
    "title": "Learn Japanese – Minna no Nihongo 2 Chapter 43",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 43.",
    "chapter_id": 43,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=jA0mSfMcnoI&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab44-zjux2jmC_cU",
    "youtube_id": "zjux2jmC_cU",
    "title": "Japanese Vocabulary – Minna no Nihongo Chapter 44",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 44.",
    "chapter_id": 44,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=zjux2jmC_cU&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab44-cEEwQBqQFXs",
    "youtube_id": "cEEwQBqQFXs",
    "title": "Learn Japanese – Lesson 44 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 44.",
    "chapter_id": 44,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=cEEwQBqQFXs&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab45-ntT5TV-Z0tQ",
    "youtube_id": "ntT5TV-Z0tQ",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 45",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 45.",
    "chapter_id": 45,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=ntT5TV-Z0tQ&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab45-7dgOmL0suDg",
    "youtube_id": "7dgOmL0suDg",
    "title": "Learn Japanese – Minna no Nihongo 2 Chapter 45",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 45.",
    "chapter_id": 45,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=7dgOmL0suDg&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab46-7TqaMaGcqAY",
    "youtube_id": "7TqaMaGcqAY",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 46",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 46.",
    "chapter_id": 46,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=7TqaMaGcqAY&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab46-6_W1Cso8efA",
    "youtube_id": "6_W1Cso8efA",
    "title": "Learn Japanese – Chapter 46 Minna no Nihongo 2",
    "description": "Penjelasan tata bahasa dan pola kalimat utama untuk Bab 46.",
    "chapter_id": 46,
    "category": "Tata Bahasa & Materi",
    "display_order": 2,
    "source_url": "https://www.youtube.com/watch?v=6_W1Cso8efA&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  },
  {
    "video_id": "yt-bab47-k538_ZWqw6Q",
    "youtube_id": "k538_ZWqw6Q",
    "title": "Japanese Vocabulary – Minna no Nihongo Lesson 47",
    "description": "Pembahasan kosakata (Kotoba) untuk materi Bab 47.",
    "chapter_id": 47,
    "category": "Kosakata (Kotoba)",
    "display_order": 1,
    "source_url": "https://www.youtube.com/watch?v=k538_ZWqw6Q&list=PLhQ568NlkEK0q-JDHzwrXaCuQJznCuEz1"
  }
];

export function getVideosByChapter(bab: number): ChapterVideoItem[] {
  return CHAPTER_VIDEOS
    .filter((v) => v.chapter_id === bab)
    .sort((a, b) => a.display_order - b.display_order);
}

export function getUncategorizedVideos(): ChapterVideoItem[] {
  return CHAPTER_VIDEOS
    .filter((v) => v.chapter_id === null)
    .sort((a, b) => a.display_order - b.display_order);
}
