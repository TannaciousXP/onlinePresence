import React, {Component} from 'react';
import { Grid, Image, Header, Segment, Reveal, Divider } from 'semantic-ui-react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <Grid container verticalAlign='middle' centered padded>
        <Grid.Row stretched>
          <Segment raised textAlign='left'>
            <Grid columns={2} verticalAlign='middle'>
              <Grid.Column width={5}>
                <Image size='medium' shape='circular' src='/assets/photos/Photoshoot.jpg'/>
              </Grid.Column>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>PERSONAL NARRATIVE</Header>
                <Divider fitted/>
                <Header className='intro content' size='small' textAlign='justified'>
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
                </Header>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
            <Reveal animated='move down'>
              <Reveal.Content visible>
                <Image
                  size='small'
                  shape='circular'
                  src='/assets/logos/Learning.png'
                  centered
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  size='small'
                  shape='circular'
                  src='/assets/photos/Photoshoot.jpg'
                  centered
                />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated='move down'>
              <Reveal.Content visible>
                <Image
                  shape='circular'
                  size='small'
                  centered
                  src='/assets/logos/Pets.png'
                />

              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  size='small'
                  shape='circular'
                  src='/assets/photos/Photoshoot.jpg'
                  centered
                />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated='move down'>
              <Reveal.Content visible>
                <Image
                  shape='circular'
                  size='small'
                  centered
                  src='/assets/logos/Fitness.png'
                />

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
