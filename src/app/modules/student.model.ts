import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentModel,
  TUserName,
} from './student/student.interface';

// Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name length cannot be more than 20 character'],
    validate: {
      validator: function (value: string) {
        const firstNameStr =
          value[0].toUpperCase() + value.slice(1).toLowerCase();
        return firstNameStr === value;
      },
      message: '{VALUE} is not in right format',
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: '{VALUE} is not valid',
    },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, 'Father name is required'],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact No is required'],
  },
  motherName: {
    type: String,
    trim: true,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    trim: true,
    required: [true, 'Mother OccupatioN is required'],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, 'Mother Contact No is required'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian name is required'],
  },
  occupation: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian occupation is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian contactNo is required'],
  },
  address: {
    type: String,
    trim: true,
    required: [true, 'Local Guardian address is required'],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: { type: String, trim: true, required: true, unique: true },
  name: {
    type: userNameSchema,
    trim: true,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    trim: true,
    enum: {
      values: ['male', 'female', 'other'],
      message:
        "The gender can only be one of the following: 'male', 'female', 'other'",
    },
    required: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required'],
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not a valid email type',
    },
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Contact No is required'],
  },
  emergencyContactNo: {
    type: String,
    trim: true,
    required: [true, 'Emergency Contact No is required'],
  },
  bloodGroup: {
    type: String,
    trim: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: {
    type: String,
    trim: true,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    trim: true,
    required: [true, 'Permanent Address is required'],
  },
  guardian: {
    type: guardianSchema,
    trim: true,
    required: [true, 'Guardian name is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    trim: true,
    required: [true, 'Local Guardian name is required'],
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    trim: true,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});

// creating a custom instance method -----------------------------------------

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = await Student.findOne({ id });
//   return existingUser;
// };
// -----------------------------------------------------------------------------

// pre save middleware or hook: will work on create() and save()
studentSchema.pre('save', function () {f
  console.log(this, 'pre hook : we will save the data');
});

// post save middleware or hook

studentSchema.post('save', function () {
  console.log(this, 'post hook: we saved the data');
});

// creating a custom static method--------------------------------------
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};
// -----------------------------------------------------------------------

// Model

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
