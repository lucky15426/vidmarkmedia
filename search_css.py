with open(r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\index.css", "r", encoding="utf-8") as f:
    lines = f.readlines()

targets = ["nav-logo", "footer-brand", "brand-name"]
for i, line in enumerate(lines):
    for t in targets:
        if t in line:
            print(f"Line {i+1}: {line.strip()}")
            # print surrounding lines
            start = max(0, i - 2)
            end = min(len(lines), i + 10)
            for j in range(start, end):
                print(f"  {j+1}: {lines[j].rstrip()}")
            print("-" * 40)
