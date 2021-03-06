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
//-- reset board array and initialise game screen
function boardReset() {
  board = ['','','','','','','','','']; 
  moves = 0;
  gameWinner = ""
  $('.row').text("");
  $('#playerX').text("");
  $('#playerO').text("");
  $('#gameInfo').text("X-Men to start");
}
//-- on game end (win or tie) output game result
function processWinner(winner) {
  var winText = "YOU WIN!"
  if (winner == 'x') {
    $('<img src="imagefiles/win.png">').appendTo("#playerX");
    $('#gameInfo').text("X-Men wins!");
  } else if (winner == 'o') {
    $('<img src="imagefiles/win.png">').appendTo("#playerO");
    $('#gameInfo').text("Omen wins!");
  } else {
    $('#gameInfo').text("Players Tie!");
  }
  gameWinner = winner;
}
//--- each turn display 
function inGameInfo(player) {
  if (player == 'x') {
    $('#gameInfo').text("X-Men to play!");
    // playSound('soundXmen.wav');
  } else {
    $('#gameInfo').text("Omen to play!");
    // playSound('soundOmen.wav');
  }
}
$(document).ready(function(){
  
  $('.row').on('click', function(){
    var playmv = Number(this.id);
//------P L A Y   T I C   T A C  T O E --------------
    if (board[playmv] == '' && gameWinner == '') {
      if (moves == 0) {
        $('.row').text("");
      }
      moves +=1;
      inGameInfo(lastPlayer);
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
        alert('The game has ended, hit "Reset" for another game');
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