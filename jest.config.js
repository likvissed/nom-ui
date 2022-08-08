module.exports = {
  verbose: true,
  preset: 'jest-preset-angular',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: 'coverage',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  testRunner: 'jest-jasmine2',
  moduleNameMapper: {},
  modulePaths: [ "<rootDir>" ]
};
