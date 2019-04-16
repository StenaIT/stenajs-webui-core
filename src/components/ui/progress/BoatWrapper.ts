import styled from '@emotion/styled';

// tslint:disable:max-line-length
export const BoatWrapper = styled.div`
  .ferry {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    display: inline-block;
    width: 64px;
    height: 32px;
    border-radius: 3px 0 0 0;
    background-color: #2b2b2b;
    z-index: 1;
    -webkit-animation: bop 0.48s ease-in-out alternate infinite;
    animation: bop 0.48s ease-in-out alternate infinite;
    -webkit-box-shadow: inset 0 -5px 0 0 #e74c3c, inset 0 -15px 0 0 #2b2b2b,
      inset 0 -17px 0 0 #f0cf3c;
    box-shadow: inset 0 -5px 0 0 #e74c3c, inset 0 -15px 0 0 #2b2b2b,
      inset 0 -17px 0 0 #f0cf3c;
    border-top: 4px solid #ecf0f1;
  }

  @keyframes bop {
    to {
      -webkit-transform: translateY(-40%);
      transform: translateY(-40%);
    }
  }

  .ferry:after {
    content: '';
    position: absolute;
    top: -18px;
    right: 0;
    display: block;
    width: 45px;
    height: 15px;
    background-color: #ecf0f1;
    z-index: 1;
    border-radius: 3px 3px 0 0;
  }

  .ferry:before {
    content: '';
    position: absolute;
    -webkit-transform: rotate(-25deg);
    transform: rotate(-25deg);
    top: -5px;
    left: -3px;
    width: 10px;
    height: 50px;
    background-color: white;
  }

  .ferry .chimney {
    position: absolute;
    top: -35px;
    display: block;
    width: 17px;
    height: 22px;
    background-color: #f0cf3c;
    left: 32px;
    z-index: -1;
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
    -webkit-box-shadow: inset 0 3px 0 0 #2b2b2b;
    box-shadow: inset 0 3px 0 0 #2b2b2b;
  }

  .ferry .waves {
    position: absolute;
    bottom: -37px;
    display: block;
    width: 100px;
    height: 50px;
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjE1NSIgaGVpZ2h0PSI4NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSI4NyIgd2lkdGg9IjE1NyIgeT0iLTEiIHg9Ii0xIi8+CiAgPGcgZGlzcGxheT0ibm9uZSIgb3ZlcmZsb3c9InZpc2libGUiIHk9IjAiIHg9IjAiIGhlaWdodD0iMTAwJSIgd2lkdGg9IjEwMCUiIGlkPSJjYW52YXNHcmlkIj4KICAgPHJlY3QgZmlsbD0idXJsKCNncmlkcGF0dGVybikiIHN0cm9rZS13aWR0aD0iMCIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIvPgogIDwvZz4KIDwvZz4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8ZyBpZD0ic3ZnXzkiPgogICA8ZWxsaXBzZSByeT0iMjYiIHJ4PSIyNiIgaWQ9InN2Z18xIiBjeT0iMzMuNSIgY3g9IjM0LjUiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSIjZmZmIi8+CiAgIDxlbGxpcHNlIHJ5PSIyNiIgcng9IjI2IiBpZD0ic3ZnXzMiIGN5PSIzMy41IiBjeD0iNjMuODY4NDkzIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0iI2ZmZiIvPgogICA8ZWxsaXBzZSByeT0iMjYiIHJ4PSIyNiIgaWQ9InN2Z182IiBjeT0iMzMuNSIgY3g9IjkxLjcxODg4IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0iI2ZmZiIvPgogICA8ZWxsaXBzZSByeT0iMjYiIHJ4PSIyNiIgaWQ9InN2Z183IiBjeT0iMzMuNSIgY3g9IjEyMS4wODczNzMiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSIjZmZmIi8+CiAgIDxyZWN0IGlkPSJzdmdfOCIgaGVpZ2h0PSI0NiIgd2lkdGg9IjE0MC4wMDAwMDYiIHk9IjMyLjUiIHg9IjcuNSIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9IiNmZmYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPg==');
    background-size: 133% 144%;
    -webkit-animation: sail 4s linear infinite;
    animation: sail 4s linear infinite;
  }

  @keyframes sail {
    to {
      background-position: 400px 0;
    }
  }
`;
