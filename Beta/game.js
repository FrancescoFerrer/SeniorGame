var selectedTile
var selectedUnit

var game_state = [
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ],
    [{
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        },
        {
            land: null,
            unit: null
        }
    ]
]

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

    buildUnit() {
        document.getElementById(`${this.position}`).classList.add(`${this.color}-${this.type}`)
        document.getElementById(`${this.position}`).addEventListener('click', () => console.log(this))
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

    moveUnit(newPosition) {
        document.getElementById(`${this.position}`).classList.remove(`${this.color}-${this.type}`)
        document.getElementById(`${newPosition}`).classList.add(`${this.color}-${this.type}`)
        this.position = newPosition
    }
}

class Tank extends Unit {
    setStats() {
        this.power = 3
        this.armor = 4
        this.health = 15
        this.movement = [1, 2]
        this.atkrange = [1]
        this.cost = 6
    }

    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Tank.png"
        } else if (this.color === "black") {
            this.img = "Units/BlackKnight.png"
        } else if (this.color === "red") {
            this.img = "Units/RedKnight.png"
        } else if (this.color === "white") {
            this.img = "Units/WhiteKnight.png"

        }
    }
}

class Mage extends Unit {
    setStats() {
        this.power = 9
        this.armor = 1
        this.health = 7
        this.movement = [1, 2, 3]
        this.atkrange = [1, 2]
        this.cost = 6
    }

    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Mage.png"
        } else if (this.color === "black") {
            this.img = "Units/BlackKnight.png"
        } else if (this.color === "red") {
            this.img = "Units/RedKnight.png"
        } else if (this.color === "white") {
            this.img = "Units/WhiteKnight.png"

        }
    }
}

class Archer extends Unit {
    setStats() {
        this.power = 7
        this.armor = 2
        this.health = 13
        this.movement = [1, 2, 3]
        this.atkrange = [2]
        this.cost = 8
    }

    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Archer.png"
        } else if (this.color === "black") {
            this.img = "Units/BlackKnight.png"
        } else if (this.color === "red") {
            this.img = "Units/RedKnight.png"
        } else if (this.color === "white") {
            this.img = "Units/WhiteKnight.png"

        }
    }
}

class Support extends Unit {
    setStats() {
        this.power = 1
        this.armor = 2
        this.health = 14
        this.movement = [1, 2]
        this.atkrange = [1]
        this.cost = 8
    }

    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Support.png"
        } else if (this.color === "black") {
            this.img = "Units/BlackKnight.png"
        } else if (this.color === "red") {
            this.img = "Units/RedKnight.png"
        } else if (this.color === "white") {
            this.img = "Units/WhiteKnight.png"

        }
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildBoard() {
    const farm1X = randomNumber(5, 7)
    const farm1Y = randomNumber(0, 1)
    const farm2X = randomNumber(5, 7)
    const farm2Y = randomNumber(11, 12)
    const farm3X = randomNumber(0, 1)
    const farm3Y = randomNumber(5, 7)
    const farm4X = randomNumber(11, 12)
    const farm4Y = randomNumber(5, 7)
    const farm5X = randomNumber(2, 4)
    const farm5Y = randomNumber(8, 10)
    const farm6X = randomNumber(2, 4)
    const farm6Y = randomNumber(2, 4)
    const farm7X = randomNumber(8, 10)
    const farm7Y = randomNumber(8, 10)
    const farm8X = randomNumber(8, 10)
    const farm8Y = randomNumber(2, 4)

    for (y = 12; y > -1; y--) {
        for (x = 0; x < 13; x++) {
            if (x === 6 && y === 6) {
                const tile = document.createElement("div")
                tile.classList.add("tile", "megafarm")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                document.getElementById(`${x}_${y}`).addEventListener('click', function () {
                    document.getElementById('selectedTile').innerHTML = this.id
                    selectedTile = this.id
                })
                game_state[x][y].land = "megafarm"
            } else if ((x === farm1X && y === farm1Y) || (x === farm2X && y === farm2Y) || (x === farm3X && y === farm3Y) || (x === farm4X && y === farm4Y) || (x === farm5X && y === farm5Y) || (x === farm6X && y === farm6Y) || (x === farm7X && y === farm7Y) || (x === farm8X && y === farm8Y)) {
                const tile = document.createElement("div")
                tile.classList.add("tile", "farm")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                document.getElementById(`${x}_${y}`).addEventListener('click', function () {
                    document.getElementById('selectedTile').innerHTML = this.id
                    selectedTile = this.id
                })
                game_state[x][y].land = "farm"
            } else {
                const tile = document.createElement("div")
                tile.classList.add("tile")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                game_state[x][y].land = "tile"
            }
        }
    }
}

function buildCastles() {
    document.getElementById(`12_12`).classList.add("whiteCastle")
    document.getElementById(`12_12`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })
    game_state[12][12].land = "whiteCastle"

    document.getElementById(`12_0`).classList.add("blueCastle")
    document.getElementById(`12_0`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })
    game_state[12][0].land = "blueCastle"

    document.getElementById(`0_12`).classList.add("redCastle")
    document.getElementById(`0_12`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })
    game_state[0][12].land = "redCastle"

    document.getElementById(`0_0`).classList.add("blackCastle")
    document.getElementById(`0_0`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })
    game_state[0][0].land = "blackCastle"
}

function canMoveTo(color){
    document.getElementById(`${x}_${y}`).classList.add("canMoveTo")

    for (i = 0; i < color.movement.length; i++) {
        if (y + color.movement[i] > -1 && y + color.movement[i] < 13) {
            document.getElementById(`${x}_${y+color.movement[i]}`).classList.add("canMoveTo")
        }
        if (x + color.movement[i] > -1 && x + color.movement[i] < 13) {
            document.getElementById(`${x+color.movement[i]}_${y}`).classList.add("canMoveTo")
        }
        if (y - color.movement[i] > -1 && y - color.movement[i] < 13) {
            document.getElementById(`${x}_${y-color.movement[i]}`).classList.add("canMoveTo")
        }
        if (x - color.movement[i] > -1 && x - color.movement[i] < 13) {
            document.getElementById(`${x-color.movement[i]}_${y}`).classList.add("canMoveTo")
        }
        if (i < color.movement.length - 1) {
            if (y + color.movement[i] > -1 && y + color.movement[i] < 13 && x + color.movement[i] > -1 && x + color.movement[i] < 13) {
                document.getElementById(`${x+color.movement[i]}_${y+color.movement[i]}`).classList.add("canMoveTo")
            }
            if (y - color.movement[i] > -1 && y - color.movement[i] < 13 && x - color.movement[i] > -1 && x - color.movement[i] < 13) {
                document.getElementById(`${x-color.movement[i]}_${y-color.movement[i]}`).classList.add("canMoveTo")
            }
            if (y + color.movement[i] > -1 && y + color.movement[i] < 13 && x - color.movement[i] > -1 && x - color.movement[i] < 13) {
                document.getElementById(`${x-color.movement[i]}_${y+color.movement[i]}`).classList.add("canMoveTo")
            }
            if (y - color.movement[i] > -1 && y - color.movement[i] < 13 && x + color.movement[i] > -1 && x + color.movement[i] < 13) {
                document.getElementById(`${x+color.movement[i]}_${y-color.movement[i]}`).classList.add("canMoveTo")
            }
        }
    }
}

function canAttack(color){
    for (i = 0; i < color.atkrange.length; i++) {
        if (y + color.movement[color.movement.length - 1] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 1] + color.atkrange[i] < 13) {
            document.getElementById(`${x}_${y+color.movement[color.movement.length -1] + color.atkrange[i]}`).classList.add("canAttack")
        }
        if (x + color.movement[color.movement.length - 1] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 1] + color.atkrange[i] < 13) {
            document.getElementById(`${x+color.movement[color.movement.length -1] + color.atkrange[i]}_${y}`).classList.add("canAttack")
        }
        if (y - color.movement[color.movement.length - 1] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 1] - color.atkrange[i] < 13) {
            document.getElementById(`${x}_${y-color.movement[color.movement.length -1] - color.atkrange[i]}`).classList.add("canAttack")
        }
        if (x - color.movement[color.movement.length - 1] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 1] - color.atkrange[i] < 13) {
            document.getElementById(`${x-color.movement[color.movement.length -1] - color.atkrange[i]}_${y}`).classList.add("canAttack")
        }
        // if (i < color.movement.length - 1) {
            if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
                document.getElementById(`${x+color.movement[color.movement.length - 2]}_${y+color.movement[color.movement.length - 2] + color.atkrange[i]}`).classList.add("canAttack")
            }
            if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
                document.getElementById(`${x+color.movement[color.movement.length - 2] + color.atkrange[i]}_${y+color.movement[color.movement.length - 2]}`).classList.add("canAttack")
            }
            if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
                document.getElementById(`${x-color.movement[color.movement.length - 2]}_${y-color.movement[color.movement.length - 2] - color.atkrange[i]}`).classList.add("canAttack")
            }
            if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
                document.getElementById(`${x-color.movement[color.movement.length - 2] - color.atkrange[i]}_${y-color.movement[color.movement.length - 2]}`).classList.add("canAttack")
            }
            if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
                document.getElementById(`${x-color.movement[color.movement.length - 2]}_${y+color.movement[color.movement.length - 2] + color.atkrange[i]}`).classList.add("canAttack")
            }
            if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
                document.getElementById(`${x-color.movement[color.movement.length - 2] - color.atkrange[i]}_${y+color.movement[color.movement.length - 2]}`).classList.add("canAttack")
            }
            if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
                document.getElementById(`${x+color.movement[color.movement.length - 2]}_${y-color.movement[color.movement.length - 2] - color.atkrange[i]}`).classList.add("canAttack")
            }
            if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
                document.getElementById(`${x+color.movement[color.movement.length - 2] + color.atkrange[i]}_${y-color.movement[color.movement.length - 2]}`).classList.add("canAttack")
            }
        }
}

function canMoveToAndAttack(color){
    
}
function blackButtons() {
    document.getElementById("blacktank").addEventListener("click", function () {
        let black = new Tank("black", "tank", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = black
    })

    document.getElementById("blackmage").addEventListener("click", function () {
        let black = new Mage("black", "mage", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = black
    })

    document.getElementById("blackarcher").addEventListener("click", function () {
        let black = new Archer("black", "archer", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = black
    })

    document.getElementById("blacksupport").addEventListener("click", function () {
        let black = new Support("black", "support", selectedTile)
        black.setImg()
        black.buildUnit()
        black.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = black
    })
}

function redButtons() {
    document.getElementById("redtank").addEventListener("click", function () {
        let red = new Tank("red", "tank", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = red
    })

    document.getElementById("redmage").addEventListener("click", function () {
        let red = new Mage("red", "mage", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = red
    })

    document.getElementById("redarcher").addEventListener("click", function () {
        let red = new Archer("red", "archer", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = red
    })

    document.getElementById("redsupport").addEventListener("click", function () {
        let red = new Support("red", "support", selectedTile)
        red.setImg()
        red.buildUnit()
        red.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = red
    })
}

function blueButtons() {
    document.getElementById("bluetank").addEventListener("click", function () {
        let blue = new Tank("blue", "tank", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = blue
        document.getElementById(`${blue.position}`).addEventListener("click", function () {
            canMoveTo(blue)
            canAttack(blue)
        })
    })

    document.getElementById("bluemage").addEventListener("click", function () {
        let blue = new Mage("blue", "mage", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = blue
        document.getElementById(`${blue.position}`).addEventListener("click", function () {
            canMoveTo(blue)
            canAttack(blue)
        })
    })

    document.getElementById("bluearcher").addEventListener("click", function () {
        let blue = new Archer("blue", "archer", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = blue
        document.getElementById(`${blue.position}`).addEventListener("click", function () {
            canMoveTo(blue)
            canAttack(blue)
        })
    })

    document.getElementById("bluesupport").addEventListener("click", function () {
        let blue = new Support("blue", "support", selectedTile)
        blue.setImg()
        blue.buildUnit()
        blue.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = blue
        document.getElementById(`${blue.position}`).addEventListener("click", function () {
            canMoveTo(blue)
            canAttack(blue)
        })
    })
}

function whiteButtons() {
    document.getElementById("whitetank").addEventListener("click", function () {
        let white = new Tank("white", "tank", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = white
    })

    document.getElementById("whitemage").addEventListener("click", function () {
        let white = new Mage("white", "mage", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = white
    })

    document.getElementById("whitearcher").addEventListener("click", function () {
        let white = new Archer("white", "archer", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = white
    })

    document.getElementById("whitesupport").addEventListener("click", function () {
        let white = new Support("white", "support", selectedTile)
        white.setImg()
        white.buildUnit()
        white.setStats()
        x = parseInt(selectedTile.split("_")[0])
        y = parseInt(selectedTile.split("_")[1])
        game_state[x][y].unit = white
    })
}

function setButtons() {
    blackButtons()
    redButtons()
    blueButtons()
    whiteButtons()
}

function addPlayers() {
    bluePlayer = new Player(null, "blue", null)
    redPlayer = new Player(null, "red", null)
    blackPlayer = new Player(null, "black", null)
    whitePlayer = new Player(null, "white", null)
}

addPlayers()
buildBoard()
buildCastles()
setButtons()