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

export class Meditate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Meditate',
    };
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  show() {
    this.props.viewModal('Meditate');
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
            src='/assets/logos/meditate.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={this.show}
          ><Image
              shape='circular'
              size='small'
              centered
              src='/assets/photos/photoshoot.jpg'
            /></Button>
          <Modal
            onClose={this.close}
            open={ (isModalOpen && modal === renderModal) ? true : false}
            dimmer='blurring'
          >
            <Modal.Header>Meditation</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size='medium'
                src='/assets/photos/photoshoot.jpg'
                dimmer='blurring'
              />
              <Modal.Description>
                <Header>Meditate</Header>
                <p>OOHMMMM</p>
                <p>OOHMMMM</p>
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
})(Meditate);
