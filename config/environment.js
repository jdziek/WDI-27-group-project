const port          = process.env.PORT || 4000;
const env           = process.env.NODE_ENV || 'development';
const dbURI         = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/WDI-27-group-project';

module.exports = { port, env, dbURI };
