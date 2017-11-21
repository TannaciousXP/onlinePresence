import React, { Component } from 'react';

import {
  List
} from 'semantic-ui-react';

const ProjectManagement = () => (
  <List as='ol' value='i'>
    <List.Item as='li'>
    Project Management
      <List.Item as='ol'>
        <List.Item as='li'>
          Trello: Ticketing system
        </List.Item>
        <List.Item as='li'>
          Google Drive: Create the source of truth for resources
        </List.Item>
        <List.Item as='li'>
          Google Calendar: Prioritize your day with tickets from Trello
        </List.Item>
        <List.Item as='li'>
          Slack: Team communication
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li'>
    Project Management
      <List.Item as='ol'>
        <List.Item as='li'>
          Trello: Ticketing System
        </List.Item>
      </List.Item>
    </List.Item>
  </List>
);

export default ProjectManagement;
