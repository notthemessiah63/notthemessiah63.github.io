var board = ['w','w','w','w','w','w','w','w','w'];
var lastPlayer = 'o';
var winC1 = '';var winC2 = ''; var winC3 = ''; 
var winR1 = ''; var winR2 = ''; var winR3 = ''; 
var winD1 = ''; var winD2 = ''; 
// define all combinations of win lines 
var winLines = {
  // '1': [board[0], board[1], board[2]],
  // '2': [board[3], board[4], board[5]],
  // '3': [board[6], board[7], board[8]],
  // '4': [board[0], board[3], board[6]],
  // '5': [board[1], board[4], board[7]],
  // '6': [board[2], board[5], board[8]],
  // '7': [board[0], board[4], board[8]],
  // '8': [board[2], board[4], board[6]]
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
$(document).ready(function(){
  $('.row').on('click', function(){
    var playmv = Number(this.id);
    currPlayer = lastPlayer === 'x' ? "o" : "x";
    board[playmv] = currPlayer;
    lastPlayer = currPlayer;
    dataSets();
    for (i = 0; i < 8; i++) {
      switch (winLines[i]) {
        case "xxx":
          console.log("The winner is 'x'");
          // i = 8
          break;
        case "ooo":
          console.log("The winner is 'o'");
          // i = 8
          break;
        default:
      }
    }
  })
});