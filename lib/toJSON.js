function toJSON(schema) {
  schema.set('toJSON', {
    virtuals: true,
    getters: true,
    transform(doc, json) {
      delete json._id;
      delete json.__v;
      return json;
    }
  });
}

module.exports = toJSON;
