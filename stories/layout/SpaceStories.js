import * as React from 'react';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import { Space } from '../../src/components/ui/layout/Space';
import { UseTheme } from '../../src/components/theme/UseTheme';

export const addSpaceStories = () => {
         storiesOf('Space', module)
           .add('with default theme', withInfo()(() => (
               <div style={{ border: '1px solid black' }}>
                 <Space />
               </div>
             )))
           .add('with default theme and num=2', withInfo()(() => (
               <div style={{ border: '1px solid black' }}>
                 <Space num={2} />
               </div>
             )))
           .add('with custom theme', withInfo()(() => (
               <div style={{ border: '1px solid black' }}>
                 <UseTheme theme={{ metrics: { space: 20 } }}>
                   <Space />
                 </UseTheme>
               </div>
             )))
           .add('with custom theme and num=3', withInfo()(() => (
               <div style={{ border: '1px solid black' }}>
                 <UseTheme theme={{ metrics: { space: 20 } }}>
                   <Space num={3} />
                 </UseTheme>
               </div>
             )));
       };
