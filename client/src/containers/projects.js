import React, {Component} from 'react';
// Import for redux and actions
import { connect } from 'react-redux';
import { isRepoFetched, repoFetched } from '../actions';

class Projects extends Component {
  render() {
    return (
      <div>
        Projects
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetched: state.isFetched,
    userRepo: state.userRepo
  };
};

export default connect (mapStateToProps, {
  isRepoFetched,
  repoFetched
})(Projects);
