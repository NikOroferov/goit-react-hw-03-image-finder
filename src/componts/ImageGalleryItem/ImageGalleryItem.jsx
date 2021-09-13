import React, { Component } from 'react';
import './ImageGalleryItem.css';

class ImageGalleryItem extends Component {
  getId = event => {
    const id = event.currentTarget.id;
    this.props.onClick(id);
  };

  render() {
    const { images } = this.props;
    return images.map(({ largeImageURL, id }) => (
      <li key={id} id={id} className="ImageGalleryItem" onClick={this.getId}>
        <img src={largeImageURL} alt="" className="ImageGalleryItem-image" />
      </li>
    ));
  }
}

export default ImageGalleryItem;
