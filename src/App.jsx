import React, { Component } from 'react';

import Modal from './components/Modal';
import Button from './components/Button';
import IconButton from './components/IconButton';

import { ReactComponent as CloseIcon } from './icons/closeBtnIcon.svg';

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
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
