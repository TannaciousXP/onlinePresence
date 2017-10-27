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
  Card,
  Button,
} from 'semantic-ui-react';
// Import component for exercise
import ExerciseCardList from '../components/cards/exerciseCardList';
// Import components for projects
import Omni from '../components/cards/projects_omni';
import Pxt from '../components/cards/projects_pxtan';
import Evently from '../components/cards/projects_evently';
import HomeFeels from '../components/cards/projects_homeFeels';


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

        <Grid.Row columns={3}>

          {
            JSON.stringify(listOfRepos) !== JSON.stringify({}) ? _.map(listOfRepos[0], repo => {
              if (repo.name === listOfRepos[2][0]) {
                return <Omni key={repo.id} card={repo}/>;
              } else if (repo.name === listOfRepos[2][1]) {
                return <Pxt key={repo.id} card={repo}/>;
              } else if (repo.name === listOfRepos[2][2]) {
                return <Evently key={repo.id} card={repo}/>;
              } else {
                return <HomeFeels key={repo.id} card={repo}/>;
              }
            }) : null

          }

        </Grid.Row>

        <Grid.Row className='project title'>
          <Header className='title repo' as='h3' textAlign='left' floated='left'>EXERCISES</Header>
        </Grid.Row>

        <Grid.Row>
          <Card.Group stackable textAlign='center' itemsPerRow={5}>
            {
              JSON.stringify(listOfRepos) !== JSON.stringify({}) ?
                _.map(listOfRepos[1], repo => <ExerciseCardList
                  key={repo.id}
                  name={repo.name}
                  meta={repo.description}
                  link={repo.html_url}
                />) :
                null
            }
          </Card.Group>
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
