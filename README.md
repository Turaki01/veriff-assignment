# veriff-assignment

Created with CodeSandbox

### Purpose

The purpose of this document is to document and the design choices made for the assignment.

## Installation and setup

Clone down this repository. You will need node 12 + and yarn installed globally on your machine.

**Installation:** <br />
run <br />

`yarn install` <br />

to install all dependencies

**To start server:** <br />
`yarn start`

**To visit the app:** <br />
launch the project with the default port `e.g: localhost:3000`

To build the project: <br />
Run `yarn build` <br />

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

The Main branch is set to deploy to netlify.

## Technology Stack

The following technology choices have been made at the initial stages of this project

- **Typescript** - Typescript for better code organizing and object-arranged programming procedures

- **React Hot Toast** - For alert notifications. Used it for the success message when the checks are submitted

- **Context [State Management]** - state container for the project. The state stored in context is the list of checks
