import ImageUploader from "./Components/ImageUploader";
import DataFilter from "./Components/DataFilter";
import PageFlipGallery from "./Components/PageFlipGallery";

function App() {
  return (
    <div className="app-container">
      <ImageUploader />
      <DataFilter />
      <PageFlipGallery />
    </div>
  );
}

export default App;
