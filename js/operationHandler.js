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
const language_radioButtons = document.querySelectorAll(
  'input[name="language"]'
);

const lang_radioButtons = document.querySelectorAll('input[name="language"]');
const lang_divs = {
  "test-ielts": document.getElementById("ielts-div"),
  "test-celpip-g": document.getElementById("celpip-g-div"),
  "test-tef-canada": document.getElementById("tef-canada-div"),
  "test-tcf-canada": document.getElementById("tcf-canada-div"),
};
function hideAllLanguageDivs() {
  for (const div of Object.values(lang_divs)) {
    div.style.display = "none";
  }
}

function showSelectedLanguageDiv() {
  hideAllLanguageDivs();

  for (const radioButton of lang_radioButtons) {
    if (radioButton.checked) {
      const value = radioButton.value;
      if (lang_divs[value]) {
        lang_divs[value].style.display = "block";
      }
    }
  }
}

showSelectedLanguageDiv();

for (const radioButton of lang_radioButtons) {
  radioButton.addEventListener("change", () => {
    showSelectedLanguageDiv();

    // When the radio button changes, also hide or clear the previously entered values.
    ieltsValues = {};
    celpipGValues = {};
    tefCanadaValues = {};
    tcfCanadaValues = {};
  });
}

let ieltsValues = {};
let celpipGValues = {};
let tefCanadaValues = {};
let tcfCanadaValues = {};

function storeValuesInObject(div, object) {
  const inputFields = div.querySelectorAll('input[type="text"]');
  inputFields.forEach((inputField) => {
    object[inputField.name] = inputField.value;
  });
}

// Get references to the submit buttons
const ieltsSubmitButton = document
  .getElementById("ielts-div")
  .querySelector(".button-submit");
const celpipGSubmitButton = document
  .getElementById("celpip-g-div")
  .querySelector(".button-submit");
const tefCanadaSubmitButton = document
  .getElementById("tef-canada-div")
  .querySelector(".button-submit");
const tcfCanadaSubmitButton = document
  .getElementById("tcf-canada-div")
  .querySelector(".button-submit");

// Add click event listeners to the submit buttons
ieltsSubmitButton.addEventListener("click", () => {
  storeValuesInObject(document.getElementById("ielts-div"), ieltsValues);
  formValues.ieltsValues = { ...ieltsValues }; // Update formValues
  console.log("IELTS Values:", ieltsValues);
});

celpipGSubmitButton.addEventListener("click", () => {
  storeValuesInObject(document.getElementById("celpip-g-div"), celpipGValues);
  formValues.celpipGValues = { ...celpipGValues }; // Update formValues
  console.log("CELPIP-G Values:", celpipGValues);
});

tefCanadaSubmitButton.addEventListener("click", () => {
  storeValuesInObject(
    document.getElementById("tef-canada-div"),
    tefCanadaValues
  );
  formValues.tefCanadaValues = { ...tefCanadaValues }; // Update formValues
  console.log("TEF Canada Values:", tefCanadaValues);
});

tcfCanadaSubmitButton.addEventListener("click", () => {
  storeValuesInObject(
    document.getElementById("tcf-canada-div"),
    tcfCanadaValues
  );
  formValues.tcfCanadaValues = { ...tcfCanadaValues }; // Update formValues
  console.log("TCF Canada Values:", tcfCanadaValues);
});

/* Values for Other Language Test */
const olIeltsSubmitButton = document
  .getElementById("ol-ielts-div")
  .querySelector(".button-submit");
const olCelpipGSubmitButton = document
  .getElementById("ol-celpip-g-div")
  .querySelector(".button-submit");
const olTefCanadaSubmitButton = document
  .getElementById("ol-tef-canada-div")
  .querySelector(".button-submit");
const olTcfCanadaSubmitButton = document
  .getElementById("ol-tcf-canada-div")
  .querySelector(".button-submit");

// Define objects to store values for "Other Language Results"
let olIeltsValues = {};
let olCelpipGValues = {};
let olTefCanadaValues = {};
let olTcfCanadaValues = {};

// Add click event listeners to the "Submit" buttons for "Other Language Results"
olIeltsSubmitButton.addEventListener("click", () => {
  storeValuesInObject(document.getElementById("ol-ielts-div"), olIeltsValues);
  formValues.olIeltsValues = { ...olIeltsValues }; // Update formValues
  console.log("OL IELTS Values:", olIeltsValues);
});

olCelpipGSubmitButton.addEventListener("click", () => {
  storeValuesInObject(
    document.getElementById("ol-celpip-g-div"),
    olCelpipGValues
  );
  formValues.olCelpipGValues = { ...olCelpipGValues }; // Update formValues
  console.log("OL CELPIP-G Values:", olCelpipGValues);
});

olTefCanadaSubmitButton.addEventListener("click", () => {
  storeValuesInObject(
    document.getElementById("ol-tef-canada-div"),
    olTefCanadaValues
  );
  formValues.olTefCanadaValues = { ...olTefCanadaValues }; // Update formValues
  console.log("OL TEF Canada Values:", olTefCanadaValues);
});

olTcfCanadaSubmitButton.addEventListener("click", () => {
  storeValuesInObject(
    document.getElementById("ol-tcf-canada-div"),
    olTcfCanadaValues
  );
  formValues.olTcfCanadaValues = { ...olTcfCanadaValues }; // Update formValues
  console.log("OL TCF Canada Values:", olTcfCanadaValues);
});

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
  if (yesRadioButton.checked === true) {
    formValues.jobOfferRadio = yesRadioButton.value;
    console.log("job offer: ", formValues.jobOfferRadio);
  }
});

noRadioButton.addEventListener("change", function () {
  if (noRadioButton.checked === true) {
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

// Add event listeners to detect changes in the radio buttons
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
