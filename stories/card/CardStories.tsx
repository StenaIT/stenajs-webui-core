import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Card } from '../../src/components/ui/card/Card';

export const addCardStories = () => {
  storiesOf('Card/Card', module)
    .addDecorator(withInfo())
    .add('no header', () => (
      <div style={{ display: 'table', width: '100%' }}>
        <Card>CardContent</Card>
      </div>
    ))
    .add('header, no button', () => (
      <div style={{ display: 'table', width: '100%' }}>
        <Card title="CardTitle">CardContent</Card>
      </div>
    ))
    .add('header, button', () => (
      <div style={{ display: 'table', width: '100%' }}>
        <Card
          title="CardTitle"
          attributes={{ hasButton: true }}
          onClick={() => false}
        >
          CardContent
        </Card>
      </div>
    ))
    .add('header, notice', () => (
      <div style={{ display: 'table', width: '100%' }}>
        <Card
          title="CardTitle"
          attributes={{
            hasButton: true,
            notice: { color: 'blue', icon: 'sync', text: 'Information' },
          }}
          onClick={() => false}
        >
          CardContent
        </Card>
      </div>
    ))
    .add('expanded, header, button', () => (
      <div style={{ display: 'table', width: '100%' }}>
        <Card
          title="CardTitle"
          isExpanded={true}
          attributes={{ hasButton: true }}
          onClick={() => false}
        >
          CardContent
        </Card>
      </div>
    ));
};
