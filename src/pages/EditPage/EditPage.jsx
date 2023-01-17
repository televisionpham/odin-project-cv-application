import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import WorkExperience from "./WorkExperience";

const EditPage = () => {
  const data = localStorage.getItem("cv") ?? {
    generalInfo: {},
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    localStorage.setItem("cv", JSON.stringify(data));
  };

  return (
    <div id="edit" className="container">
      <h1>Edit CV</h1>
      <form method="post" action="/" onSubmit={handleSubmit}>
        <GeneralInfo data={data} />
        <Education />
        <WorkExperience />
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPage;
