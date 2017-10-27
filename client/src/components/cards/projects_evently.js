import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const EventlyCard = ({card}) => (
  <Grid.Column className='projects'>
    <Card>
      <Image src='/assets/omniChat/omniLogo.png'/>
      <Card.Content>
        <Card.Header>
          {card.name.toUpperCase()}
        </Card.Header>
        <Card.Meta>
          {card.description}
        </Card.Meta>
        <Card.Description>
          Put description for Evently
        </Card.Description>
      </Card.Content>
    </Card>
    <Card.Content extra>
      <Button color='red'>Show Details</Button>
    </Card.Content>
  </Grid.Column>
);


export default EventlyCard;
