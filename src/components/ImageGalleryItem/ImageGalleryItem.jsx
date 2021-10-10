import { Component } from 'react';

import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={styles.Item}>
        <img
          src={this.props.src}
          alt={this.props.alt}
          className={styles.Image}
        />
      </li>
    );
  }
}
