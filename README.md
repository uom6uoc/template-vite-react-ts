# TEMPLATE_VITE_REACT_TYPESCRIPT

TEMPLATE_VITE_REACT_TYPESCRIPT

## Requirements

The project requires the following software versions or higher to run:

- Node.js >= 18.12.1
- NPM >= 8.19.2
- Yarn >= 1.22.19

## Installation

To install the project, run the following command:

```bash
yarn
```

This will install all the dependencies required to run the project.

Running the Project
To run the project, use the following command:

```bash
yarn dev

```

This will start the development server and open the project in your default web browser.

## Building and Previewing the Project

To build the project, use the following command:

```bash
yarn build
```

This will generate a production-ready build of the project in the dist directory.

To preview the production build, use the following command:

```bash
yarn preview
```

This will start a local server and open the production build of the project in your default web browser.

## Utilities

### Eslint

To lint the project using ESLint, use the following command:

```bash
yarn lint
```

### Prettier

To format the code using Prettier, use the following command:

```bash
yarn prettier
```

To automatically fix any formatting errors using Prettier, use the following command:

```bash
yarn prettier:fix
```

## directory structure

```
└─ src
 ├─ api
 ├─ assets
 ├─ components
 ├─ config
 ├─ constants
 ├─ contexts
 ├─ hooks
 ├─ pages
 ├─ utils
 ├─ App.js
 └─ main.js
```

#### `api/`

This directory contains modules related to API calls and logic, often including authentication-related files.

### `assets/`

This directory contains files such as images and fonts. There may be cases where these files are placed directly in the public directory, but the difference between the two is whether they are needed at compile time. Files like favicon that are used directly in index.html and not required at compile time can be placed in public, whereas image files used inside components should be placed in this assets/ directory.

### `components/`

This directory contains reusable components. Since there can be many components, it is common to further classify them as subdirectories within this directory.

### `config/`

This directory contains configuration files. If there are only a few config files, they are usually placed at the top level, but if there are multiple config files, they can be separated into a directory.

### `constants/`

This directory contains files defining commonly used constants.

### `contexts/`

This directory contains files related to the Context API, which is used for state management. If using Redux instead of Context API, the directory name can be changed to store/.

### `hooks/`

This directory contains custom hooks.

### `pages/`

This directory contains page components to be placed here when applying routing using libraries such as react-router.

### `utils/`

This directory contains utility files that are commonly used, such as regular expression patterns or common functions.
