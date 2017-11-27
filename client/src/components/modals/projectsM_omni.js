import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Image, Button, Modal, Header } from 'semantic-ui-react';

import { closeModal } from '../../actions';

import UserStories from '../lists/userStories';
import Organize from '../lists/organize';
import ProjectManagement from '../lists/projectManagement';

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
        size='large'
      >
        <Modal.Header>Omni Chat</Modal.Header>
        <Modal.Content scrolling size='large'>
          <Modal.Description>
            <Image centered size='large' src='/assets/omniChat/omniLogo.png'/>
            Logo Design by: Peter X. Tan
            <Header size='large'>App Overview</Header>
            This application provides voice chat. Users will be able to signup
            and login to the application, connect with each other, and add other
            users on their friends list. They will also be able to create new
            channels and groups as needed. We will incorporate geolocation-based
            user pairings and use visualization techniques to display user trends.
            <Header size='large'>User Stories</Header>
            <UserStories/>
            <Header size='large'>Project Management</Header>
            <ProjectManagement/>
            <Header size='large'>Planning</Header>
            <Organize/>
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


