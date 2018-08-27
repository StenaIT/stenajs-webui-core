import { css } from 'react-emotion';

export const drawerWrapperStyle = css(`
    position: fixed;
    left: -500px;
    height: 100%;
    width: 400px;
    -webkit-transition: 0.6s all;
    -o-transition: 0.6s all;
    transition: 0.6s all;
    display: block;
    z-index: 9999;
    background: white;
    
    .accordion *{
        box-sizing: border-box;
    }
    .accordion__title,
    .Collapsible__trigger{
        font-size: 14px;
        font-family: "Open Sans";
        border-bottom: 1px solid #ebebeb !important;
        border-top: 1px solid #ebebeb;
    }
    
    .accordion__body,  
    .Collapsible__contentInner{
        padding: 10px 15px;
    }
`);
export const drawerOpenWrapperStyle = css(`
    left: 0;
`);
export const drawerContentStyle = css(`
    height: 100%;
    overflow-y: scroll;
`);

export const collapsibleStyle = css(`
  cursor:pointer;

  .accordion__title,
  .Collapsible__trigger{
      font-size: 14px;
      font-family: "Open Sans";
  }
  
  .accordion__body,  
  .Collapsible__contentInner{
    padding: 10px 15px;
  }
`);
export const collapsibleStaticStyle = css(`
    width:100%;
    border:0;
    padding:0;
    text-align:left;

    .accordion__title,
    .Collapsible__trigger{
        border-bottom: 1px solid #ebebeb !important;
        border-top: 1px solid #ebebeb;
    }

    &:hover,&:active,&:focus{
      background:transparent;
    }
  }
`);
