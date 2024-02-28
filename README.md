# TEMPLATE_PROJECT

TEMPLATE_PROJECT

## Requirements

The project requires the following software versions or higher to run:

- Node >= v16.19.0
- NPM >= v8.19.2
- Yarn >= v1.22.19

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

## Structure

```
└─ package.json
└─ vite.config.ts
└─ tsconfig.json
└─ tsconfig.node.json
└─ .eslintrc
└─ .prettierrc
└─ .github

└─ index.html
└─ public
└─ src
 ├─ api
 ├─ assets
 ├─ components
 ├─ config
 ├─ constants
 ├─ hooks
 ├─ pages
 ├─ utils
 ├─ App.tsx
 ├─ Main.tsx
 └─ vite-env.d.ts

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

### `hooks/`

This directory contains custom hooks.

### `pages/`

This directory contains page components to be placed here when applying routing using libraries such as react-router.

### `utils/`

This directory contains utility files that are commonly used, such as regular expression patterns or common functions.

## Use

### Project Name

replace `TEMPLATE_PROJECT`

### Favicon

https://www.favicon-generator.org/

```
└─ public/
 └─ favicon/ (svg 24개)
  ├─ favicon.svg
  ├─ android-ico.svg
  ├─ apple-ico.svg
  └─ ms-ico.svg
 ├─ browserconfig.xml
 ├─ favicon.ico
 └─ manifest.json

```

#### manifest.josn (use this)

```
{
  "short_name": "TEMPLATE_PROJECT",
  "name": "TEMPLATE_PROJECT",
  "icons": [
    {
      "src": "/favicon/android-icon-36x36.png",
      "sizes": "36x36",
      "type": "image/png",
      "density": "0.75"
    },
    {
      "src": "/favicon/android-icon-48x48.png",
      "sizes": "48x48",
      "type": "image/png",
      "density": "1.0"
    },
    {
      "src": "/favicon/android-icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "density": "1.5"
    },
    {
      "src": "/favicon/android-icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "density": "2.0"
    },
    {
      "src": "/favicon/android-icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "density": "3.0"
    },
    {
      "src": "/favicon/android-icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "density": "4.0"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#FFFFFF",
  "background_color": "#000000"
}
```
