import React, { Component } from 'react';

import {
  List
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

import _ from 'lodash';

export default class ComputerScience extends Component {
  constructor(props) {
    super(props);
  }

  renderInheritance(inheritance) {
    return _.map(inheritance, type => {
      return (
        <List.Item as='li' value='°' key={type}>
          <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.inheritance[type])}>{type}</a>
        </List.Item>
      );
    });
  }

  renderDS(ds) {
    return _.map(ds, type => {
      return (
        <List.Item as='li' value='°' key={type}>
          <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.ds[type])}>{type}</a>
        </List.Item>
      );
    });
  }

  render() {
    let inheritance = Object.keys(links.artifacts.inheritance);
    let ds = Object.keys(links.artifacts.ds);
    return (
      <List as='ol'>
        <List.Item as='li' value='•'>
        Inhertiance
          <List.Item as='ol'>
            {
              this.renderInheritance(inheritance)
            }
          </List.Item>
        </List.Item>
        <List.Item as='li' value='•'>
        Data Structures
          <List.Item as='ol'>
            {
              this.renderDS(ds)
            }
          </List.Item>
        </List.Item>

      </List>

    );
  }
}


