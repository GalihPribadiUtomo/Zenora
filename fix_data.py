import re

with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\generate_kanji.py", "r", encoding="utf-8") as f:
    code = f.read()

code = code.replace('"strokes":', '"strokeCount":')
code = code.replace('"on":', '"onyomi":')
code = code.replace('"kun":', '"kunyomi":')
code = code.replace('"cat":', '"category":')
code = code.replace("import { KanjiItem }", "import type { KanjiItem }")

with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\generate_kanji.py", "w", encoding="utf-8") as f:
    f.write(code)

print("generate_kanji.py updated")
