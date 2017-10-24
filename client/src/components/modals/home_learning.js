import React, { Component } from 'react';
import {
  Reveal,
  Image,
  Button,
  Modal,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Learning',
    };
  }

  render() {
    let { isModalOpen, renderModal, close, show } = this.props;
    let { modal } = this.state;

    return (
      <Reveal animated='move down'>
        <Reveal.Content visible>
          <Image
            shape='circular'
            size='small'
            centered
            src='/assets/logos/learning.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={() => show(modal)}
          ><Image
              shape='circular'
              size='small'
              centered
              src='/assets/photos/photoshoot.jpg'
            /></Button>
          <Modal
            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false}
            dimmer='blurring'
          >
            <Modal.Header>Learning</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size='medium'
                src='/assets/photos/photoshoot.jpg'
                dimmer='blurring'
              />
              <Modal.Description>
                <Header>Learn</Header>
                <p>study study study</p>
                <p>study study study</p>
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button
                inverted
                color='red'
                icon='hand spock'
                labelPosition='right'
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

export default connect (mapStateToProps)(Learning);
