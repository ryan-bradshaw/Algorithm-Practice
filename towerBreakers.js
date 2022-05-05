// Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.

//The rules of the game are as follows:

// Initially there are n towers.
// Each tower is of height m.
// The players move in alternating turns.
// In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
// If the current player is unable to make a move, they lose the game.
// Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

let n = 2 //number of towers
let m = 6 //tower height

function towerBreakers(n, m){
    if(m == 1 || n % 2 ==0){
// Because if the towers start out at 1 or there are an even number of towers, player 2 will win; else, player 1 wins.

        return 2
    } else {
        return 1
    }

    }

towerBreakers(n, m)