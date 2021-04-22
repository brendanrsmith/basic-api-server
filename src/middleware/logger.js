'use strict'; 

module.exports = (req, res, next) => {
  console.log('request data: ', req.path, req.method);
  next();
}