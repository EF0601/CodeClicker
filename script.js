let cps = 0;
let cpc = 1;
let codecoin = 0;

//price reset
let autoClickerPrice = 30;
let hackPrice = 1000;
let keyboardprice = 55;

//display assignment
const coindisplay = document.querySelector('.CodeCoins');
const autoclickerpricedisplay = document.querySelector('.Autoclickerprice');
const hackpricedisplay = document.querySelector('.Hackclientprice');
const keyboardpricedisplay = document.querySelector('.Keyboardprice');
//price display assignment

//owned items assignment
let AutoClickerOwned = 0;
let HackOwned = 0;
let KeyboardOwned = 0;

//owned display assignment
const AutoclickerOwnedDisplay = document.querySelector('.autoclickerowned');
const HackOwnedDisplay = document.querySelector('.Hackclientowned');
const KeyboardOwnedDisplay = document.querySelector('.Keyboardowned')

//CPS stuff
setInterval(executeCPS, 1000);

function executeCPS(){
    codecoin = codecoin + cps;
    updateCoins();
}

//Basic clicking stuff
function codeclick(){
    codecoin = codecoin + cpc;
    updateCoins();
}

//Update displays
function updateCoins(){
    coindisplay.textContent = String(codecoin) + " CodeCoins";
    AutoclickerOwnedDisplay.textContent = AutoClickerOwned;
    HackOwnedDisplay.textContent = HackOwned;
    KeyboardOwnedDisplay.textContent = KeyboardOwned;
}

//Buying stuff
function buy(item){
    if (item === "Autoclicker") {
        if(codecoin >= autoClickerPrice){
            codecoin = codecoin - autoClickerPrice;
            cps++
            AutoClickerOwned++
            autoclickerpricedisplay.textContent = newprice(0.05,autoClickerPrice,AutoClickerOwned);
            autoClickerPrice = newprice(0.05,autoClickerPrice,AutoClickerOwned);
        }
    }
    if (item === "Hack") {
        if(codecoin >= hackPrice){
            codecoin = codecoin - hackPrice;
            HackOwned++
            codecoin = codecoin + (300 * HackOwned);
            hackpricedisplay.textContent = newprice(0.75,hackPrice,HackOwned);
            hackPrice = newprice(0.75,hackPrice,HackOwned);
        }
    }
    if (item === "Keyboard") {
        if(codecoin >= keyboardprice){
            codecoin = codecoin - keyboardprice;
            KeyboardOwned++
            cpc = cpc + 1;
            keyboardpricedisplay.textContent = newprice(0.025,keyboardprice,KeyboardOwned);
            keyboardprice = newprice(0.025,keyboardprice,KeyboardOwned);
        }
    }
    updateCoins();
}

//Increase price
function newprice(multiplier,originalprice,owned){
    return Math.round(((owned * multiplier) + 1) * originalprice);
}

//ADMIN
function ADMIN(){
    codecoin = codecoin + Number(prompt('Add n coins to total'));
}

updateCoins();
