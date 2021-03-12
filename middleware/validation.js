const { celebrate, Joi } = require('celebrate');

const signUpValidation = celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().min(5).email().required(),
    password: Joi.string().min(8).required(),
    dateOfBirth: Joi.string().min(8).required(), 
    aboutMe: Joi.string().min(4).required(),
    avatar: Joi.string().min(4).required()
  }),    
});

const updateUserValidation = celebrate({
  body: Joi.object().keys({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(4).required(),
    dateOfBirth: Joi.string().min(8).required(),
    aboutMe: Joi.string().min(4).required(),
    avatar: Joi.string().min(4).required()
  }),
});

const loginValidation = celebrate({
  body: Joi.object().keys({
    password: Joi.string().min(8).required(),
    email: Joi.string().min(5).email().required()
  }),
});

module.exports =  { signUpValidation, updateUserValidation, loginValidation };
