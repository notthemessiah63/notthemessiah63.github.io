var board = ['','','','','','','','',''];
var lastPlayer = 'o';
var winC1 = '';var winC2 = ''; var winC3 = ''; 
var winR1 = ''; var winR2 = ''; var winR3 = ''; 
var winD1 = ''; var winD2 = '';
var moves = 0; 
var gameWinner = ""
// define all combinations of win lines 
var winLines = {
};

function dataSets() {
  winLines['0'] = board[0]+board[1]+board[2]; //winC1
  winLines['1'] = board[3]+board[4]+board[5]; //winC2
  winLines['2'] = board[6]+board[7]+board[8]; //winC3
  winLines['3'] = board[0]+board[3]+board[6]; //winR1
  winLines['4'] = board[1]+board[4]+board[7]; //winR2
  winLines['5'] = board[2]+board[5]+board[8]; //winR3
  winLines['6'] = board[0]+board[4]+board[8]; //winD1
  winLines['7'] = board[2]+board[4]+board[6]; //winD2 
}

function boardReset() {
  board = ['','','','','','','','','']; 
  moves = 0;
  gameWinner = ""
  $('.row').text("");
  $('#playerX').text("Ready to Start");
  $('#playerO').text("");
}

function processWinner(winner) {
  alert("Yeah the Winner is player " +winner);
  var winText = "YOU WIN!"
  if (winner == 'x') {
    $('#playerX').text(winText);
    $('#gameInfo').text("X-Men wins!");
  } else if (winner == 'o') {
    $('#playerO').text(winText);
    $('#gameInfo').text("Omen wins!");
  } else {
    $('#gameInfo').text("Nobody wins!");
  }
  gameWinner = winner;
  alert("game winner is "+gameWinner)
}

$(document).ready(function(){
  $('.row').on('click', function(){
    var playmv = Number(this.id);
//------P L A Y   T I C   T A C  T O E --------------
    if (board[playmv] == '' && gameWinner == '') {
      moves +=1;
      console.log(moves);
      currPlayer = lastPlayer === 'x' ? "o" : "x";
      board[playmv] = currPlayer;
      $(this).html(currPlayer);
      lastPlayer = currPlayer;
      dataSets();
      for (i = 0; i < 8; i++) {
        switch (winLines[i]) {
          case "xxx":
            processWinner(currPlayer);
             i = 8
            break;
          case "ooo":
            processWinner(currPlayer);
             i = 8
            break;
          default:
            if (moves == 9) {
              processWinner('TIE');
            }
        }
      }
    } else {
      if (gameWinner == '') {
        alert('Try again, that square is already taken');
      } else {
        alert('The game has ended, DOH!! hit "Reset" for another game');
      }
    }

  })
  //---------End of play T I C   T A C  T O E-----------
      //---------R E S E T   Game  -----------
    $('#resetGame').on('click', function(){
      boardReset();
    })
    //------- end of reset game
})