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
                <Header className='head intro' as='h1'>PERSONAL NARRATIVE</Header>
                <Divider fitted/>
                <Header className='intro content' size='small' textAlign='left'>
                I am a Javascript engineer with experience across the stack and a strong
                command of relevant technologies. Recently, I built a communication platform
                for hobbyists with the major features such as real-time messaging through
                Socket.IO, web-conferences with WebRTC, group events utilizing Google Maps
                API and OpenWeatherMap API to enhance the visualization of the event’s detail.
                The back-end was constructed with PostgreSQL for the aggregation of polymorphic
                data, and I utilized Knex together with Bookshelf to simplify SQL queries and
                facilitate seamless alterations to the database schema. As for the front-end, I
                modularized the components with React for a smooth and intuitive user interface
                and managed the state with Redux for e cient data  ow and improved maintainability.


                Check out the artifacts
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
