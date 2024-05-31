import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .max(20, { message: 'First name length cannot be more than 20 characters' })
    .refine((value) => /^[A-Z][a-z]*$/.test(value), {
      message:
        'First Name must start with a capital letter and contain only letters',
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: 'Last name is required' })
    .regex(/^[A-Za-z]+$/, { message: 'Last name can only contain letters' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father contact number is required' }),
  motherName: z.string().min(1, { message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother contact number is required' }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local Guardian name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local Guardian occupation is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local Guardian contact number is required' }),
  address: z.string().min(1, { message: 'Local Guardian address is required' }),
});

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z
      .string()
      .max(20, { message: 'Password cannot be more than 20 characters' })
      .optional(),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other'], {
        errorMap: () => ({
          message: "Gender can only be 'male', 'female', or 'other'",
        }),
      }),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Invalid email address' }),
      contactNo: z.string().min(1, { message: 'Contact number is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
