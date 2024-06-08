import express from 'express';
import { OfferedCourseControllers } from './offeredCourse.controller';
import { OfferedCourseValidations } from './offeredCourse.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/create-offered-course',
  validateRequest(OfferedCourseValidations.createOfferedCourseValidationSchema),
  OfferedCourseControllers.createOfferedCourse,
);

export const offeredCourseRoutes = router;
