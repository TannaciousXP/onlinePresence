import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid, Modal } from 'semantic-ui-react';


import OmniModal from '../modals/projectsM_omni';

const OmniCard = ({card, show}) => {
  return (
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
          Put description for Omni
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color='red' onClick={() => show('Omni')}>Show Details</Button>
          <OmniModal/>
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};



export default OmniCard;

