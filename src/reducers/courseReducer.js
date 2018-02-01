// Course Reducer
export default function courseReducer(state = [], action) {
   switch (action.type) {
      case 'CREATE_COURSE':
      // ReduxFlow 3 after having the Action pass the state and action to perform
      // (acording to the switch condition) it will take a copy of the original state (empty aray)
      // and add the new object to the copied state, then return pass that new state to 
      // the store and then mapStateToProps
      // debugger;
         return [...state,
            Object.assign(
               {},
               action.course
            )
         ];

      default:
         return state;
   }
}