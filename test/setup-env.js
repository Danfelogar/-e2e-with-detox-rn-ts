import {server} from './server/server';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

// remember to map this file inside the package.json in the part of:

// "setupFilesAfterEnv": [
//        "@testing-library/jest-native/extend-expect",
//        "./test/setup-env.js"
//      ],
