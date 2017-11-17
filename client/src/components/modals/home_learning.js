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
            <Modal.Header>Learning</Modal.Header>
            <Modal.Content image>
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
                  href='https://www.lifehack.org/articles/lifestyle/10-benefits-reading-why-you-should-read-everyday.html'> 10 reasons. </a>
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
                <li><a className='subLinks' href='https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q'>Fun Fun Function</a></li>
                <li><a className='subLinks' href='https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ'>DevTips</a></li>
                <Divider hidden/>
                <ul><strong>Personal:</strong></ul>
                <li><a className='subLinks' href='https://www.youtube.com/channel/UCU_W0oE_ock8bWKjALiGs8Q'>Charisma on Command</a></li>
                <li><a className='subLinks' href='https://www.youtube.com/channel/UCBIt1VN5j37PVM8LLSuTTlw'>Improvement Pill</a></li>
                <Divider hidden/>
                <ul><strong>Science:</strong></ul>
                <li><a className='subLinks' href='https://www.youtube.com/channel/UC6107grRI4m0o2-emgoDnAA'>Smarter Every Day</a></li>
                <li><a className='subLinks' href='https://www.youtube.com/channel/UC6nSFpj9HTCZ5t-N3Rm3-HA'>Vsauce</a></li>

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
