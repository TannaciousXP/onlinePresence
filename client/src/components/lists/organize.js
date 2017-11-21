import React, { Component } from 'react';

import {
  List,
  Image,
  Grid
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
          <strong>Login: </strong>
          <List.Item as='ol'>
            <List.Item as='li' value='-'>
              <Image className='beforeAfter' size='large' src='/assets/wireFrames/login.png'/>
              <Image className='beforeAfter' size='large' src='/assets/omniChat/login.jpg'/>
            </List.Item>
          </List.Item>
        </List.Item>
        <List.Item as='li' value='°'>
          <strong>Messages: </strong>
          <List.Item as='ol'>
            <List.Item as='li' value='-'>
              <Image className='beforeAfter' size='large' src='/assets/wireFrames/messages.png'/>
              <Image className='beforeAfter' size='large' src='/assets/omniChat/messages.jpg'/>
            </List.Item>
          </List.Item>
        </List.Item>
        <List.Item as='li' value='°'>
          <strong>Video Chat: </strong>
          <List.Item as='ol'>
            <List.Item as='li' value='-'>
              <Image className='beforeAfter' size='large' src='/assets/wireFrames/videoChat.png'/>
              <Image className='beforeAfter' size='large' src='/assets/omniChat/video.jpg'/>
            </List.Item>
          </List.Item>
        </List.Item>
        <List.Item as='li' value='°'>
          <strong>Friends: </strong>
          <List.Item as='ol'>
            <List.Item as='li' value='-'>
              <Image className='beforeAfter' size='large' src='/assets/wireFrames/friends.png'/>
              <Image className='beforeAfter' size='large' src='/assets/omniChat/friends.jpg'/>
            </List.Item>
          </List.Item>
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li' value='•'>
      Architecture
      <List.Item as='ol'>
        <List.Item as='li' value='°'>
          <Image size='large' src='/assets/omniChat/architecture.png'/>
        </List.Item>
      </List.Item>
    </List.Item>
    <List.Item as='li' value='•'>
      Tech Stack
      <List.Item as='ol'>
        <List.Item as='li' value='°'>
          <Image size='large' src='/assets/omniChat/techStack.jpg'/>
        </List.Item>
      </List.Item>
    </List.Item>
  </List>
);

export default Organize;
