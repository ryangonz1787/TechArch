const languageScore = {
  speaking: 35,
  reading: 35,
  writing: 15,
  listening: 35,
};

const formValues = {
  selectedCanadianExperience: "one-year",
  selectedForeignExperience: "none",
};

function calculatePointsForForeignExperience() {
  const clbLevel = calculateCLB();

  if (formValues.selectedForeignExperience === "none") {
    return 0;
  } else if (
    formValues.selectedForeignExperience === "one-year" &&
    (clbLevel === "CLB7" || clbLevel === "CLB9")
  ) {
    return clbLevel === "CLB7" ? 13 : 25;
  } else if (
    (formValues.selectedForeignExperience === "three-year" &&
      clbLevel === "CLB7") ||
    clbLevel === "CLB9"
  ) {
    return clbLevel === "CLB7" ? 25 : 50;
  }

  return 0;
}

function calculateCLB() {
  const values = Object.values(languageScore);

  const countBelow17 = values.reduce((count, score) => {
    if (score < 17) {
      return count + 1;
    }
    return count;
  }, 0);

  if (countBelow17 > 0) {
    return "CLB5";
  }

  const countBetween17And31 = values.reduce((count, score) => {
    if (score >= 17 && score <= 31) {
      return count + 1;
    }
    return count;
  }, 0);

  if (countBetween17And31 === 0) {
    return "CLB9";
  } else if (countBetween17And31 >= 1 && countBetween17And31 <= 3) {
    return "CLB7";
  }
}

const pointsForForeignExperience = calculatePointsForForeignExperience();
console.log("Points for Foreign Experience:", pointsForForeignExperience);

function calculatePointsForEducation(educationLevel, clbLevel) {
  if (educationLevel === "SecondaryDiploma") {
    return 0;
  } else if (
    educationLevel === "OneYearProgram" &&
    (clbLevel === "CLB7" || clbLevel === "CLB9")
  ) {
    return clbLevel === "CLB7" ? 13 : 25;
  } else if (
    educationLevel === "TwoYearProgram" &&
    (clbLevel === "CLB7" || clbLevel === "CLB9")
  ) {
    return clbLevel === "CLB7" ? 25 : 50;
  } else if (
    educationLevel === "BachelorDegree" &&
    (clbLevel === "CLB7" || clbLevel === "CLB9")
  ) {
    return clbLevel === "CLB7" ? 13 : 25;
  } else if (
    educationLevel === "PhD" ||
    (educationLevel === "MastersDegree" &&
      (clbLevel === "CLB7" || clbLevel === "CLB9"))
  ) {
    return clbLevel === "CLB7" ? 25 : 50;
  }

  return 0;
}

// Example usage:
const educationLevel = "BachelorDegree"; // Change this to the desired education level
const clbLevel = calculateCLB();
const points = calculatePointsForEducation(educationLevel, clbLevel);
console.log("Education Points:", points);
