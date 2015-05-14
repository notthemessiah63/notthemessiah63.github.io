# TicTacToe
RUNTIME REQUIREMENTS:

Chrome Version 42.0.2311.135 (64-bit)

===========================================================================
PACKAGING LIST:

index.html - HTML file for the X-Men vs Omen Tic Tac Toe web page.
Folders:- 
audiofiles - Sound clips (setup, but not used in this release)
imagefiles - some images used in this release.
scripts - requires two script files :- ticTacToe.js, and jquery-2.1.4.
styles - requires board.css. 

ticTacToe.js - JavaScript that creates the game board, handles game logic, and jquery-2.1.4 for the listener functionality.
board.css - Basic styles for the page - no transitions applied

===========================================================================
CHANGES FROM PREVIOUS VERSIONS:

Version 1.0
First version.
===========================================================================

Game Play:- Two player game - no local storage is applied to date.

Tic Tac Toe Game Rules:-

X moves first.
A piece may be placed on any empty space.
A player wins by being the first to connect a line of friendly pieces from one side or corner of the
board to the other.
The game ends when either one player wins or it is no longer possible for a player to win (in which
case the result is a draw).

X-Men vs The Omen:-

When web page opened, player information is displayed to left and right of the game board X-Men
and Omen respectively.

The board displays Do or Die to denoting that play has not yet commenced.

below the board the phrase ‘X-Men to start’ shows denoting that first play is by X-men

any of the nine squares can be selected, The ‘Do or Die’ phrase is cleared, and the ‘x’ is placed
into the game board.

below the board the phrase ‘Omen to play!’ shows denoting that next play move is required by
Omen.

the game continues following the object of the game until one of three outcomes are reached.

X-men wins :- A graphic shows on the left of the game board for an X-Men win and Board
information states that ‘X-Men wins!’
