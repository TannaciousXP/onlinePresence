import React, {Component} from 'react';
import {
  Grid,
  Header,
  Segment,
  Divider,
  Reveal,
  Button,
  Image
} from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <Grid container verticalAlign='middle' centered padded>
        <Grid.Row>
          <Segment raised textAlign='left'>
            <Grid columns={2} verticalAlign='middle'>
              <Grid.Column width={5}>
                <Reveal animated='rotate left'>
                  <Reveal.Content visible>
                    <Image size='medium' shape='circular' src='/assets/logos/code.png'/>

                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image size='medium' shape='circular' src='/assets/logos/areYou.png'/>

                  </Reveal.Content>
                </Reveal>
              </Grid.Column>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>SOFTWARE ENGINEER</Header>
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
        <Grid.Row>
          <Segment raised textAlign='right'>
            <Grid columns={2} verticalAlign='middle'>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>CUTS & GLORY CO</Header>
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
              <Grid.Column width={5}>
                <Reveal animated='rotate'>
                  <Reveal.Content visible>
                    <Image size='medium' shape='circular' src='/assets/logos/shears.png'/>

                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image size='medium' shape='circular' src='/assets/logos/c&g.png'/>

                  </Reveal.Content>
                </Reveal>

              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment raised textAlign='left'>
            <Grid columns={2} verticalAlign='middle'>
              <Grid.Column width={5}>
                <Reveal animated='rotate left'>
                  <Reveal.Content visible>
                    <Image size='medium' shape='circular' src='/assets/logos/wine.png'/>

                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image size='medium' shape='circular' src='/assets/logos/velvety.png'/>

                  </Reveal.Content>
                </Reveal>
              </Grid.Column>

              <Grid.Column width={11}>
                <Header className='head intro' as='h1'>VELVETY & BLACK BEAR</Header>
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
      </Grid>
    );
  }
}
