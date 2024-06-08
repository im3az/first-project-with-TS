import { TOfferedCourse } from './offeredCourse.interface';
import { OfferedCourse } from './offeredCourse.model';

const createOfferedCourseIntoDB = async (payload: TOfferedCourse) => {
  const result = await OfferedCourse.create(payload);

  return result;
};

const getAllOfferedCoursesFromDB = async (query: Record<string, unknown>) => {};

const getSingleOfferedCourseFromDB = async (id: string) => {};

const updateOfferedCourseIntoDB = async (
  id: string,
  payload: Pick<TOfferedCourse, 'faculty' | 'days' | 'startTime' | 'endTime'>,
) => {};

const deleteOfferedCourseFromDB = async (id: string) => {};

export const OfferedCourseServices = {
  createOfferedCourseIntoDB,
  getAllOfferedCoursesFromDB,
  getSingleOfferedCourseFromDB,
  deleteOfferedCourseFromDB,
  updateOfferedCourseIntoDB,
};
