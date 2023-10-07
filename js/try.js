const formValues = {
  canadianCourse: "PhD",
  selectedCanadianExperience: "one-year",
};

const skillTransferabilityPoints = {
  educationWithCanadianWorkExperience:
    formValues.canadianCourse === "none"
      ? 0
      : formValues.selectedCanadianExperience === "none"
      ? 0
      : formValues.canadianCourse === "SecondaryDiploma"
      ? 0
      : formValues.canadianCourse === "OneYearProgram"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 13
        : 25
      : formValues.canadianCourse === "TwoYearProgram"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 23
        : 25
      : formValues.canadianCourse === "BachelorDegree"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 25
        : 50
      : formValues.canadianCourse === "TwoOrMoreDegrees"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 25
        : 50
      : formValues.canadianCourse === "MastersDegree"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 25
        : 50
      : formValues.canadianCourse === "PhD"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 25
        : 50
      : 0,
};
console.log(
  "Education with Canadian Work Experience Points:",
  skillTransferabilityPoints.educationWithCanadianWorkExperience
);
