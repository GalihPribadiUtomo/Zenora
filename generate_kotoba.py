import json

# Chapters metadata
from make_kotoba_list import generate_all_kotoba, generate_chapters_summary

kotoba_list = generate_all_kotoba()
chapters_list = generate_chapters_summary(kotoba_list)

with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\src\data\kotobaData.ts", "w", encoding="utf-8") as f:
    f.write("""import type { KotobaItem } from '../types';

export const KOTOBA_DATA: KotobaItem[] = """ + json.dumps(kotoba_list, ensure_ascii=False, indent=2) + """;
""")

with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\src\data\chaptersData.ts", "w", encoding="utf-8") as f:
    f.write("""import type { ChapterInfo } from '../types';

export const CHAPTERS_DATA: ChapterInfo[] = """ + json.dumps(chapters_list, ensure_ascii=False, indent=2) + """;
""")

print(f"Generated {len(kotoba_list)} kotoba items and {len(chapters_list)} chapters.")
