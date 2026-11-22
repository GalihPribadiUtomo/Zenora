import re
with open('src/data/kanjiData.ts', encoding='utf-8') as f:
    ts = f.read()
chars = re.findall(r'"kanji":\s*"(.)"', ts)
unique = list(dict.fromkeys(chars))
print(f'Total unique kanji in kanjiData.ts: {len(unique)}')
