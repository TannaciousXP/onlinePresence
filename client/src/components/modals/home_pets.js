import React, { Component } from 'react';
import {
  Reveal,
  Image,
  Button,
  Modal,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Pets'
    };
  }

  render() {
    let { isModalOpen, renderModal, show, close } = this.props;
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
            onClick={() => show(modal)}
          ><Image
              size='small'
              shape='circular'
              src='/assets/photos/pets.jpg'
              centered
            /></Button>
          <Modal
            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false }
            dimmer='blurring'
          >
            <Modal.Header>PETS</Modal.Header>
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
                labelPosition='left'
                content='Cool beans'
                onClick={close}
              />
            </Modal.Actions>
          </Modal>
        </Reveal.Content>
      </Reveal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
    close: ownProps.close,
    show: ownProps.show
  };
};

export default connect (mapStateToProps)(Pets);
