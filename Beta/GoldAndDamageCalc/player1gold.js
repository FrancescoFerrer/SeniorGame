var p1Display = document.querySelector("#p1-display")
var p1Gold = document.querySelector("#p1-gold")

var p1Name = document.querySelector("#p1-name")
var p1NameButton = document.querySelector("#set-p1-name")

var p1PrevGold = document.querySelector("#p1-previous-gold")
var p1NumCastles = document.querySelector("#p1-num-of-castles")
var p1NumFarms = document.querySelector("#p1-num-of-farms")
var p1Mega = document.querySelector("#p1-megafarm")
var p1UpkeepButton = document.querySelector("#p1-upkeep")

var p1GoldSpent = document.querySelector("#p1-gold-spent")
var p1EndButton = document.querySelector("#p1-end")

var p1CurrentGold = 0

p1NameButton.addEventListener("click", function () {
        p1Display.textContent = p1Name.value
})

p1UpkeepButton.addEventListener("click", function () {
    console.log(`${p1Name.value} Upkeep`)
    console.log(`Previous Gold: ${Number(p1PrevGold.value)}`)
    console.log(`Gold From Castles: ${Number(p1NumCastles.value)}`)
    var f = (p1NumFarms.value)
    var p1FarmGold = 0
    var i 
    for(i = 0; i < f; i++){
        RandomFarmGold = (Math.floor(Math.random() * 3) + 2) 
        console.log(`Random Farm ${i+1} Gold = ${RandomFarmGold}`)
        p1FarmGold += RandomFarmGold
    }

    var mega = 0
    if(p1Mega.checked == true){
        mega = 5
    }

    p1CurrentGold = Number(p1PrevGold.value) + Number(p1NumCastles.value) + Number(p1FarmGold) + mega
    p1Gold.textContent = p1CurrentGold
    console.log("----------------------------------")
})

p1EndButton.addEventListener("click", function () {
    console.log(`${p1Name.value} End Turn`)
    console.log(`Previous Gold: ${p1CurrentGold}`)
    console.log(`Gold Spent: ${p1GoldSpent.value}`)
    p1CurrentGold -= p1GoldSpent.value
    console.log(`Current Gold: ${p1CurrentGold}`)
    p1PrevGold.value = p1CurrentGold
    p1Gold.textContent = p1CurrentGold
    console.log("----------------------------------")
})
