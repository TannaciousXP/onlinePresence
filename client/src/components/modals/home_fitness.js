import React, { Component } from 'react';
import {
  Reveal,
  Image,
  Button,
  Modal,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';

class Fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Fitness',
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
            src='/assets/logos/fitness.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={() => show(modal)}
          ><Image
              shape='circular'
              size='small'
              centered
              src='/assets/photos/fitness.jpg'
            /></Button>
          <Modal
            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false}
            dimmer='blurring'
          >
            <Modal.Header>Fitness</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size='medium'
                src='/assets/photos/fitness.jpg'
                dimmer='blurring'
              />
              <Modal.Description>
                <Header>Fitness</Header>
                <p>ready set go!</p>
                <p>ready set go!</p>
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

export default connect (mapStateToProps)(Fitness);
