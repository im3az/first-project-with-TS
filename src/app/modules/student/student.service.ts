import { Student } from './student.model';
import { TStudent } from './student.interface';

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists');
  }

  const result = await Student.create(studentData); //built in static method

  // created an instance method---------------------------------------------------

  // const student = new Student(studentData);

  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists');
  // }
  // ------------------------------------------------------------------------------

  //built in instance method-------------------------------------------------------

  // const result = await studentData.save();

  // -----------------------------------------------------------------------------

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
