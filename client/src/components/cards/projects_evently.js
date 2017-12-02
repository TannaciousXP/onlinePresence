import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const EventlyCard = ({card}) => (

  <Card className='projectCards'>
    <Image centered spaced src='/assets/evently/evently.jpg'/>
    <Card.Content className='pcContent'>
      <Card.Header>
        {card.name.toUpperCase()}
      </Card.Header>
      <Card.Meta>
        {card.description}
      </Card.Meta>
      <Card.Description>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button compact disabled color='red'>Show Details</Button>
    </Card.Content>
  </Card>

);


export default EventlyCard;
