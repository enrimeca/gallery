import { useState } from "react";
import { images } from "../../constants/images";
import "./index.css";

const Gallery = () => {
  const [ currentImage, setCurrentImage ] = useState(0);


  const handleClick = (index: number) => {
    setCurrentImage(index);
  }

  return (
    <>
      <div className="principal">
        <img src={images[currentImage].original} alt="" />
      </div>
      <div className="thumbnails">
        {
          images.map((image, idx) => {
            return (
              <img 
                src={image.thumbnail} 
                alt="" 
                onClick={() => handleClick(idx)}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Gallery;