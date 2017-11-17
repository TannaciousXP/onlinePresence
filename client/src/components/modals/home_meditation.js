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

class Meditate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Meditate',
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
            src='/assets/logos/meditate.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={() => show(modal)}
          ><Image
              shape='circular'
              size='small'
              centered
              src='/assets/photos/meditate.jpg'
            /></Button>
          <Modal
            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false}
            dimmer='blurring'
          >
            <Modal.Header>Meditation</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size='medium'
                src='/assets/photos/meditate.jpg'
              />
              <Modal.Description>

                With all the <a className='subLinks' href='https://liveanddare.com/benefits-of-meditation/ '>
                  <strong>studies about meditation</strong> </a>it seems like an easy habit to pick up because all
                you do is sit in an upright position and close your eyes. However, meditation was the hardest habit
                for me to pick up because of my active lifestyle, so sitting in a still position and clearing your
                mind seemed very unnatural.
                <Divider hidden/>
                Once I decided to really build this habit, it got easier over time
                as the more I practiced, the more noticeable the benefits became.
                I started with meditating for only one minute a day, until I felt
                it was time to increase the duration and repeat the process. Now, I
                meditate for ten minutes, 4x a week, first thing when I wake up.
                Regarding my day to day, my mental fatigue has decreased meaning
                that my work output has increased in tandem with my emotional well-being.
                <Divider hidden/>
                Here’s a <a className='subLinks' href='https://www.youtube.com/results?search_query=10+minute+meditation'>
                  <strong>list of videos for meditation</strong> </a>. I generally like to mix it up with guided meditation,
                where you follow the instructors or listen to just the music to practice self-reflection / self-awareness.
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

export default connect (mapStateToProps)(Meditate);


