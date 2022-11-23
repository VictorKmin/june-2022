const Joi = require('joi');
const regexp = require('../config/regexp.enum');

module.exports = {
  newUserValidator: Joi.object({
    name: Joi.string().min(2).max(100).required().default(''),
    email: Joi.string().regex(regexp.EMAIL).lowercase().trim().required(),
    password: Joi.string().regex(regexp.PASSWORD).required(),
    age: Joi.number().integer().min(1).max(120)
  }),

  editUserValidator: Joi.object({
    name: Joi.string().min(2).max(100).default('').optional(),
    email: Joi.string().regex(regexp.EMAIL).lowercase().trim().optional(),
    age: Joi.number().integer().min(1).max(120).optional()
  }),
}
