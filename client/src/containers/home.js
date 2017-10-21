import React, {Component} from 'react';
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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  show() {
    this.setState({open: true});
  }

  close() {
    this.setState({open: false});
  }

  render() {
    const { open } = this.state;
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

        <Grid.Row columns={4}>
          <Grid.Column>
            <Reveal animated='move down'>
              <Reveal.Content visible>
                <Image
                  size='small'
                  shape='circular'
                  src='/assets/logos/learning.png'
                  centered
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  size='small'
                  shape='circular'
                  src='/assets/photos/photoshoot.jpg'
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
                  src='/assets/logos/fitness.png'
                />

              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  size='small'
                  shape='circular'
                  src='/assets/photos/fitness.jpg'
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
                  src='/assets/logos/meditate.png'
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image
                  shape='circular'
                  size='small'
                  centered
                  src='/assets/photos/photoshoot.jpg'
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
                  src='/assets/logos/pets.png'
                />

              </Reveal.Content>
              <Reveal.Content hidden>
                <Button
                  onClick={this.show}
                >
                  <Image
                    size='small'
                    shape='circular'
                    src='/assets/photos/pets.jpg'
                    centered
                  /></Button>
                <Modal
                  onClose={this.close}
                  open={open}
                  dimmer='blurring'
                >
                  <Modal.Header>My Pets</Modal.Header>
                  <Modal.Content image>
                    <Image
                      wrapped
                      size='medium'
                      src='/assets/photos/pets.jpg'
                      dimmer='blurring'
                    />
                    <Modal.Description>
                      <Header>My Pets</Header>
                      <p>YOYO</p>
                      <p>YOYO</p>
                    </Modal.Description>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button
                      inverted
                      color='red'
                      icon='hand spock'
                      labelPosition='right'
                      content='Cool beans'
                      onClick={this.close}
                    />
                  </Modal.Actions>
                </Modal>
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
