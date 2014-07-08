sudoku
======

A simple responsive Sudoku game. Using HTML, CSS, Javascript

Initializer
--------------
	$(".sudoku-game").sudoku();
	
Tested On
--------------
Mac OSX 10.8 
- Chrome Ver.35
- Firefox Ver.30
- Safari Ver.7

Ipad 2 and Iphone5 IOS 7
- Chrome 
- Safari

Application Structure/Game Play
-------------------------------
On launch user is presented with a difficulty picker
Once difficulty is picked the game starts
In Game mode player clicks on a empty spot which selects the spot (indicated by blinking tile)
Then player selects a number at the bottom to populate into the spot (Only the correct number can be placed)
Player can click on placed number to highlight them as a helper tool

Future Enhancments 
-------------------------------
If placing wrong number give user feedback it is wrong. 
Create a reset button
Create a new game button
Allow for game to be saved and retrieved (possible localstorage)

Technical Thoughts 
-------------------------------
This game was made as a jQuery plugin which makes jQuery a requirement for running the game.
The current version is hard coded as a 9x9 grid this could be changed to make it flexible. 

 