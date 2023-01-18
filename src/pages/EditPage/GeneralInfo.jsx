import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveGeneralInfo } from "../../store/cvSlice";

const GeneralInfo = () => {
  const generalInfo = useSelector((state) => state.cv.generalInfo);
  console.log(generalInfo);
  const dispatch = useDispatch();

  const [name, setName] = useState(
    generalInfo && generalInfo.name ? generalInfo.name : ""
  );
  const [email, setEmail] = useState(
    generalInfo && generalInfo.email ? generalInfo.email : ""
  );
  const [phone, setPhone] = useState(
    generalInfo && generalInfo.phone ? generalInfo.phone : ""
  );

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      saveGeneralInfo({
        name,
        email,
        phone,
      })
    );
  };

  return (
    <form id="editGeneralInfo" method="post" action="/" onSubmit={handleSubmit} className='full-width'>
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
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              required
              onChange={(e) => handleEmailChange(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={phone}
              required
              onChange={(e) => handlePhoneChange(e)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </fieldset>
    </form>
  );
};

export default GeneralInfo;
