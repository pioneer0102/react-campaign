// SurveyFormReview shows users their form inputs for review
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

let surveyFormReviewStyle = {
  view: "flex",
  width: "100vw",
  justifyContent: "center",
  padding: "2rem"
};

let buttonRowStyle = {
  paddingTop: "2rem"
}

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div style={surveyFormReviewStyle}>
      <h5>Please confirm your entries </h5>
      {reviewFields}

      <div style={buttonRowStyle}>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="green white-text btn-flat right"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
