const input = document.querySelector(".mail");
const container = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const userMail = document.getElementById("userMail");

btn.addEventListener("click", () => {
  app();
});

input.addEventListener('keydown', function(e) {
  if(e.keyCode === 13){
    app();
  }
})


dismissBtn.addEventListener("click", () => {
  location.reload();
});

function app() {
  if (input.value.includes("@") && input.value.includes(".")) {
    container.style.display = "none";
    thanksContainer.style.display = "block";
    userMail.innerHTML = input.value;
  } else {
    error.style.display = "block";
    input.style.backgroundColor = '#FFE0DD';
  }
}
