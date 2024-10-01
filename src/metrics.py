import json
import math

# source: https://rsms.me/inter/#faq
# UPM: 2048
# Variable axis opsz [14–32]
# Variable axis wght [100–900]
# Constant axis ital [0, 9.4°]
# Style classification: Sans-serif, Grotesk
# x-height, opsz=14: 1118 UPM
# x-height, opsz=32: 1056 UPM
# Cap height: 1490 UPM
# Ascender: 1984 UPM
# Descender: -494 UPM
# Vendor ID: RSMS

# Font metrics
upm = 2048
x_height_upm = 1118
cap_height_upm = 1490
default_font_size = 16  # px
desired_grid = 4  # px

# Calculate x-height in pixels for the default font size
x_height_px = (default_font_size * x_height_upm) / upm
cap_height_px = (default_font_size * cap_height_upm) / upm

# Original scale factors
scale_factors = {
    'h1': 2.986,
    'h2': 2.488,
    'h3': 2.074,
    'h4': 1.728,
    'h5': 1.44,
    'h6': 1.2,
    'base': 1,
    'sm': 0.833,
    'xs': 0.694
}

# Function to round to nearest grid
def round_to_grid(size):
    return round(size / desired_grid) * desired_grid

# Calculate and round each font size
def calculate_font_sizes(align_by=x_height_upm):
    font_sizes = {}
    for key, factor in scale_factors.items():
        size_px = default_font_size * factor
        size_value = (size_px * align_by) / upm
        rounded_value = round_to_grid(size_value)
        rounded_size_px = (rounded_value * upm) / align_by
        font_sizes[key] = round(rounded_size_px / default_font_size, 3)
    return font_sizes

# Create theme dictionary
font_sizes_x_height = calculate_font_sizes(align_by=x_height_upm)
font_sizes_cap_height = calculate_font_sizes(align_by=cap_height_upm)
theme = {
    'fontSize': {key: f'{value}rem' for key, value in font_sizes_cap_height.items()}
}

# Print the result using json module
print(json.dumps({'theme': theme}, indent=2))