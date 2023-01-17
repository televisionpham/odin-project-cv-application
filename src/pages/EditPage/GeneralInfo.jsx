import { useState } from "react";

const GeneralInfo = (props) => {
  const { data } = props;
  const [name, setName] = useState(data.generalInfo.name ?? "");
  const [email, setEmail] = useState(data.generalInfo.email ?? "");

  const handleNameChange = (e) => {
    setName(e.target.value);
    data.generalInfo.name = e.target.value;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    data.generalInfo.email = e.target.value;
  };

  return (
    <fieldset>
      <legend>General Information</legend>
      <div id="generalInformation" className="controls">
        <div className="form-control">
          <label htmlFor="fullName">Full name:</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={name}
            required
            onChange={(e) => handleNameChange(e)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="fullName">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            required
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default GeneralInfo;
