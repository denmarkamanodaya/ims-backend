const BaseCustomError = require('./base-error');

class JoiValidation extends BaseCustomError {
  name = this.constructor.name;

  stack = `Joi Validation ${this.stack}`;
}

module.exports = {
  JoiValidation
};
