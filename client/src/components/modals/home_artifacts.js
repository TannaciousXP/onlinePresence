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
            <List as='ul'>
              <List.Item as ='li'>
                <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kSchemas)}><strong>SQL schemas with Knex</strong></a>
              </List.Item>
              <List.Item as ='li'>
                <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.bsModel)}><strong>SQL models with Bookshelf ORM</strong></a>
              </List.Item>
              <List.Item as ='li'>
                <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kQuery)}><strong>SQL query builder with Knex</strong></a>
              </List.Item>
              <List.Item as ='li'>
                <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kMigration)}><strong>SQL schemas migration Knex</strong></a>
              </List.Item>
              <List.Item as ='li'>
                <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.cJavaScript)}><strong>Client-side JavaScript</strong></a>
              </List.Item>
              <List.Item as ='li'>
                <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.modHTMLCSS)}><strong>Modern HTML and CSS</strong></a>
              </List.Item>
            </List>


            <strong>REACT Framework: <br/></strong>
            <List as='ol'>
              <List.Item as='li' value='•'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactComp)}><strong>React component</strong></a></List.Item>
              <List.Item as='li' value='•'><strong>Redux:</strong>
                <List.List as='ol'>
                  <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactComp)}><strong>Redux Action</strong></a></List.Item>
                  <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reduxReducer)}><strong>Redux Reducer</strong></a></List.Item>
                  <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.rootReducer)}><strong>Root Reducer</strong></a></List.Item>
                </List.List>
              </List.Item>
              <List.Item as='li' value='•'><strong>React Router</strong>
                <List.List as='ol'>
                  <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactRouterDom)}><strong>React°Router°Dom</strong></a></List.Item>
                  <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.browserRouter)}><strong>Browser Router</strong></a></List.Item>
                </List.List>
              </List.Item>
            </List>
            <Header>I am organized, careful about planning and executing work:
              <Header.Subheader>I know that "just diving into coding" is a huge anti-pattern,
              and actively avoid that pattern. At the same time, I know that sketching out "the skeleton",
              making things concrete, is important to getting a working plan of attack.
              </Header.Subheader>
            </Header>
            <strong>Omni Chat planning:</strong>
            <List as='ol'>
              <List.Item as='li' value='•'>
              Structured, step-by-step problem solving process road map
                <List.Item as='ol'>
                  <List.Item as='li' value='°'>
                    <Image size='medium' src='/assets/artifacts/roadMap.png'/>
                  </List.Item>
                </List.Item>
              </List.Item>
            </List>

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
