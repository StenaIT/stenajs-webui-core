# stenajs-webui-common

A library with common UI components for React,

## Installation

```
$ yarn add stenajs-webui-core
```

or with NPM:

```
$ npm install stenajs-webui-core
```

## Documentation

See component examples in the storybook, [https://stenait.github.io/stenajs-webui-core](https://stenait.github.io/stenajs-webui-core)

## Usage

### Components

For documentation on the components, see the Storybook.

### Icons

This library uses FontAwesome 5, which adds some setup steps.

#### 1) Install the icon packs that you want

```
$ yarn add @fortawesome/fontawesome-svg-core
```

Install any other icon packs that you want to use.

```
$ yarn add @fortawesome/free-brands-svg-icons
$ yarn add @fortawesome/free-regular-svg-icons
$ yarn add @fortawesome/free-solid-svg-icons
```

#### 2) Build your library

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

For more information, [https://github.com/FortAwesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome)
