import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component {


  renderTitleField(field){//field object contains event handlers
    return (
      <div>
      <input
        type = "text"
          {...field.input}
      />
      </div>
    )
  }
  //field does not know how to display itself
  // component will provide jsx
  render () {
    return (
      <form>
        <Field
          name="title"
          component = {this.renderTitleField}
        />
        </form>
    );
  }
}

//string must be unique
export default reduxForm({
  form : 'PostsNewForm'
})(PostsNew);
