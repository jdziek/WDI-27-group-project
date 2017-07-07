const port          = process.env.PORT || 4000;
const env           = process.env.NODE_ENV || 'development';
const dbURI         = process.env.MONGODB_URI || 'mongodb://localhost:27017/WDI-27-group-project';
const secret = process.env.SECRET || 'shhhhhhhhhhhh';

module.exports = { port, env, dbURI, secret };
