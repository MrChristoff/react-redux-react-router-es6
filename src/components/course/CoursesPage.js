// Container Component
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

/* Constructor 
    - Initialises state
    - binding functions to the 'this' context
*/
class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    /* Child functions
        - functions called by render()
    */
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;        
    }

    /* render function
        - A container component render() should only call a
          child component, and not have markup in it.
    */
    render() {
        // Reduxflow 5 render is called to display the changes in the store.
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    }
}

/* propTypes
    - property type validation
*/
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

/* Redux connect() functions
    - connect() creates the connection to redux
    - takes two  params (both functions) and retruns a function, 
      that imediatly calls the contaner component
    - mapDispatchToProps() helper function to wrapp actions
 */
function mapStateToProps(state, ownProps) {
    // Reduxflow 4 after being notified by the store, this will update the properties 
    // that are owned by the container component
    // this will call the render function in this component.
   return {
      courses: state.courses
   };
}
function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(courseActions, dispatch) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);