import { createSlice } from "@reduxjs/toolkit";

const getData = () => {
  const cvJson = localStorage.getItem("cv");
  const data = cvJson
    ? JSON.parse(cvJson)
    : {
        generalInfo: {},
        educationList: [],
        workExperienceList: [],
      };

  return data;
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("cv", JSON.stringify(state));
};

export const cvSlice = createSlice({
  name: "cv",
  initialState: getData(),
  reducers: {
    saveGeneralInfo: (state, action) => {
      state.generalInfo = action.payload;
      saveStateToLocalStorage(state);
    },
    saveEducation: (state, action) => {
      if (state.educationList.some((x) => x.id === action.payload.id)) {
        state.educationList = state.educationList.map((x) => {
          if (x.id === action.payload.id) {
            x.schoolName = action.payload.schoolName;
            x.title = action.payload.title;
            x.studyDate = action.payload.studyDate;
          }

          return x;
        });
      } else {
        state.educationList.push(action.payload);
      }

      saveStateToLocalStorage(state);
    },
    deleteEduation: (state, action) => {
      state.educationList = state.educationList.filter(
        (x) => x.id !== action.payload.id
      );
      saveStateToLocalStorage(state);
    },
    saveWorkExperience: (state, action) => {
      if (state.workExperienceList.some((x) => x.id === action.payload.id)) {
        state.workExperienceList = state.workExperienceList.map((x) => {
          if (x.id === action.payload.id) {
            x.company = action.payload.company;
            x.position = action.payload.position;
            x.jobDescription = action.payload.jobDescription;
            x.fromDate = action.payload.fromDate;
            x.toDate = action.payload.toDate;
          }

          return x;
        });
      } else {
        state.workExperienceList.push(action.payload);
      }

      saveStateToLocalStorage(state);
    },
    deleteWorkExperience: (state, action) => {
      state.workExperienceList = state.workExperienceList.filter(
        (x) => x.id !== action.payload.id
      );
      saveStateToLocalStorage(state);
    },
  },
});

export const {
  saveGeneralInfo,
  saveEducation,
  saveWorkExperience,
  deleteEduation,
  deleteWorkExperience,
} = cvSlice.actions;

export default cvSlice.reducer;
