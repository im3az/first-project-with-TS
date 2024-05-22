import Joi from 'joi';

// creating a schema validation using joi
const userNameSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .regex(/^[A-Z][a-z]*$/, 'firstName format')
    .messages({
      'string.base': 'First name should be a type of string',
      'string.empty': 'First name is required',
      'string.max': 'First name length cannot be more than 20 characters',
      'string.pattern.name': '{#label} is not in the right format',
      'any.required': 'First name is required',
    }),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      'string.base': 'Last name should be a type of string',
      'string.empty': 'Last name is required',
      'string.pattern.base': '{#value} is not valid',
      'any.required': 'Last name is required',
    }),
});

// Guardian Schema
const guardianSchema = Joi.object({
  fatherName: Joi.string().trim().required().messages({
    'string.base': 'Father name should be a type of string',
    'string.empty': 'Father name is required',
    'any.required': 'Father name is required',
  }),
  fatherOccupatioN: Joi.string().trim().required().messages({
    'string.base': 'Father occupation should be a type of string',
    'string.empty': 'Father occupation is required',
    'any.required': 'Father occupation is required',
  }),
  fatherContactNo: Joi.string().trim().required().messages({
    'string.base': 'Father contact number should be a type of string',
    'string.empty': 'Father contact number is required',
    'any.required': 'Father contact number is required',
  }),
  motherName: Joi.string().trim().required().messages({
    'string.base': 'Mother name should be a type of string',
    'string.empty': 'Mother name is required',
    'any.required': 'Mother name is required',
  }),
  motherOccupatioN: Joi.string().trim().required().messages({
    'string.base': 'Mother occupation should be a type of string',
    'string.empty': 'Mother occupation is required',
    'any.required': 'Mother occupation is required',
  }),
  motherContactNo: Joi.string().trim().required().messages({
    'string.base': 'Mother contact number should be a type of string',
    'string.empty': 'Mother contact number is required',
    'any.required': 'Mother contact number is required',
  }),
});

// Local Guardian Schema
const localGuardianSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian name should be a type of string',
    'string.empty': 'Local Guardian name is required',
    'any.required': 'Local Guardian name is required',
  }),
  occupation: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian occupation should be a type of string',
    'string.empty': 'Local Guardian occupation is required',
    'any.required': 'Local Guardian occupation is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian contact number should be a type of string',
    'string.empty': 'Local Guardian contact number is required',
    'any.required': 'Local Guardian contact number is required',
  }),
  address: Joi.string().trim().required().messages({
    'string.base': 'Local Guardian address should be a type of string',
    'string.empty': 'Local Guardian address is required',
    'any.required': 'Local Guardian address is required',
  }),
});

// Student Schema
const JoiValidationSchema = Joi.object({
  id: Joi.string().trim().required().messages({
    'string.base': 'ID should be a type of string',
    'string.empty': 'ID is required',
    'any.required': 'ID is required',
  }),
  name: userNameSchema.required().messages({
    'any.required': 'Name is required',
  }),
  gender: Joi.string()
    .trim()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'string.base': 'Gender should be a type of string',
      'any.only':
        "The gender can only be one of the following: 'male', 'female', 'other'",
      'any.required': 'Gender is required',
    }),
  dateOfBirth: Joi.string().trim().optional(),
  email: Joi.string().trim().email().required().messages({
    'string.base': 'Email should be a type of string',
    'string.email': '{#value} is not a valid email',
    'string.empty': 'Email is required',
    'any.required': 'Email is required',
  }),
  contactNo: Joi.string().trim().required().messages({
    'string.base': 'Contact number should be a type of string',
    'string.empty': 'Contact number is required',
    'any.required': 'Contact number is required',
  }),
  emergencyContactNo: Joi.string().trim().required().messages({
    'string.base': 'Emergency contact number should be a type of string',
    'string.empty': 'Emergency contact number is required',
    'any.required': 'Emergency contact number is required',
  }),
  bloodGroup: Joi.string()
    .trim()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .optional()
    .messages({
      'string.base': 'Blood group should be a type of string',
      'any.only': '{#value} is not a valid blood group',
    }),
  presentAddress: Joi.string().trim().required().messages({
    'string.base': 'Present address should be a type of string',
    'string.empty': 'Present address is required',
    'any.required': 'Present address is required',
  }),
  permanentAddress: Joi.string().trim().required().messages({
    'string.base': 'Permanent address should be a type of string',
    'string.empty': 'Permanent address is required',
    'any.required': 'Permanent address is required',
  }),
  guardian: guardianSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localGuardianSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImage: Joi.string().trim().optional(),
  isActive: Joi.string()
    .trim()
    .valid('active', 'blocked')
    .default('active')
    .messages({
      'string.base': 'Status should be a type of string',
      'any.only': '{#value} is not a valid status',
    }),
});

export default JoiValidationSchema;
