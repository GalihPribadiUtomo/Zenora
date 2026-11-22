with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\setup_kotoba_builder.py", "r", encoding="utf-8") as f:
    code = f.read()

code = code.replace("import { KotobaItem }", "import type { KotobaItem }")
code = code.replace("import { ChapterInfo }", "import type { ChapterInfo }")

with open(r"C:\Users\GALIH\.gemini\antigravity\scratch\kanjihub\setup_kotoba_builder.py", "w", encoding="utf-8") as f:
    f.write(code)

print("setup_kotoba_builder updated")
