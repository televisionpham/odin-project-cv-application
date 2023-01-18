import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";

const HomePage = () => {
  return (
    <div id="home" className="container">
      <h1>My CV</h1>
      <GeneralInfo />
      <Education />
      <WorkExperience />
    </div>
  );
};

export default HomePage;
