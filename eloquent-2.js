// **** LOOPING TRIANGLE ****
// MY SOLUTION

var hash = ""
for (var i = 0; i < 7; i++) {
  console.log(hash +="#");
}

/*      ####### ACTUAL SOLUTION #######
  **Checked vs. as whilst mine worked it seemed (correctly) overcomplicated**
for (var line = "#"; line.length < 8; line += "#") {
  console.log(line);
}
*/
//------------------------------------------------------------------------------


// **** FIZZBUZZ ****
// MY SOLUTION

for (var i=1; i < 101; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}

//Have not checked vs. solution as has worked correctly and likely matches; this was an easier one as was part of the Code Academy lessons.
//------------------------------------------------------------------------------


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
