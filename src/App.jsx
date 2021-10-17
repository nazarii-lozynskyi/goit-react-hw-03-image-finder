import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

// import Modal from './components/Modal';
// import Image from './components/Image';
// import IconButton from './components/IconButton';
// import { ReactComponent as CloseIcon } from './icons/closeBtnIcon.svg';

class App extends Component {
  state = {
    inputValue: '',
    showModal: false,
  };

  handleSearchbarSubmit = inputValue => {
    this.setState({ inputValue, page: 1 });
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  loadMore() {}

  render() {
    // const { showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />

        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
        />

        <Container>
          <ImageGallery inputValue={this.state.inputValue} />
        </Container>

        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <IconButton onClick={this.toggleModal} aria-label="Close Button">
              <CloseIcon width="40" height="40" />
            </IconButton>

            <Image la />
          </Modal>
        )} */}
      </>
    );
  }
}

export default App;
