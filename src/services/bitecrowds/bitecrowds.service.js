const { Bitecrowds } = require('./bitecrowds.class');
const createModel = require('../../models/bitecrowds.model');
const hooks = require('./bitecrowds.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/bitecrowds', new Bitecrowds(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('bitecrowds');

  service.hooks(hooks);
};
