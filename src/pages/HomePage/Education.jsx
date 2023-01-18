import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEduation } from "../../store/cvSlice";
import EducationForm from "./EducationForm";

const Education = () => {
  const educationList = useSelector((state) => state.cv.educationList);
  const [formVisible, setFormVisible] = useState(false);
  const [education, setEducation] = useState();
  const dispatch = useDispatch();

  const generateEducationList = () => {
    const list = [];
    for (const education of educationList) {
      list.push(
        <div className="education-item" key={education.id}>
          <div>{education.schoolName}</div>
          <div>{education.title}</div>
          <div>{education.studyDate}</div>
          <div className="buttons">
            <button
              className="btn btn-primary"
              onClick={() => editEducation(education)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => removeEducation(education.id)}
            >
              Remove
            </button>
          </div>
        </div>
      );
    }
    return list;
  };

  const editEducation = (edu) => {
    setEducation(edu);
    showForm();
  };

  const removeEducation = (id) => {
    dispatch(deleteEduation({ id }));
  };

  const showForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <section id="education" className="section">
      <div className="section-title">
        Education{" "}
        <button type="button" className="btn btn-primary" onClick={showForm}>
          Add
        </button>
      </div>
      {formVisible ? (
        <EducationForm hideForm={hideForm} education={education} />
      ) : null}
      {generateEducationList()}
    </section>
  );
};

export default Education;
