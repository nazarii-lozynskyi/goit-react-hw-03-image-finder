import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import Modal from './components/Modal';
import Button from './components/Button';
import IconButton from './components/IconButton';

import { ReactComponent as CloseIcon } from './icons/closeBtnIcon.svg';

class App extends Component {
  state = {
    inputValue: '',
    showModal: false,
    loading: false,
  };

  handleSearchbarSubmit = inputValue => {
    this.setState({ inputValue });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  loadMore() {}

  render() {
    const { showModal } = this.state;
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

        <ImageGallery inputValue={this.state.inputValue} />

        <Button onClick={this.toggleModal} label="Open modal" />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <IconButton onClick={this.toggleModal} aria-label="Close Button">
              <CloseIcon width="40" height="40" />
            </IconButton>
            <img
              src="https://cdn.pixabay.com/photo/2021/08/25/17/22/flowers-6574079_1280.jpg"
              alt="flower"
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
