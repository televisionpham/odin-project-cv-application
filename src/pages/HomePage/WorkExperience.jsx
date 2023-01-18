import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWorkExperience } from "../../store/cvSlice";
import WorkExperienceForm from "./WorkExperienceForm";

const WorkExperience = () => {
  const workExperienceList = useSelector(
    (state) => state.cv.workExperienceList
  );
  const [formVisible, setFormVisible] = useState(false);
  const [workExperience, setWorkExperience] = useState(null);
  const dispatch = useDispatch();

  const showForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  const generateWorkExperienceList = () => {
    const list = [];

    for (const work of workExperienceList) {
      list.push(
        <div key={work.id}>
          <div>
            {work.company} ({work.fromDate} - {work.toDate})
            <div className="buttons">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => editWorkExperience(work)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeWorkExperience(work.id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div>{work.position}</div>
          <p className="description">{work.jobDescription}</p>
        </div>
      );
    }

    return list;
  };

  const editWorkExperience = (work) => {
    setWorkExperience(work);
    showForm();
  };

  const removeWorkExperience = (id) => {
    dispatch(deleteWorkExperience({ id }));
  };

  return (
    <section id="workExperience" className="section">
      <div className="section-title">
        Work Experience{" "}
        <button type="button" className="btn btn-primary" onClick={showForm}>
          Add
        </button>
      </div>
      {formVisible ? (
        <WorkExperienceForm
          hideForm={hideForm}
          workExperience={workExperience}
        />
      ) : null}
      {generateWorkExperienceList()}
    </section>
  );
};

export default WorkExperience;
