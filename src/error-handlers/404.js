'use strict';

module.exports = (req, res, next) => {
  res.status(404).json({ msg: 'route not found!' });
  next();
};
