// Action Creator
import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
   // ReduxFlow 2 after being called by dispatcher will pass current state and action to reducer
   return { type: types.CREATE_COURSE, course: course };
}

function loadCoursesSuccess(courses) {
   return { type: types.LOAD_COURSES_SUCCESS, courses: courses }
}

// thunk dispatch - returns a function
export function loadCourses(course) {
   return function (dispatch) {
      return courseApi.getAllCourses().then(courses => {
         dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
         throw(error);
      });
   }
}