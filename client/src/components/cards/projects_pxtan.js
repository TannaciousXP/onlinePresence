import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const PxtCard = ({card}) => (
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
          Put description for PXTAN
        </Card.Description>
      </Card.Content>
    </Card>
    <Card.Content extra>
      <Button color='red'>Show Details</Button>
    </Card.Content>
  </Grid.Column>
);


export default PxtCard;
