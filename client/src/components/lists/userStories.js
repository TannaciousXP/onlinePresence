import React, { Comoponent } from 'react';

import {
  List
} from 'semantic-ui-react';

const UserStories = () => (
  <List as='ul'>
    <List.Item as='li'>
      As a user, I expect to sign up and log into the application with ease using OAuth.
    </List.Item>
    <List.Item as='li'>
      As a user, I intend to create groups and channels as I want or need.
    </List.Item>
    <List.Item as='li'>
      As a user, I expect be able to invite other users to my groups and join other user groups.
    </List.Item>
    <List.Item as='li'>
    As a user, I expect to be able to send text messages to other users and receive messages
    from other users while differentiating my messages from other messages.
    </List.Item>
    <List.Item as='li'>
    As a user, I expect to be able to speak with other users using voice chat,
    but also be able to mute voice chat as necessary.
    </List.Item>
    <List.Item as='li'>
      As a user, I expect to be able to log out to protect my information/privacy.
    </List.Item>
    <List.Item as='li'>
    As a user, I expect to be able to customize my own profile with a picture and
    username for other users to see.
    </List.Item>
    <List.Item as='ol'>
    Post MVP
      <List.Item as='li' value='°'>
    As a user, I expect to create events with Google Calendar
      </List.Item>
      <List.Item as='li' value='°'>
    As a user, I expect to receive SMS reminders of the event
      </List.Item>
      <List.Item as='li' value='°'>
    As a user, I expect to share files
      </List.Item>
      <List.Item as='li' value='°'>
    As a user, I expect to screen share and screen recording
      </List.Item>
    </List.Item>
  </List>
);

export default UserStories;
