# farmify

A project to double productivity of rural farmers

## Installing and running locally

Clone the repository

Then run `yarn install`

## Test Files

Ensure to write unit tests for all components or functions 
All test files must be named in the form `filename.test.js`

### Running Test

To run tests navigate to the root of the repo and run `yarn run test`

## Deploying Frontend to Production

To deploy to production run `npm install -g firebase-tools`

Navigate in your terminal to  `farmify-frontend` folder

Run `yarn run build`

Run `firebase login` and login with the project credentials

Then run `firebase deploy`

You can visit the app after deployment at https://farmify-develop.web.app