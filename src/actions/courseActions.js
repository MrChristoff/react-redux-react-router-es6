// Action Creator
export function createCourse(course) {
   // ReduxFlow 2 after being called by dispatcher will pass current state and action to reducer
   // debugger;
   return { type: 'CREATE_COURSE', course: course };
}