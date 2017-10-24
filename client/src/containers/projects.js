import React, {Component} from 'react';
// Import for redux and actions
import { connect } from 'react-redux';
import { isRepoFetched, repoFetched, fetchReposList } from '../actions';

class Projects extends Component {

  componentWillMount() {
    
  }

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
    userRepo: state.userRepo,
    listOfRepos: state.listOfRepos,
  };
};

export default connect (mapStateToProps, {
  isRepoFetched,
  repoFetched,
  fetchReposList,
})(Projects);
