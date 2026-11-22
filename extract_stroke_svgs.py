# extract_stroke_svgs.py
# Extracts KanjiVG SVG stroke path data for all our kanji into a single JSON
import os, json, re

kanjivg_dir = 'node_modules/@madcat/kanjivg/dist/main'

# All the kanji we need (from build_complete_kanji_dataset output + our n4 additions)
# We'll just scan all unicode codepoints for characters in our kanjiData.ts
import sys

# Read our generated kanjiData.ts to get all kanji characters
with open('src/data/kanjiData.ts', encoding='utf-8') as f:
    ts_content = f.read()

# Extract kanji characters using regex - look for "kanji": "X"
kanji_chars = re.findall(r'"kanji":\s*"(.)"', ts_content)
kanji_chars = list(dict.fromkeys(kanji_chars))  # unique, preserve order
print(f"Found {len(kanji_chars)} unique kanji in kanjiData.ts")

stroke_data = {}
missing = []

for char in kanji_chars:
    codepoint = format(ord(char), '05x')
    svg_file = os.path.join(kanjivg_dir, f'{codepoint}.svg')
    json_file = os.path.join(kanjivg_dir, f'{codepoint}.json')
    
    if not os.path.exists(svg_file):
        missing.append((char, codepoint))
        continue
    
    # Read SVG and extract paths
    with open(svg_file, encoding='utf-8') as f:
        svg_content = f.read()
    
    # Extract all path elements (stroke paths are in order)
    paths = re.findall(r'<path[^>]+id="kvg:[0-9a-f]+-s\d+"[^>]*d="([^"]+)"', svg_content)
    if not paths:
        # Try alternate attribute order
        paths = re.findall(r'd="([^"]+)"', svg_content)
    
    # Read the start positions from JSON
    start_positions = []
    if os.path.exists(json_file):
        with open(json_file, encoding='utf-8') as f:
            json_data = json.load(f)
        for item in json_data:
            start_positions.append({
                'x': item['start']['x'],
                'y': item['start']['y']
            })
    
    stroke_data[char] = {
        'paths': paths,
        'starts': start_positions,
        'viewBox': '0 0 109 109'
    }

print(f"Extracted stroke data for {len(stroke_data)} kanji")
print(f"Missing: {len(missing)} kanji - {[c for c, cp in missing]}")

# Write as a TypeScript module
output = "// Auto-generated KanjiVG stroke order data\n"
output += "// Source: @madcat/kanjivg (KanjiVG data)\n\n"
output += "export interface KanjiStrokeData {\n"
output += "  paths: string[];\n"
output += "  starts: { x: number; y: number }[];\n"
output += "  viewBox: string;\n"
output += "}\n\n"
output += "export const KANJI_STROKE_DATA: Record<string, KanjiStrokeData> = "
output += json.dumps(stroke_data, ensure_ascii=False, indent=2)
output += ";\n"

with open('src/data/kanjiStrokeData.ts', 'w', encoding='utf-8') as f:
    f.write(output)

print("Written to src/data/kanjiStrokeData.ts!")
print(f"File size: {os.path.getsize('src/data/kanjiStrokeData.ts') / 1024:.1f} KB")
