const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let firstPassword = document.getElementById("firstPassword");
let secondPassword = document.getElementById("secondPassword");
let toast = document.getElementById("copyToast");

// Function that generate a random password and call the reset fuction at the start
function generatePassword() {
  resetToDefault();
  for (let i = 0; i < 17; i++) {
    let randomNumber1 = Math.floor(Math.random() * characters.length);
    let randomNumber2 = Math.floor(Math.random() * characters.length);

    firstPassword.textContent += characters[randomNumber1];
    secondPassword.textContent += characters[randomNumber2];
  }
}

// Function that reset the password
function resetToDefault() {
  firstPassword.textContent = "";
  secondPassword.textContent = "";
}

// Copy the password on click

firstPassword.addEventListener("click", function () {
  let passwordText = firstPassword.textContent;

  navigator.clipboard.writeText(passwordText).then(function () {
    toast.classList.add("show");
    setTimeout(function () {
      toast.classList.remove("show");
    }, 1500);
  });
});

secondPassword.addEventListener("click", function () {
  let passwordText = secondPassword.textContent;

  navigator.clipboard.writeText(passwordText).then(function () {
    toast.classList.add("show");
    setTimeout(function () {
      toast.classList.remove("show");
    }, 1500);
  });
});

// Comment to try GitHub commit in VSCode