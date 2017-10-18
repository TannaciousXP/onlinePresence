import React, {Component} from 'react';
import { Grid, Image, Header, Segment, Reveal } from 'semantic-ui-react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <Grid container celled='internally' verticalAlign='middle' centered>
        <Grid.Row stretched>
          <Segment raised textAlign='left'>
            <Grid columns={2} divided verticalAlign='middle'>
              <Grid.Column width={5}>
                <Image size='medium' shape='circular' centered={true} src='/assets/photos/Photoshoot.jpg'/>
              </Grid.Column>

              <Grid.Column width={11}>
                  <Header as='h1'>PERSONAL NARRATIVE</Header>
                  <Header.Content size='medium'>
                  I am a Javascript engineer with experience across the stack and a strong command of relevant technologies. Recently, I built a communication platform for hobbyists with the major features such as real-time messaging through Socket.IO, web-conferences with WebRTC, group events utilizing Google Maps API and OpenWeatherMap API to enhance the visualization of the event’s detail. The back-end was constructed with PostgreSQL for the aggregation of polymorphic data, and I utilized Knex together with Bookshelf to simplify SQL queries and facilitate seamless alterations to the database schema. As for the front-end, I modularized the components with React for a smooth and intuitive user interface and managed the state with Redux for e cient data  ow and improved maintainability.
                  </Header.Content>
                </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Reveal animated='move down'>
              <Reveal.Content visible>
                <Image shape='circular' size='small' src='/assets/logogs/.png'></Image>
              </Reveal.Content>
              <Reveal.Content hidden>

              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated='move down'>
            <Reveal.Content visible>
              <Image shape='circular' size='small' src='/assets/logogs/.png'></Image>

            </Reveal.Content>
            <Reveal.Content hidden>

            </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated='move down'>
            <Reveal.Content visible>
              <Image shape='circular' size='small' src='/assets/logogs/.png'></Image>

            </Reveal.Content>
            <Reveal.Content hidden>

            </Reveal.Content>
          </Reveal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
