import React, { Component } from 'react';
import {
  Reveal,
  Image,
  Button,
  Modal,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal, showModal, viewModal } from '../../actions';

export class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Pets'
    };
    const { modal } = this.state;
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  show() {
    this.props.viewModal(this.state.modal);
    this.props.showModal();
  }

  close() {
    this.props.closeModal();
  }

  render() {
    let { isModalOpen, renderModal } = this.props;
    let { modal } = this.state;
    return (
      <Reveal animated='move down'>
        <Reveal.Content visible>
          <Image
            shape='circular'
            size='small'
            centered
            src='/assets/logos/pets.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={this.show}
          ><Image
              size='small'
              shape='circular'
              src='/assets/photos/pets.jpg'
              centered
            /></Button>
          <Modal
            onClose={this.close}
            open={ (isModalOpen && modal === renderModal) ? true : false }
            dimmer='blurring'
          >
            <Modal.Header>My Pets</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size='medium'
                src='/assets/photos/pets.jpg'
                dimmer='blurring'
              />
              <Modal.Description>
                <Header>My Pets</Header>
                <p>YOYO</p>
                <p>YOYO</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                inverted
                color='red'
                icon='hand spock'
                labelPosition='right'
                content='Cool beans'
                onClick={this.close}
              />
            </Modal.Actions>
          </Modal>
        </Reveal.Content>
      </Reveal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
  };
};

export default connect (mapStateToProps, {
  closeModal,
  showModal,
  viewModal
})(Pets);
