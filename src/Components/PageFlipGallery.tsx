import React, { useRef } from "react";
import FlipPage from "react-flip-page";

interface FlipPageRef {
  gotoNextPage: () => void;
  gotoPreviousPage: () => void;
}

const images = Array.from(
  { length: 12 },
  (_, i) => `https://picsum.photos/400/600?random=${i + 1}`
);

const PageFlipGallery: React.FC = () => {
  const flipBookRef = useRef<FlipPageRef>(null);

  const goNext = () => {
    flipBookRef.current?.gotoNextPage();
  };

  const goPrevious = () => {
    flipBookRef.current?.gotoPreviousPage();
  };

  return (
    <div className="flipbook-card">
      <h2>📖 翻書圖片輪播</h2>
      <FlipPage
        className="flipbook"
        ref={flipBookRef}
        orientation="horizontal"
        showSwipeHint={true}
        showPageCorners={true}
        uncutPages={false}
      >
        {images.map((image, index) => (
          <div className="page" key={index}>
            <img src={image} alt={`Page ${index + 1}`} />
          </div>
        ))}
      </FlipPage>

      <div className="controls">
        <button onClick={goPrevious}>上一頁</button>
        <button onClick={goNext}>下一頁</button>
      </div>
    </div>
  );
};

export default PageFlipGallery;
