# Berlitz React Developer Test

## Project info

[Tachyons](https://tachyons.io/docs/table-of-styles/) css framework and Ant Design UI library are used together with SASS.<br>
[Ant Design](https://ant.design/) stylesheet can be overwritten in the src/styles/antd/ library.<br>
<br>
The component labels are filled up from .json files in src/dictionary.
<br>
The product information comes from a product object from product.js in src/services as a substitute for an API service that fetches the product data.


## Download and run

Clone the application:

```console
git clone https://github.com/xaositectt/berlitz_exercise.git
```

you need [yarn](https://yarnpkg.com/lang/en/docs/install) to install the dependencies:

```console
yarn install
```

Run the application in development mode:

```console
yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Build

```console
yarn build
```

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## Test

```console
yarn test
```

Runs puppeteer + jest tests in Chromium to test the input and DOM elements.
