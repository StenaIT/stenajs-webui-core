import { typography } from '../base';

/* tslint:disable */
export const stenaWebUiCoreStyles = (stylesheet: any) => ({
  ...stylesheet,
  button: {
    ...stylesheet.button,
    base: {
      ...stylesheet.button.base,
      fontFamily: typography.fonts.base,
      fontSize: '12px',
      display: 'block',
      position: 'fixed',
      border: 'none',
      background: '#28c',
      color: '#fff',
      padding: '5px 15px',
      cursor: 'pointer',
    },
    topRight: {
      ...stylesheet.button.topRight,
      top: 0,
      right: 0,
      borderRadius: '0 0 0 5px',
    },
  },
  info: {
    ...stylesheet.info,
    fontFamily: typography.fonts.base,
    position: 'fixed',
    background: 'white',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 40px',
    overflow: 'auto',
    zIndex: 99999,
  },
  children: {
    ...stylesheet.children,
    fontFamily: typography.fonts.base,
    position: 'relative',
    zIndex: 0,
  },
  infoBody: {
    ...stylesheet.infoBody,
    fontFamily: typography.fonts.base,
    fontWeight: 300,
    lineHeight: 1.45,
    fontSize: '15px',
    border: '1px solid #eee',
    padding: '20px 40px 40px',
    borderRadius: '2px',
    backgroundColor: '#fff',
    marginTop: '20px',
    marginBottom: '20px',
  },
  infoContent: {
    ...stylesheet.infoContent,
    fontFamily: typography.fonts.base,
    marginBottom: 0,
  },
  infoStory: {
    ...stylesheet.infoStory,
  },
  jsxInfoContent: {
    ...stylesheet.jsxInfoContent,
    borderTop: '1px solid #eee',
    margin: '20px 0 0 0',
  },
  header: {
    ...stylesheet.header,
    h1: {
      ...stylesheet.header.h1,
      fontFamily: typography.fonts.base,
      margin: 0,
      padding: 0,
      fontSize: '35px',
    },
    h2: {
      ...stylesheet.header.h2,
      margin: typography.fonts.base,
      padding: 0,
      fontWeight: 400,
      fontSize: '22px',
    },
    h3: {
      ...stylesheet.header.h3,
      margin: typography.fonts.base,
      padding: 0,
      fontWeight: 400,
      fontSize: '18px',
    },
    body: {
      ...stylesheet.header.body,
      fontFamily: typography.fonts.base,
      borderBottom: '1px solid #eee',
      paddingTop: 10,
      marginBottom: 10,
    },
  },
  source: {
    ...stylesheet.source,
    h1: {
      ...stylesheet.source.h1,
      fontFamily: typography.fonts.mono,
      margin: '20px 0 0 0',
      padding: '0 0 5px 0',
      fontSize: '25px',
      borderBottom: '1px solid #EEE',
    },
  },
  propTableHead: {
    ...stylesheet.propTableHead,
    margin: '20px 0 0 0',
  },
});
