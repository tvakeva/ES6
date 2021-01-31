// String interpolation

const name = "David";
const age = 34;
const occupation = "Programmer";

const text = `Applicant name: ${name} (${age}).
Working as ${occupation}.`;

const text2 =
  "Applicant name: " + name + " (" + age + ").\nWorking as " + occupation + ".";
console.log(text);
console.log(text2);
