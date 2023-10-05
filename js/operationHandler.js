const formValues = {
  maritalStatus: "",
  age: "",
  canadianEducation: "",
  canadianCourse: "",
  selectedCanadianExperience: "",
  selectedForeignExperience: "",
  selectedCertificateQualification: "",
  jobOfferRadio: "",
  selectedNocTeer: "",
  nominationCertificateValue: "",
  siblingCitizenValue: "",
};

// ***** Getting the values of Marital status ****
function toggleMarital() {
  const selectedMaritalStatus = document.querySelector(
    'input[name="marital-status"]:checked'
  );

  if (selectedMaritalStatus) {
    formValues.maritalStatus = selectedMaritalStatus.value;
    console.log("Marital Status:", formValues.maritalStatus);
  }
}

const maritalStatusButtons = document.querySelectorAll(
  'input[name="marital-status"]'
);

maritalStatusButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", toggleMarital);
});

const ageInput = document.getElementById("age");

ageInput.addEventListener("input", () => {
  formValues.age = ageInput.value;
  console.log("Age:", formValues.age);
});

/* Get the value of international Education */

var internationalCourse = document.getElementById("international-course");
internationalCourse.addEventListener("change", function () {
  formValues.internationalEducation = internationalCourse.value;
});

/* Getting the value from Canadian Education -> YES OR NO */
const canadianEducationNo = document.getElementById("canadian-education-no");
const canadianEducationYes = document.getElementById("canadian-education-yes");

canadianEducationNo.addEventListener("change", function () {
  if (canadianEducationNo.checked) {
    formValues.canadianEducation = canadianEducationNo.value;
    console.log("Canadian Education Value:", formValues.canadianEducation);
  }
});

canadianEducationYes.addEventListener("change", function () {
  if (canadianEducationYes.checked) {
    formValues.canadianEducation = canadianEducationYes.value;
    console.log("Canadian Education Value:", formValues.canadianEducation);
  }
});

/* Getting the values from Canadian Course */
const canadianCourse = document.getElementById("canadian-course");

canadianCourse.addEventListener("change", () => {
  formValues.canadianCourse = canadianCourse.value;
  console.log("Canadian Course:", formValues.canadianCourse);
});

/* Getting the values of Language Test */
function language() {
  const readingValue = parseFloat(
    document.getElementById("language-reading").value
  );
  const speakingValue = parseFloat(
    document.getElementById("language-speaking").value
  );
  const listeningValue = parseFloat(
    document.getElementById("language-listening").value
  );
  const writingValue = parseFloat(
    document.getElementById("language-writing").value
  );
  if (
    isNaN(readingValue) ||
    isNaN(speakingValue) ||
    isNaN(listeningValue) ||
    isNaN(writingValue)
  ) {
    console.error("One or more values are not valid numbers.");
    return;
  }

  const add = readingValue + speakingValue + listeningValue + writingValue;
  formValues.englishLanguage = add;
}

const submitButton = document.getElementById("language-btn");
submitButton.addEventListener("click", language);

function frenchLanguage() {
  const readingValue = parseFloat(
    document.getElementById("french-reading").value
  );
  const speakingValue = parseFloat(
    document.getElementById("french-speaking").value
  );
  const listeningValue = parseFloat(
    document.getElementById("french-listening").value
  );
  const writingValue = parseFloat(
    document.getElementById("french-writing").value
  );
  if (
    isNaN(readingValue) ||
    isNaN(speakingValue) ||
    isNaN(listeningValue) ||
    isNaN(writingValue)
  ) {
    console.error("One or more values are not valid numbers.");
    return;
  }
  const add = readingValue + speakingValue + listeningValue + writingValue;
  formValues.frenchLanguage = add;
  console.log("Rounded French Language:", add);
}
const frenchButton = document.getElementById("french-btn");
frenchButton.addEventListener("click", frenchLanguage);

/*  Values for canadian Work Experience*/

const canadianWorkExperienceSelect = document.getElementById("work-experience");
const foreignWorkExperienceSelect = document.getElementById(
  "foreign-work-experience"
);
function getSelectedValues() {
  formValues.selectedCanadianExperience = canadianWorkExperienceSelect.value;
  formValues.selectedForeignExperience = foreignWorkExperienceSelect.value;
  console.log(
    "Selected Canadian Work Experience:",
    formValues.selectedCanadianExperience
  );
  console.log(
    "Selected Foreign Work Experience:",
    formValues.selectedForeignExperience
  );
}

canadianWorkExperienceSelect.addEventListener("change", getSelectedValues);
foreignWorkExperienceSelect.addEventListener("change", getSelectedValues);

/*  Certificate of Qualification from Canadian Province */
const certificateQualificationSelect = document.getElementById(
  "certificate-qualification"
);
function getSelectedValue() {
  formValues.selectedCertificateQualification =
    certificateQualificationSelect.value;
  console.log(
    "Selected Certificate Qualification:",
    formValues.selectedCertificateQualification
  );
}
certificateQualificationSelect.addEventListener("change", getSelectedValue);

/* Do you have a valid job offer supported by a Labour Market Impact Assessment? */
const yesRadioButton = document.getElementById("job-offer-yes");
const noRadioButton = document.getElementById("job-offer-no");

yesRadioButton.addEventListener("change", function () {
  if (yesRadioButton.checked === "yes") {
    formValues.jobOfferRadio = yesRadioButton.value;
    console.log("job offer: ", formValues.jobOfferRadio);
  }
});

noRadioButton.addEventListener("change", function () {
  if (noRadioButton.checked === "no") {
    formValues.jobOfferRadio = noRadioButton.value;
    console.log("job offer :", formValues.jobOfferRadio);
  }
});

/* --- Get the values of NOC TEER --- */
const nocTeerSelect = document.getElementById("noc-teer");

nocTeerSelect.addEventListener("change", function () {
  formValues.selectedNocTeer = nocTeerSelect.value;
  console.log(formValues.selectedNocTeer);
});

/* -----Nomination Certificate values yes or no */

const nominationCertificateYes = document.getElementById(
  "nomination-certificate-yes"
);
const nominationCertificateNo = document.getElementById(
  "nomination-certificate-no"
);
nominationCertificateYes.addEventListener("change", function () {
  if (nominationCertificateYes.checked) {
    formValues.nominationCertificateValue = nominationCertificateYes.value;
    console.log(formValues.nominationCertificateValue);
  }
});

nominationCertificateNo.addEventListener("change", function () {
  if (nominationCertificateNo.checked) {
    formValues.nominationCertificateValue = nominationCertificateNo.value;
    console.log(formValues.nominationCertificateValue);
  }
});

/* -----Sibling Citizen value Yes or No */

const siblingCitizenYes = document.getElementById("sibling-citizen-yes");
const siblingCitizenNo = document.getElementById("sibling-citizen-no");

siblingCitizenYes.addEventListener("change", function () {
  if (siblingCitizenYes.checked) {
    formValues.siblingCitizenValue = siblingCitizenYes.value;
    console.log(formValues.siblingCitizenValue);
  }
});

siblingCitizenNo.addEventListener("change", function () {
  if (siblingCitizenNo.checked) {
    formValues.siblingCitizenValue = siblingCitizenNo.value;
    console.log(formValues.siblingCitizenValue);
  }
});

/* get the values of spouse course */

var spouseCourseSelect = document.getElementById("spouse-course");
spouseCourseSelect.addEventListener("change", function () {
  var selectedValue = spouseCourseSelect.value;
  console.log(selectedValue);
});

/* Get the value of spouse work experinece */

var spouseWorkExperienceSelect = document.getElementById(
  "spouse-work-experience"
);
spouseWorkExperienceSelect.addEventListener("change", function () {
  var selectedValue = spouseWorkExperienceSelect.value;
  console.log(selectedValue);
});

/* Get the values of spouse Language */

const spouseLanguage = {
  speaking: "",
  reading: "",
  listening: "",
  writing: "",
};

const spouseReadingSelect = document.getElementById("spouse-reading");
const spouseSpeakingSelect = document.getElementById("spouse-speaking");
const spouseListeningSelect = document.getElementById("spouse-listening");
const spouseWritingSelect = document.getElementById("spouse-writing");
spouseReadingSelect.addEventListener("change", function () {
  spouseLanguage.reading = parseFloat(spouseReadingSelect.value);
});

spouseSpeakingSelect.addEventListener("change", function () {
  console.log(spouseSpeakingSelect.value);
  spouseLanguage.speaking = parseFloat(spouseSpeakingSelect.value);
});

spouseListeningSelect.addEventListener("change", function () {
  console.log(spouseListeningSelect.value);
  spouseLanguage.listening = parseFloat(spouseListeningSelect.value);
});

spouseWritingSelect.addEventListener("change", function () {
  console.log(spouseWritingSelect.value);
  spouseLanguage.writing = parseFloat(spouseWritingSelect.value);
});

// TODO ********************************************************

// const spouseLanguageScore =
//   spouseLanguage.listening +
//   spouseLanguage.reading +
//   spouseLanguage.writing +
//   spouseLanguage.speaking;
formValues.spouseLanguageScore = 20;

/* Calucating the CRS Score */

function calculateCRSScore(formValues) {
  const coreHumanCapitalPoints = {
    age:
      formValues.age <= 17
        ? 0
        : formValues.age == 18
        ? formValues.maritalStatus === "with"
          ? 90
          : 99
        : formValues.age == 19
        ? formValues.maritalStatus === "with"
          ? 95
          : 105
        : formValues.age >= 20 && formValues.age <= 29
        ? formValues.maritalStatus === "with"
          ? 100
          : 110
        : formValues.age == 30
        ? formValues.maritalStatus === "with"
          ? 95
          : 105
        : formValues.age == 31
        ? formValues.maritalStatus === "with"
          ? 90
          : 99
        : formValues.age == 32
        ? formValues.maritalStatus === "with"
          ? 85
          : 94
        : formValues.age == 33
        ? formValues.maritalStatus === "with"
          ? 80
          : 88
        : formValues.age == 34
        ? formValues.maritalStatus === "with"
          ? 75
          : 83
        : formValues.age == 35
        ? formValues.maritalStatus === "with"
          ? 70
          : 77
        : formValues.age == 36
        ? formValues.maritalStatus === "with"
          ? 65
          : 72
        : formValues.age == 37
        ? formValues.maritalStatus === "with"
          ? 60
          : 66
        : formValues.age == 38
        ? formValues.maritalStatus === "with"
          ? 55
          : 61
        : formValues.age == 39
        ? formValues.maritalStatus === "with"
          ? 50
          : 55
        : formValues.age == 40
        ? formValues.maritalStatus === "with"
          ? 45
          : 50
        : formValues.age == 41
        ? formValues.maritalStatus === "with"
          ? 35
          : 39
        : formValues.age == 42
        ? formValues.maritalStatus === "with"
          ? 25
          : 28
        : formValues.age == 43
        ? formValues.maritalStatus === "with"
          ? 15
          : 17
        : formValues.age == 44
        ? formValues.maritalStatus === "with"
          ? 5
          : 6
        : // : formValues.age >= 45
          // ? formValues.maritalStatus === "with"
          //   ? 0
          //   : 0
          0,

    internationlEducation:
      formValues.internationalEducation === "none"
        ? formValues.maritalStatus === "with"
          ? 0
          : 0
        : formValues.internationalEducation === "SecondaryDiploma"
        ? formValues.maritalStatus === "with"
          ? 28
          : 30
        : formValues.internationalEducation === "OneYearProgram"
        ? formValues.maritalStatus === "with"
          ? 84
          : 90
        : formValues.internationalEducation === "TwoYearProgram"
        ? formValues.maritalStatus === "with"
          ? 91
          : 98
        : formValues.internationalEducation === "BachelorDegree"
        ? formValues.maritalStatus === "with"
          ? 112
          : 120
        : formValues.internationalEducation === "TwoOrMoreDegrees"
        ? formValues.maritalStatus === "with"
          ? 119
          : 128
        : formValues.internationalEducation === "MastersDegree"
        ? formValues.maritalStatus === "with"
          ? 126
          : 135
        : formValues.internationalEducation === "PhD"
        ? formValues.maritalStatus === "with"
          ? 140
          : 150
        : 0,

    canadianCourse:
      formValues.canadianCourse === "SecondaryDiploma"
        ? formValues.maritalStatus === "with"
          ? 28
          : 30
        : formValues.canadianCourse === "OneYearProgram"
        ? formValues.maritalStatus === "with"
          ? 84
          : 90
        : formValues.canadianCourse === "TwoYearProgram"
        ? formValues.maritalStatus === "with"
          ? 91
          : 98
        : formValues.canadianCourse === "BachelorDegree"
        ? formValues.maritalStatus === "with"
          ? 112
          : 120
        : formValues.canadianCourse === "TwoOrMoreDegrees"
        ? formValues.maritalStatus === "with"
          ? 119
          : 128
        : formValues.canadianCourse === "MastersDegree"
        ? formValues.maritalStatus === "with"
          ? 126
          : 135
        : formValues.canadianCourse === "PhD"
        ? formValues.maritalStatus === "with"
          ? 140
          : 150
        : 0,
    // firstLanguageCLB: formValues.firstLanguageCLBPoints,
    // secondLanguageCLB: formValues.secondLanguageCLBPoints,
    canadianWorkExperience:
      formValues.selectedCanadianExperience === "None"
        ? 0
        : formValues.selectedCanadianExperience === "one-year"
        ? formValues.maritalStatus === "with"
          ? 35
          : 40
        : formValues.selectedCanadianExperience === "two-years"
        ? formValues.maritalStatus === "with"
          ? 46
          : 53
        : formValues.selectedCanadianExperience === "three-years"
        ? formValues.maritalStatus === "with"
          ? 56
          : 64
        : formValues.selectedCanadianExperience === "four-years"
        ? formValues.maritalStatus === "with"
          ? 63
          : 72
        : formValues.selectedCanadianExperience === "five-years-or-more"
        ? formValues.maritalStatus === "with"
          ? 70
          : 80
        : 0,

    CLB: formValues.englishLanguage,
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

  const skillTransferabilityPoints = {
    educationWithCLB7OrHigher: 0, // Needs to be calculated based on foreign education
    educationWithCanadianWorkExperience: 0, // Needs to be calculated based on foreign education
    foreignWorkExperienceWithCLB7OrHigher: 0, // Needs to be calculated based on foreign work experience
    foreignWorkExperienceWithCanadianWorkExperience: 0, // Needs to be calculated based on foreign work experience
    certificateQualificationWithCLB5OrHigher: 0, // Needs to be calculated based on certificate qualification
  };

  const additionalPoints = {
    siblingInCanada: formValues.siblingCitizenValue === "yes" ? 15 : 0,
    // frenchLanguageSkills: formValues.frenchLanguageSkills === "yes" ? 50 : 0,
    postSecondaryEducationInCanada:
      formValues.canadianCourse === "canadian-three-years-or-more"
        ? 30
        : formValues.canadianCourse === "canadian-one-two-year"
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

  console.log(" Core HumanAge age :", coreHumanCapitalPoints.age);
  console.log(
    " Core HumanAge canadian eduation:",
    coreHumanCapitalPoints.canadianCourse
  );
  console.log(
    " Core HumanAge  work experiece:",
    coreHumanCapitalPoints.canadianWorkExperience
  );
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
