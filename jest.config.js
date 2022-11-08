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
  moduleNameMapper: {
    "primeng-locale": [
      "src/app/lib/primeng.locale.ts"
    ],
    "@store/shared/(.*)": '<rootDir>/src/app/ui/shared/store/$1',
    "@store/article/(.*)": '<rootDir>/src/app/ui/article/store/$1',
    "@store/deptname/(.*)": '<rootDir>/src/app/ui/deptname/store/$1',
    "@store/nomenclature/(.*)": '<rootDir>/src/app/ui/nomenclature/store/$1',
    "@store/order/(.*)": '<rootDir>/src/app/ui/order/store/$1',
    "@store/user/(.*)": '<rootDir>/src/app/ui/user/store/$1',
  },
  modulePaths: [ "<rootDir>" ],
  setupFiles: [
    '<rootDir>/tests/jest.stub.js',
  ]
};
