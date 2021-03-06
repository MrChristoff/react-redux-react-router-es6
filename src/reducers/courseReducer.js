// Course Reducer
import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function courseReducer(state = initialState.courses, action) {
   switch (action.type) {
      case types.LOAD_COURSES_SUCCESS:
      // ReduxFlow 3 after having the Action pass the state and action to perform
      // (acording to the switch condition) it will take a copy of the original state,
      // add the new object to the copied state, pass that new state to 
      // the store and then mapStateToProps will be called.
         return action.courses;
      
      case types.CREATE_COURSE_SUCCESS:
         return [
            ...state,
            Object.assign({}, action.course)
         ];
      
      case types.UPDATE_COURSE_SUCCESS:
         return [
            ...state.filter(course => course.id !== action.course.id),
            Object.assign({}, action.course)
         ];

      default:
         return state;
   }
}