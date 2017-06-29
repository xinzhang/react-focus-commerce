import React from 'react';
import Formsy from 'formsy-react';

const MyCheckBox = React.createClass({

  // Add the Formsy Mixin
  mixins: [Formsy.Mixin],

  // setValue() will set the value of the component, which in
  // turn will validate it and the rest of the form
  changeValue(event) {
    this.setValue(event.currentTarget['checked']);
  },
  render() {

    // Set a specific className based on the validation
    // state of this component. showRequired() is true
    // when the value is empty and the required prop is
    // passed to the input. showError() is true when the
    // value typed is invalid
    const className = (this.props.className || ' ') +
      (this.showRequired() ? 'required' : this.showError() ? 'error' : '');

    // An error message is returned ONLY if the component is invalid
    // or the server has returned an error message
    const errorMessage = this.getErrorMessage();

    return (
        <div>
          <input
            className={className}
            type='checkbox'
            name={this.props.name}
            onChange={this.changeValue}
            defaultValue={this.getValue()}
            checked={this.getValue() ? 'checked' : null}
          />
          {this.props.title}
          <span className='validation-error'>{errorMessage}</span>
        </div>
    );
  }
});

export default MyCheckBox;
