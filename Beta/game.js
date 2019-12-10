//Variables for selected tile and unit
var selectedTile
var selectedUnit

var farmGold = 0
//Empty array (matrix) of the game_state
var game_state = []

//Empty Tile Object
var tile = {
    land: null,
    unit: null
}

//Function for generating tile objects in matrix
function game_state_start(size) {
    for (i = 0; i < size; i++) {
        game_state.push([]);
        for (j = 0; j < size; j++) {
            game_state[i].push(tile)
        }
    }
}

//Class containing each Player's information
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

    //Method to calculate player's gold during upkeep
    upkeep(megafarm, farms, numCastles) {
        for (i = 0; i < farms; i++) {
            farmGold = farmGold + randomNumber(2, 4)
        }
        if (megafarm === true) {
            this.gold = this.gold + numCastles + farmGold + 5
        } else {
            this.gold = this.gold + numCastles + farmGold
        }
        document.getElementById(`${this.color}Gold`).innerHTML = `${this.gold} Gold`
    }

    //Method to start turn and trigger upkeep method
    startTurn(megafarm, farms, numCastles) {
        farmGold = 0
        this.turn = true
        this.upkeep(megafarm, farms, numCastles)

    }

    //Method to end a player's turn
    endTurn() {
        this.turn = false
    }
}

//Class containing unit's information
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

    //Adds unit CSS class to the tile at unit's position
    buildUnit() {
        document.getElementById(`${this.position}`).classList.add(`${this.color}-${this.type}`)
    }

    //Adjust power based on equipment
    powerEq(equipment) {
        this.power = this.power + equipment
    }

    //Adjust armor based on equipment
    armorEq(equipment) {
        this.armor = this.armor + equipment
    }

    //Calculate damage done to this unit based on attackingPower
    damageCalc(attackingPower) {
        this.health = this.health - (attackingPower - this.armor)
    }

    //Heals 4 health to this unit
    heal() {
        this.health = this.health + 4
    }

    //Moves this unit to input position
    moveUnit(newPosition) {
        document.getElementById(`${this.position}`).classList.remove(`${this.color}-${this.type}`)
        document.getElementById(`${newPosition}`).classList.add(`${this.color}-${this.type}`)
        this.position = newPosition
    }
}


class Tank extends Unit {

    //Method to set tank-specific stats
    setStats() {
        this.power = 3
        this.armor = 4
        this.health = 15
        this.movement = [1, 2]
        this.atkrange = [1]
        this.cost = 6
    }

    //Sets image based on color of the constructed unit
    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Tank.png"
        } else if (this.color === "black") {
            this.img = "Units/Black-Tank.png"
        } else if (this.color === "red") {
            this.img = "Units/Red-Tank.png"
        } else if (this.color === "white") {
            this.img = "Units/White-Tank.png"
        }
    }
}

class Mage extends Unit {

    //Method to set mage-specific stats
    setStats() {
        this.power = 9
        this.armor = 1
        this.health = 7
        this.movement = [1, 2, 3]
        this.atkrange = [1, 2]
        this.cost = 6
    }

    //Sets image based on color of the constructed unit
    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Mage.png"
        } else if (this.color === "black") {
            this.img = "Units/Black-Mage.png"
        } else if (this.color === "red") {
            this.img = "Units/Red-Mage.png"
        } else if (this.color === "white") {
            this.img = "Units/White-Mage.png"
        }
    }
}

class Archer extends Unit {

    //Method to set archer-specific stats
    setStats() {
        this.power = 7
        this.armor = 2
        this.health = 13
        this.movement = [1, 2, 3]
        this.atkrange = [2]
        this.cost = 8
    }

    //Sets image based on color of the constructed unit
    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Archer.png"
        } else if (this.color === "black") {
            this.img = "Units/Black-Archer.png"
        } else if (this.color === "red") {
            this.img = "Units/Red-Archer.png"
        } else if (this.color === "white") {
            this.img = "Units/White-Archer.png"

        }
    }
}

class Support extends Unit {

    //Method to set support-specific stats
    setStats() {
        this.power = 1
        this.armor = 2
        this.health = 14
        this.movement = [1, 2]
        this.atkrange = [1]
        this.cost = 8
    }

    //Sets image based on color of the constructed unit
    setImg() {
        if (this.color === "blue") {
            this.img = "Units/Blue-Support.png"
        } else if (this.color === "black") {
            this.img = "Units/Black-Support.png"
        } else if (this.color === "red") {
            this.img = "Units/Red-Support.png"
        } else if (this.color === "white") {
            this.img = "Units/White-Support.png"

        }
    }
}

//Returns random number, max included
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tileListeners() {
    //Sets value of selected tile box to this tile's coordinates
    document.getElementById('selectedTile').innerHTML = this.id
    selectedTile = this.id
    //Checks if tile is in range of selected unit
    if (document.getElementById(this.id).classList.contains("canMoveTo")) {
        //Checks that a unit is selected
        if (document.getElementsByClassName('selected')[0]) {
            //Seperates id of selected tile into integers for coordinates
            move = document.getElementsByClassName('selected')[0].id
            a = parseInt(move.split("_")[0])
            b = parseInt(move.split("_")[1])
            //Moves unit from it's current location to the selected location
            game_state[a][b].unit.moveUnit(selectedTile)

            //Removes selected class (tile highlight) from the previous location
            document.getElementsByClassName('selected')[0].classList.remove('selected')
            selectedTile

            //Removes all of the canMoveTo classes (blue tile) from all tiles that had it
            while (document.getElementsByClassName('canMoveTo')[0]) {
                document.getElementsByClassName('canMoveTo')[0].classList.remove('canMoveTo')
            }
        }
    }
}

function addTileListeners() {
    //Adds tile listeners to tile a x_y coordinate
    document.getElementById(`${x}_${y}`).addEventListener('click', tileListeners)
}

function buildBoard() {
    //Randomizes and assigns coordinate values for farm
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

    //Loops through all coordinates to add every tile to the board
    for (y = 12; y > -1; y--) {
        for (x = 0; x < 13; x++) {
            if (x === 6 && y === 6) {
                //Adds tile and sets megafarm CSS class to center tile
                const tile = document.createElement("div")
                tile.classList.add("tile", "megafarm")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                //Adds select tile click listener
                document.getElementById(`${x}_${y}`).addEventListener('click', function () {
                    document.getElementById('spawnTile').innerHTML = this.id
                    spawnTile = this.id
                })
                //Adds remaining listeners
                addTileListeners()
                //Sets megafarm value to tile object in matrix
                game_state[x][y].land = "megafarm"
            } else if ((x === farm1X && y === farm1Y) || (x === farm2X && y === farm2Y) || (x === farm3X && y === farm3Y) || (x === farm4X && y === farm4Y) || (x === farm5X && y === farm5Y) || (x === farm6X && y === farm6Y) || (x === farm7X && y === farm7Y) || (x === farm8X && y === farm8Y)) {
                //Adds tile and sets farm CSS class to all tiles at farm coordinates
                const tile = document.createElement("div")
                tile.classList.add("tile", "farm")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                //Adds select tile click listener
                document.getElementById(`${x}_${y}`).addEventListener('click', function () {
                    document.getElementById('spawnTile').innerHTML = this.id
                    spawnTile = this.id
                })
                //Adds remaining listeners
                addTileListeners()
                //Sets farm value to tile object in matrix
                game_state[x][y].land = "farm"
            } else {
                //Adds tile and sets basic tile CSS class to all other tiles
                const tile = document.createElement("div")
                tile.classList.add("tile")
                tile.setAttribute("id", `${x}_${y}`)
                document.querySelector(`.board`).appendChild(tile)
                //Sets tile value to tile object in matrix
                game_state[x][y].land = "tile"
                //Adds listeners
                addTileListeners()
            }
        }
    }
}

function buildCastles() {
    //Sets whiteCastle CSS class to tile, adds select tile listener, and sets whiteCastle value to tile object
    document.getElementById(`12_12`).classList.add("whiteCastle")
    document.getElementById(`12_12`).addEventListener('click', function () {
        document.getElementById('spawnTile').innerHTML = this.id
        spawnTile = this.id
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
    })
    game_state[12][12].land = "whiteCastle"

    //Sets blueCastle CSS class to tile, adds select tile listener, and sets blueCastle value to tile object
    document.getElementById(`12_0`).classList.add("blueCastle")
    document.getElementById(`12_0`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
        document.getElementById('spawnTile').innerHTML = this.id
        spawnTile = this.id
    })
    game_state[12][0].land = "blueCastle"

    //Sets redCastle CSS class to tile, adds select tile listener, and sets redCastle value to tile object
    document.getElementById(`0_12`).classList.add("redCastle")
    document.getElementById(`0_12`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
        document.getElementById('spawnTile').innerHTML = this.id
        spawnTile = this.id
    })
    game_state[0][12].land = "redCastle"

    //Sets blackCastle CSS class to tile, adds select tile listener, and sets blackCastle value to tile object
    document.getElementById(`0_0`).classList.add("blackCastle")
    document.getElementById(`0_0`).addEventListener('click', function () {
        document.getElementById('selectedTile').innerHTML = this.id
        selectedTile = this.id
        document.getElementById('spawnTile').innerHTML = this.id
        spawnTile = this.id
    })
    game_state[0][0].land = "blackCastle"
}

let canMoveToTiles

function stepsFunc(x_y) {
    //Turns tile id string into integer coordinates
    x = parseInt(x_y.split("_")[0])
    y = parseInt(x_y.split("_")[1])

    //Empty array for tiles that can be moved to
    canMoveToTiles = []

    //Adds adjacent tiles to previous array if they are on the board
    if (x + 1 > -1 && x + 1 < 13) {
        canMoveToTiles.push(`${x+1}_${y}`)
    }
    if (x - 1 > -1 && x - 1 < 13) {
        canMoveToTiles.push(`${x-1}_${y}`)
    }
    if (y + 1 > -1 && y + 1 < 13) {
        canMoveToTiles.push(`${x}_${y+1}`)
    }
    if (y - 1 > -1 && y - 1 < 13) {
        canMoveToTiles.push(`${x}_${y-1}`)
    }

    //Adds blue canMoveTo CSS class to tiles in previous array
    canMoveToTiles.forEach(function (tile) {
        document.getElementById(tile).classList.add("canMoveTo")
    })
}

function canMoveTo(unit, position) {

    //Makes adjacent tiles blue, and saves them to a seperate array
    stepsFunc(position)
    moveableTiles = canMoveToTiles

    //Uses original array to set adjacent tiles blue, then saves new values
    stepsFunc(moveableTiles[0])
    moveableTilesTwo = canMoveToTiles

    //Uses orginal array to set adjacent tiles blue, then saves new values
    stepsFunc(moveableTiles[1])
    moveableTilesThree = canMoveToTiles

    //Uses orginal array to set adjacent tiles blue, then saves new values
    if (moveableTiles.length > 2) {
        stepsFunc(moveableTiles[2])
        moveableTilesFour = canMoveToTiles
    }

    //Uses orignal array to set adjacent tiles blue, then saves new values
    if (moveableTiles.length > 3) {
        stepsFunc(moveableTiles[3])
        moveableTilesFive = canMoveToTiles
    }

    //If the unit can move 3 spaces, uses the previously saved arrays to set the remaining tiles that are in moving distance to blue
    if (unit.movement.length > 2) {
        for (i = 0; i < moveableTilesTwo.length; i++) {
            stepsFunc(moveableTilesTwo[i])
        }

        for (i = 0; i < moveableTilesThree.length; i++) {
            stepsFunc(moveableTilesThree[i])
        }

        for (i = 0; i < moveableTilesFour.length; i++) {
            stepsFunc(moveableTilesFour[i])
        }

        for (i = 0; i < moveableTilesFive.length; i++) {
            stepsFunc(moveableTilesFive[i])
        }

    }

}

//Sets max distance attack tiles to red
// function canAttack(color) {
//     for (i = 0; i < color.atkrange.length; i++) {
//         if (y + color.movement[color.movement.length - 1] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 1] + color.atkrange[i] < 13) {
//             document.getElementById(`${x}_${y+color.movement[color.movement.length -1] + color.atkrange[i]}`).classList.add("canAttack")
//         }
//         if (x + color.movement[color.movement.length - 1] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 1] + color.atkrange[i] < 13) {
//             document.getElementById(`${x+color.movement[color.movement.length -1] + color.atkrange[i]}_${y}`).classList.add("canAttack")
//         }
//         if (y - color.movement[color.movement.length - 1] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 1] - color.atkrange[i] < 13) {
//             document.getElementById(`${x}_${y-color.movement[color.movement.length -1] - color.atkrange[i]}`).classList.add("canAttack")
//         }
//         if (x - color.movement[color.movement.length - 1] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 1] - color.atkrange[i] < 13) {
//             document.getElementById(`${x-color.movement[color.movement.length -1] - color.atkrange[i]}_${y}`).classList.add("canAttack")
//         }
//         if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
//             document.getElementById(`${x+color.movement[color.movement.length - 2]}_${y+color.movement[color.movement.length - 2] + color.atkrange[i]}`).classList.add("canAttack")
//         }
//         if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
//             document.getElementById(`${x+color.movement[color.movement.length - 2] + color.atkrange[i]}_${y+color.movement[color.movement.length - 2]}`).classList.add("canAttack")
//         }
//         if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
//             document.getElementById(`${x-color.movement[color.movement.length - 2]}_${y-color.movement[color.movement.length - 2] - color.atkrange[i]}`).classList.add("canAttack")
//         }
//         if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
//             document.getElementById(`${x-color.movement[color.movement.length - 2] - color.atkrange[i]}_${y-color.movement[color.movement.length - 2]}`).classList.add("canAttack")
//         }
//         if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
//             document.getElementById(`${x-color.movement[color.movement.length - 2]}_${y+color.movement[color.movement.length - 2] + color.atkrange[i]}`).classList.add("canAttack")
//         }
//         if (y + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && y + color.movement[color.movement.length - 2] + color.atkrange[i] < 13 && x - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && x - color.movement[color.movement.length - 2] - color.atkrange[i] < 13) {
//             document.getElementById(`${x-color.movement[color.movement.length - 2] - color.atkrange[i]}_${y+color.movement[color.movement.length - 2]}`).classList.add("canAttack")
//         }
//         if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
//             document.getElementById(`${x+color.movement[color.movement.length - 2]}_${y-color.movement[color.movement.length - 2] - color.atkrange[i]}`).classList.add("canAttack")
//         }
//         if (y - color.movement[color.movement.length - 2] - color.atkrange[i] > -1 && y - color.movement[color.movement.length - 2] - color.atkrange[i] < 13 && x + color.movement[color.movement.length - 2] + color.atkrange[i] > -1 && x + color.movement[color.movement.length - 2] + color.atkrange[i] < 13) {
//             document.getElementById(`${x+color.movement[color.movement.length - 2] + color.atkrange[i]}_${y-color.movement[color.movement.length - 2]}`).classList.add("canAttack")
//         }
//     }
// }

function unitListener() {
    if (player.turn === true) {
        canMoveTo(unit, unit.position)
        document.getElementById(`${unit.position}`).classList.add("selected")
    } else {
        console.log(`Player: ${unit.color}`)
        console.log(`Unit Type: ${unit.type}`)
        console.log(`Health: ${unit.health}`)
        console.log(`Power: ${unit.power}`)
        console.log(`Armor: ${unit.armor}`)
    }
    document.getElementById(`${unit.position}`).removeEventListener("click", unitListener)
}

function blackButtons() {
    //Adds click listener for black tank button
    document.getElementById("blacktank").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (blackPlayer.turn === true && blackPlayer.gold > 5) {
            //Creates black tank object
            let black = new Tank("black", "tank", spawnTile)
            //Sets image
            black.setImg()
            //Adds unit to the board
            black.buildUnit()
            //Sets stats for the unit
            black.setStats()
            //Subtracts price of unit from players gold
            blackPlayer.gold = blackPlayer.gold - black.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = black
            //Adds listener for available movement on click and shows selected tile
            player = blackPlayer
            unit = black
            document.getElementById(`${black.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blackGold`).innerHTML = `${blackPlayer.gold} Gold`
        } else if (blackPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (blackPlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for black mage button
    document.getElementById("blackmage").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (blackPlayer.turn === true && blackPlayer.gold > 5) {
            //Creates black mage object
            let black = new Mage("black", "mage", spawnTile)
            //Sets image
            black.setImg()
            //Adds unit to the board
            black.buildUnit()
            //Sets stats for the unit
            black.setStats()
            //Subtracts price of unit from players gold
            blackPlayer.gold = blackPlayer.gold - black.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = black
            //Adds listener for available movement on click and shows selected tile
            player = blackPlayer
            unit = black
            document.getElementById(`${black.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blackGold`).innerHTML = `${blackPlayer.gold} Gold`
        } else if (blackPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (blackPlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for black archer button
    document.getElementById("blackarcher").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (blackPlayer.turn === true && blackPlayer.gold > 7) {
            //Creates black archer object
            let black = new Archer("black", "archer", spawnTile)
            //Sets image
            black.setImg()
            //Adds unit to the board
            black.buildUnit()
            //Sets stats for the unit
            black.setStats()
            //Subtracts price of unit from players gold
            blackPlayer.gold = blackPlayer.gold - black.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = black
            //Adds listener for available movement on click and shows selected tile
            player = blackPlayer
            unit = black
            document.getElementById(`${black.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blackGold`).innerHTML = `${blackPlayer.gold} Gold`
        } else if (blackPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (blackPlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for black support button
    document.getElementById("blacksupport").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (blackPlayer.turn === true && blackPlayer.gold > 7) {
            //Creates black support object
            let black = new Support("black", "support", spawnTile)
            //Sets image
            black.setImg()
            //Adds unit to the board
            black.buildUnit()
            //Sets stats for the unit
            black.setStats()
            //Subtracts price of unit from players gold
            blackPlayer.gold = blackPlayer.gold - black.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = black
            //Adds listener for available movement on click and shows selected tile
            player = blackPlayer
            unit = black
            document.getElementById(`${black.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blackGold`).innerHTML = `${blackPlayer.gold} Gold`
        } else if (blackPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (blackPlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })
}

function redButtons() {
    //Adds click listener for red tank button
    document.getElementById("redtank").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (redPlayer.turn === true && redPlayer.gold > 5) {
            //Creates red tank object
            let red = new Tank("red", "tank", spawnTile)
            //Sets image
            red.setImg()
            //Adds unit to the board
            red.buildUnit()
            //Sets stats for the unit
            red.setStats()
            //Subtracts price of unit from players gold
            redPlayer.gold = redPlayer.gold - red.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = red
            //Adds listener for available movement on click and shows selected tile
            player = redPlayer
            unit = red
            document.getElementById(`${red.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`redGold`).innerHTML = `${redPlayer.gold} Gold`
        } else if (redPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (redPlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for red mage button
    document.getElementById("redmage").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (redPlayer.turn === true && redPlayer.gold > 5) {
            //Creates red mage object
            let red = new Mage("red", "mage", spawnTile)
            //Sets image
            red.setImg()
            //Adds unit to the board
            red.buildUnit()
            //Sets stats for the unit
            red.setStats()
            //Subtracts price of unit from players gold
            redPlayer.gold = redPlayer.gold - red.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = red
            //Adds listener for available movement on click and shows selected tile
            player = redPlayer
            unit = red
            document.getElementById(`${red.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`redGold`).innerHTML = `${redPlayer.gold} Gold`
        } else if (redPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (redPlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for red archer button
    document.getElementById("redarcher").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (redPlayer.turn === true && redPlayer.gold > 7) {
            //Creates red archer object
            let red = new Archer("red", "archer", spawnTile)
            //Sets image
            red.setImg()
            //Adds unit to the board
            red.buildUnit()
            //Sets stats for the unit
            red.setStats()
            //Subtracts price of unit from players gold
            redPlayer.gold = redPlayer.gold - red.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = red
            //Adds listener for available movement on click and shows selected tile
            player = redPlayer
            unit = red
            document.getElementById(`${red.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`redGold`).innerHTML = `${redPlayer.gold} Gold`
        } else if (redPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (redPlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for red support button
    document.getElementById("redsupport").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (redPlayer.turn === true && redPlayer.gold > 7) {
            //Creates red support object
            let red = new Support("red", "support", spawnTile)
            //Sets image
            red.setImg()
            //Adds unit to the board
            red.buildUnit()
            //Sets stats for the unit
            red.setStats()
            //Subtracts price of unit from players gold
            redPlayer.gold = redPlayer.gold - red.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = red
            //Adds listener for available movement on click and shows selected tile
            player = redPlayer
            unit = red
            document.getElementById(`${red.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`redGold`).innerHTML = `${redPlayer.gold} Gold`
        } else if (redPlayer.turn === false) {
            alert("It's not your turn!")
        } else if (redPlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })
}

function blueButtons() {
    //Adds click listener for blue tank button
    document.getElementById("bluetank").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (bluePlayer.turn === true && bluePlayer.gold > 5) {
            //Creates blue tank object
            let blue = new Tank("blue", "tank", spawnTile)
            //Sets image
            blue.setImg()
            //Adds unit to the board
            blue.buildUnit()
            //Sets stats for the unit
            blue.setStats()
            //Subtracts price of unit from players gold
            bluePlayer.gold = bluePlayer.gold - blue.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = blue
            //Adds listener for available movement on click and shows selected tile
            player = bluePlayer
            unit = blue
            document.getElementById(`${blue.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blueGold`).innerHTML = `${bluePlayer.gold} Gold`
        } else if (bluePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (bluePlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for blue mage button
    document.getElementById("bluemage").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (bluePlayer.turn === true && bluePlayer.gold > 5) {
            //Creates blue mage object
            let blue = new Mage("blue", "mage", spawnTile)
            //Sets image
            blue.setImg()
            //Adds unit to the board
            blue.buildUnit()
            //Sets stats for the unit
            blue.setStats()
            //Subtracts price of unit from players gold
            bluePlayer.gold = bluePlayer.gold - blue.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = blue
            //Adds listener for available movement on click and shows selected tile
            player = bluePlayer
            unit = blue
            document.getElementById(`${blue.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blueGold`).innerHTML = `${bluePlayer.gold} Gold`
        } else if (bluePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (bluePlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for blue archer button
    document.getElementById("bluearcher").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (bluePlayer.turn === true && bluePlayer.gold > 7) {
            //Creates blue archer object
            let blue = new Archer("blue", "archer", spawnTile)
            //Sets image
            blue.setImg()
            //Adds unit to the board
            blue.buildUnit()
            //Sets stats for the unit
            blue.setStats()
            //Subtracts price of unit from players gold
            bluePlayer.gold = bluePlayer.gold - blue.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = blue
            //Adds listener for available movement on click and shows selected tile
            player = bluePlayer
            unit = blue
            document.getElementById(`${blue.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blueGold`).innerHTML = `${bluePlayer.gold} Gold`
        } else if (bluePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (bluePlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for blue support button
    document.getElementById("bluesupport").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (bluePlayer.turn === true && bluePlayer.gold > 7) {
            //Creates blue support object
            let blue = new Support("blue", "support", spawnTile)
            //Sets image
            blue.setImg()
            //Adds unit to the board
            blue.buildUnit()
            //Sets stats for the unit
            blue.setStats()
            //Subtracts price of unit from players gold
            bluePlayer.gold = bluePlayer.gold - blue.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = blue
            //Adds listener for available movement on click and shows selected tile
            player = bluePlayer
            unit = blue
            document.getElementById(`${blue.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`blueGold`).innerHTML = `${bluePlayer.gold} Gold`
        } else if (bluePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (bluePlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })
}

function whiteButtons() {
    //Adds click listener for white tank button
    document.getElementById("whitetank").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (whitePlayer.turn === true && whitePlayer.gold > 5) {
            //Creates white tank object
            let white = new Tank("white", "tank", spawnTile)
            //Sets image
            white.setImg()
            //Adds unit to the board
            white.buildUnit()
            //Sets stats for the unit
            white.setStats()
            //Subtracts price of unit from players gold
            whitePlayer.gold = whitePlayer.gold - white.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = white
            //Adds listener for available movement on click and shows selected tile
            player = whitePlayer
            unit = white
            document.getElementById(`${white.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`whiteGold`).innerHTML = `${whitePlayer.gold} Gold`
        } else if (whitePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (whitePlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for white mage button
    document.getElementById("whitemage").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (whitePlayer.turn === true && whitePlayer.gold > 5) {
            //Creates white mage object
            let white = new Mage("white", "mage", spawnTile)
            //Sets image
            white.setImg()
            //Adds unit to the board
            white.buildUnit()
            //Sets stats for the unit
            white.setStats()
            //Subtracts price of unit from players gold
            whitePlayer.gold = whitePlayer.gold - white.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = white
            //Adds listener for available movement on click and shows selected tile
            player = whitePlayer
            unit = white
            document.getElementById(`${white.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`whiteGold`).innerHTML = `${whitePlayer.gold} Gold`
        } else if (whitePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (whitePlayer.gold < 6) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for white archer button
    document.getElementById("whitearcher").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (whitePlayer.turn === true && whitePlayer.gold > 7) {
            //Creates white archer object
            let white = new Archer("white", "archer", spawnTile)
            //Sets image
            white.setImg()
            //Adds unit to the board
            white.buildUnit()
            //Sets stats for the unit
            white.setStats()
            //Subtracts price of unit from players gold
            whitePlayer.gold = whitePlayer.gold - white.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = white
            //Adds listener for available movement on click and shows selected tile
            player = whitePlayer
            unit = white
            document.getElementById(`${white.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`whiteGold`).innerHTML = `${whitePlayer.gold} Gold`
        } else if (whitePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (whitePlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })

    //Adds click listener for white support button
    document.getElementById("whitesupport").addEventListener("click", function () {
        //Checks if it is player's turn and player has enough gold for unit purchase
        if (whitePlayer.turn === true && whitePlayer.gold > 7) {
            //Creates white support object
            let white = new Support("white", "support", spawnTile)
            //Sets image
            white.setImg()
            //Adds unit to the board
            white.buildUnit()
            //Sets stats for the unit
            white.setStats()
            //Subtracts price of unit from players gold
            whitePlayer.gold = whitePlayer.gold - white.cost
            //Adds unit object to the position on the matrix
            x = parseInt(spawnTile.split("_")[0])
            y = parseInt(spawnTile.split("_")[1])
            game_state[x][y].unit = white
            //Adds listener for available movement on click and shows selected tile
            player = whitePlayer
            unit = white
            document.getElementById(`${white.position}`).addEventListener("click", unitListener)
            //Resets selected tile value and updates gold counter
            selectedTile
            document.getElementById(`whiteGold`).innerHTML = `${whitePlayer.gold} Gold`
        } else if (whitePlayer.turn === false) {
            alert("It's not your turn!")
        } else if (bluePlayer.gold < 8) {
            alert("You don't have enough gold!")
        }
    })
}

//Sets buttons for each color
function setButtons() {
    blackButtons()
    redButtons()
    blueButtons()
    whiteButtons()
}

//Adds a player for each color
function addPlayers() {
    bluePlayer = new Player(null, "blue", null)
    redPlayer = new Player(null, "red", null)
    blackPlayer = new Player(null, "black", null)
    whitePlayer = new Player(null, "white", null)

    //Sets gold display for each player
    document.getElementById('blackGold').innerHTML = `${blackPlayer.gold} Gold`
    document.getElementById('redGold').innerHTML = `${redPlayer.gold} Gold`
    document.getElementById('blueGold').innerHTML = `${bluePlayer.gold} Gold`
    document.getElementById('whiteGold').innerHTML = `${whitePlayer.gold} Gold`
}

//Calls needed functions to start game
game_state_start(13)
addPlayers()
buildBoard()
buildCastles()
setButtons()