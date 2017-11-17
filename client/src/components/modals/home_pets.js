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

class Pets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Pets'
    };
  }

  render() {
    let { isModalOpen, renderModal, show, close } = this.props;
    let { modal } = this.state;
    return (
      <Reveal animated='move down'>
        <Reveal.Content visible>
          <Image
            shape='circular'
            size='small'
            centered
            src='/assets/logos/pets.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={() => show(modal)}
          ><Image
              size='small'
              shape='circular'
              src='/assets/photos/pets.jpg'
              centered
            /></Button>
          <Modal
            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false }
            dimmer='blurring'
          >
            <Modal.Header>PETS</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped
                size='medium'
                src='/assets/photos/pets.jpg'
                dimmer='blurring'
              />
              <Modal.Description>
              "Pets are humanizing. They remind us we have an obligation and
              responsibility to preserve and nurture and care for all life." -
                <strong>James Cromwell</strong>
                <Divider hidden/>
                "Until one has loved an animal, a part of one’s soul remains unawakened" -
                <strong>Anatole France</strong>
                <Divider hidden/>
                It’s funny to think that not only are you taking care of your pets, but
                your pets are also taking care of you. Pets sense emotions and alleviate
                stress, help you socialize, and remind you of your responsibilities.
                <Divider hidden/>
                My pit bull, Daisy, keeps me on track with my cardio and she is my best
                running buddy in the morning. Daisy is always down to go for walks;
                these short walks help me clear my mind if there is any clutter that’s
                causing a mental block.
                <Divider hidden/>
                The next bit is weird if you don’t own a cat, but when my British
                Shorthair, Mowgli, comes over to play, the feeling of being chosen
                by him is quite uplifting regardless of the mood I’m in. He does play a
                role in keeping my emotions balanced and mitigate any stress.
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

export default connect (mapStateToProps)(Pets);
