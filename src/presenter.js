import fizzbuzz_string from "./fizzbuzz_string";

const num = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + fizzbuzz_string(num.value) + "</p>";
});