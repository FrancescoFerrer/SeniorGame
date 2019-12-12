var p3Display = document.querySelector("#p3-display")
var p3Gold = document.querySelector("#p3-gold")

var p3Name = document.querySelector("#p3-name")
var p3NameButton = document.querySelector("#set-p3-name")

var p3PrevGold = document.querySelector("#p3-previous-gold")
var p3NumCastles = document.querySelector("#p3-num-of-castles")
var p3NumFarms = document.querySelector("#p3-num-of-farms")
var p3Mega = document.querySelector("#p3-megafarm")
var p3UpkeepButton = document.querySelector("#p3-upkeep")

var p3GoldSpent = document.querySelector("#p3-gold-spent")
var p3EndButton = document.querySelector("#p3-end")

var p3CurrentGold = 0

p3NameButton.addEventListener("click", function () {
        p3Display.textContent = p3Name.value
})

p3UpkeepButton.addEventListener("click", function () {
    console.log(`${p3Name.value} Upkeep`)
    console.log(`Previous Gold: ${Number(p3PrevGold.value)}`)
    console.log(`Gold From Castles: ${Number(p3NumCastles.value)}`)
    var f = (p3NumFarms.value)
    var p3FarmGold = 0
    var i 
    for(i = 0; i < f; i++){
        RandomFarmGold = (Math.floor(Math.random() * 3) + 2) 
        console.log(`Random Farm ${i+1} Gold = ${RandomFarmGold}`)
        p3FarmGold += RandomFarmGold
    }

    var mega = 0
    if(p3Mega.checked == true){
        mega = 5
    }

    p3CurrentGold = Number(p3PrevGold.value) + Number(p3NumCastles.value) + Number(p3FarmGold) + mega
    p3Gold.textContent = p3CurrentGold
    console.log("----------------------------------")
})

p3EndButton.addEventListener("click", function () {
    console.log(`${p3Name.value} End Turn`)
    console.log(`Previous Gold: ${p3CurrentGold}`)
    console.log(`Gold Spent: ${p3GoldSpent.value}`)
    p3CurrentGold -= p3GoldSpent.value
    console.log(`Current Gold: ${p3CurrentGold}`)
    p3PrevGold.value = p3CurrentGold
    p3Gold.textContent = p3CurrentGold
    console.log("----------------------------------")
})
