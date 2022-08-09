// Comparators are used to compare two objects. In this challenge, you'll create a comparator and use it to sort an array. The Player class is provided in the editor below. It has two fields:

// : a string.
// : an integer.
// Given an array of  Player objects, write a comparator that sorts them in order of decreasing score. If  or more players have the same score, sort those players alphabetically ascending by name. To do this, you must create a Checker class that implements the Comparator interface, then write an int compare(Player a, Player b) method implementing the Comparator.compare(T o1, T o2) method. In short, when sorting in ascending order, a comparator function returns  if ,  if , and  if .

// Declare a Checker class that implements the comparator method as described. It should sort first descending by score, then ascending by name. The code stub reads the input, creates a list of Player objects, uses your method to sort the data, and prints it out properly.

// Example
 

// Sort the list as . Sort first descending by score, then ascending by name.

// Input Format

// The first line contains an integer, , the number of players.
// Each of the next  lines contains a player's  and , a string and an integer.

// Constraints

// Two or more players can have the same name.
// Player names consist of lowercase English alphabetic letters.
// Output Format

// You are not responsible for printing any output to stdout. Locked stub code in Solution will instantiate a Checker object, use it to sort the Player array, and print each sorted element.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

class Player {
    name: string;
    score: number;
}

function main() {
    const players = parseInt(readLine());
    let res;
    const playersArr: Player[] = [];
    
    while(res = readLine()){
        res = res.split(' ');
        let player = new Player();
        player.name = res[0];
        player.score = parseInt(res[1]);
        playersArr.push(player);
    }
    playersArr.sort((a:Player, b:Player) => {
        if(a.score > b.score) {
            return -1
        } else if(a.score < b.score) {
            return 1
        }else if(a.name > b.name){
            return 1
        }else if(a.name < b.name){
            return -1
        } else {
            return 0
        }
    });
    
    for (let i = 0; i < playersArr.length; i++) {
        console.log(playersArr[i].name + ' ' + playersArr[i].score);
    }
}
