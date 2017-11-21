import React, { Component } from 'react';

import {
  List
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

const DevTools = () => (
  <List as='ul'>
    <List.Item as='li'>Git</List.Item>
    <List.Item as='li'>GitHub</List.Item>
    <List.Item as='li'>
      Chrome devtools and extensions for
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.chromeDev.react)}> react</a>,
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.chromeDev.redux)}> redux</a> etc
    </List.Item>
    <List.Item as='li'>
      CLIs for all the main tools I use (mongo, mysql, pg, node, etc)
    </List.Item>
    <List.Item as='li'>
      A morden <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.codeEditor)}>code editor </a>
      and it's key features
    </List.Item>
    <List.Item as='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.eslint)}>Eslint</a>
    </List.Item>
  </List>
);

export default DevTools;
