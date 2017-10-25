import React, {Component} from 'react';
// Import for redux and actions
import { connect } from 'react-redux';
import { isRepoFetched, repoFetched, fetchReposList } from '../actions';
// Import lodash
import _ from 'lodash';
// Import from semantic
import {
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react';


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
      <Grid container verticalAlign='middle' centered padded>
        <Grid.Row className='project title'>
          <Header className='title repo' as='h3' textAlign='left' floated='left'>PROJECTS</Header>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            {
              JSON.stringify(listOfRepos) !== JSON.stringify({}) ? _.map(listOfRepos[0], repo => <p key={repo.id}>{repo.name}</p>) : null
            }
          </Segment>
        </Grid.Row>
        <Grid.Row className='project title'>
          <Header className='title repo' as='h3' textAlign='left' floated='left'>EXERCISES</Header>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            {
              JSON.stringify(listOfRepos) !== JSON.stringify({}) ? _.map(listOfRepos[1], repo => <p key={repo.id}>{repo.name}</p>) : null
            }
          </Segment>
        </Grid.Row>
      </Grid>
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
