import os

def generate_image_path_list(directory):
    # 获得指定目录中所有文件和文件夹的列表
    files = os.listdir(directory)
    prefix = "./images/display"  
    image_paths = [os.path.join(prefix, file) for file in files if file.endswith(('.png', '.jpeg', '.jpg'))]
    return image_paths

image_directory = './images/display'  
image_paths = generate_image_path_list(image_directory)
print(image_paths)
