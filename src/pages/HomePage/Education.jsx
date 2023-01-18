import { useSelector } from "react-redux";

const Education = () => {
  const educationList = useSelector((state) => state.cv.educationList);
  const generateEducationList = () => {
    const list = [];
    for (const eduation of educationList) {
      list.push(
        <div className="education-item">
          <div>{eduation.schoolName}</div>
          <div>{eduation.title}</div>
          <div>{eduation.studyDate}</div>
        </div>
      );
    }
    return list;
  };

  return (
    <section id="education" className="section">
      <div className="section-title">Education</div>
      {generateEducationList()}
    </section>
  );
};

export default Education;
