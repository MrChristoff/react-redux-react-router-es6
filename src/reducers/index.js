// this is the root reducer, apparently, convention is to call it index.js
// cos thats not confusing, not like rootReducer.js.

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
   courses: courses,
   authors: authors
});

export default rootReducer;