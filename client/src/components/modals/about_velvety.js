import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import {
  Modal,
  Image
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions';

class Velvety extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    const params = {
      effect: 'flip',
      grabCursor: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };

    let { isModalOpen, renderModal, closeModal } = this.props;
    return (
      <Modal
        onClose={closeModal}
        open={ (isModalOpen && 'Velvety' === renderModal) ? true : false}
        dimmer='blurring'
      >
        <Modal.Description>
          <Swiper {...params}>
            <div><Image centered size ='massive' src='/assets/velvety/r&t.jpg'/><p className='text2'>Launch Photoshoot</p></div>
            <div><Image centered size ='large' src='/assets/velvety/lambo.jpg'/><p className='text2'>Launch Event</p></div>
            <div><Image centered size ='massive' src='/assets/velvety/mgsm.jpg'/><p className='text2'>Guest Speaker</p></div>
            <div><Image centered size ='large' src='/assets/velvety/pjpt.jpg'/><p className='text2'>Private Jet Marketing</p></div>
            <div><Image centered size ='huge' src='/assets/velvety/ievbw.jpg'/><p className='text2'>Daisy</p></div>
            <div><Image centered size ='massive' src='/assets/velvety/caliVin.jpg'/><p className='text2'>California Vintage</p></div>
            <div><Image centered size ='massive' src='/assets/velvety/creditSussie.jpg'/><p className='text2'>Credit Sussie</p></div>
            <div><Image centered size ='huge' src='/assets/velvety/oem.jpg'/><p className='text2'>Personal Branding of Wine</p></div>
            <div><Image centered size ='massive' src='/assets/velvety/tie.jpg'/><p className='text2'>Entrepreneur Networking</p></div>
          </Swiper>

        </Modal.Description>

      </Modal>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
    closeModal: ownProps.closeModal
  };
};

export default connect (mapStateToProps, {closeModal})(Velvety);
