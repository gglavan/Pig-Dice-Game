var scores, roundScore, activePlayer = 0, randomDice, isPlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(isPlaying) {
        randomDice = Math.floor(Math.random() * 6) + 1;
        var dicePNG = document.querySelector('.dice-png'); 
        dicePNG.src = 'images/dice-' + randomDice + '.png';
        document.querySelector('.dice-png').style.display = 'inline-block';
        if(randomDice !== 1) {
            roundScore += randomDice;
            document.querySelector('#score-' + activePlayer).textContent = roundScore;
        } else nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(isPlaying) { 
        var score = document.querySelector('#player-' + activePlayer);
        scores[activePlayer] += roundScore;
        score.textContent = scores[activePlayer];
        document.querySelector('#score-' + activePlayer).textContent = 0;
        document.querySelector('.dice-png').style.display = 'none';
        if(scores[activePlayer] >= 100) {
            isPlaying = false;
            document.querySelector('#winner-' + activePlayer).textContent = 'WINNER!';
            document.querySelector('#winner-' + activePlayer).style.color = '#EC6A5C';
        } else nextPlayer();
    }
});

function nextPlayer() {    
    document.querySelector('#panel-' + activePlayer).classList.remove('active');
    document.querySelector('#score-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('#panel-' + activePlayer).classList.add('active');
    roundScore = 0;
}

function init() {
    isPlaying = true;
    scores = [0, 0];
    roundScore = 0;
    document.querySelector('.dice-png').style.display = 'none';
    document.querySelector('#winner-' + activePlayer).textContent = 'WINNER!';
    document.querySelector('#panel-' + activePlayer).classList.remove('active');
    activePlayer = 0;
    document.querySelector('#winner-0').textContent = 'Player 1';
    document.querySelector('#winner-1').textContent = 'Player 2';
    document.querySelector('#winner-0').style.color = 'rgb(90,90,90)';
    document.querySelector('#winner-1').style.color = 'rgb(90,90,90)';
    document.querySelector('#panel-0').classList.add('active');
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#player-0').textContent = '0';
    document.querySelector('#player-1').textContent = '0';
}

document.querySelector('.btn-new').addEventListener('click', init);