import React, {Component} from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <div>Hello PXHTAN! REACT!
      </div>
    );
  }
}
