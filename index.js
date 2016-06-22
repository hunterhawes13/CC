function isValid(ccnum) {
  var sum = 0;
  var numdigits = 16;
  var parity = numdigits % 2;
  for(var i=0; i < numdigits; i++) {
    var digit = parseInt(ccnum.charAt(i));
    if(i % 2 == parity) digit *= 2;
    if(digit > 9) digit -= 9;
    sum += digit;
  }
  return (sum % 10) === 0;
}

function checkLuhn(ccum){}

// tests
// ---
console.assert(isValid("4408 0412 3456 7893") === false);
console.assert(isValid("5000000000000000") === false);