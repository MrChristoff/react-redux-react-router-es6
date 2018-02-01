import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    
    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        // ReduxFlow 1 Calls the Action creator with the object
        // debugger;
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;        
    }

    render() {
        // Reduxflow 5 render is called to display the changes in the store.
        // debugger;
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Courses</h2>
                <input
                   type="text"
                   onChange={this.onTitleChange}
                   value={this.state.course.title} />

                <input
                   type="submit"
                   value="Save"
                   onClick={this.onClickSave} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

 function mapStateToProps(state, ownProps) {
     // Reduxflow 4 after being notified by the store, this will update the properties 
     // that are owned by the container component
     // this will call the render function in this component.
     // debugger;
     return {
         courses: state.courses
     };
 }

export default connect(mapStateToProps)(CoursesPage);