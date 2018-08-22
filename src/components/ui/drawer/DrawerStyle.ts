import { css } from 'react-emotion';

export const drawerWrapperStyle = css(`
    display: none;
    position: fixed;
    top: 150px;
    left: -500px;
    height: 100%;
    width: 400px;
    -webkit-transition: 0.6s all;
    -o-transition: 0.6s all;
    transition: 0.6s all;
    display: block;
    z-index: 9999;
    background: white;
    padding-bottom: 150px;
`);
export const drawerOpenWrapperStyle = css(`
    left: 0;
`);



export const a = css(`
    .StatisticsFilterDrawer--open {
      left: 0; }
      
    .StatisticsFilterDrawerHeader {
      background: #87b758;
      text-align: right; }
      
    .StatisticsFilterDrawerContent {
      height: 100%;
      overflow-y: scroll; }
      
      .StatisticsFilterDrawerContentWrapper {
        margin: 15px 10px;
        border: 1px solid #ebebeb;
        border-radius: 1px; }
        
      .StatisticsFilterDrawerContent .Collapsible__trigger {
        font-size: 15px;
        font-weight: 500;
        padding: 9px 15px;
        position: relative;
        border-bottom: 1px solid #ebebeb;
        color: #3b4145;
        display: block;
        height: 40px;
        line-height: 22px; }
        
        .StatisticsFilterDrawerContent .Collapsible__trigger strong {
          float: right;
          margin-right: 22px;
          font-size: 0.8em; }
          
        .StatisticsFilterDrawerContent .Collapsible__trigger:after, .StatisticsFilterDrawerContent .Collapsible__trigger:before {
          content: "\\A0";
          position: absolute;
          top: 19px;
          right: 10px;
          width: 10px;
          height: 2px;
          background: #3b4145;
          -ms-transform: rotate(-45deg);
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          -webkit-transition: 0.4s all;
          -o-transition: 0.4s all;
          transition: 0.4s all; }
          
        .StatisticsFilterDrawerContent .Collapsible__trigger:after {
          -ms-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
          margin-right: 6px; }
          
        .StatisticsFilterDrawerContent .Collapsible__trigger.is-open {
          background: #ebebeb;
          font-weight: 600; }
          
          .StatisticsFilterDrawerContent .Collapsible__trigger.is-open:before {
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg); }
            
          .StatisticsFilterDrawerContent .Collapsible__trigger.is-open:after {
            -ms-transform: rotate(-45deg);
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg); }
            
        .StatisticsFilterDrawerContent .Collapsible__trigger:last-child {
          border-bottom: 0; }
          
      .StatisticsFilterDrawerContent select {
        display: inline-block !important;
        width: 50%; }
        
    .StatisticsFilterDrawer .FilterPart {
      display: inline-block;
      width: 50%; }
      
      .StatisticsFilterDrawer .FilterPart select {
        width: 100% !important; }
`);