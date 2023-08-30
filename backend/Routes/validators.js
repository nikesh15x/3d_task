const { body, validationResult } = require('express-validator');

exports.validateUserFields = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('name').notEmpty().withMessage('Name is required'),
  body('password').notEmpty().withMessage('Password is required'),
  body('confirmPassword').notEmpty().withMessage('Confirm Password is required').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords do not match.');
    }
    return true;
  })
];

exports.validateLoginFields = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').notEmpty().withMessage('Password is required')
]

exports.validateProductFields = [
  body('name').notEmpty().withMessage('name is required'),
  body('description').notEmpty().withMessage('description is required'),
  body('price').notEmpty().isNumeric().withMessage('price is required'),
  body('crest').notEmpty().isNumeric().withMessage('Crest is required'),
  body('ingredients').notEmpty().isNumeric().withMessage('ingredients is required'),
]