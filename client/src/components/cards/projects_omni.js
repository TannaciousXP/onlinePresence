import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid, Modal } from 'semantic-ui-react';


import OmniModal from '../modals/projectsM_omni';

const OmniCard = ({card, show}) => {
  return (

    <Card className='projectCards'>
      <Image centered spaced src='/assets/omniChat/omniLogo.png'/>
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
        <Button compact color='red' onClick={() => show('Omni')}>Show Details</Button>
        <OmniModal/>
      </Card.Content>
    </Card>

  );
};



export default OmniCard;

