from PIL import Image
from collections import Counter

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)
w, h = img.size

# Let's find "core" pixels: pixels that are fully opaque (alpha = 255) 
# and whose 4 neighbors are also fully opaque.
core_colors_top = []
core_colors_bottom = []

for y in range(1, h - 1):
    for x in range(1, w - 1):
        # Check current pixel and neighbors
        p = img.getpixel((x, y))
        n1 = img.getpixel((x - 1, y))
        n2 = img.getpixel((x + 1, y))
        n3 = img.getpixel((x, y - 1))
        n4 = img.getpixel((x, y + 1))
        
        # If all are fully opaque and not black/near-black
        if all(pix[3] == 255 for pix in [p, n1, n2, n3, n4]):
            r, g, b, a = p
            if not (r < 15 and g < 15 and b < 15):
                if y <= 300:
                    core_colors_top.append((r, g, b))
                else:
                    core_colors_bottom.append((r, g, b))

print(f"Top line core pixels count: {len(core_colors_top)}")
print("Top line core unique colors and counts:")
c_top = Counter(core_colors_top)
for color, count in c_top.most_common(10):
    hex_color = f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}"
    print(f"  {hex_color} : {count}")

print(f"\nBottom line core pixels count: {len(core_colors_bottom)}")
print("Bottom line core unique colors and counts:")
c_bottom = Counter(core_colors_bottom)
for color, count in c_bottom.most_common(10):
    hex_color = f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}"
    print(f"  {hex_color} : {count}")
