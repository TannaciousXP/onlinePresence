import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Image, Button, Modal, Header } from 'semantic-ui-react';

import { closeModal } from '../../actions';


class OmniModal extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { isModalOpen, renderModal, closeModal } = this.props;
    return (
      <Modal
        onClose={closeModal}
        open={ (isModalOpen && 'Omni' === renderModal) ? true : false }
        dimmer='blurring'
      >
        <Modal.Header>Omni Chat</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Omni Chat details coming soon</Header>

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
    closeModal: ownProps.closeModal
  };
};

export default connect (mapStateToProps, {closeModal})(OmniModal);


