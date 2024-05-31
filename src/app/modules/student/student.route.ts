import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// router.post('/create-student', StudentController.createStudent);

router.get('/', StudentControllers.getAllStudents);

router.get('/:studentId', StudentControllers.getSingleStudent);

router.delete('/:semesterIdId', StudentControllers.deleteStudent);

export const StudentRoutes = router;
