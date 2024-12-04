import os

def rename_images(folder_path):
    try:
        # Get all files in the folder
        files = os.listdir(folder_path)
        # Filter files to include only images (optional)
        image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')
        images = [f for f in files if f.lower().endswith(image_extensions)]

        # Sort the images to rename them in order (optional)
        images.sort()

        # Rename images sequentially
        for index, file in enumerate(images, start=1):
            file_path = os.path.join(folder_path, file)
            new_name = f"image{index}.jpg"  # Change extension as needed
            new_file_path = os.path.join(folder_path, new_name)
            os.rename(file_path, new_file_path)
            print(f"Renamed: {file} -> {new_name}")
        
        print("Renaming completed.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Path to the images folder
images_folder = "images" 
rename_images(images_folder)
