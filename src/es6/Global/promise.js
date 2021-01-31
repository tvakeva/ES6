// Global promise

const response = true;

const promise = new Promise((resolve, reject) => {
  if (response) {
    resolve("success");
  } else {
    reject(new TypeError("Response failed!"));
  }
});

promise
  .then(first => {
    console.log(first);
    return "Forwarded message...";
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("Finally here!"));
