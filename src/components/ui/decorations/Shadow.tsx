import * as React from 'react';

export class Shadow extends React.Component {
  render() {
    return (
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 10px 4px' }}>
        {this.props.children}
      </div>
    );
  }
}
