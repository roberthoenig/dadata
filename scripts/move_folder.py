import os
import shutil

# Define the directory where your files are located
source_dir = "Acne_progression/SkinPatches"

# Define the base destination directory
base_dest_dir = "IndividualStageFolders"

# Define the destination directories for the different stages
dest_early = os.path.join(base_dest_dir, "Early")
dest_very_early = os.path.join(base_dest_dir, "VeryEarly")
dest_mid = os.path.join(base_dest_dir, "Mid")
dest_late = os.path.join(base_dest_dir, "Late")
dest_very_late = os.path.join(base_dest_dir, "VeryLate")

# Make sure the destination directories exist, and create them if not
os.makedirs(dest_early, exist_ok=True)
os.makedirs(dest_very_early, exist_ok=True)
os.makedirs(dest_mid, exist_ok=True)
os.makedirs(dest_late, exist_ok=True)
os.makedirs(dest_very_late, exist_ok=True)

# Iterate through the files in the source directory
for filename in os.listdir(source_dir):
    if filename.endswith("Early.png") and not filename.endswith("VeryEarly.png"):
        shutil.copy(os.path.join(source_dir, filename), os.path.join(dest_early, filename))
    elif filename.endswith("VeryEarly.png"):
        shutil.copy(os.path.join(source_dir, filename), os.path.join(dest_very_early, filename))
    elif filename.endswith("Mid.png"):
        shutil.copy(os.path.join(source_dir, filename), os.path.join(dest_mid, filename))
    elif filename.endswith("Late.png") and not filename.endswith("VeryLate.png"):
        shutil.copy(os.path.join(source_dir, filename), os.path.join(dest_late, filename))
    elif filename.endswith("VeryLate.png"):
        shutil.copy(os.path.join(source_dir, filename), os.path.join(dest_very_late, filename))