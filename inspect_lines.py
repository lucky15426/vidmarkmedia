from PIL import Image

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)
w, h = img.size

row_counts = []
for y in range(h):
    cnt = 0
    for x in range(w):
        p = img.getpixel((x, y))
        r, g, b, a = p
        if a >= 20 and not (r < 15 and g < 15 and b < 15):
            cnt += 1
    row_counts.append(cnt)

# Print non-zero row counts to identify text lines
in_line = False
line_start = 0
for y, cnt in enumerate(row_counts):
    if cnt > 10 and not in_line:
        in_line = True
        line_start = y
    elif cnt <= 10 and in_line:
        in_line = False
        print(f"Line from y={line_start} to y={y-1}")

if in_line:
    print(f"Line from y={line_start} to y={h-1}")
