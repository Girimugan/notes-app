
import React from 'react';
import './ImageSetting.css';

import img1 from './Route project000/img file/picture1';
import img2 from './Route project000/img file/picture2';
import img3 from './Route project000/img file/picture3';

const ImageSetting = () => {
  return (
    <div className="image-container">
      <img src={img1} alt="Image 1" />
      <img src={img2} alt="Image 2" />
      <img src={img3} alt="Image 3" />
    </div>
  );
};

export default ImageSetting;