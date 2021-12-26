module.exports = function (app) {
  const modelName = 'bitecrowds';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      text: { type: String, required: true }
    },
    {
      timestamps: true
    });

  // check if model already exists
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);

};
