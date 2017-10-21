import React, {Component} from 'react';
import {
  Grid
} from 'semantic-ui-react';

export default class About extends Component {
  render() {
    return (
      <Grid container verticalAlign='middle' centered padded>
        <Grid.Row>
          <div>ABOUT</div>
        </Grid.Row>
      </Grid>
    );
  }
}
