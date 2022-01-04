var out = setTimeout(time, 4000);
var load = document.getElementById("loading");
var countDownToRoll = document.getElementById("timeToRoll");
var yes = document.getElementById("correctMsg");
var no = document.getElementById("wrongMsg");
var numberChoosen = document.getElementById("var");
var newScore = document.getElementById("scoreVal");
var score = 0;
var secLeft;
var dice1;
var selectedNumber;

let images = ["dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png"
];

let dice = document.querySelectorAll("img");
console.log(dice);

// the time function will remove the loading text and display the countDownToRoll text 
//it works in the out variable on the top.
function time() {
    load.style.display = "none";
    countDownToRoll.style.display = "block";
    secLeft = 10;
    document.getElementById("rollStrt").innerHTML = secLeft;
    startCount();


}
//the startCount function will start the countDown to roll the dice when it display 0
function startCount() {
    action = setInterval(() => {
        secLeft -= 1;
        document.getElementById("rollStrt").innerHTML = secLeft;
        if (secLeft == -1) {

            secLeft = 10;
            document.getElementById("rollStrt").innerHTML = secLeft;

            roll();
        }
    }, 1000);

}
//the roll function for rolling the dice and getting the score
function roll() {

    dice1 = Math.floor((Math.random() * 6));
    console.log(dice1);
    getScore();
    document.querySelector("#die-1").setAttribute("src", images[dice1]);


}

//it gets the value from the buttons 
function getSelectedNumber(value) {
    selectedNumber = value;
    numberChoosen.innerHTML = value;
}
//get score function will check if the guess made is right or not .
function getScore() {
    if ((dice1 + 1) == selectedNumber) {
        score++;
        newScore.innerHTML = score;
        yes.style.display = 'block';
        setTimeout(function disableNo() {
            yes.style.display = 'none';
        }, 1000)

    }
    if ((dice1 + 1) != selectedNumber) {
        no.style.display = 'block'
        setTimeout(function disableNo() {
            no.style.display = 'none';
        }, 1000)
    }
}





