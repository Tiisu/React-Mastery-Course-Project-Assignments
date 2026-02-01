// Code without "use strict";
// The code runs with no error when i do not use strict
x = 10;
console.log(x);

function test() {
  y = 20;
}
test();
console.log(y);


// Code with "use strict";

// the code returns an error when I use strict. it throws an "Uncaught ReferenceError: x is not defined
//     at main.js:4:3"

"use strict";
x = 10;
console.log(x);

function test() {
  y = 20;
}
test();
console.log(y);



// In conclusion I will say that Strict mode makes it easier to write "secure" JavaScript.
