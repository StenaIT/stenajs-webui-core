import { css } from 'react-emotion';

export const cardWrapperStyle = css(`
    float: left;
    box-sizing: border-box;
    padding: 0 .75rem;
    min-height: 1px;
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
`);
export const cardWrapperExpandedStyle = css(`
    width: 100% !important;
    z-index: 5;
    margin-left: auto;
    left: auto;
    right: auto;
`);
export const cardContentStyle = css(`
    position: relative;
    margin: 0;
    background: white;
    color: #3b4145;
`);
export const cardTitleStyle = css(`
    font-size: 15px;
    color: #3A4145;
    letter-spacing: -0.03px;
    font-weight: 600;
`);
