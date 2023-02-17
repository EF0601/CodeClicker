let cps = 0;
let cpc = 1;
let codecoin = 0;

//price reset
let autoClickerPrice = 30;
let hackPrice = 1000;
let keyboardprice = 55;
let helperprice = 500;

//display assignment
const coindisplay = document.querySelector('.CodeCoins');
const cpcdisplay = document.querySelector('.power');
const autoclickerpricedisplay = document.querySelector('.Autoclickerprice');
const hackpricedisplay = document.querySelector('.Hackclientprice');
const keyboardpricedisplay = document.querySelector('.Keyboardprice');
const helperpricedisplay = document.querySelector('.HelperPrice');
//price display assignment

//owned items assignment
let AutoClickerOwned = 0;
let HackOwned = 0;
let KeyboardOwned = 0;
let HelperOwned = 0;

//owned display assignment
const AutoclickerOwnedDisplay = document.querySelector('.autoclickerowned');
const HackOwnedDisplay = document.querySelector('.Hackclientowned');
const KeyboardOwnedDisplay = document.querySelector('.Keyboardowned')
const HelperOwnedDisplay = document.querySelector('.HelperOwned')

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
    coindisplay.textContent = String(codecoin) + " Code lines";
    cpcdisplay.textContent = cpc;
    AutoclickerOwnedDisplay.textContent = AutoClickerOwned;
    HackOwnedDisplay.textContent = HackOwned;
    KeyboardOwnedDisplay.textContent = KeyboardOwned;
    HelperOwnedDisplay.textContent = HelperOwned;

    if(codecoin >= 100000000000000000000000000000000000000000000){
        
    }
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
    if (item === "Helper") {
        if(codecoin >= helperprice){
            codecoin = codecoin - helperprice;
            HelperOwned++
            cps = cps + (5 * HelperOwned)
            helperpricedisplay.textContent = newprice(0.025,helperprice,HelperOwned);
            helperprice = newprice(0.025,helperprice,HelperOwned);
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
