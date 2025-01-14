import { useState } from "react";
import { images } from "../../constants/images";
import "./index.css";

const Gallery = () => {
  const [ currentImage, setCurrentImage ] = useState(0);

  const handleClick = (index: number) => {
    setCurrentImage(index);
  }

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container">
      <div className="principal">
        <button className="arrow" onClick={handlePrev}>&lt;</button>
        <img src={images[currentImage].original} alt="Main" />
        <button className="arrow" onClick={handleNext}>&gt;</button>
      </div>
      <div className="thumbnails">
        {
          images.map((image, idx) => {
            return (
              <img 
                key={idx}
                src={image.thumbnail} 
                alt={`Thumbnail ${idx+1}`} 
                onClick={() => handleClick(idx)}
                className={`thumbnail ${currentImage === idx ? "selected" : ""}`}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Gallery;