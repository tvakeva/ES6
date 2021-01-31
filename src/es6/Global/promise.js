// Global promise

const response = true;

// Tyypillisesti promisea ei tehdä välttämättä itse,
// vaan yleensä se saadaan, esim. axios kirjasto
// const promise = axios("http://www.google.com")
// paluttaa promisen

const promise = new Promise((resolve, reject) => {
  // Tehdään esim. tietokantahaut tämän funktion sisällä
  // if (response.httpCode === 200) {}
  if (response) {
    resolve("success");
  } else {
    reject(new TypeError("Response failed!"));
  }
});
console.log(promise);

promise
  .then((first) => {
    console.log(first);
    //throw new Error("Hups");
    return "Forwarded message...";
    //return Promise.resolve("Forwarded message...");
  })
  //.then((second) => console.log(second))
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Finally here!"));
