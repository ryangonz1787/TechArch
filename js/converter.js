/* ----------------------*/
function calculateCelpipCLB(speaking, listening, reading, writing) {
  if (speaking >= 9 && listening >= 9 && reading >= 9 && writing >= 9) {
    return "9+";
  } else if (
    speaking === 8 &&
    listening === 8 &&
    reading === 8 &&
    writing === 8
  ) {
    return "8";
  } else if (
    speaking === 7 &&
    listening === 7 &&
    reading === 7 &&
    writing === 7
  ) {
    return "7";
  } else if (
    (speaking === 10 || listening === 10 || reading === 10 || writing === 12) &&
    speaking >= 9.0 &&
    listening >= 9.0 &&
    reading >= 9.0 &&
    writing >= 9.0
  ) {
    return "9+";
  } else if (
    speaking === 10 &&
    listening === 10 &&
    reading === 10 &&
    writing === 12
  ) {
    return "9+";
  } else if (speaking === 10 && listening === 10 && reading === 10) {
    return "9+";
  } else {
    return "Not eligible";
  }
}

function calculateIeltsCLB(listening, reading, writing, speaking) {
  if (
    (listening >= 10 && reading >= 8.5 && writing >= 8.0 && speaking >= 7.5) ||
    (listening >= 10 && reading >= 9.0 && writing >= 9.0 && speaking >= 7.5)
  ) {
    return "9+";
  } else if (
    listening === 9 &&
    reading === 8.0 &&
    writing === 7.0 &&
    speaking === 7.0
  ) {
    return "9";
  } else if (
    listening === 8 &&
    reading === 7.5 &&
    writing === 6.5 &&
    speaking === 6.5
  ) {
    return "8";
  } else if (
    listening === 7 &&
    reading === 6.0 &&
    writing === 6.0 &&
    speaking === 6.0
  ) {
    return "7";
  } else if (
    listening === 6 &&
    reading === 5.5 &&
    writing === 5.0 &&
    speaking === 5.5
  ) {
    return "6";
  } else if (
    listening === 5 &&
    reading === 5.0 &&
    writing === 4.0 &&
    speaking === 5.0
  ) {
    return "5";
  } else {
    return "Not eligible";
  }
}

function calculateTefCLB(speaking, listening, reading, writing) {
  if (speaking >= 9 && listening >= 371 && reading >= 298 && writing >= 371) {
    return "9+";
  } else if (
    speaking === 8 &&
    listening >= 349 &&
    listening <= 370 &&
    reading >= 280 &&
    reading <= 297 &&
    writing >= 349 &&
    writing <= 370
  ) {
    return "8";
  } else if (
    speaking === 7 &&
    listening >= 310 &&
    listening <= 348 &&
    reading >= 249 &&
    reading <= 279 &&
    writing >= 310 &&
    writing <= 348
  ) {
    return "7";
  } else if (
    (speaking === 9 || speaking === 10) &&
    listening >= 371 &&
    reading >= 298 &&
    writing >= 371
  ) {
    return "9+";
  } else if (
    speaking === 10 &&
    listening >= 16 &&
    listening <= 20 &&
    reading >= 549 &&
    reading <= 699 &&
    writing >= 16 &&
    writing <= 20
  ) {
    return "9+";
  } else {
    return "Not eligible";
  }
}

function calculateTcfCLB(speaking, listening, reading, writing) {
  if (
    speaking >= 10 &&
    listening >= 16 &&
    listening <= 20 &&
    reading >= 549 &&
    reading <= 699 &&
    writing >= 16 &&
    writing <= 20
  ) {
    return "10+";
  } else if (
    speaking === 9 &&
    listening >= 14 &&
    listening <= 15 &&
    reading >= 523 &&
    reading <= 548 &&
    writing >= 14 &&
    writing <= 15
  ) {
    return "9";
  } else if (
    speaking === 8 &&
    listening >= 12 &&
    listening <= 13 &&
    reading >= 503 &&
    reading <= 522 &&
    writing >= 12 &&
    writing <= 13
  ) {
    return "8";
  } else if (
    speaking === 7 &&
    listening >= 10 &&
    listening <= 11 &&
    reading >= 458 &&
    reading <= 502 &&
    writing >= 10 &&
    writing <= 11
  ) {
    return "7";
  } else if (
    speaking >= 7 &&
    speaking <= 9 &&
    listening >= 398 &&
    listening <= 457 &&
    reading >= 406 &&
    reading <= 452 &&
    writing >= 7 &&
    writing <= 9
  ) {
    return "6";
  } else if (
    speaking === 6 &&
    listening >= 369 &&
    listening <= 397 &&
    reading >= 375 &&
    reading <= 405 &&
    writing === 6
  ) {
    return "5";
  } else {
    return "Not eligible";
  }
}

const celpipScores = {
  "celpip-speaking": 10,
  "celpip-listening": 10,
  "celpip-reading": 10,
  "celpip-writing": 12,
};

const ieltsScores = {
  "ielts-listening": 7,
  "ielts-reading": 7,
  "ielts-writing": 7,
  "ielts-speaking": 7,
};

const celpipCLB = calculateCelpipCLB(
  celpipScores["celpip-speaking"],
  celpipScores["celpip-listening"],
  celpipScores["celpip-reading"],
  celpipScores["celpip-writing"]
);
const ieltsCLB = calculateIeltsCLB(
  ieltsScores["ielts-listening"],
  ieltsScores["ielts-reading"],
  ieltsScores["ielts-writing"],
  ieltsScores["ielts-speaking"]
);

console.log("CELPIP-G CLB Level:", celpipCLB);
console.log("IELTS CLB Level:", ieltsCLB);

// Example usage with provided scores
const tefScores = {
  "tef-speaking": 9,
  "tef-listening": 371,
  "tef-reading": 298,
  "tef-writing": 371,
};

const tcfScores = {
  "tcf-speaking": 10,
  "tcf-listening": 16,
  "tcf-reading": 549,
  "tcf-writing": 16,
};

const tefNCLC = calculateTefCLB(
  tefScores["tef-speaking"],
  tefScores["tef-listening"],
  tefScores["tef-reading"],
  tefScores["tef-writing"]
);
const tcfNCLC = calculateTcfCLB(
  tcfScores["tcf-speaking"],
  tcfScores["tcf-listening"],
  tcfScores["tcf-reading"],
  tcfScores["tcf-writing"]
);

console.log("TEF Canada NCLC Level:", tefNCLC);
console.log("TCF Canada NCLC Level:", tcfNCLC);
