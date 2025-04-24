import React, { useState } from "react";

const ImageUploader: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setImageSrc(null);
      setError("未選擇圖片");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setImageSrc(null);
      setError("檔案類型錯誤");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result as string);
      setError("");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="uploader-card">
      <h2>📸 圖片上傳預覽</h2>
      <input type="file" onChange={handleFileChange} />
      <div className="preview-area">
        {error && <p className="error-text">{error}</p>}
        {!error && imageSrc && (
          <img src={imageSrc} alt="預覽圖片" className="preview-image" />
        )}
        {!error && !imageSrc && <p className="placeholder-text">未選擇圖片</p>}
      </div>
    </div>
  );
};

export default ImageUploader;
