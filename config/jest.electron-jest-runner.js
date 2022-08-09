const common = require('./jest.common');;

module.exports = {
    ...common,
    runner: '@jest-runner/electron',
    testEnvironment: '@jest-runner/electron/environment',
}