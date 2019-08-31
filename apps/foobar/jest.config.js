module.exports = {
  name: 'foobar',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/foobar',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
