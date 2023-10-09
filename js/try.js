const formValues = {
  selectedCanadianExperience: "five-years",
  selectedForeignExperience: "three-years",
};

const exp = {
  foreignWorkExperienceWithCanadianWorkExperience:
    formValues.selectedForeignExperience === "none"
      ? 0
      : formValues.selectedCanadianExperience === "none"
      ? 0
      : formValues.selectedForeignExperience === "one-year" ||
        formValues.selectedForeignExperience === "two-years"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 13
        : 25
      : formValues.selectedForeignExperience === "three-years"
      ? formValues.selectedCanadianExperience === "one-year"
        ? 25
        : 50
      : 0,
};

console.log(exp.foreignWorkExperienceWithCanadianWorkExperience);
