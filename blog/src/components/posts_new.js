import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\actions';


class PostsNew extends Component {


  renderField(field){//field object contains event handlers
    //const { meta } = field;
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
      <label>{field.label}</label>
      <input
      className="form-control"
        type = "text"
          {...field.input}
      />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){//the bind call below provides the correct context for onSubmit...
    //string should match a route
    this.props.createPost(values, () => {
        this.props.history.push('/');
    });
  }
  //field does not know how to display itself
  // component will provide jsx
  render () {
    const { handleSubmit }=this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
         label="Title"
          name="title"
          component = {this.renderField}
        />
        <Field
        name="categories"
        label="Categories"
        component={this.renderField}
        />
        <Field
        name="content"
        label="Post Content"
        component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
  }
}

function validate(values){//called automatically when user hits submit
  // the properties here should match names above, like title and title
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title!"
  }
  if(!values.categories){
    errors.categories = "Enter some categories!"
  }
  if(!values.content){
    errors.content = "Enter some content please!"
  }
  //if errors is empty, form is fine to submit
  // If errors has any properties, redux form assumes form is invalid
  return errors;
}

//string must be unique
//reduxForm doing similar stuff to connect function
/*export default reduxForm({
  validate,
  form : 'PostsNewForm'
})(PostsNew);*/

export default reduxForm({
  validate,
  form : 'PostsNewForm'
})
(
  connect(null, { createPost})(PostsNew)
);
