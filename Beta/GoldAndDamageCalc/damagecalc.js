var atkTank = document.querySelector("#Tank")
var atkMage = document.querySelector("#Mage")
var atkArcher = document.querySelector("#Archer")
var atkSupport = document.querySelector("#Support")
var atkHP = document.querySelector("#atk-hp")

var atkPwr = document.querySelector("#atk-pwr-eq")
var atkAmr = document.querySelector("#atk-amr-eq")

var defTank = document.querySelector("#tank")
var defMage = document.querySelector("#mage")
var defArcher = document.querySelector("#archer")
var defSupport = document.querySelector("#support")
var defHP = document.querySelector("#def-hp")

var defPwr = document.querySelector("#def-pwr-eq")
var defAmr = document.querySelector("#def-amr-eq")

var counter = document.querySelector("#counter")

var attackerHP 
var attackerPower 
var attackerArmor

var defenderHP 
var defenderPower 
var defenderArmor 

var calculate = document.querySelector("#calculate")

var rAtkHP = document.querySelector("#rAtkHP")
var rDefHP = document.querySelector("#rDefHP")

function attackingUnit(){
    if(atkTank.checked == true){
        attackerHP = 40 
        attackerPower = 6
        attackerArmor = 8
    }

    if(atkMage.checked == true){
        attackerHP = 14
        attackerPower = 18
        attackerArmor = 2
    }

    if(atkArcher.checked == true){
        attackerHP = 26
        attackerPower = 14
        attackerArmor = 5
    }

    if(atkSupport.checked == true){
        attackerHP = 34 
        attackerPower = 5
        attackerArmor = 2
    }

}

function defendingUnit(){
    if(defTank.checked == true){
        defenderHP = 40 
        defenderPower = 6
        defenderArmor = 8
    }

    if(defMage.checked == true){
        defenderHP = 14
        defenderPower = 18
        defenderArmor = 2
    }

    if(defArcher.checked == true){
        defenderHP = 26
        defenderPower = 14
        defenderArmor = 5
    }

    if(defSupport.checked == true){
        defenderHP = 34 
        defenderPower = 5
        defenderArmor = 2
    }

}

function startAtkHP(){
    attackerHP = Number(atkHP.value)
}

function atkPowerEq(){
    attackerPower += Number(atkPwr.value)
}

function atkArmorEq(){
    attackerArmor += Number(atkAmr.value)
}

function defPowerEq(){
    defenderPower += Number(defPwr.value)
}

function defArmorEq(){
    defenderArmor += Number(defAmr.value)
}

function startDefHP(){
    defenderHP = Number(defHP.value)
}

function damage(){
    var damage = attackerPower - defenderArmor
    console.log(`Attacking Power ${attackerPower} - Defending Armor ${defenderArmor} = Damage ${damage}`)
    console.log(`Starting HP ${defenderHP} - Damage ${damage} =`)
    defenderHP -= damage
    console.log(`Remaining Defender HP: ${defenderHP}`)
}

function counterDamage(){
    var damage = defenderPower - attackerArmor
    console.log(`Defending Power ${defenderPower} - Attacking Armor ${attackerArmor} = Damage ${damage}`)
    console.log(`Starting HP ${attackerHP} - Damage ${damage} =`)
    attackerHP -= damage
    console.log(`Remaining Attacker HP: ${attackerHP}`)
}

calculate.addEventListener("click",function(){
    
    attackingUnit()

    if(atkHP.value){
        startAtkHP()
    }
    if(atkPwr.value){
        atkPowerEq()
    }
    if(atkAmr.value){
        atkArmorEq()
    }

    defendingUnit()
    if(defHP.value){
        startDefHP()
    }
    if(defPwr.value){
        defPowerEq()
    }
    if(defAmr.value){
        defArmorEq()
    }

    if(counter.checked == true){
        counterDamage()
    }

    damage()

    console.log("----------------------------")

    rAtkHP.textContent = attackerHP
    rDefHP.textContent = defenderHP

})

var reset = document.querySelector("#reset")

reset.addEventListener("click",function(){
    var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "number") {
    elements[ii].value = "";
  }
  else if (elements[ii].type == "radio") {
    elements[ii].checked = false;
  }
  else if (elements[ii].type == "checkbox") {
    elements[ii].checked = false;
  }
}

    rAtkHP.textContent = ""
    rDefHP.textContent = ""

})