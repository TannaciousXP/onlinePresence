import React from 'react';
import {
  Card,
  Button
} from 'semantic-ui-react';

import helper from '../../../../server/helperFuncs';

const ExerciseCardList = ({name, meta, link}) => (
  <Card raised color='grey' className='card'>
    <Card.Content
      header={meta}
      meta={name.toUpperCase()}
      description={<Button size='mini' color='red' onClick={() => helper.openNewTab(link)}>See Repo</Button>}
      className='cardsDisplay'
    />
  </Card>
);

export default ExerciseCardList;
