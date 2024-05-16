const mainContainer = document.querySelector(".main-container");
const thxContainer = document.querySelector(".thx");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
  thxContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thxContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
rate.addEventListener ("click", () => {
  rating.innerHTML = rate.innerHTML
})
})