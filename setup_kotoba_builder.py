# Script to generate rich Kotoba data for Bab 1-50
import json

# Pre-defined high quality Minna no Nihongo vocabulary collection covering Bab 1-50
# We will include all words from the OCR and comprehensive curated Minna no Nihongo Bab 1-50

chapters_meta = [
    {"bab": 1, "title": "Perkenalan & Identitas Diri", "book": "I", "count": 38},
    {"bab": 2, "title": "Benda-benda di Sekitar", "book": "I", "count": 45},
    {"bab": 3, "title": "Tempat & Arah / Berbelanja", "book": "I", "count": 67},
    {"bab": 4, "title": "Waktu, Hari & Kegiatan Sehari-hari", "book": "I", "count": 61},
    {"bab": 5, "title": "Perjalanan & Transportasi", "book": "I", "count": 75},
    {"bab": 6, "title": "Makanan, Minuman & Aksi Sehari-hari", "book": "I", "count": 90},
    {"bab": 7, "title": "Pemberian, Alat & Keluarga", "book": "I", "count": 75},
    {"bab": 8, "title": "Kata Sifat, Cuaca & Keadaan", "book": "I", "count": 67},
    {"bab": 9, "title": "Hobi, Kemampuan & Kesukaan", "book": "I", "count": 80},
    {"bab": 10, "title": "Keberadaan Benda & Posisi", "book": "I", "count": 55},
    {"bab": 11, "title": "Hitungan, Waktu & Durasi", "book": "I", "count": 81},
    {"bab": 12, "title": "Perbandingan & Pengalaman", "book": "I", "count": 40},
    {"bab": 13, "title": "Keinginan & Tujuan Perjalanan", "book": "I", "count": 51},
    {"bab": 14, "title": "Permintaan Tolong & Instruksi", "book": "I", "count": 71},
    {"bab": 15, "title": "Izin, Larangan & Profesi", "book": "I", "count": 46},
    {"bab": 16, "title": "Urutan Aksi & Ciri Fisik", "book": "I", "count": 57},
    {"bab": 17, "title": "Kesehatan & Kewajiban (Bentuk Nai)", "book": "I", "count": 55},
    {"bab": 18, "title": "Kemampuan & Hobi (Bentuk Kamus)", "book": "I", "count": 46},
    {"bab": 19, "title": "Pengalaman (Bentuk Ta) & Budaya", "book": "I", "count": 39},
    {"bab": 20, "title": "Bentuk Kasual (Futsuukei)", "book": "I", "count": 22},
    {"bab": 21, "title": "Pendapat & Berita (Bentuk Biasa)", "book": "I", "count": 60},
    {"bab": 22, "title": "Klausa Relatif & Pakaian", "book": "I", "count": 44},
    {"bab": 23, "title": "Petunjuk Jalan & Kondisi (Toki/To)", "book": "I", "count": 38},
    {"bab": 24, "title": "Kuremasu & Tradisi Hadiah", "book": "I", "count": 28},
    {"bab": 25, "title": "Kondisional (Tara/Temo) & Harapan", "book": "I", "count": 26},
    {"bab": 26, "title": "Penjelasan (~ndesu) & Masalah Lingkungan", "book": "II", "count": 64},
    {"bab": 27, "title": "Bentuk Potensial (Dekiru/Mieru)", "book": "II", "count": 75},
    {"bab": 28, "title": "Dua Kegiatan Bersamaan (~nagara)", "book": "II", "count": 48},
    {"bab": 29, "title": "Keadaan Benda Terjadi Sendiri (~te shimau)", "book": "II", "count": 59},
    {"bab": 30, "title": "Persiapan & Tindakan Sengaja (~te aru)", "book": "II", "count": 61},
    {"bab": 31, "title": "Bentuk Maksud (Volitional / ~you)", "book": "II", "count": 78},
    {"bab": 32, "title": "Saran (~ta hou ga ii) & Prediksi Cuaca", "book": "II", "count": 71},
    {"bab": 33, "title": "Bentuk Perintah & Larangan", "book": "II", "count": 69},
    {"bab": 34, "title": "Instruksi Memasak & Merakit", "book": "II", "count": 89},
    {"bab": 35, "title": "Kondisional Bentuk Pengandaian (~ba)", "book": "II", "count": 45},
    {"bab": 36, "title": "Tujuan (~youni suru / naru)", "book": "II", "count": 73},
    {"bab": 37, "title": "Bentuk Pasif (Ukemi)", "book": "II", "count": 64},
    {"bab": 38, "title": "Nominalisasi Kata Kerja (~no wa / koto)", "book": "II", "count": 50},
    {"bab": 39, "title": "Sebab Akibat (~te / ~node)", "book": "II", "count": 53},
    {"bab": 40, "title": "Pertanyaan Tersirat & Ukuran", "book": "II", "count": 99},
    {"bab": 41, "title": "Bentuk Hormat Memberi & Menerima (Yaru/Kudasaru)", "book": "II", "count": 51},
    {"bab": 42, "title": "Tujuan & Alat Bantu (~tame ni / ~ni tsukau)", "book": "II", "count": 77},
    {"bab": 43, "title": "Kelihatannya (~sou desu)", "book": "II", "count": 45},
    {"bab": 44, "title": "Terlalu (~sugiru) & Salon/Gaya", "book": "II", "count": 57},
    {"bab": 45, "title": "Keadaan Gempa & Tanggap Darurat (~baai)", "book": "II", "count": 57},
    {"bab": 46, "title": "Tahapan Aksi (Tokoro da / Bakari da)", "book": "II", "count": 87},
    {"bab": 47, "title": "Katanya (~sou desu) & Onomatope", "book": "II", "count": 54},
    {"bab": 48, "title": "Bentuk Kausatif (Menyuruh / Shieki)", "book": "II", "count": 40},
    {"bab": 49, "title": "Keigo (Sonkeigo - Bentuk Hormat)", "book": "II", "count": 43},
    {"bab": 50, "title": "Keigo (Kenjougo - Bentuk Merendah Diri)", "book": "II", "count": 44}
]

# We will read transcript or pre-generate rich items
# Let's write the generator
with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\generate_kotoba.py", "w", encoding="utf-8") as f:
    f.write('''import json

# Chapters metadata
from make_kotoba_list import generate_all_kotoba, generate_chapters_summary

kotoba_list = generate_all_kotoba()
chapters_list = generate_chapters_summary(kotoba_list)

with open(r"C:\\Users\\GALIH\\.gemini\\antigravity\\scratch\\kanjihub\\src\\data\\kotobaData.ts", "w", encoding="utf-8") as f:
    f.write("""import type { KotobaItem } from '../types';

export const KOTOBA_DATA: KotobaItem[] = """ + json.dumps(kotoba_list, ensure_ascii=False, indent=2) + """;
""")

with open(r"C:\\Users\\GALIH\\.gemini\\antigravity\\scratch\\kanjihub\\src\\data\\chaptersData.ts", "w", encoding="utf-8") as f:
    f.write("""import type { ChapterInfo } from '../types';

export const CHAPTERS_DATA: ChapterInfo[] = """ + json.dumps(chapters_list, ensure_ascii=False, indent=2) + """;
""")

print(f"Generated {len(kotoba_list)} kotoba items and {len(chapters_list)} chapters.")
''')
print("Generator ready")
