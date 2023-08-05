let h2Message = function (message) {
  document.querySelector(".input-block__h2").textContent = message;
};

let nameFunction = function (myName) {
  h1Names.textContent = myName;
};

let h1Names = document.querySelector(".nameH1");

document.querySelector(".input-block__btn").addEventListener("click", () => {
  let inputName = document.querySelector(".input-block__name").value;
  if (!inputName) {
    h2Message("ВЫ НИЧЕГО НЕ ВВЕЛИ");
    document.querySelector(".input-block__h2").classList.add("new");
  } else if (inputName !== "") {
    document.querySelector(".input-block").style.display = "none";
    document.querySelector(".main-block").style.display = "block";
    nameFunction(inputName);
  }
  console.log(inputName);
});

document
  .querySelector(".main-block__back")
  .addEventListener("click", function () {
    location.reload();
  });

// !
const audio = new Audio("audio/m1.mp3");
const media = new Audio("audio/win.mp3");
const loz = new Audio("audio/loz.mp3");
let sec = Math.trunc(Math.random() * 15) + 1;
let sc = 15;
console.log(sec);
let myMessage = function (mes) {
  document.querySelector(".text1").textContent = mes;
};

document.querySelector(".start").addEventListener("click", function () {
  const inp = Number(document.querySelector(".inp").value);
  if (!inp) {
    myMessage("Вы ничего не ввели!!");
    document.querySelector(".text1").classList.add("lisk");
    audio.play();
  } else if (inp === sec) {
    myMessage("вы победили");
    document.querySelector(".number").textContent = inp;
    document.querySelector(".text1").classList.add("wins");
    document.querySelector(".number").style.background = "green";
    document.querySelector(".number").style.color = "#fff";
    media.play();
  } else if (inp !== sec) {
    if (sc > 1) {
      if (inp > sec) {
        myMessage("Число больше");
        sc--;
        document.querySelector(".high").textContent = sc;
      } else if (inp < sec) {
        myMessage("Число меньше");
        sc--;
        document.querySelector(".high").textContent = sc;
      }
    } else {
      myMessage("Вы проиграли!!!!");
      document.querySelector(".high").textContent = 0;
      document.querySelector(".high").style.color = "red";
      document.querySelector(".text1").classList.add("lisk");
      loz.play();
    }
  }
});
