import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const PxtCard = ({card}) => (
  <Grid.Column className='projects'>
    <Card>
      <Image src='/assets/logos/pxt.png'/>
      <Card.Content>
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
        <Button color='red' disabled>Show Details</Button>
      </Card.Content>
    </Card>
  </Grid.Column>
);


export default PxtCard;
