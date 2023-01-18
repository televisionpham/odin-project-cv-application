import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { saveEducation } from "../../store/cvSlice";

const EducationForm = (props) => {
  const { hideForm, education } = props;
  const [schoolName, setSchoolName] = useState(
    education ? education.schoolName : ""
  );
  const [title, setTitle] = useState(education ? education.title : "");
  const [studyDate, setStudyDate] = useState(
    education ? education.studyDate : ""
  );

  const dispatch = useDispatch();

  const handleSchoolNameChange = (e) => {
    setSchoolName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStudyDateChange = (e) => {
    setStudyDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!education) {
      dispatch(
        saveEducation({
          id: uuidv4(),
          schoolName,
          title,
          studyDate,
        })
      );
    } else {
      dispatch(
        saveEducation({
          id: education.id,
          schoolName,
          title,
          studyDate,
        })
      );
    }
  };

  return (
    <fieldset>
      <legend>Education</legend>
      <form id="educationForm" method="post" action="/" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="schoolName">School name:</label>
          <input
            id="schoolName"
            name="schoolName"
            type="text"
            value={schoolName}
            required
            onChange={(e) => handleSchoolNameChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            required
            onChange={(e) => handleTitleChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">Date:</label>
          <input
            id="title"
            name="title"
            type="date"
            value={studyDate}
            required
            onChange={(e) => handleStudyDateChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button className="btn" type="reset" onClick={() => hideForm()}>
          Cancel
        </button>
      </form>
    </fieldset>
  );
};

export default EducationForm;
