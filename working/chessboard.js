//CHESSBOARD
//MY ATTEMPT WHEN TIMEBOX COMPLETE - could get to return in one horizontal line, not grid

for (var x = 0; x < 8; x++) {
  for (var y = 1; y < 9; y++) { //trial+error incremented; without would be 1 too many sets of 8 and layout if \n working would be wrong.
    if ((x+y) % 2 === 0) {
      console.log("#");
    }
    else {
      console.log(" ");
    }
  }
  if (x === 8) {
    console.log("\n") // stuck here
  }
} 

/*  ACTUAL SOLUTION
var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x+y) % 2 == 0) {
      board += " ";
    }
    else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
*/
