const formValues = {
  selectedCanadianExperience: "five-years",
  selectedForeignExperience: "three-years",
  CertificateQualification: "yes",
};

const languageScore = {
  reading: "7",
  listening: "17",
  writing: "17",
  speaking: "17",
};

function calculateCLB(languageScore) {
  const values = Object.values(languageScore);

  const countBelow17 = values.reduce((count, score) => {
    if (parseInt(score) < 17) {
      return count + 1;
    }
    return count;
  }, 0);

  if (countBelow17 > 0) {
    return "CLB5";
  }

  const countBetween17And31 = values.reduce((count, score) => {
    if (parseInt(score) >= 17 && parseInt(score) <= 31) {
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

function certificatePoints() {
  const clbLevel = calculateCLB(languageScore);

  if (formValues.CertificateQualification === "no") {
    return 0;
  } else if (clbLevel === "CLB5") {
    return 25;
  } else {
    return 50;
  }
}

console.log(certificatePoints());
