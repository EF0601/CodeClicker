let cps = 0;
let codecoin = 0;

//price reset
let autoClickerPrice = 30;

//display assignment
const coindisplay = document.querySelector('.CodeCoins');
const autoclickerpricedisplay = document.querySelector('.Autoclickerprice');
//price display assignment

//owned items assignment
let AutoClickerOwned = 0;

//owned display assignment
const AutoclickerOwnedDisplay = document.querySelector('.autoclickerowned');

//CPS stuff
setInterval(executeCPS, 1000);

function executeCPS(){
    codecoin = codecoin + cps;
    updateCoins();
}

//Basic clicking stuff
function codeclick(){
    codecoin++
    updateCoins();
}

//Update displays
function updateCoins(){
    coindisplay.textContent = String(codecoin) + " CodeCoins";
    AutoclickerOwnedDisplay.textContent = AutoClickerOwned;
}

//Buying stuff
function buy(item){
    if (item === "Autoclicker") {
        if(codecoin >= autoClickerPrice){
            codecoin = codecoin - autoClickerPrice;
            cps++
            AutoClickerOwned++
            autoclickerpricedisplay.textContent = newprice(0.05,autoClickerPrice,AutoClickerOwned);
        }
    }
    updateCoins();
}

//Increase price
function newprice(multiplier,originalprice,owned){
    autoClickerPrice = Math.round(((owned * multiplier) + 1) * originalprice);
    return Math.round(((owned * multiplier) + 1) * originalprice);
}

updateCoins();
