window.addEventListener("load", initHomePage);

function initHomePage() {
  document
    .querySelector("#btnPlayerTarget")
    .addEventListener("click", handleBtnPlayertargetClick);
  document
    .querySelector("#btnPlayersOther")
    .addEventListener("click", handleBtnPlayersOtherClick);
}

function handleBtnPlayertargetClick() {
  window.location.href = "question.html";
}

function handleBtnPlayersOtherClick() {
  window.location.href = "reponse.html";
}
