const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const goomba = document.querySelector(".goomba-game");


const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const goombaPosition = goomba.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    goomba.style.animation = "none";
    goomba.style.left = `${goombaPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
  }
  else if (goombaPosition <= 120 && goombaPosition > 0 && marioPosition < 60) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    goomba.style.animation = "none";
    goomba.style.left = `${goombaPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
  }
}, 10);


document.addEventListener("keydown", jump);


