import React, { Component } from 'react';
import { Card, Icon, Image, Button, Grid } from 'semantic-ui-react';

const OmniCard = ({card}) => (
  <p>
    {
      /*
      Need to have a Grid.column, and wrap it into a card
        try to use the Image as a Button and trigger it through there
        or we can have it at the Card.Content extra bit, See which one looks
        cleaner

      */
    }
    {card.name}
  </p>
);


export default OmniCard;
