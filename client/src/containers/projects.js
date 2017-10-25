import React, {Component} from 'react';
// Import for redux and actions
import { connect } from 'react-redux';
import { isRepoFetched, repoFetched, fetchReposList } from '../actions';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coolBeans: true,
    };
  }

  componentWillMount() {
    // preventDefault();
    let { repoFetched, fetchReposList, isFetched
    } = this.props;

    if (JSON.stringify(isFetched) === JSON.stringify({}) || isFetched === false) {
      fetchReposList('TannaciousXP');
      repoFetched();
    }
  }

  render() {
    let { listOfRepos } = this.props;
    let xRender = 0;
    console.log(`LIST OF REPOS!!!! : ${JSON.stringify(listOfRepos)}`);
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
    // userRepo: state.userRepo,
    listOfRepos: state.listOfRepos,
  };
};

export default connect (mapStateToProps, {
  isRepoFetched,
  repoFetched,
  fetchReposList,
  // fetchName
})(Projects);
