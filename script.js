"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 9;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Toi hứa hongg làm cậu buồn nữa đâuuuuuuuu :3. Tha lỗi cho anh nha bé. Iuuu bé";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Híu bicc lỗi rồi ạa",
    "Mong cậu tha lỗi cho mình :((",
    "Anhh saii rồi , anhh đáng trách ạ",
    "Bé đừng giận anhh nữa nhoo",
    "Anhhh iuu bé nhất luôn ó <3",
    "Anh yeu em",
    "Cậu có yêu tớ không? Có thì bấm Oteeee đi <3",
    "Vẫn không bấm Oteee hả :((. Thế chắc là giận thật rồi",
    "Hu hu dị là bạn Hiếu không dỗ đc rồi.",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
