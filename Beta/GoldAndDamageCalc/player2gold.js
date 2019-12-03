var p2Display = document.querySelector("#p2-display")
var p2Gold = document.querySelector("#p2-gold")

var p2Name = document.querySelector("#p2-name")
var p2NameButton = document.querySelector("#set-p2-name")

var p2PrevGold = document.querySelector("#p2-previous-gold")
var p2NumCastles = document.querySelector("#p2-num-of-castles")
var p2NumFarms = document.querySelector("#p2-num-of-farms")
var p2Mega = document.querySelector("#p2-megafarm")
var p2UpkeepButton = document.querySelector("#p2-upkeep")

var p2GoldSpent = document.querySelector("#p2-gold-spent")
var p2EndButton = document.querySelector("#p2-end")

var p2CurrentGold = 0

p2NameButton.addEventListener("click", function () {
        p2Display.textContent = p2Name.value
})

p2UpkeepButton.addEventListener("click", function () {
    console.log(`${p2Name.value} Upkeep`)
    console.log(`Previous Gold: ${Number(p2PrevGold.value)}`)
    console.log(`Gold From Castles: ${Number(p2NumCastles.value)}`)
    var f = (p2NumFarms.value)
    var p2FarmGold = 0
    var i 
    for(i = 0; i < f; i++){
        RandomFarmGold = (Math.floor(Math.random() * 3) + 2) 
        console.log(`Random Farm ${i+1} Gold = ${RandomFarmGold}`)
        p2FarmGold += RandomFarmGold
    }

    var mega = 0
    if(p2Mega.checked == true){
        mega = 5
    }

    p2CurrentGold = Number(p2PrevGold.value) + Number(p2NumCastles.value) + Number(p2FarmGold) + mega
    p2Gold.textContent = p2CurrentGold
    console.log("----------------------------------")
})

p2EndButton.addEventListener("click", function () {
    console.log(`${p2Name.value} End Turn`)
    console.log(`Previous Gold: ${p2CurrentGold}`)
    console.log(`Gold Spent: ${p2GoldSpent.value}`)
    p2CurrentGold -= p2GoldSpent.value
    console.log(`Current Gold: ${p2CurrentGold}`)
    p2PrevGold.value = p2CurrentGold
    p2Gold.textContent = p2CurrentGold
    console.log("----------------------------------")
})
