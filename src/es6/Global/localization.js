// Global localizations

const number = 1234567.89;
const date = new Date();
const list = ["ä", "a", "z"];

const en = "en-US";
const numberFormatEN = new Intl.NumberFormat(en);
const dateFormatEN = new Intl.DateTimeFormat(en);
const collatorEN = new Intl.Collator("de");
const currencyFormatUSD = new Intl.NumberFormat(en, {
  style: "currency",
  currency: "USD"
});

console.log(numberFormatEN.format(number));
console.log(dateFormatEN.format(date));
console.log([...list.sort(collatorEN.compare)]);
console.log(currencyFormatUSD.format(number));
console.log();

const fi = "fi-FI";
const numberFormatFI = new Intl.NumberFormat(fi);
const dateFormatFI = new Intl.DateTimeFormat(fi);
const collatorFI = new Intl.Collator("sv");
const currencyFormatEUR = new Intl.NumberFormat(fi, {
  style: "currency",
  currency: "EUR"
});

console.log(numberFormatFI.format(number));
console.log(dateFormatFI.format(date));
console.log([...list.sort(collatorFI.compare)]);
console.log(currencyFormatEUR.format(number));
