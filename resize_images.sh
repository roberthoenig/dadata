#!/bin/bash

# Check if the input folder is provided
if [ $# -eq 0 ]; then
    echo "Please provide the input folder containing the images as an argument."
    exit 1
fi

# Set input folder and output folder
INPUT_FOLDER="$1"
OUTPUT_FOLDER="${INPUT_FOLDER}_resized"

# Create the output folder if it does not exist
mkdir -p "$OUTPUT_FOLDER"

# Loop through all image files in the input folder and resize them
for image in "$INPUT_FOLDER"/*.{jpg,png,jpeg,JPG,PNG,JPEG}; do
    # Check if the file exists
    if [ -f "$image" ]; then
        # Get the base file name
        FILENAME=$(basename "$image")
        # Resize the image and save it to the output folder
        convert "$image" -resize 768x768/> -quality 90 -gravity center -extent 768x768 "${OUTPUT_FOLDER}/${FILENAME}"
    fi
done

echo "Resizing complete. Check the resized images in the '${OUTPUT_FOLDER}' folder."