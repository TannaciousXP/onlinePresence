import React, { Component } from 'react';

import {
  Modal,
  Button,
  Image,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions';

class Artifacts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { isModalOpen, renderModal, closeModal } = this.props;
    return (
      <Modal
        onClose={closeModal}
        open={(isModalOpen && 'Artifact' === renderModal) ? true : false}
        dimmer='blurring'
      >
        <Modal.Header>Artifacts</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>WHY I AM A LOW RISK HIGHER</Header>
          </Modal.Description>

        </Modal.Content>
        <Modal.Actions>
          <Button
            inverted
            color='red'
            icon='hand spock'
            labelPosition='left'
            content='Cool beans'
            onClick={closeModal}
          />
        </Modal.Actions>
      </Modal>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
    clsoeModal: ownProps.closeModal
  };
};

export default connect(mapStateToProps, {closeModal})(Artifacts);
