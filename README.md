# React Shopping Cart

Simple shopping cart built with `React` and `Material-UI`.

## Pre-requisites

You'll need `node` installed (at least version 10) and `yarn` or `npm`

## Installation

Run `npm install` or `yarn` from the root

## Running locally

Run `npm run start` or `yarn start` for development. Production build can be obtained by running `npm run build | yarn build` and served locally if desired

## Tests

Project includes some cypress tests, run with `npm run cypress` or `yarn cypress`

## Potential Improvements

- Futher tests, including unit testing discrete components
- Better responsive design for smaller screens
- Refactor some larger components (especially `Cart.tsx`) into smaller components
- Add ability to generate PDF from cart details (perhaps using something like [this](https://github.com/diegomura/react-pdf)). Printing the page is useable for now
