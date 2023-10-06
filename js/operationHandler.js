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

    canadianCourse:
      formValues.canadianCourse === "SecondaryDiploma"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 28
          : 30
        : formValues.canadianCourse === "OneYearProgram"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 84
          : 90
        : formValues.canadianCourse === "TwoYearProgram"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 91
          : 98
        : formValues.canadianCourse === "BachelorDegree"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 112
          : 120
        : formValues.canadianCourse === "TwoOrMoreDegrees"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 119
          : 128
        : formValues.canadianCourse === "MastersDegree"
        ? formValues.maritalStatus === "with" &&
          formValues.partnerComesToCanada === "yes"
          ? 126
          : 135
        : formValues.canadianCourse === "PhD"
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

    CLB: formValues.languageScore,
    // < 4
    //   ? 0
    //   : formValues.englishLanguage < 6
    //   ? formValues.maritalStatus === "with"
    //     ? 6
    //     : 6
    //   : formValues.englishLanguage === 6
    //   ? formValues.maritalStatus === "with"
    //     ? 8
    //     : 9
    //   : formValues.englishLanguage === 7
    //   ? formValues.maritalStatus === "with"
    //     ? 16
    //     : 17
    //   : formValues.englishLanguage === 8
    //   ? formValues.maritalStatus === "with"
    //     ? 22
    //     : 23
    //   : formValues.englishLanguage === 9
    //   ? formValues.maritalStatus === "with"
    //     ? 29
    //     : 31
    //   : formValues.englishLanguage >= 10
    //   ? formValues.maritalStatus === "with"
    //     ? 32
    //     : 34
    //   : 0,
  };

  const spouseFactorsPoints = {
    // education:
    //   formValues.maritalStatus === "with"
    //     ? formValues.spouseEducation === "SecondaryDiploma"
    //       ? 2
    //       : formValues.spouseEducation === "OneYearProgram"
    //       ? 6
    //       : formValues.spouseEducation === "TwoYearProgram"
    //       ? 7
    //       : formValues.spouseEducation === "BachelorDegree"
    //       ? 8
    //       : formValues.spouseEducation === "TwoOrMoreDegrees"
    //       ? 9
    //       : formValues.spouseEducation === "MastersDegree"
    //       ? 10
    //       : formValues.spouseEducation === "PhD"
    //       ? 10
    //       : 0
    //     : 0,
    firstLanguageCLB: formValues.spouseLanguageScore,

    // // canadianWorkExperience:
    //   formValues.maritalStatus === "with"
    //     ? formValues.spouseExperience === "None"
    //       ? 0
    //       : formValues.spouseExperience === "one-year"
    //       ? 5
    //       : formValues.spouseExperience === "two-years"
    //       ? 7
    //       : formValues.spouseExperience === "three-years"
    //       ? 8
    //       : formValues.spouseExperience === "four-years"
    //       ? 9
    //       : formValues.spouseExperience === "five-years-or-more"
    //       ? 10
    //       : 0
    //     : 0,
  };

  // const skillTransferabilityPoints = {
  //   educationWithCLB7OrHigher: 0, // Needs to be calculated based on foreign education
  //   educationWithCanadianWorkExperience: 0, // Needs to be calculated based on foreign education
  //   foreignWorkExperienceWithCLB7OrHigher: 0, // Needs to be calculated based on foreign work experience
  //   foreignWorkExperienceWithCanadianWorkExperience: 0, // Needs to be calculated based on foreign work experience
  //   certificateQualificationWithCLB5OrHigher: 0, // Needs to be calculated based on certificate qualification
  // };

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
  // const skillTransferabilityTotal = Object.values(
  //   skillTransferabilityPoints
  // ).reduce((acc, curr) => acc + curr, 0);
  const additionalPointsTotal = Object.values(additionalPoints).reduce(
    (acc, curr) => acc + curr,
    0
  );

  // Calculate the grand total
  const grandTotal =
    coreHumanCapitalTotal +
    // spouseFactorsTotal +
    // skillTransferabilityTotal +
    additionalPointsTotal;

  console.log("CRS Score:", grandTotal);

  console.log(" Core HumanAge age :", coreHumanCapitalPoints.age);
  console.log(
    " Core HumanAge canadian eduation:",
    coreHumanCapitalPoints.canadianCourse
  );
  console.log(
    " Core HumanAge  work experiece:",
    coreHumanCapitalPoints.canadianWorkExperience
  );
  // console.log(
  //   "Additional Points Level of Educatoin :",
  //   coreHumanCapitalPoints.internationlEducation
  // );
  // console.log(spouseFactorsPoints);
  // console.log(skillTransferabilityPoints);
  console.log("Additional Points  siblin:", additionalPoints.siblingInCanada);
  console.log(
    "Additional Points  ps education:",
    additionalPoints.postSecondaryEducationInCanada
  );
  console.log(
    "Additional Points employement :",
    additionalPoints.arrangedEmployment
  );
  console.log("Additional Points pnp :", additionalPoints.provincialNomination);
}

// const crsScore = calculateCRSScore(formValues);
// console.log("CRS Score: ", crsScore);

/*
none or less than secondary - 0
secondary - 30, 28
One Year - 90, 84
2 - 98, 91
bachelor - 120, 112
two or more - 128, 119
master - 135 , 126
phd - 150, 140


*/
/*
Spouse Factor
ielts max -> 5 each, 20

s - 7 -> 5
*/
