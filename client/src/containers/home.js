import React, {Component} from 'react';
// Import componenets from semantic
import {
  Grid,
  Image,
  Header,
  Segment,
  Reveal,
  Divider,
  Modal,
  Button
} from 'semantic-ui-react';
// Import redux and actions
import { connect } from 'react-redux';
import { closeModal, showModal, viewModal } from '../actions';
// Import modals
import Meditate from '../components/modals/home_meditation';
import Pets from '../components/modals/home_pets';
import Learning from '../components/modals/home_learning';
import Fitness from '../components/modals/home_fitness';


class Home extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  show(str) {
    this.props.viewModal(str);
    this.props.showModal();
  }

  close() {
    this.props.closeModal();
  }

  render() {
    return (
      <Grid container verticalAlign='middle' centered padded>
        <Grid.Row stretched>
          <Segment raised textAlign='left'>
            <Grid columns={2} verticalAlign='middle'>
              <Grid.Column width={5}>
                <Image size='medium' shape='circular' src='/assets/photos/photoshoot.jpg'/>
              </Grid.Column>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>Welcome and Thank you for visiting my page</Header>
                <Divider fitted/>
                <Header className='intro content' size='small' textAlign='left'>
                I am a JavaScript full-stack engineer with experience across the stack and a strong
                command of relevant technologies. I have a passion for making a positive impact around
                me by utilizing my creative problem solving technique. I’m an extrovert by nature,
                so I enjoy meeting people and networking. I’m a autodidact, and I love to learn. I'm
                keen on being given a responsibility that is larger than my comfort zone because it
                forces me to grow. I enjoy working with other people because I know the heights a well organize,
                transparent, and harmonious team can reach. I would love nothing more than to share a common goal
                and reaching it together.
                  <Divider hidden />
                I value your time so here is a quick look at my programming [artifacts] = Button
                  <Divider hidden />
                If you have a bit more time and would like to know more about me, hover over the icons
                and click on the hidden pictures to checkout my 3 keystone habits and why having pets will
                get you through the day.
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>

        <Grid.Row columns={4}>
          {/* Import Learning componenet */}
          <Grid.Column>
            <Learning show={this.show} close={this.close}/>
          </Grid.Column>
          {/* Import Fitness componenet */}
          <Grid.Column>
            <Meditate show={this.show} close={this.close}/>
          </Grid.Column>
          {/* Import Meditate componenet */}
          <Grid.Column>
            <Fitness show={this.show} close={this.close}/>
          </Grid.Column>
          {/* Import Pets componenet */}
          <Grid.Column>
            <Pets show={this.show} close={this.close}/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
  };
};

export default connect (mapStateToProps, {
  closeModal,
  showModal,
  viewModal
})(Home);
