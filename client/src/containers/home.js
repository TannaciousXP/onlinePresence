import React, {Component} from 'react';


import Preloader from '../components/Preloader';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }
  // componentWillMount() {
  //   if (this.state.isLoading) {
  //     return <Preloader/>;
  //   }    
  // }
  // componentDidMount() {
  //   this.setState({isLoading: false});
  // }
  render() {
    return (
      <div>Hello PXHTAN! REACT!
      </div>
    );
  }
}
