## Jest and Enzyme Practice

Built on top of my <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate">Webpack-React-Boilerplate</a>.

For package dependencies, click <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate#packages-incorporated">here</a>.

## Installation

1 - Clone the boilerplate repository.

```
 git clone -b master git@github.com:mattcarlotta/Jest-Enzyme-Practice.git
```

2 - Run `npm i` to install dependencies.

3 - While at the application's root folder, start the `jest` and `enzyme` tests by running `npm run test`.

4 - To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser.

5 - While at the application's root folder, start the `webpack-dev-server` by running `npm run dev`.

## Commands

To lint the .js files, run `npm run lintjs`.

To prettify the .js files, run `npm run format`.

To lint the .scss files, run `npm run lintstyles`.

To build and bundle the client resources for staging, use `npm run staging` while inside the `root` folder (staging utilizes source maps for errors).

To build and bundle the client resources for production, use `npm run build` while inside the `root` folder (source maps will be excluded).
