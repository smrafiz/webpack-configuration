# WordPress Plugin Webpack v5 Workflow

![WebPack 5.73.0](https://img.shields.io/badge/WebPack-5.73.0-brightgreen)
![Babel 7.18.6](https://img.shields.io/badge/Babel-7.18.6-brightgreen)
![BrowserSync 2.27.10](https://img.shields.io/badge/BrowserSync-2.27.10-brightgreen)
![PostCSS 8.4.14](https://img.shields.io/badge/PostCSS-8.4.14-brightgreen)
![Sass 1.53.0](https://img.shields.io/badge/Sass-1.53.0-brightgreen)
![ESLint 8.18.0](https://img.shields.io/badge/ESLint-8.18.0-brightgreen)

<hr />

**This is a modified version of brandonkramer's [**WordPress Webpack v5 Workflow**](https://github.com/brandonkramer/wordpress-webpack-workflow#wordpress-webpack-v5-workflow). All credits goes to him.**
<hr />
<br />

<table width='100%' align="center">
    <tr>
        <td align='left' width='100%' colspan='2'>
            <strong>Webpack workflow to start your WordPress Plugin Projects</strong><br />
            This consists of standard and modern technologies that make front-end testing and development easier and launch a front-end build-workflow for your WordPress Plugins.
        </td>
    </tr>
</table>

Includes WebPack v5, BabelJS v7, BrowserSync v2, PostCSS v8, Autoprefixer, Eslint, Stylelint, SCSS processor, WPPot, a structured config & files, and much more.

## Quickstart

```bash
1. Run the npm command to get the files
     npm i -D wp-plugin-webpack-configuration
2. Edit the configuration settings in `webpack/project.config.js`
3. Start your npm build workflow with one of these commands:

yarn dev
yarn dev:watch
yarn prod
yarn prod:watch
yarn zip
```

<a href="#what-to-configure">Read more about the configuration & build scripts</a>

## Features & benefits

**Styling (CSS)**

>- **Minification** in production/zip mode handled by Webpack
>- [**PostCSS**](http://postcss.org/) for post CSS transformation using Webpack's [**PostCSS-loader**](https://webpack.js.org/loaders/postcss-loader/)
>- **Auto-prefixing** using PostCSS's [**autoprefixer**](https://github.com/postcss/autoprefixer) to parse CSS and add vendor prefixes to CSS rules using values from [Can I Use](https://caniuse.com/). It is [recommended](https://developers.google.com/web/tools/setup/setup-buildtools#dont_trip_up_with_vendor_prefixes) by Google and used in Twitter and Alibaba.
>- **Sourcemaps** generation for debugging purposes with [various styles of source mapping](https://webpack.js.org/configuration/devtool/) handled by WebPack
>- [**Stylelint**](https://stylelint.io/) that helps you avoid errors and enforce conventions in your styles. It includes a [linting tool for Sass](https://github.com/kristerkari/stylelint-scss).


**Styling when using Sass+PostCSS**
> - **Sass to CSS conversion** using Webpack's [**sass-loader**](https://webpack.js.org/loaders/sass-loader/)
>- Includes [**Sass magic importer**](https://github.com/maoberlehner/node-sass-magic-importer) to do lot of fancy things with Sass @import statements


**JavaScript**
> - [**BabelJS**](https://babeljs.io/) Webpack loader to use next generation Javascript with a  **BabelJS Configuration file**
>- **Minification** in production mode
>- **Sourcemaps** generation for debugging purposes with [various styles of source mapping](https://webpack.js.org/configuration/devtool/) handled by WebPack
>- [**ESLint**](https://eslint.org/) find and fix problems in your JavaScript code with a  **linting configuration** including configurations and custom rules for WordPress development.
>- [**Prettier**](https://prettier.io/) for automatic JavaScript / TypeScript code **formatting**

**Images**

> - [**ImageMinimizerWebpackPlugin**](https://webpack.js.org/plugins/image-minimizer-webpack-plugin/) + [**CopyWebpackPlugin**](https://webpack.js.org/plugins/copy-webpack-plugin/)
    to optimize (compress) all images using
>- _File types: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`_

**Translation**

> - [**WP-Pot**](https://github.com/wp-pot/wp-pot-cli) scans all the files and generates `.pot` file automatically for i18n and l10n

**BrowserSync, Watcher & WebpackBar**

> - [**Watch Mode**](https://webpack.js.org/guides/development/#using-watch-mode), watches for changes in files to recompile
>- _File types: `.css`, `.js`, `.php`_
>- [**BrowserSync**](https://browsersync.io/), synchronising browsers, URLs, interactions and code changes across devices and automatically refreshes all the browsers on all devices on changes
>- [**WebPackBar**](https://github.com/nuxt/webpackbar) so you can get a real progress bar while development which also includes a **profiler**

**Production Zip file**
>- Create production ready Zip file
>- Include the files and folders of your choice
>- Zip file will read the version from the plugin main php file and include it in the zip

**Configuration**

>- All configuration files `.prettierrc.js`, `.eslintrc.js`, `.stylelintrc.js`, `babel.config.js`, `postcss.config.js` are organised in a single folder
>- The Webpack configuration is divided into 2 environmental config files for the development and production build/environment

## Requirements

- [Node.js](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)

## File structure

```bash
├── package.json                     # Node.js dependencies & scripts (NPM functions)
├── webpack.config.js                # Holds all the base Webpack configurations
├── webpack                          # Folder that holds config file and sub-config folder
│   ├── project.config.js            # Custom project configuration
│   ├── configs                      # Folder that holds all the sub-config files
│   │   ├── .prettierrc.js           # Configuration for Prettier
│   │   ├── .eslintrc.js             # Configuration for Eslint
│   │   ├── .stylelintrc.js          # Configuration for Stylelint
│   │   ├── babel.config.js          # Configuration for BabelJS
│   │   ├── postcss.config.js        # Configuration for PostCSS
│   │   ├── zip.script.js            # Configuration for building .zip file
│   │   ├── config.base.js           # Base config for Webpack's development & production mode
│   │   ├── config.development.js    # Configuration for Webpack in development mode
│   │   ├── config.production.js     # Configuration for Webpack in production mode
│   │   ├── config.distribution.js   # Configuration for Webpack in production mode and build zip file
├──languages                         # WordPress default language map in Plugins
│   ├── wp-wordpress-webpack.pot     # Boilerplate POT File that gets overwritten by WP-Pot
└──assets
    ├── src                          # Holds all the source files
    │   ├── images                   # Uncompressed images
    │   ├── scss/pcss                # Holds the Sass/PostCSS files
    │   │ ├─ frontend.scss/pcss      # For front-end styling
    │   │ └─ backend.scss/pcss       # For back-end / wp-admin styling
    │   └── js                       # Holds the JS files
    │     ├─ frontend.js             # For front-end scripting
    │     └─ backend.js              # For back-end / wp-admin scripting
    │
    └── public
        ├── images                   # Optimized (compressed) images
        ├── css                      # Compiled CSS files with be generated here
        └── js                       # Compiled JS files with be generated here
```

## What to configure

1. Edit the `/webpack/project.config.js` with your project data. These settings are pretty self explanatory.
   - Source Directory represents the source css, js & images, Output Directory is where the compiled assets will go.
   - CSS & JS are the names (array) of the respective css & js file names. Note that, if you import css in your js file, no need to include it in the css array.
   - buildIncludes is the list of files & folders you need to copy in production. You must need to include all the files & folders for production.
   - There are also some settings for translations and browserSync.
2. Edit the BrowserSync settings in `webpack.config.js` which applies to your local/server environment.
    - You can also disable BrowserSync, Eslint & Stylelint in `webpack.config.js`.
3. The workflow is ready to start, you may want to configure the files in `/webpack/configs/` to better suite your needs.

## Developing Locally

To work on the project locally (with Eslint, Stylelint & Prettier active), run:

```bash
yarn dev
```

Or run with watcher & browserSync

```bash
yarn dev:watch
```

This will open a browser, watch all files (php, scss, js, etc) and reload the browser when you save.

## Building for Production

To create an optimized production build (fully minified CSS & JS files, generate translation .pot file), run:

```bash
yarn prod
```

Or run with watcher & browserSync

```bash
yarn prod:watch
```


Or build a production .zip file

```bash
yarn zip
```

## More Scripts/Tasks

```bash
# To find problems in your JavaScript code
yarn eslint

# To find fix problems in your JavaScript code
yarn eslint:fix

# To find problems in your sass/css code
yarn stylelint

# To find fix problems in your sass/css code
yarn stylelint:fix

# To make sure files in assets/src/js are formatted
yarn prettier

# To fix and format the js files in assets/src/js
yarn prettier:fix

# To scan for text-domain functions and generate WP POT translation file
yarn translate
```

## WordPress Plugin Webpack Workflow's Changelog
#### July 03, 2022
* Initial release

___
[__Buy Brandonkramer a coffee! :coffee:__](https://www.buymeacoffee.com/brandonkramer)
