import React, { Component } from 'react';

import {
  Modal,
  Button,
  Image,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions';

import Links from '../../../../public/links';

class Artifacts extends Component {
  constructor(props) {
    super(props);
    this.openInNewTab = this.openInNewTab.bind(this);
  }
  openInNewTab(url) {
    let tab = window.open(url, '_blank');
    tab.focus();
  }
  render() {
    let { isModalOpen, renderModal, closeModal } = this.props;
    return (
      <Modal
        onClose={closeModal}
        open={(isModalOpen && 'Artifact' === renderModal) ? true : false}
        dimmer='blurring'
      >
        <Modal.Header>ARTIFACTS</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header size='medium'>I write clean code in variety of languages and frameworks:</Header>
            <li><a className='subLinks' onClick={() => this.openInNewTab(Links.kSchemas)}><strong>SQL schemas with Knex</strong></a></li>
            <li><a className='subLinks' onClick={() => this.openInNewTab(Links.bsModel)}><strong>SQL models with Bookshelf ORM</strong></a></li>
            <li><a className='subLinks' onClick={() => this.openInNewTab(Links.kQuery)}><strong>SQL query builder with Knex</strong></a></li>
            <li><a className='subLinks' onClick={() => this.openInNewTab(Links.kMigration)}><strong>SQL schemas migration Knex</strong></a></li>
            <li><a className='subLinks' onClick={() => this.openInNewTab(Links.cJavaScript)}><strong>Client-side JavaScript</strong></a></li>
            <li><a className='subLinks' onClick={() => this.openInNewTab(Links.modHTMLCSS)}><strong>Modern HTML and CSS</strong></a></li>
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
