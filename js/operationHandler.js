const formValues = {
  maritalStatus: "",
  age: "",
  canadianEducation: "",
  canadianCourse: "",
  selectedCanadianExperience: "",
  selectedForeignExperience: "",
  jobOfferRadio: "",
  selectedNocTeer: "",
  nominationCertificateValue: "",
  siblingCitizenValue: "",
  languageScore: "",
  spouseLanguageScore: 0,
  CertificateQualification: "no",
};

/* 
age: "23"
canadianCourse : "BachelorDegree"
canadianEducation: "yes"
internationalEducation :"BachelorDegree"
jobOfferRadio: "yes"
languageScore : 125
maritalStatus : "with"
nominationCertificateValue : "no"
partnerCitizen : "no"
partnerComesToCanada : "no"
secondLanguage : "no"
selectedCanadianExperience : "one-year"
CertificateQualification : "no"
selectedForeignExperience : "none"
selectedNocTeer : "noc-three"
siblingCitizenValue : "no"
spouseLanguageScore: 0,


*/
/* Calucating the CRS Score */

function calculateCRSScore(formValues) {
  const coreHumanCapitalPoints = {
    age:
      formValues.age <= 17
        ? 0
        : formValues.age == 18
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 90
          : 99
        : formValues.age == 19
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 95
          : 105
        : formValues.age >= 20 && formValues.age <= 29
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 100
          : 110
        : formValues.age == 30
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 95
          : 105
        : formValues.age == 31
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 90
          : 99
        : formValues.age == 32
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 85
          : 94
        : formValues.age == 33
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 80
          : 88
        : formValues.age == 34
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 75
          : 83
        : formValues.age == 35
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 70
          : 77
        : formValues.age == 36
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 65
          : 72
        : formValues.age == 37
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 60
          : 66
        : formValues.age == 38
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 55
          : 61
        : formValues.age == 39
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 50
          : 55
        : formValues.age == 40
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 45
          : 50
        : formValues.age == 41
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 35
          : 39
        : formValues.age == 42
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 25
          : 28
        : formValues.age == 43
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 15
          : 17
        : formValues.age == 44
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 5
          : 6
        : 0,

    internationlEducation:
      formValues.internationalEducation === "none"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 0
          : 0
        : formValues.internationalEducation === "SecondaryDiploma"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 28
          : 30
        : formValues.internationalEducation === "OneYearProgram"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 84
          : 90
        : formValues.internationalEducation === "TwoYearProgram"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 91
          : 98
        : formValues.internationalEducation === "BachelorDegree"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 112
          : 120
        : formValues.internationalEducation === "TwoOrMoreDegrees"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 119
          : 128
        : formValues.internationalEducation === "MastersDegree"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 126
          : 135
        : formValues.internationalEducation === "PhD"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 140
          : 150
        : 0,

    canadianWorkExperience:
      formValues.selectedCanadianExperience === "None"
        ? 0
        : formValues.selectedCanadianExperience === "one-year"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 35
          : 40
        : formValues.selectedCanadianExperience === "two-years"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 46
          : 53
        : formValues.selectedCanadianExperience === "three-years"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 56
          : 64
        : formValues.selectedCanadianExperience === "four-years"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 63
          : 72
        : formValues.selectedCanadianExperience === "five-years-or-more"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 70
          : 80
        : 0,

    CLB:
      formValues.maritalStatus === "with" &&
      formValues.partnerComesToCanada === "yes"
        ? formValues.languageScore - 8
        : formValues.languageScore,
  };

  const spouseFactorsPoints = {
    education:
      formValues.maritalStatus === "with" &&
      formValues.partnerComesToCanada === "yes"
        ? formValues.spouseEducation === "SecondaryDiploma"
          ? 2
          : formValues.spouseEducation === "OneYearProgram"
          ? 6
          : formValues.spouseEducation === "TwoYearProgram"
          ? 7
          : formValues.spouseEducation === "BachelorDegree"
          ? 8
          : formValues.spouseEducation === "TwoOrMoreDegrees"
          ? 9
          : formValues.spouseEducation === "MastersDegree"
          ? 10
          : formValues.spouseEducation === "PhD"
          ? 10
          : 0
        : 0,
    // firstLanguageCLB: formValues.spouseLanguageScore,

    spouseExperience:
      formValues.maritalStatus === "with" &&
      formValues.partnerComesToCanada === "yes"
        ? formValues.spouseExperience === "none"
          ? 0
          : formValues.spouseExperience === "one-year"
          ? 5
          : formValues.spouseExperience === "two-years"
          ? 7
          : formValues.spouseExperience === "three-years"
          ? 8
          : formValues.spouseExperience === "four-years"
          ? 9
          : formValues.spouseExperience === "five-years"
          ? 10
          : 0
        : 0,
    languageScore:
      formValues.maritalStatus === "with" &&
      formValues.partnerComesToCanada === "yes"
        ? formValues.spouseLanguageScore
        : 0,
  };

  const skillTransferabilityPoints = {
    educationWithCLB7OrHigher: 0,
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
          ? 13
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

    foreignWorkExperienceWithCLB7OrHigher: 0,
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
    certificateQualificationWithCLB5OrHigher: 0,
  };

  /*  Skil Transfer Abilities Calculations */

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
      (formValues.selectedForeignExperience === "two-years" &&
        clbLevel === "CLB7") ||
      clbLevel === "CLB9"
    ) {
      return clbLevel === "CLB7" ? 25 : 50;
    } else if (
      (formValues.selectedForeignExperience === "three-years" &&
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
  skillTransferabilityPoints.foreignWorkExperienceWithCLB7OrHigher =
    calculatePointsForForeignExperience();
  console.log(
    "Points for Foreign Experience:",
    skillTransferabilityPoints.foreignWorkExperienceWithCLB7OrHigher
  );

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

  skillTransferabilityPoints.certificateQualificationWithCLB5OrHigher =
    certificatePoints();

  console.log(
    "Certification Socre:",
    skillTransferabilityPoints.certificateQualificationWithCLB5OrHigher
  );

  function calculatePointsForEducation(educationLevel, clbLevel) {
    if (educationLevel === "none") {
      return 0;
    } else if (educationLevel === "SecondaryDiploma") {
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
      return clbLevel === "CLB7" ? 13 : 25;
    } else if (
      educationLevel === "BachelorDegree" &&
      (clbLevel === "CLB7" || clbLevel === "CLB9")
    ) {
      return clbLevel === "CLB7" ? 13 : 25;
    } else if (
      educationLevel === "MastersDegree" &&
      (clbLevel === "CLB7" || clbLevel === "CLB9")
    ) {
      return clbLevel === "CLB7" ? 25 : 50;
    } else if (
      educationLevel === "PhD" &&
      (clbLevel === "CLB7" || clbLevel === "CLB9")
    ) {
      return clbLevel === "CLB7" ? 25 : 50;
    }

    return 0;
  }

  const educationLevel = formValues.internationalEducation;
  const clbLevel = calculateCLB();
  const points = calculatePointsForEducation(educationLevel, clbLevel);
  skillTransferabilityPoints.educationWithCLB7OrHigher = points;

  const additionalPoints = {
    siblingInCanada: formValues.siblingCitizenValue === "yes" ? 15 : 0,
    // frenchLanguageSkills: formValues.frenchLanguageSkills === "yes" ? 50 : 0,
    postSecondaryEducationInCanada:
      formValues.canadianCourse === "BachelorDegree" ||
      formValues.canadianCourse === "TwoOrMoreDegrees" ||
      formValues.canadianCourse === "MastersDegree" ||
      formValues.canadianCourse === "PhD"
        ? 30
        : formValues.canadianCourse === "OneYearProgram" ||
          formValues.canadianCourse === "TwoYearProgram"
        ? 15
        : 0,
    arrangedEmployment:
      formValues.selectedNocTeer === "noc-zero"
        ? 200
        : formValues.selectedNocTeer === "noc-one" ||
          formValues.selectedNocTeer === "noc-three" ||
          formValues.selectedNocTeer === "noc-zero-other"
        ? 50
        : 0,
    provincialNomination:
      formValues.nominationCertificateValue === "yes" ? 600 : 0,
  };

  // Calculate the total points for each section
  const coreHumanCapitalTotal = Object.values(coreHumanCapitalPoints).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const spouseFactorsTotal = Object.values(spouseFactorsPoints).reduce(
    (acc, curr) => acc + curr,
    0
  );
  console.log(spouseFactorsTotal);
  const skillTransferabilityTotal = Object.values(
    skillTransferabilityPoints
  ).reduce((acc, curr) => acc + curr, 0);
  const additionalPointsTotal = Object.values(additionalPoints).reduce(
    (acc, curr) => acc + curr,
    0
  );

  // Calculate the grand total
  const grandTotal =
    coreHumanCapitalTotal +
    spouseFactorsTotal +
    skillTransferabilityTotal +
    additionalPointsTotal;

  console.log("CRS Score:", grandTotal);

  console.log("----------Core HumanAge -------");
  console.log(" age :", coreHumanCapitalPoints.age);
  console.log(
    "  work experiece:",
    coreHumanCapitalPoints.canadianWorkExperience
  );
  console.log("Language", coreHumanCapitalPoints.CLB);

  console.log(
    "Additional Points Level of Educatoin :",
    coreHumanCapitalPoints.internationlEducation
  );
  console.log(
    "Work Experience in Canada :",
    coreHumanCapitalPoints.canadianWorkExperience
  );

  console.log("------------Skills Ability -------");
  console.log(
    "Educaition with clb",
    skillTransferabilityPoints.educationWithCLB7OrHigher
  );

  console.log(
    "Foreign Exp with CLB 7 or Higher",
    skillTransferabilityPoints.foreignWorkExperienceWithCLB7OrHigher
  );
  console.log(
    "Candain Exp and Edu",
    skillTransferabilityPoints.educationWithCanadianWorkExperience
  );

  console.log("---------- spouseFactorsPoints------------");
  console.log("Spouse Education", spouseFactorsPoints.education);
  console.log("Spouse Experinece", spouseFactorsPoints.spouseExperience);
  console.log("Spouse Language Score", spouseFactorsPoints.languageScore);

  console.log("---------Additional Scores -------------");
  console.log("sibling:", additionalPoints.siblingInCanada);
  console.log(
    "Post Secondary education:",
    additionalPoints.postSecondaryEducationInCanada
  );
  console.log("Arranged employement :", additionalPoints.arrangedEmployment);
  console.log("PNP  :", additionalPoints.provincialNomination);

  const resultDiv = document.querySelector(".result");

  resultDiv.innerHTML = `
    <p>CRS Score: ${grandTotal}</p>
   `;
}
