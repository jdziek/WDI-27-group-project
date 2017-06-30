function errorHandler(err, req, res, next) {

  if(err.name === 'ValidationError') {
    err.message = err.toString();
    err.status = 422;
  }

  err.message = err.message || 'Internal server error';
  err.status = err.status || 500;

  res.status(err.status).json({ message: err.message });
  next();
}

module.exports = errorHandler;
