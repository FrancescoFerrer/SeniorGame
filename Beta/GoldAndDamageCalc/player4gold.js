var p4Display = document.querySelector("#p4-display")
var p4Gold = document.querySelector("#p4-gold")

var p4Name = document.querySelector("#p4-name")
var p4NameButton = document.querySelector("#set-p4-name")

var p4PrevGold = document.querySelector("#p4-previous-gold")
var p4NumCastles = document.querySelector("#p4-num-of-castles")
var p4NumFarms = document.querySelector("#p4-num-of-farms")
var p4Mega = document.querySelector("#p4-megafarm")
var p4UpkeepButton = document.querySelector("#p4-upkeep")

var p4GoldSpent = document.querySelector("#p4-gold-spent")
var p4EndButton = document.querySelector("#p4-end")

var p4CurrentGold = 0

p4NameButton.addEventListener("click", function () {
        p4Display.textContent = p4Name.value
})

p4UpkeepButton.addEventListener("click", function () {
    console.log(`${p4Name.value} Upkeep`)
    console.log(`Previous Gold: ${Number(p4PrevGold.value)}`)
    console.log(`Gold From Castles: ${Number(p4NumCastles.value)}`)
    var f = (p4NumFarms.value)
    var p4FarmGold = 0
    var i 
    for(i = 0; i < f; i++){
        RandomFarmGold = (Math.floor(Math.random() * 3) + 2) 
        console.log(`Random Farm ${i+1} Gold = ${RandomFarmGold}`)
        p4FarmGold += RandomFarmGold
    }

    var mega = 0
    if(p4Mega.checked == true){
        mega = 5
    }

    p4CurrentGold = Number(p4PrevGold.value) + Number(p4NumCastles.value) + Number(p4FarmGold) + mega
    p4Gold.textContent = p4CurrentGold
    console.log("----------------------------------")
})

p4EndButton.addEventListener("click", function () {
    console.log(`${p4Name.value} End Turn`)
    console.log(`Previous Gold: ${p4CurrentGold}`)
    console.log(`Gold Spent: ${p4GoldSpent.value}`)
    p4CurrentGold -= p4GoldSpent.value
    console.log(`Current Gold: ${p4CurrentGold}`)
    p4PrevGold.value = p4CurrentGold
    p4Gold.textContent = p4CurrentGold
    console.log("----------------------------------")
})
