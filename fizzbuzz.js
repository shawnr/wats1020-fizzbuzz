// Place your FizzBuzz code here. 
var rangeLimit = 100;
var responseFor3 = 'Foo';
var responseFor5 = 'Bar';

// Count through numbers 1 to 20 and figure out if each one is divisble by 3, 5, or both.
for (i=1; i<=rangeLimit; i++){
	// For each number, do the following check:
	// See if it is divisible by 3
	if (i % 3 === 0) {
		// If so: See if it is ALSO divisible by 5
		if (i % 5 === 0) {
			// If divisible by 3 and 5: Print FizzBuzz
			console.log(responseFor3+responseFor5);
		} else {
			// If only divisible by 3: Print Fizz
			console.log(responseFor3);
		}
	} else if (i % 5 === 0) {
		// See if it is divisible by 5
		// If so: Print Buzz
		console.log(responseFor5);
	} else {
		// See if it is not divisible by 3 or 5
		// If so: Print number
		console.log(i);
	}
}

