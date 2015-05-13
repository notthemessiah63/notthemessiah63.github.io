var board = ['','','','','','','','',''];
var lastPlayer = 'o';
var winC1 = '';var winC2 = ''; var winC3 = ''; 
var winR1 = ''; var winR2 = ''; var winR3 = ''; 
var winD1 = ''; var winD2 = ''; 
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

function boardReset(winner) {
  board = ['','','','','','','','',''];
  $('.row').text("");
  alert("Yeah the Winner is player " +winner);
  var winText = "You are the Winner"
  if (winner == 'x') {
    $('#playerX').text(winText);
  } else {
    $('#playerO').text(winText);
  }
}

$(document).ready(function(){
  $('.row').on('click', function(){
    var playmv = Number(this.id);
 //   console.log(board[playmv]);
//--------------------
    if (board[playmv] == '') {
      currPlayer = lastPlayer === 'x' ? "o" : "x";
      board[playmv] = currPlayer;
      $(this).html(currPlayer);
      lastPlayer = currPlayer;
      dataSets();
      for (i = 0; i < 8; i++) {
        switch (winLines[i]) {
          case "xxx":
            boardReset(currPlayer);
             i = 8
            break;
          case "ooo":
            boardReset(currPlayer);
             i = 8
            break;
          default:
        }
      }
    } else {
      alert('Try again, that square is already taken')
    }
//--------------------
  })
})