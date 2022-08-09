const common = require('./jest.common');;

module.exports = {
    ...common,
    testEnvironment: "@happy-dom/jest-environment",
}