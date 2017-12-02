import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const PxtCard = ({card}) => (

  <Card className='projectCards'>
    <Image centered spaced src='/assets/logos/pxt.png'/>
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
      <Button compact color='red' disabled>Show Details</Button>
    </Card.Content>
  </Card>

);


export default PxtCard;
