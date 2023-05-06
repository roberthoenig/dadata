import React, { useState } from "react";

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragEnter = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    setFile(file);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{ border: `2px dashed ${dragging ? "blue" : "gray"}` }}
    >
      {!file && <p>Drag and drop a PNG file here</p>}
      {file && (
        <div>
          <img src={URL.createObjectURL(file)} alt="Uploaded file" />
          <p>{file.name}</p>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;