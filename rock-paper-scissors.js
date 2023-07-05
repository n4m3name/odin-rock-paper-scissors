// Rock paper scissors

// ListNode constructor
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Initiate nodes
let r = new ListNode("Rock"),
p = new ListNode("Paper"),
s = new ListNode("Scissors")

// Use nodes to simulate hierarchy: Whatever comes next wins
r.next = p
p.next = s
s.next = r

// Return computer's choice using random()
function getComputerChoice() {
    let rps = [r, p, s]
    return rps[Math.floor(Math.random() * 3)]
}

//Return player's choice by input
function getPlayerChoice() {
    return checkInput(capitalize(prompt("Rock, Paper, Scissors?")))
}

// Capitalize player input
function capitalize(str) {
    let strCap = str.charAt(0).toUpperCase() + str.slice(1)
    return strCap
}

// Check user input for errors
function checkInput(player) {
    if (player == "Rock" || player == "Paper" || player == "Scissors") {
        return player 
    }
    return checkInput(capitalize(prompt("Try again...")))
}

// Return round winner
function playRound(player, comp) {

    // Judge using nodes, return winner
    if (player == comp.next.data) {
        return "player"
    } else if (comp.data == player) {
        return "tie"
    } else {
        return "comp"
    }
}

//Play 5 rounds
function game() {

    // Set scores to 0
    let plr = 0,
    cmp = 0
    
    // Configure independent messages
    let tie = "Tie!",
    winAll = "You win!",
    loseAll = "You lose!",
    tryAgain = "Reload the page to try again."

    //Loop rounds
    for (let i = 0; i < 5; i++) {

        // Get user, computer input
        let player = getPlayerChoice(),
        comp = getComputerChoice()

        // Configure dependent messages
        let result = `You chose ${player}, computer chose ${comp.data}`,
        win = `${player} beats ${comp.data}.`,
        lose = `${comp.data} beats ${player}.`

        winner = playRound(player, comp);
        if (winner == "player") {
            plr += 1
            alert(`Score: You: ${plr}, Computer: ${cmp}` + "\n" + result + "\n" + win)
        } else if (winner == "tie") {
            alert(`Score: You: ${plr}, Computer: ${cmp}` + "\n" + result + "\n" + tie)
        } else {
            cmp += 1
            alert(`Score: You: ${plr}, Computer: ${cmp}` + "\n" + result + "\n" + lose)
        }
    }

    //Final display
    if (plr > cmp) {
        alert(`Final score: ${plr}, ${cmp}` + "\n" + winAll + "\n" + tryAgain)
    } else if( plr == cmp) {
        alert(`Final score: ${plr}, ${cmp}` + "\n" + tie + "\n" + tryAgain)
    } else {
        alert(`Final score: ${plr}, ${cmp}` + "\n" + loseAll + "\n" + tryAgain)
    }
}

//Initialize game
game()