// task 1
let info = [
    {
        name: "Temo",
        age: 25
    },
    {
        name: "Lasha",
        age: 21
    },
    {
        name: "Ana",
        age: 28
    }
]

let youngest = function(info){
    let youngestAge = Infinity;
    let youngestPerson;

    for(const personIndex in info){
        let person = info[personIndex]
        let firstName = person.name;
        let asaki = person.age

        if(asaki < youngestAge){
            youngestPerson = firstName;
            youngestAge = asaki;
        }
        // console.log(youngestAge, youngestPerson)
    }
    return youngestPerson;
}

// console.log(youngest(info))



// task 2
const user = {
    name: "James",
    lastName: "Bond",
    number: 007,
    greet: function(){
        console.log("Bond, James Bond!")
    }
}

const agent = {}

function copyProps(user){
    for(let key in user){
        // console.log(key)
        agent[key] = user[key]
    }
    console.log(agent)
}

// copyProps(user)


// task 3
function rollDice(){
    return parseInt((Math.random() * 6) + 1);
}

function playGame(){
    let playerOneCount = 0;
    let playerTwoCount = 0;
    
    while(true){
        let player1 = rollDice();
        playerOneCount++;

        let player2 = rollDice();
        playerTwoCount++;

        console.log("player 1 rolled: " + player1);
        console.log("player 2 rolled: " + player2);

        if(player1 === 3 || player2 === 3){
            console.log("player 1 rolled " + playerOneCount + " times")
            console.log("player 2 rolled " + playerTwoCount + " times")

            if(player1 === 3 && player2 === 3){
                console.log("Draw!")
            }else if(player1 === 3){
                console.log("Player 1 Wins")
            }else{
                console.log("Player 2 Wins")
            }
            break;

        }
    }
}

playGame();