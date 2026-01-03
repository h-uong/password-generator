const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const passwordOne = document.getElementById("password-one")
const passwordTwo = document.getElementById("password-two")
const Length = 15

let generateBtn = document.getElementById("generate-btn")

const toggleSwitch = document.getElementById("toggleSwitch")

toggleSwitch.addEventListener("change", function(){
  document.body.classList.toggle("light-mode")
})

generateBtn.addEventListener("click", function(){
  let randomP1 = ""
  let randomP2 = ""

  for (let i = 0; i < Length; i++) {
    let randomIndex1 = Math.floor(Math.random()*characters.length)
    randomP1 += characters[randomIndex1]

    let randomIndex2 = Math.floor(Math.random()*characters.length)
    randomP2 += characters[randomIndex2]
  }

  passwordOne.value = randomP1
  passwordTwo.value = randomP2
})

function enableCopyOnClick(inputId) {
  const input = document.getElementById(inputId);

  input.addEventListener("click", async () => {
    input.select();

    try {
      await navigator.clipboard.writeText(input.value);
      console.log("Copied:", input.value);
    } catch (err) {
      console.error("Copy failed", err);
    }
  });
}

enableCopyOnClick("password-one");
enableCopyOnClick("password-two");

