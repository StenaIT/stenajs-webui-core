import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

export const StorybookCanvasWrapper: React.FC<Props> = ({ children }) => (
  <div
    style={{
      height: '50vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div style={{ display: 'inline-block' }}>
      <div style={{ display: 'table' }}>{children}</div>
    </div>
  </div>
);
