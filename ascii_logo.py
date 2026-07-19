from PIL import Image

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)

# Let's resize it to a smaller size, say 120 width, keeping aspect ratio
target_w = 120
aspect = img.size[1] / img.size[0]
target_h = int(target_w * aspect)
small_img = img.resize((target_w, target_h), Image.Resampling.BILINEAR)

grid = []
for y in range(target_h):
    row = []
    for x in range(target_w):
        p = small_img.getpixel((x, y))
        r, g, b, a = p
        
        # Transparent or near-black
        if a < 30 or (r < 25 and g < 25 and b < 25):
            row.append(" ")
            continue
            
        # Is it closer to teal or yellow?
        # Yellow brand color is around (255, 187, 2)
        # Teal brand color is around (24, 172, 182)
        dist_yellow = (r - 255)**2 + (g - 187)**2 + (b - 2)**2
        dist_teal = (r - 24)**2 + (g - 172)**2 + (b - 182)**2
        
        if dist_yellow < dist_teal:
            row.append("Y") # Yellow/Gold
        else:
            row.append("T") # Teal/Cyan
            
    grid.append("".join(row))

for row in grid:
    if row.strip(): # print only rows that have content
        print(row)
