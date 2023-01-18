import EducationList from "./EducationList";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperienceList";

const EditPage = () => {
  const dataJson = localStorage.getItem("cv");
  const cv = dataJson
    ? JSON.parse(dataJson)
    : {
        generalInfo: {},
        educationList: [],
        workExperience: [],
      };

  return (
    <div id="edit" className="container">
      <h1>Edit CV</h1>
      <GeneralInfo generalInfo={cv.generalInfo} />
      <EducationList />
      <WorkExperience />
    </div>
  );
};

export default EditPage;
