import os

def rename_images(directory):
    if not os.path.exists(directory):
        print("Error: Directory not found.")
        return

    count = 1
    for filename in os.listdir(directory):
        if filename.endswith(".jpg"):
            new_filename = f"class_image_{count}.jpg"
            src = os.path.join(directory, filename)
            dst = os.path.join(directory, new_filename)

            os.rename(src, dst)
            count += 1
            print(f"Renamed {src} to {dst}")
        else:
            continue

if __name__ == "__main__":
    directory = "class_data_dir"
    rename_images(directory)