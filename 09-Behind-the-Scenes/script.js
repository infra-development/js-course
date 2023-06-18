"use strict";

function calcAge(birthyear) {
  const age = 2037 - birthyear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1991 && birthyear <= 1996) {
      var millenial = true;
      //   Creating NEW variable with same name as outer scope's variable
      const firstName = "Haresh";

      //   Reassigning outer scope's variable
      output = "NEW OUTPUT!";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}
const firstName = "Kaushik";
calcAge(2000);
