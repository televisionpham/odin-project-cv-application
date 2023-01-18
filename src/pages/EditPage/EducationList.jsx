import { useState } from "react";
import { useSelector } from "react-redux";
import EducationForm from "./EducationForm";

const EducationList = () => {
  const educationList = useSelector((state) => state.cv.educationList);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const generateEducationList = () => {
    if (!educationList) {
      return;
    }
    const list = [];
    for (const eduation of educationList) {
      list.push(
        <div className="education-item">
          <div>{eduation.schoolName}</div>
          <div>{eduation.title}</div>
          <div>{eduation.studyDate}</div>
          <div className="buttons">
            <button type="button" className="btn btn-primary">
              Edit
            </button>
            <button type="button" className="btn btn-danger">
              Remove
            </button>
          </div>
        </div>
      );
    }
    return list;
  };

  const showAddForm = () => {
    setIsAddFormVisible(true);
  };

  const hideAddForm = () => {
    setIsAddFormVisible(false);
  };

  return (
    <div id="educationList" className="full-width">
      <div className="section-title">
        Education{" "}
        <button className="btn btn-primary" type="button" onClick={showAddForm}>
          Add
        </button>
      </div>
      {isAddFormVisible ? <EducationForm hideAddForm={hideAddForm} /> : null}
      {generateEducationList()}
    </div>
  );
};

export default EducationList;
