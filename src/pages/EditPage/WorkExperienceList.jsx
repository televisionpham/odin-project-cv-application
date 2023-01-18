import { useState } from "react";
import WorkExperienceForm from "./WorkExperienceForm";

const WorkExperience = () => {
  const [isWorkExperienceFormVisible, setIsWorkExperienceFormVisible] =
    useState(false);

  const hideForm = () => {
    setIsWorkExperienceFormVisible(false);
  };
  return (
    <div className="full-width">
      <div className="section-title">
        Work Experience{" "}
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setIsWorkExperienceFormVisible(true);
          }}
        >
          Add
        </button>
      </div>
      {isWorkExperienceFormVisible ? (
        <WorkExperienceForm hideForm={hideForm} />
      ) : null}
    </div>
  );
};

export default WorkExperience;
