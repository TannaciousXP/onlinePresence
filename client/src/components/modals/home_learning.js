import React, { Component } from 'react';
import {
  Reveal,
  Image,
  Button,
  Modal,
  Divider,
  Header
} from 'semantic-ui-react';

import { connect } from 'react-redux';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

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
              src='/assets/photos/books.jpg'
            /></Button>
          <Modal

            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false }
            dimmer='blurring'
          >
            <Modal.Header>LEARNING</Modal.Header>
            <Modal.Content image scrolling>
              <Image
                wrapped
                size='massive'
                src='/assets/photos/books.jpg'
              />
              <Modal.Description>
                “Ever since I was a child, I had this instinctive urge for expansion and growth. To me, the
                function and duty of a quality human being is the sincere and honest development of one’s
                potential” - <strong>Bruce Lee</strong>

                <Divider hidden />
                  I love to learn because I believe that every new stage of your life requires a better version of yourself.
                <Divider hidden />
                  Reading would be the most beneficial learning tool for these <a className='subLinks'
                  onClick={() => helper.openNewTab(links.learning.benefits)}> 10 reasons. </a>
                  Here are some books that made a positive impact on my life
                <Divider hidden/>

                <li>NLP: The New Technology of Achievement - Steve Andreas</li>
                <li>Thinking, Fast and Slow - Daniel Kahneman</li>
                <li>The 7 Habits of Highly Effective People - Stephen Covey</li>
                <li>What Every BODY is Saying - Joe Navarro</li>
                <li>How to Win Friends and Influence People - Dale Carnegie</li>

                <Divider hidden/>
                But sometimes you just want to watch an entertaining person on YouTube to learn instead!
                <Divider hidden/>
                <ul><strong>Programming:</strong></ul>
                <li><a className='subLinks' onClick={() => helper.openNewTab(links.learning.funFunFuncs)}>Fun Fun Function</a></li>
                <li><a className='subLinks' onClick={() => helper.openNewTab(links.learning.devTips)}>DevTips</a></li>
                <Divider hidden/>
                <ul><strong>Personal:</strong></ul>
                <li><a className='subLinks' onClick={() => helper.openNewTab(links.learning.charisma)}>Charisma on Command</a></li>
                <li><a className='subLinks' onClick={() => helper.openNewTab(links.learning.improve)}>Improvement Pill</a></li>
                <Divider hidden/>
                <ul><strong>Science:</strong></ul>
                <li><a className='subLinks' onClick={() => helper.openNewTab(links.learning.smarter)}>Smarter Every Day</a></li>
                <li><a className='subLinks' onClick={() => helper.openNewTab(links.learning.vSauce)}>Vsauce</a></li>
                <Divider hidden/>
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

export default connect (mapStateToProps)(Learning);
