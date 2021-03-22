// pilihan komputer
function getPilihanComputer() {
  const com = Math.random();
  if (com < 0.34) return "batu";
  if (com >= 0.34 && com < 0.67) return "kertas";
  return "gunting";
}

// menentukan rules
function getHasil(com, player) {
  if (player == com) return "DRAW";
  if (player == "batu") return com == "kertas" ? "COM \n WIN" : "PLAYER 1 \n WIN";
  if (player == "gunting") return com == "batu" ? "COM \n WIN" : "PLAYER 1 \n WIN";
  if (player == "kertas") return com == "batu" ? "PLAYER 1 \n WIN" : "COM \n WIN";
}

// pilihan player
const pilihBatu = document.querySelector(".batu");
pilihBatu.addEventListener("click", function () {
  const pilihanCom = getPilihanComputer();
  const pilihanPlayer = pilihBatu.className;
  const hasil = getHasil(pilihanCom, pilihanPlayer);
  const info = document.querySelector(".versus");
  info.innerHTML = hasil;
});
const pilihKertas = document.querySelector(".kertas");
pilihKertas.addEventListener("click", function () {
  const pilihanCom = getPilihanComputer();
  const pilihanPlayer = pilihKertas.className;
  const hasil = getHasil(pilihanCom, pilihanPlayer);
  const info = document.querySelector(".versus");
  info.innerHTML = hasil;
});
const pilihGunting = document.querySelector(".gunting");
pilihGunting.addEventListener("click", function () {
  const pilihanCom = getPilihanComputer();
  const pilihanPlayer = pilihGunting.className;
  const hasil = getHasil(pilihanCom, pilihanPlayer);
  const info = document.querySelector(".versus");
  info.innerHTML = hasil;
});

function getReset() {
  const resetGame = document.querySelector(".refresh");
  resetGame.addEventListener("click", function () {
    resetGame.innerHTML = "";
  });
}
