var selectedTile

class Player {
    constructor(name, color, turnOrder) {
        this.name = name
        this.color = color
        this.castleHealth = 20
        this.gold = 30
        this.units = []
        this.turn = false
        this.turnOrder = turnOrder
    }

    endTurn() {
        this.turn = false
    }

    upkeep(megafarm, farms, numCastles) {
        for (i = 0; i < farms; i++) {
            farmGold = farmGold + randomNumber(2, 4)
        }
        if (megafarm === true) {
            this.gold = this.gold + numCastles + farmGold + 5
        } else {
            this.gold = this.gold + numCastles + farmGold
        }
    }

    startTurn(megafarm, farms, numCastles) {
        this.turn = true
        upkeep(megafarm, farms, numCastles)
    }

}

class Unit {
    constructor(color, type, position) {
        this.color = color
        this.type = type
        this.position = position
        this.img = null
        this.power = null
        this.armor = null
        this.health = null
        this.movement = null
        this.atkrange = null
        this.cost = null
    }

    setImg() {
        if (this.color === "blue") {
            this.img = "Units/BlueKnight.png"
        } else if (this.color === "black") {
            this.img = "Units/BlackKnight.png"
        } else if (this.color === "red") {
            this.img = "Units/RedKnight.png"
        } else if (this.color === "white") {
            this.img = "Units/WhiteKnight.png"

        }
    }

    buildUnit() {
        const unit = document.createElement("div")
        unit.classList.add("unit")
        unit.setAttribute("id", `${this.color}${this.type}`)
        unit.innerHTML = `<img src="${this.img}" alt="" class="unit" />`
        document.getElementById(`${this.position}`).appendChild(unit)
        document.getElementById(`${this.color}${this.type}`).addEventListener('click', () => console.log(this))
    }

    powerEq(equipment) {
        this.power = this.power + equipment
    }

    armorEq(equipment) {
        this.armor = this.armor + equipment
    }

    damageCalc(attackingPower) {
        this.health = this.health - (attackingPower - this.armor)
    }

    heal() {
        this.health = this.health + 4
    }
}

class Tank extends Unit {
    async setStats() {
        this.power = 3
        this.armor = 4
        this.health = 15
        this.movement = [1, 2]
        this.atkrange = 1
        this.cost = 6
    }
}

class Mage extends Unit {
    async setStats() {
        this.power = 9
        this.armor = 1
        this.health = 7
        this.movement = [1, 2, 3]
        this.atkrange = [1, 2]
        this.cost = 6
    }
}

class Archer extends Unit {
    async setStats() {
        this.power = 7
        this.armor = 2
        this.health = 13
        this.movement = [1, 2, 3]
        this.atkrange = 2
        this.cost = 8
    }
}

class Support extends Unit {
    async setStats() {
        this.power = 1
        this.armor = 2
        this.health = 14
        this.movement = [1, 2]
        this.atkrange = 1
        this.cost = 8
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildBoard() {
    const farm1X = randomNumber(6, 8)
    const farm1Y = randomNumber(1, 2)
    const farm2X = randomNumber(6, 8)
    const farm2Y = randomNumber(12, 13)
    const farm3X = randomNumber(1, 2)
    const farm3Y = randomNumber(6, 8)
    const farm4X = randomNumber(12, 13)
    const farm4Y = randomNumber(6, 8)
    const farm5X = randomNumber(3, 5)
    const farm5Y = randomNumber(9, 11)
    const farm6X = randomNumber(3, 5)
    const farm6Y = randomNumber(3, 5)
    const farm7X = randomNumber(9, 11)
    const farm7Y = randomNumber(9, 11)
    const farm8X = randomNumber(9, 11)
    const farm8Y = randomNumber(3, 5)

    for (x = 1; x < 14; x++) {
        for (y = 1; y < 14; y++) {
            if (x === 7 && y === 7) {
                const tile = document.createElement("div")
                tile.classList.add("megafarm")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                document.getElementById(`${x}_${y}`).addEventListener('click', function () {
                    document.getElementById('selectedTile').innerHTML = this.id
                    selectedTile = this.id
                })
            } else if ((x === farm1X && y === farm1Y) || (x === farm2X && y === farm2Y) || (x === farm3X && y === farm3Y) || (x === farm4X && y === farm4Y) || (x === farm5X && y === farm5Y) || (x === farm6X && y === farm6Y) || (x === farm7X && y === farm7Y) || (x === farm8X && y === farm8Y)) {
                const tile = document.createElement("div")
                tile.classList.add("farm")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                document.getElementById(`${x}_${y}`).addEventListener('click', function () {
                    document.getElementById('selectedTile').innerHTML = this.id
                    selectedTile = this.id
                })
            } else {
                const tile = document.createElement("div")
                tile.classList.add("tile")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
            }
        }
    }
}

function buildCastles() {
    const whiteCastle = document.createElement("div")
    whiteCastle.classList.add("castle")
    whiteCastle.innerHTML = `<img src="castles/White_Castle.png" alt="" class="image" />`
    document.getElementById(`13_13`).appendChild(whiteCastle)
    document.getElementById(`13_13`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })

    const blueCastle = document.createElement("div")
    blueCastle.classList.add("castle")
    blueCastle.innerHTML = `<img src="castles/Blue_Castle.png" alt="" class="image" />`
    document.getElementById(`13_1`).appendChild(blueCastle)
    document.getElementById(`13_1`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })

    const redCastle = document.createElement("div")
    redCastle.classList.add("castle")
    redCastle.innerHTML = `<img src="castles/Red_Castle.png" alt="" class="image" />`
    document.getElementById(`1_13`).appendChild(redCastle)
    document.getElementById(`1_13`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })

    const blackCastle = document.createElement("div")
    blackCastle.classList.add("castle")
    blackCastle.innerHTML = `<img src="castles/Black_Castle.png" alt="" class="image" />`
    document.getElementById(`1_1`).appendChild(blackCastle)
    document.getElementById(`1_1`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })
}

function blackButtons() {
    document.getElementById("blacktank").addEventListener("click", function () {
        let black = new Tank("black", "tank", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
    })

    document.getElementById("blackmage").addEventListener("click", function () {
        let black = new Mage("black", "mage", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
    })

    document.getElementById("blackarcher").addEventListener("click", function () {
        let black = new Archer("black", "archer", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
    })

    document.getElementById("blacksupport").addEventListener("click", function () {
        let black = new Support("black", "support", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
    })
}

function redButtons() {
    document.getElementById("redtank").addEventListener("click", function () {
        let red = new Tank("red", "tank", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
    })

    document.getElementById("redmage").addEventListener("click", function () {
        let red = new Mage("red", "mage", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
    })

    document.getElementById("redarcher").addEventListener("click", function () {
        let red = new Archer("red", "archer", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
    })

    document.getElementById("redsupport").addEventListener("click", function () {
        let red = new Support("red", "support", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
    })
}

function blueButtons() {
    document.getElementById("bluetank").addEventListener("click", function () {
        let blue = new Tank("blue", "tank", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
    })

    document.getElementById("bluemage").addEventListener("click", function () {
        let blue = new Mage("blue", "mage", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
    })

    document.getElementById("bluearcher").addEventListener("click", function () {
        let blue = new Archer("blue", "archer", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
    })

    document.getElementById("bluesupport").addEventListener("click", function () {
        let blue = new Support("blue", "support", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
    })
}

function whiteButtons() {
    document.getElementById("whitetank").addEventListener("click", function () {
        let white = new Tank("white", "tank", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
    })

    document.getElementById("whitemage").addEventListener("click", function () {
        let white = new Mage("white", "mage", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
    })

    document.getElementById("whitearcher").addEventListener("click", function () {
        let white = new Archer("white", "archer", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
    })

    document.getElementById("whitesupport").addEventListener("click", function () {
        let white = new Support("white", "support", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
    })
}

function setButtons() {
    blackButtons()
    redButtons()
    blueButtons()
    whiteButtons()
}

buildBoard()
buildCastles()
setButtons()

