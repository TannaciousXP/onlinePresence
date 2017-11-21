import React, { Component } from 'react';

import {
  List
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

const CleanCode = () => (
  <List as='ul'>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kSchemas)}>SQL schemas with Knex</a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.bsModel)}>SQL models with Bookshelf ORM</a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kQuery)}>SQL query builder with Knex</a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kMigration)}>SQL schemas migration with Knex</a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.cJavaScript)}>Client-side JavaScript</a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.modHTMLCSS)}>Modern HTML and CSS</a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.promises)}>Promises</a>
    </List.Item>
  </List>
);

export default CleanCode;
