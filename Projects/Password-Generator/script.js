function passwordGenerator(passwordLength){
    let array = [];
    while(array.length < passwordLength)
    {
        let randNumberForChar = Math.floor(Math.random() * 93) + 33;
        if (randNumberForChar === 44 || randNumberForChar === 46 || randNumberForChar === 58 || randNumberForChar === 59)
        {
            randNumberForChar += 3;
        }

        let char = String.fromCharCode(randNumberForChar);
        array.push(char);
    }

    let password = array.join("");
    return password;
}

let generatedPassword = document.querySelector('#generatedPassword');
let btn = document.querySelector("#generate");
let numberInput = document.querySelector("#numberInput");

let numberOfChars = 1;
numberInput.addEventListener('change', function(event){
    numberOfChars = numberInput.value;
    console.log(numberOfChars);
});

btn.addEventListener('click', function(event){
    console.log("Active");
    generatedPassword.innerText = passwordGenerator(numberOfChars);
});

