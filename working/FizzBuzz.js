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
