// ***** Getting the values of Marital status ****

document.addEventListener("DOMContentLoaded", function () {
  function toggleMarital() {
    const selectedMaritalStatus = document.querySelector(
      'input[name="marital-status"]:checked'
    );

    if (selectedMaritalStatus) {
      formValues.maritalStatus = selectedMaritalStatus.value;
      if (selectedMaritalStatus.value === "with") {
        document.querySelector(".partner-status").style.display = "block";
      } else {
        document.querySelector(".partner-status").style.display = "none";
      }
    }
  }

  const maritalStatusButtons = document.querySelectorAll(
    'input[name="marital-status"]'
  );

  maritalStatusButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", toggleMarital);
  });

  toggleMarital();
});

/*  Is partner citizen or not*/
const isPartnerCitizenOrPrNo = document.getElementById(
  "is-partner-citizen-or-pr-no"
);
const isPartnerCitizenOrPrYes = document.getElementById(
  "is-partner-citizen-or-pr-yes"
);

isPartnerCitizenOrPrNo.addEventListener("change", function () {
  if (isPartnerCitizenOrPrNo.checked) {
    formValues.partnerCitizen = "no";
  }
});

isPartnerCitizenOrPrYes.addEventListener("change", function () {
  if (isPartnerCitizenOrPrYes.checked) {
    formValues.partnerCitizen = "yes";
  }
});

/* get the value of "partner-comes-to-canada" */

const spouseClass = document.querySelector(".spouse-class");
const partnerComesToCanadaNo = document.getElementById(
  "partner-comes-to-canada-no"
);
const partnerComesToCanadaYes = document.getElementById(
  "partner-comes-to-canada-yes"
);

partnerComesToCanadaNo.addEventListener("change", function () {
  if (partnerComesToCanadaNo.checked) {
    formValues.partnerComesToCanada = "no";
    spouseClass.style.display = "none";

    console.log("Partner comes to Canada: No");
  }
});

partnerComesToCanadaYes.addEventListener("change", function () {
  if (partnerComesToCanadaYes.checked) {
    formValues.partnerComesToCanada = "yes";
    spouseClass.style.display = "block";
    console.log("Partner comes to Canada: Yes");
  }
});

/* Get the value of Age */
const ageInput = document.getElementById("age");

ageInput.addEventListener("input", () => {
  formValues.age = ageInput.value;
  console.log("Age:", formValues.age);
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

/* Get the value of international Education */

var internationalCourse = document.getElementById("international-course");
internationalCourse.addEventListener("change", function () {
  formValues.internationalEducation = internationalCourse.value;
});

/* Getting the values from Canadian Course */
const canadianCourse = document.getElementById("canadian-course");

canadianCourse.addEventListener("change", () => {
  formValues.canadianCourse = canadianCourse.value;
  console.log("Canadian Course:", formValues.canadianCourse);
});

/* Getting the values of Language Test */

const languageScore = {
  reading: 0,
  writing: 0,
  speaking: 0,
  listening: 0,
};

const readingValue = document.getElementById("language-reading");
const speakingValue = document.getElementById("language-speaking");
const listeningValue = document.getElementById("language-listening");
const writingValue = document.getElementById("language-writing");

readingValue.addEventListener("change", function () {
  languageScore.reading = parseFloat(readingValue.value);
  updateTotalLanguageScore();
});

speakingValue.addEventListener("change", function () {
  languageScore.speaking = parseFloat(speakingValue.value);
  updateTotalLanguageScore();
});

listeningValue.addEventListener("change", function () {
  languageScore.listening = parseFloat(listeningValue.value);
  updateTotalLanguageScore();
});

writingValue.addEventListener("change", function () {
  languageScore.writing = parseFloat(writingValue.value);
  updateTotalLanguageScore();
});

function updateTotalLanguageScore() {
  const total =
    languageScore.reading +
    languageScore.writing +
    languageScore.listening +
    languageScore.speaking;
  formValues.languageScore = total;
}

/* the selected value of the "know-french" radio buttons */

const knowFrenchNo = document.getElementById("know-french-no");
const knowFrenchYes = document.getElementById("know-french-yes");
const frenchLanguageSection = document.querySelector(".french-language");

function toggleFrenchLanguageSection() {
  if (knowFrenchYes.checked) {
    formValues.secondLanguage = "yes";
    frenchLanguageSection.style.display = "block";
  } else {
    formValues.secondLanguage = "no";
    frenchLanguageSection.style.display = "none";
  }
}
knowFrenchNo.addEventListener("change", toggleFrenchLanguageSection);
knowFrenchYes.addEventListener("change", toggleFrenchLanguageSection);

/* Get the value of French */

const secondLanguageScore = {
  reading: 0,
  writing: 0,
  speaking: 0,
  listening: 0,
};

const reading = document.getElementById("french-reading");
const speaking = document.getElementById("french-speaking");
const listening = document.getElementById("french-listening");
const writing = document.getElementById("french-writing");

reading.addEventListener("change", function () {
  secondLanguageScore.reading = parseInt(reading.value);
  updateSecondLanguageScore();
});
speaking.addEventListener("change", function () {
  secondLanguageScore.speaking = parseInt(speaking.value);
  updateSecondLanguageScore();
});
listening.addEventListener("change", function () {
  secondLanguageScore.listening = parseInt(listening.value);
  updateSecondLanguageScore();
});
writing.addEventListener("change", function () {
  secondLanguageScore.writing = parseInt(writing.value);
  updateSecondLanguageScore();
});

function updateSecondLanguageScore() {
  const add =
    secondLanguageScore.speaking +
    secondLanguageScore.writing +
    secondLanguageScore.listening +
    secondLanguageScore.reading;
  formValues.secondLanguageScore = add;
}

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
  formValues.CertificateQualification = certificateQualificationSelect.value;
  console.log(
    "Selected Certificate Qualification:",
    formValues.CertificateQualification
  );
}
certificateQualificationSelect.addEventListener("change", getSelectedValue);

/* Do you have a valid job offer supported by a Labour Market Impact Assessment? */
const yesRadioButton = document.getElementById("job-offer-yes");
const noRadioButton = document.getElementById("job-offer-no");

yesRadioButton.addEventListener("change", function () {
  if (yesRadioButton.checked === "yes") {
    console.log("job offer yes");
    // formValues.jobOfferRadio = "yes";
    // console.log("job offer: ", formValues.jobOfferRadio);
  }
});

noRadioButton.addEventListener("change", function () {
  if (noRadioButton.checked === "no") {
    formValues.jobOfferRadio = "no";
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

const spouseCourseSelect = document.getElementById("spouse-course");
spouseCourseSelect.addEventListener("change", function () {
  formValues.spouseEducation = spouseCourseSelect.value;
});

/* Get the value of spouse work experinece */

const spouseWorkExperienceSelect = document.getElementById(
  "spouse-work-experience"
);
spouseWorkExperienceSelect.addEventListener("change", function () {
  formValues.spouseExperience = spouseWorkExperienceSelect.value;
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
  console.log(spouseReadingSelect.value);

  spouseLanguage.reading = parseInt(spouseReadingSelect.value);
  updateSpouseScore();
});

spouseSpeakingSelect.addEventListener("change", function () {
  console.log(spouseSpeakingSelect.value);
  spouseLanguage.speaking = parseInt(spouseSpeakingSelect.value);
  updateSpouseScore();
});

spouseListeningSelect.addEventListener("change", function () {
  console.log(spouseListeningSelect.value);
  spouseLanguage.listening = parseInt(spouseListeningSelect.value);
  updateSpouseScore();
});

spouseWritingSelect.addEventListener("change", function () {
  console.log(spouseWritingSelect.value);
  spouseLanguage.writing = parseInt(spouseWritingSelect.value);
  updateSpouseScore();
});
function updateSpouseScore() {
  const spouseLanguageScore =
    spouseLanguage.listening +
    spouseLanguage.reading +
    spouseLanguage.writing +
    spouseLanguage.speaking;
  formValues.spouseLanguageScore = spouseLanguageScore;
}

//-------------------hide or show common-law partner come with you to Canada--------
const partnerCitizenOrPrDiv = document.querySelector(".partner-citizen-pr");
const partnerComesToCanadaDiv = document.querySelector(
  ".partner-comes-to-canada"
);

// Function to show/hide partnerComesToCanadaDiv based on partnerCitizenOrPr selection
function togglePartnerComesToCanada() {
  const partnerCitizenOrPrValue = document.querySelector(
    'input[name="is-partner-citizen-or-pr"]:checked'
  );

  if (partnerCitizenOrPrValue) {
    const partnerCitizenOrPrCheckedValue = partnerCitizenOrPrValue.value;
    if (partnerCitizenOrPrCheckedValue === "no") {
      partnerComesToCanadaDiv.style.display = "block";
    } else {
      partnerComesToCanadaDiv.style.display = "none";
    }
  }
}

// Add an event listener to the partnerCitizenOrPr radio buttons
const partnerCitizenOrPrRadioButtons = document.querySelectorAll(
  'input[name="is-partner-citizen-or-pr"]'
);
partnerCitizenOrPrRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", togglePartnerComesToCanada);
});

// Initial call to hide the partnerComesToCanadaDiv
partnerComesToCanadaDiv.style.display = "none";

// ----------------------------Hide or show canadian education --------------------
const canadianEducationRadios = document.querySelectorAll(
  'input[name="canadian-education"]'
);

const canadianCourseDiv = document.querySelector(".canadian-course");

canadianEducationRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    if (radio.value === "yes") {
      canadianCourseDiv.style.display = "block";
    } else {
      canadianCourseDiv.style.display = "none";
    }
  });
});

// -------------------------hide or show the job offer noc teer

document.addEventListener("DOMContentLoaded", function () {
  const jobOfferRadios = document.querySelectorAll('input[name="job-offer"]');
  const jobOfferNoCTeerDiv = document.querySelector(".job-offer-noc-teer");

  jobOfferRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (radio.value === "yes") {
        formValues.jobOfferRadio = "yes";
        jobOfferNoCTeerDiv.style.display = "block"; // Show the div if "Yes" is selected
      } else {
        formValues.jobOfferRadio = "no";
        jobOfferNoCTeerDiv.style.display = "none"; // Hide the div if "No" is selected
      }
    });
  });
});

/*
const formValues = {
  maritalStatus: "With",
  age: 25,
  canadianEducation: "BachelorDegree",
  firstLanguageCLB: 9,
  secondLanguageCLB: 7,
  selectedCanadianExperience: "3Years",
  spouseEducation: "BachelorDegree",
  spouseLanguageCLB: "CLB7Or8",
  spouseExperience: "2Years",
  foreignWorkExperience: "1YearOr2Years",
  selectedCertificateQualification: "With",
  canadianCourse: "OneYear",
  jobOfferRadio: "TEER1or2or3",
  selectedNocTeer: "TEER3",
  nominationCertificateValue: true,
  siblingCitizenValue: true,
  frenchLanguageSkills: true,
};

*/

// CRS Score: 200
// operationHandler.js:578  Core HumanAge age : 110
// operationHandler.js:579  Core HumanAge canadian eduation: 0
// operationHandler.js:583  Core HumanAge  work experiece: 40
// operationHandler.js:589 Additional Points  siblin: 0
// operationHandler.js:590 Additional Points  ps education: 0
// operationHandler.js:594 Additional Points employement : undefined
// operationHandler.js:598 Additional Points pnp : 0
