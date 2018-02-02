// Action Creator
import * as types from './actionTypes';
export function createCourse(course) {
   // ReduxFlow 2 after being called by dispatcher will pass current state and action to reducer
   return { type: types.CREATE_COURSE, course: course };
}