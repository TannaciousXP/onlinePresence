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

class Fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: 'Fitness',
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
            src='/assets/logos/fitness.png'
          />
        </Reveal.Content>

        <Reveal.Content hidden>
          <Button
            onClick={() => show(modal)}
          ><Image
              shape='circular'
              size='small'
              centered
              src='/assets/photos/fitness.jpg'
            /></Button>
          <Modal
            onClose={close}
            open={ (isModalOpen && modal === renderModal) ? true : false}
            dimmer='blurring'
          >
            <Modal.Header>FITNESS</Modal.Header>
            <Modal.Content image>
              <Image
                wrapped

                src='/assets/photos/fitness.jpg'
              />
              <Modal.Description>
                There are plenty of <a className='subLinks'
                  href='https://www.healthline.com/nutrition/10-benefits-of-exercise'> <strong>reasons</strong> </a>
                why people should work out. My reason is to gain functional strength that I can utilize in everyday
                tasks because the older one gets, the longer it takes for one’s body to heal. Therefore, in order to minimize
                an injury, I should train the entire body, which is why my choice of exercise is calisthenics (body-weight training).
                The main benefits of calisthenics are: the mastery over your body, the freedom of creativity over the exercises,
                increased flexibility, and development of mental control over those slow and controlled movements (which I believe can
                help to increase focus).
                <Divider hidden />
                <ul><strong>Here are two channels that have great content:</strong></ul>
                <li><a className='subLinks' href='https://www.youtube.com/user/TheMiamiTrainer'><strong>OFFICALTHENX</strong></a></li>
                <li><a className='subLinks' href='https://www.youtube.com/channel/UCZIIRX8rkNjVpP-oLMHpeDw'><strong>Calisthenicmovement</strong></a></li>
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

export default connect (mapStateToProps)(Fitness);
