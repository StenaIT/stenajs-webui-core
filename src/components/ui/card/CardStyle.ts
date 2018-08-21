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
export const cardNotice = css(`
  height:30px;
  min-width:30px;
  line-height: 30px;
  border-radius:4px;
  text-align: center;
  color:white;
`);
export const cardNoticeContainer = css(`
  position: relative;
  margin-right:10px;

  .arrow_box {
    position: absolute;
    display: none;
    min-width: 120px;
    margin-top: 10px;
    left: 50%;
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &:hover{
    .arrow_box{
      display: block;
    }
  }
`);