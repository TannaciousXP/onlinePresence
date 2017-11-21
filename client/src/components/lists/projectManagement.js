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
      Pre-Gitflow
      <List.Item as='ol'>
        <List.Item as='li'>
          Fork the repo from organization to personal
        </List.Item>
        <List.Item as='li'>
          Clone from personal repo to local machine
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li'>
    Gitflow
      <List.Item as='ol'>
        <List.Item as='li'>
          Rebase upstream master in your master branch
        </List.Item>
        <List.Item as='li'>
          Create new feature branch from master
        </List.Item>
        <List.Item as='li'>
          Working from feature branch make frequent commits
        </List.Item>
        <List.Item as='li'>
        When you've finished with your fix or feature, Rebase upstream changes
        into your branch. submit a pull request directly to master. Include a description of your changes.
        </List.Item>
        <List.Item as='li'>
        Your pull request will be reviewed by another maintainer. The point of code reviews is to help
        keep the codebase clean and of high quality and, equally as important, to help you grow
        as a programmer. If your code reviewer requests you make a change you don't understand, ask them why.
        </List.Item>
        <List.Item as='li'>
        Fix any issues raised by your code reviewer, and push your fixes as a single new commit.
        </List.Item>
        <List.Item as='li'>
        Once the pull request has been reviewed, it will be squashed and merged by another member of the team.
        Do not merge your own commits.
        </List.Item>
      </List.Item>
    </List.Item>
  </List>
);

export default ProjectManagement;
