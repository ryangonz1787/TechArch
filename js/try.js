formValues = {};

const spouseLanguage = {
  speaking: 1,
  reading: 3,
  listening: 4,
  writing: 5,
};

const spouseLanguageScore =
  spouseLanguage.listening +
  spouseLanguage.reading +
  spouseLanguage.writing +
  spouseLanguage.speaking;
formValues = spouseLanguageScore;

console.log(formValues);
