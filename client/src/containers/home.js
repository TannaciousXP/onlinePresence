import React, {Component} from 'react';

import Awesome from '../components/AwesomeComponent';
import Preloader from '../components/Preloader';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>Hello PXHTAN! REACT!
        <Awesome/>
        <Preloader/>
      </div>
    );
  }
}

export default Home;