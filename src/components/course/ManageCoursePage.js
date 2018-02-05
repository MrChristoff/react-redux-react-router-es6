import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

// import CourseList from './CourseList';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
        
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        // React Router context redirection
        this.context.router.push('/courses');
    }


    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course} 
                errors={this.state.errors} 
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

// Pull in the React Router context so router is availible on this.context.router
// this is a global variable used by library authors to reduce boiler plate code
// TODO investigate alternative
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
   let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
   const authorsFormattedForDropdown = state.authors.map(author => {
       return {
           value: author.id,
           text: author.firstName + ' ' + author.lastName
       };
   });
   return {
      course: course,
      authors: authorsFormattedForDropdown
   };
}
function mapDispatchToProps(dispatch) {
    return {
       actions: bindActionCreators(courseActions, dispatch) 
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);