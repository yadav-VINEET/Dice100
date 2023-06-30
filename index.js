



var scores=[0,0], dice, roundScore = 0,
  activePlayer = 1,
  gamePlaying = 1;

document.querySelector('.btn-roll').addEventListener('click', function() {
  if (1) {
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice' + dice + '.png';

    if (dice !== 1) {
      console.log(dice);

      roundScore += dice;
      console.log(roundScore);
      document.querySelector(".playercurrent" + activePlayer).textContent = roundScore;

    } else {
      document.querySelector(".player" + activePlayer).style.backgroundColor="rgba(116, 213, 255, 0.59)";
      nextPlayer();


    }
  }


});


function nextPlayer() {
  if (activePlayer === 1) activePlayer = 2;
  else activePlayer = 1;
  roundScore = 0;

  document.querySelector(".playercurrent1").textContent = '0';
  document.querySelector(".playercurrent2").textContent = '0';

  // document.querySelector('.player-0-panel').classList.toggle('active');
  // document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector(".player" + activePlayer).style.backgroundColor="rgba(116, 213, 255, 0.9)";

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click', function() {
  document.querySelector(".player" + activePlayer).style.backgroundColor="rgba(116, 213, 255, 0.59)";

  if (gamePlaying) {
    scores[activePlayer-1] += roundScore;

    console.log("hello"+scores);

    document.querySelector('.playerscore' + activePlayer).textContent = scores[activePlayer-1];


    //
    if (scores[activePlayer-1] >= 100) {
        document.querySelector('.playertext' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        // console.log("winner");

    gamePlaying = 0;
  } else {
    nextPlayer();
  }

}
});
