import { css } from 'react-emotion';

export const arrowWrapperStyle = css(`
.arrow_box {
    position: relative;
    background: #f9f7f4;
    border: 2px solid #a4a4f5;
}

.arrow_box.up:after,
.arrow_box.up:before {
    bottom: 100%;
    left: 50%;
}

.arrow_box.right:after,
.arrow_box.right:before {
    left: 100%;
    top: 50%;
}

.arrow_box.down:after,
.arrow_box.down:before {
    top: 100%;
    left: 50%;
}

.arrow_box.left:after,
.arrow_box.left:before {
    right: 100%;
    top: 50%;
}

.arrow_box:after,
.arrow_box:before {
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.arrow_box.up:after {
    border-bottom-color: #f9f7f4;
    margin-left: -8px;
}
.arrow_box.right:after {
    border-left-color: #f9f7f4;
    margin-top: -8px;
}
.arrow_box.down:after {
    border-top-color: #f9f7f4;
    margin-left: -8px;
}
.arrow_box.left:after {
    border-right-color: #f9f7f4;
    margin-top: -8px;
}

.arrow_box:after {
    border-color: rgba(237, 237, 237, 0);
    border-width: 8px;
}
.arrow_box.up:before {
    border-bottom-color: #a4a4f5;
    margin-left: -11px;
}

.arrow_box.right:before {
    border-left-color: #a4a4f5;
    margin-top: -11px;
}

.arrow_box.down:before {
    border-top-color: #a4a4f5;
    margin-left: -11px;
}

.arrow_box.left:before {
    border-right-color: #a4a4f5;
    margin-top: -11px;
}

.arrow_box:before {
    border-color: rgba(164, 164, 245, 0);
    border-width: 11px;
}
`);
