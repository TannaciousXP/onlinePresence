import React from 'react';
import {
  Card,
  Button
} from 'semantic-ui-react';


const ExerciseCardList = ({name, meta, link}) => (
  <Card raised color='grey'>
    <Card.Content
      header={name.toUpperCase()}
      meta={meta}
      description={<Button size='tiny' color='red' href={link}>View Repo</Button>}
    />
  </Card>
);

export default ExerciseCardList;
