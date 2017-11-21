import React, { Component } from 'react';

import {
  List,
  Image
} from 'semantic-ui-react';

import links from '../../../../public/links';
import helper from '../../../../server/helperFuncs';

const Organize = () => (
  <List as='ol'>
    <List.Item as='li' value='•'>
      Structured, step-by-step problem solving process road map
      <List.Item as='ol'>
        <List.Item as='li' value='°'>
          <Image size='medium' src='/assets/omniChat/roadMap.png'/>
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li' value='•'>
      Identify key choices and weigh the pros and cons
      <List.Item as='ol'>
        <List.Item as='li' value='°'>
          <Image size='medium' src='/assets/omniChat/keyChoices.png'/>
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li' value='•'>
      Root out assumptions and validate them as I go
      <List.Item as='ol'>
        <List.Item as='li' value='°'>
          <Image size='medium' src='/assets/omniChat/validation.jpg'/>
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li' value='•'>
      I plan in terms of components and flows through component
      <List.Item as='ol'>
        <List.Item as='li' value='°'>
          Login: <br/>
          <span>
            <Image size='medium' src='/assets/wireFrames/login.png'/>
            <Image size='medium' src='/assets/omniChat/login.jpg'/>
          </span>
        </List.Item>
        <List.Item as='li' value='°'>
          Messages: <br/>
          <Image size='large' src='/assets/wireFrames/messages.png'/>
          <Image size='large' src='/assets/omniChat/messages.jpg'/>
        </List.Item>
        <List.Item as='li' value='°'>
          Video Chat: <br/>
          <Image size='large' src='/assets/wireFrames/videoChat.png'/>
          <Image size='large' src='/assets/omniChat/video.jpg'/>
        </List.Item>
        <List.Item as='li' value='°'>
          Friends: <br/>
          <Image size='large' src='/assets/wireFrames/friends.png'/>
          <Image size='large' src='/assets/omniChat/friends.jpg'/>
        </List.Item>
      </List.Item>
    </List.Item>
  </List>
);

export default Organize;
