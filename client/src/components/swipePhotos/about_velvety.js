import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import {
  Modal
} from 'semantic-ui-react';


class Velvety extends Component {
  render() {

    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
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

    return (
      <Swiper {...params}>
        <div src='/assets/velvety/r&t.jpg'>Launch Photoshoot</div>
        <div src='/assets/velvety/lambo.jpg'>Launch Event</div>
        <div src='/assets/velvety/mgsm.jpg'>Guest Speaker</div>
        <div src='/assets/velvety/pjpt.jpg'>Private Jet Marketing</div>
        <div src='/assets/velvety/ievbw.jpg'>Daisy</div>
        <div src='/assets/velvety/caliVin.jpg'>California Vintage</div>
        <div src='/assets/velvety/creditSussie.jpg'>Credit Sussie</div>
        <div src='/assets/velvety/oem.jpg'>Personal Branding of Wine</div>
        <div src='/assets/velvety/tie.jpg'>Entrepreneur Networking</div>
      </Swiper>
    );
  }
}
