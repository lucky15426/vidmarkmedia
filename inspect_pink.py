from PIL import Image
from collections import Counter

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)
pixels = list(img.getdata())

pink_pixels = []
for p in pixels:
    if len(p) == 4:
        r, g, b, a = p
        if a < 20: continue
    else:
        r, g, b = p
    
    # Pink/purple check: R > 150, G < 120, B > 100
    if r > 150 and g < 120 and b > 100:
        pink_pixels.append((r, g, b))

print(f"Found {len(pink_pixels)} pink/purple pixels.")
if pink_pixels:
    print("Most common pink/purple colors:")
    c = Counter(pink_pixels)
    for color, count in c.most_common(10):
        hex_color = f"#{color[0]:02x}{color[1]:02x}{color[2]:02x}"
        print(f"Color: {color} | Hex: {hex_color} | Count: {count}")
