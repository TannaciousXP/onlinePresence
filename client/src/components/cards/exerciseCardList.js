import React from 'react';
import {
  Card,
  Button
} from 'semantic-ui-react';


const ExerciseCardList = ({name, meta, link}) => (
  <Card raised color='grey' className='card'>
    <Card.Content
      header={meta}
      meta={name.toUpperCase()}
      description={<Button size='mini' color='red' href={link}>See Repo</Button>}
      className='cardsDisplay'
    />
  </Card>
);

export default ExerciseCardList;
