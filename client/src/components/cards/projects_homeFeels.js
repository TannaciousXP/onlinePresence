import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const HFCard = ({card}) => (

  <Card className='projectCards'>
    <Image centered spaced src='/assets/homeFeels/homeFeels.jpg'/>
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


export default HFCard;
