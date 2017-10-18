import React, {Component} from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <Grid container celled='internally' verticalAlign='middle' centered stretched> 
        <Grid.Row>
        <Grid.Column width={16}>
          <Image size='medium' shape='circular' src='/assets/photos/Photoshoot.jpg' floated='left'/>
            <Header as='h2'>PERSONAL NARATIVE</Header>
            <p>
            I am a Javascript engineer with experience across the stack and a strong command of relevant technologies. Recently, I built a communication platform for hobbyists with the major features such as real-time messaging through Socket.IO, web-conferences with WebRTC, group events utilizing Google Maps API and OpenWeatherMap API to enhance the visualization of the event’s detail. The back-end was constructed with PostgreSQL for the aggregation of polymorphic data, and I utilized Knex together with Bookshelf to simplify SQL queries and facilitate seamless alterations to the database schema. As for the front-end, I modularized the components with React for a smooth and intuitive user interface and managed the state with Redux for e cient data  ow and improved maintainability.
            </p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>

        </Grid.Row>
      </Grid>
    );
  }
}
