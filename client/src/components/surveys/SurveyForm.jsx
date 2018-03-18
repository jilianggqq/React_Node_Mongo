import React from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import _ from "lodash";

const FIELDS = [
  {
    label: "Survey Title",
    name: "titile"
  },
  {
    label: "Survey Line",
    name: "subject"
  },
  {
    label: "Email Body",
    name: "body"
  },
  {
    label: "Recipient List",
    name: "emails"
  }
];

class SurveyForm extends React.Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    // component is what the type is.
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// take only one argument that we will want to use to customize how our form behaves.
export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
