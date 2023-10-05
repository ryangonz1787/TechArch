// Function to show/hide partner status questions based on marital status

const partnerStatusDiv = document.querySelector(".partner-status");
function togglePartnerStatus() {
  const selectedMaritalStatus = document.querySelector(
    'input[name="marital-status"]:checked'
  );

  if (selectedMaritalStatus) {
    const maritalStatusValue = selectedMaritalStatus.value;
    if (
      maritalStatusValue === "married" ||
      maritalStatusValue === "common-law"
    ) {
      partnerStatusDiv.style.display = "block";
    } else {
      partnerStatusDiv.style.display = "none";
    }
  }
}

// Add an event listener to the marital status radio buttons
const maritalStatusRadioButtons = document.querySelectorAll(
  'input[name="marital-status"]'
);
maritalStatusRadioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", togglePartnerStatus);
});

// Initial call to set the initial state
togglePartnerStatus();

//--------------------------------------------------------------------------

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
        jobOfferNoCTeerDiv.style.display = "block"; // Show the div if "Yes" is selected
      } else {
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
