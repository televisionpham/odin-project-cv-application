import { useState } from "react";
import { useSelector } from "react-redux";
import GeneralInfoForm from "./GeneralInfoForm";

const GeneralInfo = () => {
  const generalInfo = useSelector((state) => state.cv.generalInfo);
  const [isEditing, setIsEditing] = useState(false);

  const showForm = () => {
    setIsEditing(true);
  };

  const hideForm = () => {
    setIsEditing(false);
  };

  return (
    <section id="generalInformation" className="section">
      <div className="section-title">
        General Information{" "}
        <button className="btn btn-primary" onClick={showForm}>
          Edit
        </button>
      </div>
      <div className="section-body">
        {isEditing ? (
          <GeneralInfoForm hideForm={hideForm} />
        ) : (
          <div id="general-info">
            <div className="info-name">Name:</div>
            <div className="info-value">{generalInfo.name}</div>
            <div className="info-name">Email:</div>
            <div className="info-value">{generalInfo.email}</div>
            <div className="info-name">Phone:</div>
            <div className="info-value">{generalInfo.phone}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeneralInfo;
