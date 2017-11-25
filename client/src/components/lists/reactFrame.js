import React, { Component } from 'react';
import {
  List
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

const ReactFrame = () => (
  <List as='ol'>
    <List.Item as='li' value='•'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactComp)}>React component</a></List.Item>
    <List.Item as='li' value='•'><strong>Redux:</strong>
      <List.List as='ol'>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reduxAction)}>Redux Action</a></List.Item>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reduxReducer)}>Redux Reducer</a></List.Item>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.rootReducer)}>Root Reducer</a></List.Item>
      </List.List>
    </List.Item>
    <List.Item as='li' value='•'><strong>React Router</strong>
      <List.List as='ol'>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactRouterDom)}>React-Router-Dom</a></List.Item>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.browserRouter)}>Browser Router</a></List.Item>
      </List.List>
    </List.Item>
  </List>
);

export default ReactFrame;
