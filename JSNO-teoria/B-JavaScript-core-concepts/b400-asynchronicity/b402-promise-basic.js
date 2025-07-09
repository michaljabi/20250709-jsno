
// ---------------------------------------------------------------------------------------------
// PROVIDERS (dostawcy wartości):

// Ta funkcja zwraca zwykły numer
function giveMeANumber() {
	return 890;
}

// Ta funkcja, mimo że bardzo podobna, zwróci coś innego, to będzie Promise<number>
async function giveMeANumberAsync() {
	return 890;
}

// Zanim możliwe było użycie słowa kluczowego "async" funkcji, musieliśmy użyć Promise w taki sposób:
function giveMeANumberAsyncOld() {
	return Promise.resolve(890);
	// lub w pełnej formie API:
	/*
	return new Promise((resolve) => {
	    resolve(890);
	});
	*/
}

// ---------------------------------------------------------------------------------------------
// CONSUMERS (odbieranie wartości):

// w 1 przypadku mamy zwykły numer
const myNumber = giveMeANumber();
console.log('#1', myNumber);

// w 2 przypadku mamy Promise, który zwróci numer i musimy go odebrać tak:
giveMeANumberAsync().then(myNumber => {
	console.log('#2', myNumber);
});

// w 2 przypadku Możemy również użyć słowa kluczowego "await" w funkcji oznaczonej jako "async"
async function run() {
	const myNumber = await giveMeANumberAsync();
	console.log('#3', myNumber);
}
run(); // można IIFE (Immediately Invoked Function Expression) dla uproszczenia tego wywołania

// Niedawno w Node.js możemy również użyć top-level await:
const myNumber2 = await giveMeANumberAsync();
console.log('#4', myNumber2);
