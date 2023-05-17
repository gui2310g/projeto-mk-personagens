
const change = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const music = document.getElementById("botao-musica");

const audio = "som/mksom.mp3";

const audio1 = new Audio(audio);

music.addEventListener("click", () => {
  if (audio1.paused) {
    audio1.play(); 
    audio1.volume = 0.5;
  } else {
    audio1.pause();
    audio1.currentTime = 0; 
  }
})

change.addEventListener("click", () => {
  const fundo = body.classList.contains("fundo1");

  body.classList.toggle("fundo1");

  if(fundo) {
    fundo.setAttribute("src", "imagens/netherrealmcliff.gif")
  } 
});

