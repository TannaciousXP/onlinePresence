import React, { Component } from 'react';

import {
  Modal,
  Button,
  Image,
  Header,
  List
} from 'semantic-ui-react';

import { connect } from 'react-redux';
import { closeModal } from '../../actions';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

import CleanCode from '../lists/cleanCode';
import ReactFrame from '../lists/reactFrame';
import Organize from '../lists/organize';

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
        <Modal.Header>ARTIFACTS: <span style={{color: 'rgb(236, 240, 235)'}}>click on the <span className='subLinks'> red </span> words to view code snippet</span></Modal.Header>
        <Modal.Content>
          <Modal.Description>

            <Header size='medium'>I write clean code in variety of languages and frameworks:</Header>
            <CleanCode/>

            <strong>REACT Framework: <br/></strong>
            <ReactFrame/>

            <Header>I am organized, careful about planning and executing work:
              <Header.Subheader>I know that "just diving into coding" is a huge anti-pattern,
              and actively avoid that pattern. At the same time, I know that sketching out "the skeleton",
              making things concrete, is important to getting a working plan of attack.
              </Header.Subheader>
            </Header>
            <strong>Omni Chat planning:</strong>
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
    clsoeModal: ownProps.closeModal
  };
};

export default connect(mapStateToProps, {closeModal})(Artifacts);
