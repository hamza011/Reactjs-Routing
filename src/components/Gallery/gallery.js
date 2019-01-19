import React, { Component } from 'react';
import './gallery.css';

const galleryImages = {
    img1: require('./../../assets/images/gallery/img-01.jpg'),
    img2: require('./../../assets/images/gallery/img-02.jpg'),
    img3: require('./../../assets/images/gallery/img-03.jpg'),
    img4: require('./../../assets/images/gallery/img-04.jpg'),
    img5: require('./../../assets/images/gallery/img-05.jpg'),
    img6: require('./../../assets/images/gallery/img-06.jpg')
}

class Gallery extends Component {
  render() {
    return (
      <div className="gallery-comp">
          <div className="gallery-view">
            <img src={galleryImages.img1} />
            <img src={galleryImages.img2} />
            <img src={galleryImages.img3} />
            <img src={galleryImages.img4} />
            <img src={galleryImages.img5} />
            <img src={galleryImages.img6} />
          </div>
      </div>
    );
  }
}

export default Gallery;