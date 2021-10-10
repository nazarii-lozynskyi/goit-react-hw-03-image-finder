import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = { gallery: null, page: 1 };

  resetPage() {
    this.setState({ page: 1 });
  }

  componentDidUpdate(prevProps, prevStats) {
    if (prevProps.inputValue !== this.props.inputValue) {
      const APY_KEY = '22982376-5ba816c8dbdcbd488bfab475d';
      const URL = 'https://pixabay.com/api/';
      const TYPE_PHOTO = 'photo&orientation=horizontal';

      fetch(
        `${URL}?q=${this.props.inputValue}&page=${this.state.page}&key=${APY_KEY}&image_type=${TYPE_PHOTO}&per_page=12`
      )
        .then(response => response.json())
        .then(gallery =>
          this.setState({
            gallery: gallery.hits,
            page: prevStats.page + 1,
          })
        );
    }
  }

  // loadMore(inputValue, page) {
  //   const APY_KEY = '22982376-5ba816c8dbdcbd488bfab475d';
  //   const URL = 'https://pixabay.com/api/';
  //   const TYPE_PHOTO = 'photo&orientation=horizontal';

  //   fetch(
  //     `${URL}?q=${inputValue}&page=${page}&key=${APY_KEY}&image_type=${TYPE_PHOTO}&per_page=12`
  //   )
  //     .then(response => response.json())
  //     .then(gallery =>
  //       this.setState({
  //         gallery: [gallery, ...gallery.hits],
  //         page: 3,
  //       })
  //     );
  // }

  render() {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {this.state.gallery &&
            this.state.gallery.map(galleryItem => (
              <ImageGalleryItem
                src={galleryItem.webformatURL}
                alt={galleryItem.tags}
                key={galleryItem.id}
              />
            ))}
        </ul>

        {this.state.gallery && (
          <Button onClick={this.componentDidMount} label="Load more" />
        )}
      </>
    );
  }
}
