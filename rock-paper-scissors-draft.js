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

// Capitalize
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

// Get user input
let player = checkInput(capitalize(prompt("Rock, Paper, Scissors?")))

// Get computer input
let comp = getComputerChoice()

// Play a round
function playRound(player, comp) {

    // Configure messages
    let result = `You: ${player}, Computer: ${comp.data}`,
    tie = "Tie!",
    win = `You win! ${player} beats ${comp.data}.`,
    lose = `You lose! ${comp.data} beats ${player}.`,
    tryAgain = "Reload the page to try again."

    // Judge using nodes, output messages
    if (player == comp.next.data) {
        alert(result + "\n" + win + "\n" + tryAgain)
        playerScore++
    } else if (comp.data == player) {
        alert(result + "\n" + tie + "\n" + tryAgain)
    } else {
        alert(result + "\n" + lose + "\n" + tryAgain)
        compScore++
    }
}

//Initialize
playRound(player, comp)