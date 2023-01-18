import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveWorkExperience } from "../../store/cvSlice";
import { v4 as uuidv4 } from "uuid";

const WorkExperienceForm = (props) => {
  const { hideForm, workExperience } = props;
  const dispatch = useDispatch();

  const [company, setCompany] = useState(
    workExperience && workExperience.company ? workExperience.company : ""
  );
  const [position, setPosition] = useState(
    workExperience && workExperience.position ? workExperience.position : ""
  );
  const [jobDescription, setJobDescription] = useState(
    workExperience && workExperience.jobDescription
      ? workExperience.jobDescription
      : ""
  );
  const [fromDate, setFromDate] = useState(
    workExperience && workExperience.fromDate ? workExperience.fromDate : ""
  );
  const [toDate, setToDate] = useState(
    workExperience && workExperience.toDate ? workExperience.toDate : ""
  );

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };

  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!workExperience) {
      dispatch(
        saveWorkExperience({
          id: uuidv4(),
          company,
          position,
          jobDescription,
          fromDate,
          toDate,
        })
      );
    } else {
      dispatch(
        saveWorkExperience({
          id: workExperience.id,
          company,
          position,
          jobDescription,
          fromDate,
          toDate,
        })
      );
    }
  };

  return (
    <form
      id="workExperienceForm"
      method="post"
      action="/"
      onSubmit={handleSubmit}
    >
      <div className="form-control">
        <label htmlFor="company">Company name:</label>
        <input
          id="company"
          name="company"
          type="text"
          value={company}
          required
          onChange={(e) => handleCompanyChange(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="position">Position:</label>
        <input
          id="position"
          name="position"
          type="text"
          value={position}
          required
          onChange={(e) => handlePositionChange(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          type="text"
          value={jobDescription}
          required
          onChange={(e) => handleJobDescriptionChange(e)}
          rows={10}
          cols={100}
        ></textarea>
      </div>
      <div className="form-control">
        <label htmlFor="fromDate">From:</label>
        <input
          id="fromDate"
          name="fromDate"
          type="date"
          value={fromDate}
          required
          onChange={(e) => handleFromDateChange(e)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="toDate">To:</label>
        <input
          id="toDate"
          name="toDate"
          type="date"
          value={toDate}
          onChange={(e) => handleToDateChange(e)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      <button
        type="reset"
        className="btn btn-secondary"
        onClick={() => hideForm()}
      >
        Cancel
      </button>
    </form>
  );
};

export default WorkExperienceForm;
