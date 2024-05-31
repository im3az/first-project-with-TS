import { z } from 'zod';

const academicValidationSchema = z.object({
  name: z.string({
    invalid_type_error: 'Academic faculty must be a string',
  }),
});

export const AcademicValidation = {
  userValidationSchema: academicValidationSchema,
};
