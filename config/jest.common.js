/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: "ts-jest/presets/js-with-babel",
    rootDir: '../',
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
    transformIgnorePatterns: [
        "node_modules/(?!(@vaadin|lit|@lit|lit-html|lit-element|@polymer|testing-library__dom|@open-wc)/)"
    ],
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "./config/test-setup.ts"
    ],
    globals: {
        "ts-jest": {
            "tsconfig": "tsconfig.test.json"
        }
    }
};