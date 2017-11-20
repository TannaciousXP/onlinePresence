import React, { Component } from 'react';
import {
  List
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

const ReactFrame = () => (
  <List as='ol'>
    <List.Item as='li' value='•'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactComp)}><strong>React component</strong></a></List.Item>
    <List.Item as='li' value='•'><strong>Redux:</strong>
      <List.List as='ol'>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactComp)}><strong>Redux Action</strong></a></List.Item>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reduxReducer)}><strong>Redux Reducer</strong></a></List.Item>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.rootReducer)}><strong>Root Reducer</strong></a></List.Item>
      </List.List>
    </List.Item>
    <List.Item as='li' value='•'><strong>React Router</strong>
      <List.List as='ol'>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.reactRouterDom)}><strong>React°Router°Dom</strong></a></List.Item>
        <List.Item as='li' value='°'><a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.browserRouter)}><strong>Browser Router</strong></a></List.Item>
      </List.List>
    </List.Item>
  </List>
);

export default ReactFrame;
