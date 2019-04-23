# stenajs-webui-core

A library with common UI components for React,

### Yarn ###

All instructions are written with Yarn as package manager.
If you are using NPM, replace `yarn add` with `npm install --save` in the following instructions.

## Prerequisites
 
It is highly recommended that you use `create-react-app` to setup your application. This ensure that you have a proper webpack configuration.

For more information, see [https://facebook.github.io/create-react-app/]().

## Installation

```
$ yarn add stenajs-webui-core
```

This installs all dependencies, including two icon packs from Font Awesome that are used by components.
You can install more icon packs if you need them for your project. The included ones are `free-regular-svg-icons` and `free-solid-svg-icons`.
## Storybook

All components are documented in Storybook.

[https://stenait.github.io/stenajs-webui-core](https://stenait.github.io/stenajs-webui-core)

#### Run Storybook on your local machine

You can run Storybook locally by cloning the `stenajs-webui-core` repository and running:

```
yarn
yarn start
```

## Typescript

`stenajs-webui-core` is developed in Typescript, and all exported components and functions are fully typed.
It is recommended to use Typescript, as this will type-check your usage with the library.

`create-react-app` supports Typescript out of the box. Just create `.ts` and `.tsx` files in your project.
## Icons

This library uses FontAwesome 5, which adds some setup steps.

### 1) How to install

Install any other icon packs that you want to use.

For example, add `free-brands-svg-icons` like this:

```
$ yarn add @fortawesome/free-brands-svg-icons
```

The icon packs `free-regular-svg-icons` and `free-solid-svg-icons` is used by `stenajs-webui-core`.

### 2) How to use

#### a) Explicit import

```
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare,
    faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCheckCircle,
    faCircle,
} from '@fortawesome/free-regular-svg-icons';

const element = <Icon name={faCheckSquare} />
const element = <Icon name={faCoffee} />
const element = <Icon name={faCheckCircle} />
const element = <Icon name={faCircle} />

```

#### b) Build a Library

Create a source file, for example `initFontAwesome.ts`

Import `library` from `@fortawesome/fontawesome-svg-core`, and use `library.add` to add any icons that you want to use in your project.

```
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faCheckSquare,
    faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import {
    faCheckCircle,
    faCircle,
} from '@fortawesome/free-regular-svg-icons';

library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faCheckCircle,
    faCircle,
);
```

Then import `initFontAwesome` in your project.

`index.tsx`
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import './initFontAwesome';

ReactDOM.render(<App />, document.getElementById('root');
```

For more information, see [https://fontawesome.com/how-to-use/on-the-web/using-with/react]().
