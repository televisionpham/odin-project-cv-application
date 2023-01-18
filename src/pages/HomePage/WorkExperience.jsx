import { useSelector } from "react-redux";

const WorkExperience = () => {
  const workExperienceList = useSelector(
    (state) => state.cv.workExperienceList
  );

  const generateWorkExperienceList = () => {
    const list = [];

    for (const work of workExperienceList) {
      list.push(
        <>
          <div>
            {work.company} ({work.fromDate} - {work.toDate})
          </div>
          <div>{work.position}</div>
          <p className="description">{work.jobDescription}</p>
        </>
      );
    }

    return list;
  };
  return (
    <section id="workExperience" className="section">
      <div className="section-title">Work Experience</div>
      {generateWorkExperienceList()}
    </section>
  );
};

export default WorkExperience;
