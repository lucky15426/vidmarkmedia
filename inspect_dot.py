from PIL import Image

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)

active_pixels = []
for y in range(72, 299):
    for x in range(1320, 1495):
        p = img.getpixel((x, y))
        r, g, b, a = p
        if a >= 20 and not (r < 15 and g < 15 and b < 15):
            active_pixels.append((x, y, r, g, b))
            
# Print the connected components in this rightmost area
x_proj = [0] * (1495 - 1320)
for (x, y, r, g, b) in active_pixels:
    x_proj[x - 1320] += 1

in_seg = False
seg_start = 0
for idx, count in enumerate(x_proj):
    x_val = 1320 + idx
    if count > 1 and not in_seg:
        in_seg = True
        seg_start = x_val
    elif count <= 1 and in_seg:
        in_seg = False
        print(f"Sub-segment from x={seg_start} to {x_val-1}")
if in_seg:
    print(f"Sub-segment from x={seg_start} to 1494")
