import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Button} from '../src/components/Button';

storiesOf('Button', module)
    .add('with text',
        withInfo()(() => <Button onClick={action('clicked')}>Hello Button</Button>)
    )
    .add('with some emoji',
        withInfo()(() => <Button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>)
    );
