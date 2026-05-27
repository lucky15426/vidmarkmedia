import fitz
import os

pdf_path = r"c:\Users\lucky\projects\Vidmark\src\assets\vidmarkmedia logo .pdf"
png_path = r"c:\Users\lucky\projects\Vidmark\src\assets\vidmarkmedia_logo.png"

print(f"Opening {pdf_path}...")
doc = fitz.open(pdf_path)
page = doc[0]

print("Original page dimensions:", page.rect)

# Render at 4x zoom for high definition sharpness
zoom = 4.0
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=True)

# Save the high-resolution PNG
pix.save(png_path)
print(f"Successfully converted PDF to PNG and saved at: {png_path}")
