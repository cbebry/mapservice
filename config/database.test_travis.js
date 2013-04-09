/*
  Should be used when process.env.NODE_ENV='travis_test'
  Travis tests use this database configuration. Make sure the table
  already exists before this file is loaded.
*/
exports.config = {
  type: 'mysql',
  hostname: '127.0.0.1',
  port: 3306,
  db: 'test_mapservice',
  user: 'root',
  password: ''
};
