import os
from PIL import Image
import json

def get_image_sizes(folder_path):
    images_data = []
    base_path = os.path.abspath(folder_path)
    
    for filename in os.listdir(folder_path):
        if filename.endswith((".png", ".jpg", ".jpeg")):
            img_path = os.path.join(folder_path, filename)
            with Image.open(img_path) as img:
                width, height = img.size
                rel_path = './' + os.path.relpath(img_path, base_path).replace('\\', '/')
                images_data.append({
                    "src": rel_path,
                    "width": width,
                    "height": height
                })
    return images_data

def save_to_json(data, output_file):
    with open(output_file, 'w') as f:
        json.dump(data, f, indent=4)

folder_path = 'D:/graduate/INST630/VirtualSketchbook/public/images/display' 
images_data = get_image_sizes(folder_path)
save_to_json(images_data, 'imageData.json')