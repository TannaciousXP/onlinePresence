import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid, Modal } from 'semantic-ui-react';

import { connect } from 'react-redux';

const OmniCard = ({card}) => {

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
      </Card>
      <Card.Content extra>
        <Button color='red'>Show Details</Button>
      </Card.Content>
    </Grid.Column>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isModalOpen: state.isModalOpen,
    renderModal: state.renderModal,
  };
};

export default connect (mapStateToProps)(OmniCard);

