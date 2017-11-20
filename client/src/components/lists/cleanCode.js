import React, { Component } from 'react';

import {
  List
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

const CleanCode = () => (
  <List as='ul'>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kSchemas)}><strong>SQL schemas with Knex</strong></a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.bsModel)}><strong>SQL models with Bookshelf ORM</strong></a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kQuery)}><strong>SQL query builder with Knex</strong></a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.kMigration)}><strong>SQL schemas migration Knex</strong></a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.cJavaScript)}><strong>Client-side JavaScript</strong></a>
    </List.Item>
    <List.Item as ='li'>
      <a className='subLinks' onClick={() => helper.openNewTab(links.artifacts.modHTMLCSS)}><strong>Modern HTML and CSS</strong></a>
    </List.Item>
  </List>
);

export default CleanCode;
