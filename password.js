function passwordGenerator(passwordLength, number, upper, lower, special){
    
    const num ="0123456789";
    const upperLetter ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerLetter ="abcdefghijklmnopqrstuvwxyz";
    const specialChar ="!@#$%^&*";

    let allowedChar ="";
    let password ="";

    allowedChar +=(number)?num:"";
    allowedChar +=(upper)? upperLetter:"";
    allowedChar +=(lower)? lowerLetter:"";
    allowedChar +=(special)?specialChar:"";

    if(passwordLength <= 5)
        window.alert("Password length atleast 6 character!");
    else if(number == false &&  upper == false &&  special == false && lower == false)
        window.alert("Password must contain atleast one character type!..");
    else{
        for(let i=0;i<passwordLength;i++){
            let random = Math.floor(Math.random()*allowedChar.length);
            password +=allowedChar[random];
        }
    }
    return password;
}

const numInput = document.getElementById("numbers");
const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const specialInput = document.getElementById("special");
const pass =document.getElementById("length");
const generate = document.getElementById("generate");

let number;
let upper;
let lower;
let special;

generate.addEventListener('click',()=>{
    number =(numInput.checked? true:false);
    upper =(upperInput.checked? true:false);
    lower =(lowerInput.checked? true:false);
    special =(specialInput.checked? true:false);
    const passwordLength = Number(pass.value);
    document.getElementById("final").innerText =passwordGenerator(passwordLength, number, upper, lower, special);
})