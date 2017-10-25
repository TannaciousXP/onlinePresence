import React, {Component} from 'react';
// Import for redux and actions
import { connect } from 'react-redux';
import { isRepoFetched, repoFetched, fetchReposList } from '../actions';
// Import lodash
import _ from 'lodash';
// Import from semantic
import { Segment } from 'semantic-ui-react';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coolBeans: true,
    };
  }

  componentWillMount() {
    // preventDefault();
    let { repoFetched, fetchReposList, isFetched, listOfRepos } = this.props;

    if (JSON.stringify(isFetched) === JSON.stringify({}) || isFetched === false) {
      // if (JSON.stringify(listOfRepos) === JSON.stringify({})) {
      // }
      fetchReposList('TannaciousXP');
      repoFetched();
    }
  }

  render() {
    let { listOfRepos } = this.props;
    return (
      <Segment>
        {
          // if(JSON.stringify(listOfRepos) === JSON.stringify({})) {
          //   listOfRepos.forEach(repo => <p>{repo}</p>)

          // }

          JSON.stringify(listOfRepos) !== JSON.stringify({}) ? _.map(listOfRepos, repo => <p key={repo.id}>{repo}</p>) : 'yo'
        }
      </Segment>
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
