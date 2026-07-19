from PIL import Image

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)
w, h = img.size

# Find bounds of non-transparent pixels
min_x, max_x = w, 0
min_y, max_y = h, 0

for y in range(h):
    for x in range(w):
        p = img.getpixel((x, y))
        r, g, b, a = p
        if a >= 20 and not (r < 15 and g < 15 and b < 15):
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y

print(f"Content bounding box: x in [{min_x}, {max_x}], y in [{min_y}, {max_y}]")

# Let's split the x range into 10 bands and print the average/dominant color in each band
band_width = (max_x - min_x) / 10
for i in range(10):
    start_x = int(min_x + i * band_width)
    end_x = int(min_x + (i + 1) * band_width)
    
    # Collect colors in this band
    band_colors = []
    for x in range(start_x, end_x):
        for y in range(min_y, max_y + 1):
            p = img.getpixel((x, y))
            r, g, b, a = p
            if a >= 20 and not (r < 15 and g < 15 and b < 15):
                band_colors.append((r, g, b))
                
    if not band_colors:
        print(f"Band {i} ({start_x} to {end_x}): No content")
        continue
        
    # Find most common color in this band
    from collections import Counter
    c = Counter(band_colors)
    top_color, count = c.most_common(1)[0]
    hex_color = f"#{top_color[0]:02x}{top_color[1]:02x}{top_color[2]:02x}"
    
    # Find unique colors count in this band
    unique_count = len(c)
    
    # Average color
    avg_r = int(sum(x[0] for x in band_colors) / len(band_colors))
    avg_g = int(sum(x[1] for x in band_colors) / len(band_colors))
    avg_b = int(sum(x[2] for x in band_colors) / len(band_colors))
    avg_hex = f"#{avg_r:02x}{avg_g:02x}{avg_b:02x}"
    
    print(f"Band {i} ({start_x}-{end_x}): Top {hex_color} ({count} px), Avg {avg_hex}, Unique colors: {unique_count}")
