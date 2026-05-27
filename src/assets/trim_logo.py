import fitz
import os

pdf_path = r"c:\Users\lucky\projects\Vidmark\src\assets\vidmarkmedia logo .pdf"
png_path = r"c:\Users\lucky\projects\Vidmark\src\assets\vidmarkmedia_logo.png"

print(f"Opening {pdf_path} for precise cropping...")
doc = fitz.open(pdf_path)
page = doc[0]

# Render the page to a transparent pixmap at 4x zoom for extreme crispness
zoom = 4.0
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=True)

width = pix.width
height = pix.height
samples = pix.samples  # bytearray of size width * height * 4 (RGBA)

# Find coordinates of non-empty (non-white, non-transparent) pixels
x_min, y_min = width, height
x_max, y_max = -1, -1

print("Analyzing pixels for bounding box...")
for y in range(height):
    offset = y * width * 4
    for x in range(width):
        idx = offset + x * 4
        r = samples[idx]
        g = samples[idx+1]
        b = samples[idx+2]
        a = samples[idx+3]
        
        # Check if pixel is NOT transparent and NOT near-white
        # (a < 15 is transparent; r, g, b > 240 is near-white background)
        is_empty = (a < 15) or (r > 240 and g > 240 and b > 240)
        if not is_empty:
            if x < x_min: x_min = x
            if x > x_max: x_max = x
            if y < y_min: y_min = y
            if y > y_max: y_max = y

print(f"Detected bounding box: x_min={x_min}, y_min={y_min}, x_max={x_max}, y_max={y_max}")

if x_max >= x_min and y_max >= y_min:
    # Add a safety margin (padding) of 24 pixels around the content
    padding = 24
    x_min = max(0, x_min - padding)
    y_min = max(0, y_min - padding)
    x_max = min(width - 1, x_max + padding)
    y_max = min(height - 1, y_max + padding)
    
    crop_width = x_max - x_min + 1
    crop_height = y_max - y_min + 1
    
    # Make it a perfect square
    max_dim = max(crop_width, crop_height)
    pad_x = (max_dim - crop_width) // 2
    pad_y = (max_dim - crop_height) // 2
    
    # Create a mutable bytearray for the new square image
    new_samples = bytearray(max_dim * max_dim * 4)  # initialized to 0 (transparent)
    
    # Copy pixels row-by-row
    for dy in range(crop_height):
        sy = y_min + dy
        source_offset = (sy * width + x_min) * 4
        dest_offset = ((dy + pad_y) * max_dim + pad_x) * 4
        
        new_samples[dest_offset : dest_offset + crop_width * 4] = samples[source_offset : source_offset + crop_width * 4]
        
    # Construct the new square pixmap from the cropped bytes
    new_pix = fitz.Pixmap(pix.colorspace, max_dim, max_dim, bytes(new_samples))
    new_pix.save(png_path)
    print(f"Cropped square logo saved successfully! Size: {max_dim}x{max_dim}")
else:
    # Fallback if no content detected
    pix.save(png_path)
    print("Could not detect bounding box. Saved original size.")
