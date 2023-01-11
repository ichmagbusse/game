var balance = 200;
var loseCnt = 0;
var smallWinCnt = 0;
var jackpotCnt = 0;

function startSlot(){
    var firstNr = document.getElementById('firstNr');
    var secondNr = document.getElementById('secondNr');
    var thirdNr = document.getElementById('thirdNr');

    var score = document.getElementById('score');

    var loss = document.getElementById('loss');
    var win = document.getElementById('win');
    var jackpot = document.getElementById('jackpot');

    firstNr.innerHTML = Math.floor(Math.random() * 6);
    secondNr.innerHTML = Math.floor(Math.random() * 6);
    thirdNr.innerHTML = Math.floor(Math.random() * 6);
    if(firstNr.innerHTML === secondNr.innerHTML || thirdNr.innerHTML === secondNr.innerHTML || firstNr.innerHTML === secondNr.innerHTML){
        balance = balance + 10;
        smallWinCnt++;
    }
    else if(firstNr.innerHTML === secondNr.innerHTML && thirdNr.innerHTML === secondNr.innerHTML){
        balance = balance + 30;
        jackpotCnt++;
    }
    else{
        balance = balance - 5;
        loseCnt++;
    }
    score.innerHTML = "Balance :"+balance;
    loss.innerHTML = "Loss :" + loseCnt;
    win.innerHTML = "Win :" + smallWinCnt;
    jackpot.innerHTML = "Jackpot :" + jackpotCnt;
}