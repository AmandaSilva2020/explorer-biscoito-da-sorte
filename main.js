const cookieClosed = document.querySelector("#cookieClosed");
const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const newCookieBtn = document.querySelector("#newCookie");
const cookieMessage = document.querySelector(".lucky");

cookieClosed.addEventListener('click', toggleScreens);


// Functions
function toggleScreens(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide") 
}

newCookieBtn.addEventListener('click', openAnotherCookie)
function openAnotherCookie(e){
  cookieMessage.innerHTML = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.";
  toggleScreens();
}