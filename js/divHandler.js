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
      canadianCourseDiv.style.display = "block"; // Hide the div if "Yes" is selected
    } else {
      canadianCourseDiv.style.display = "none";
    }
  });
});

// ---------------------Hide or show the language based on selected readiobutton ---------------

// // Get references to the radio buttons and divs
// const lang_radioButtons = document.querySelectorAll('input[name="language"]');
// const lang_divs = {
//   "test-ielts": document.getElementById("ielts-div"),
//   "test-celpip-g": document.getElementById("celpip-g-div"),
//   "test-tef-canada": document.getElementById("tef-canada-div"),
//   "test-tcf-canada": document.getElementById("tcf-canada-div"),
// };
// // Function to hide all language divs
// function hideAllLanguageDivs() {
//   for (const div of Object.values(lang_divs)) {
//     div.style.display = "none";
//   }
// }

// // Function to show the selected language div
// function showSelectedLanguageDiv() {
//   hideAllLanguageDivs(); // Hide all language divs first

//   // Determine which radio button is selected
//   for (const radioButton of lang_radioButtons) {
//     if (radioButton.checked) {
//       const value = radioButton.value;
//       if (lang_divs[value]) {
//         lang_divs[value].style.display = "block";
//       }
//     }
//   }
// }

// // Initial call to set the initial state
// showSelectedLanguageDiv();

// // Attach an event listener to each radio button
// for (const radioButton of lang_radioButtons) {
//   radioButton.addEventListener("change", showSelectedLanguageDiv);
// }

//----------------------------------hide or show the other language tests------------

const ieltsDiv = document.getElementById("ol-ielts-div");
const celpipGDiv = document.getElementById("ol-celpip-g-div");
const tefCanadaDiv = document.getElementById("ol-tef-canada-div");
const tcfCanadaDiv = document.getElementById("ol-tcf-canada-div");

// Function to show/hide language test divs based on the selected option
function toggleLanguageTestDiv() {
  const selectedOption = document.querySelector(
    'input[name="other-language"]:checked'
  );

  // Hide all divs initially
  ieltsDiv.style.display = "none";
  celpipGDiv.style.display = "none";
  tefCanadaDiv.style.display = "none";
  tcfCanadaDiv.style.display = "none";

  // Check if a radio button is selected before accessing its value
  if (selectedOption) {
    const optionValue = selectedOption.value;
    // Show the selected div based on the user's choice
    if (optionValue === "ielts") {
      ieltsDiv.style.display = "block";
    } else if (optionValue === "celpip-g") {
      celpipGDiv.style.display = "block";
    } else if (optionValue === "tef-canada") {
      tefCanadaDiv.style.display = "block";
    } else if (optionValue === "tcf-canada") {
      tcfCanadaDiv.style.display = "block";
    }
  }
}

// Add an event listener to the radio buttons to trigger the function
const radioButtons = document.querySelectorAll('input[name="other-language"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", toggleLanguageTestDiv);
});

// Initial call to set the initial state
toggleLanguageTestDiv();

// Get references to the radio buttons and divs

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
