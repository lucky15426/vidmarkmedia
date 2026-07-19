from PIL import Image

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)
w, h = img.size

# Extract the top line (y=72 to 298)
top_line_pixels = {}
for y in range(72, 299):
    for x in range(w):
        p = img.getpixel((x, y))
        r, g, b, a = p
        if a >= 20 and not (r < 15 and g < 15 and b < 15):
            top_line_pixels[(x, y)] = (r, g, b)

# Segment horizontally by x-projection
x_projection = [0] * w
for (x, y) in top_line_pixels:
    x_projection[x] += 1

segments = []
in_seg = False
seg_start = 0
for x, count in enumerate(x_projection):
    if count > 2 and not in_seg:
        in_seg = True
        seg_start = x
    elif count <= 2 and in_seg:
        in_seg = False
        segments.append((seg_start, x - 1))
if in_seg:
    segments.append((seg_start, w - 1))

print(f"Detected {len(segments)} segments in the top line:")
for i, (x1, x2) in enumerate(segments):
    # Find dominant color in this segment
    from collections import Counter
    seg_colors = [top_line_pixels[(x, y)] for (x, y) in top_line_pixels if x1 <= x <= x2]
    c = Counter(seg_colors)
    top_color, count = c.most_common(1)[0]
    hex_color = f"#{top_color[0]:02x}{top_color[1]:02x}{top_color[2]:02x}"
    
    # Average color
    avg_r = int(sum(x[0] for x in seg_colors) / len(seg_colors))
    avg_g = int(sum(x[1] for x in seg_colors) / len(seg_colors))
    avg_b = int(sum(x[2] for x in seg_colors) / len(seg_colors))
    avg_hex = f"#{avg_r:02x}{avg_g:02x}{avg_b:02x}"
    
    print(f"Segment {i} (x={x1} to {x2}): Dominant={hex_color}, Avg={avg_hex}, Total pixels={len(seg_colors)}")
