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
                <Header className='head intro' as='h1'>Welcome and thank you for visiting my page</Header>
                <Divider fitted/>
                <Divider hidden />
                <Header className='intro content' size='small' floated='left' textAlign='justified'>
                  I am a Full-Stack JavaScript Engineer with experience across the stack and a strong command
                  of relevant technologies. I have a passion for making a positive impact around me by utilizing
                  my creative problem-solving abilities. As an autodidact, I love to learn. I'm keen on being
                  given responsibilities that are beyond my comfort zone because they force me to grow. I’m
                  an extrovert by nature, so I enjoy meeting people and networking. I enjoy working with other
                  people because I know the heights a well-organized, transparent, and harmonious team can reach.
                  I would love nothing more than to share a common goal and reach it together.
                  <Divider hidden />
                  If you have a bit more time and would like to know more about me, hover over the icons and
                  click on the hidden pictures to check out my
                  <a className='subLinks' href='https://www.youtube.com/watch?v=7DSscQlSZR4'> three keystone habits </a>
                  and why having pets could help you through the day.
                  <Divider hidden />
                  If you’re here to assess if I’m a high yield / low risk hire, I value your time, here's a
                  quick look at my programming<a className='subLinks'> artifacts</a>.
                  <Divider hidden />
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
