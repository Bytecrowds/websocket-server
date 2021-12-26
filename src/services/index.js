const bitecrowds = require('./bitecrowds/bitecrowds.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(bitecrowds);
};
