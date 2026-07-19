from PIL import Image

img_path = r"c:\Users\Nitin\OneDrive\Desktop\New folder\vidmark-media.copy\vidmarkmedia\src\assets\vidmarkmedia_logo.png"
img = Image.open(img_path)

# Top line bounding box is x in [180, 1490], y in [72, 298]
top_line = img.crop((180, 72, 1490, 298))
top_line.save(r"C:\Users\Nitin\.gemini\antigravity-ide\brain\ef3b98a0-3988-4c62-9d53-bad4da129d5f\logo_top_line.png")

# Bottom line bounding box is x in [72, 1488], y in [323, 685]
bottom_line = img.crop((72, 323, 1488, 685))
bottom_line.save(r"C:\Users\Nitin\.gemini\antigravity-ide\brain\ef3b98a0-3988-4c62-9d53-bad4da129d5f\logo_bottom_line.png")

print("Crops saved successfully!")
