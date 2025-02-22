window.addEventListener("load", initQuestionPage);

function initQuestionPage() {
  handleTimer();

  handleActionSeletion();
}

/**
 * False timer dynamique.
 * Retur to 59 value when fall at 0.
 */
function handleTimer() {
  const timer = document.querySelector("#timer", handleTimer);

  setInterval(() => {
    timer.innerText =
      timer.innerText - 1 >= 0
        ? (timer.innerText - 1).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })
        : "59";
  }, 1000);
}

/**
 * Start waiting animation when response btn is selected.
 * Which selection doesn't have any impact.
 */
function handleActionSeletion() {
  document
    .querySelectorAll("#btnActions button")
    .forEach((button) => button.addEventListener("click", toggleAnimation));

  function toggleAnimation() {
    document.querySelector("#contentGifElement").classList.toggle("hidden");
    document.querySelector("#contentTextElement").classList.toggle("hidden");
    document
      .querySelectorAll("#orderTextElement p")
      .forEach((element) => element.classList.toggle("hidden"));
  }
}
