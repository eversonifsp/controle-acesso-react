import React, { useState, useRef } from 'react';

const Camera = () => {
  const [imageDataUrl, setImageDataUrl] = useState(null);
  const inputRef = useRef(null);

  const abrirCamera = () => {
    inputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        setImageDataUrl(dataUrl);

      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <button onClick={abrirCamera}>Abrir Câmera</button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <img src={imageDataUrl} alt="Captured" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default Camera;