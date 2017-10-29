import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const HFCard = ({card}) => (
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
          Put description for HomeFeels
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button color='red'>Show Details</Button>
      </Card.Content>
    </Card>
  </Grid.Column>
);


export default HFCard;
