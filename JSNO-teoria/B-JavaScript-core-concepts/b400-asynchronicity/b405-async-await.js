/**
 * Promises można zapisać dużo prościej i czytelniej
 *
 * wykorzystując składnie async / await
 *
 *
 * Najpierw spójrzmy jak ten zapis będzie wyglądał na poziomie CONSUMER'ów:
 * przykład z PROVIDEREM będzie jeszcze niżej
 * */


// PROVIDER
function giveMePromise(password) {
	const someData = { userName: 'admin' };
	return new Promise((resolve, reject) => {
		if(password === 's3cr3t k3y') {
			resolve(someData);
		} else {
			reject(new Error('Nieprawidłowe hasło'))
		}
	})
}

// Potrzebujemy słowa kluczowego "async" aby w środku funkcji móc używać await !!
// Dlatego opakowujemy nasz kod w dodatkową funkcję (PS. można by tutaj użyć IIFE)
async function runMyCodeAsync() {

	// Zapis będzie teraz identyczny jak pisanie synchronicznego kodu.
	// CONSUMER(s):
	const data = await giveMePromise( 's3cr3t k3y' );
	console.log( 'Otrzymałem dane', data )

	try {
		const data = await giveMePromise( 'wrong' );
		console.log( 'Otrzymałem dane', data )
	} catch (err) {
		console.log('[!!!] Jest błąd:', err.message)
	}
}
runMyCodeAsync();

// Uproszczony zapis PROVIDERA:
// przypięcie słowa "async" do funkcji sprawia iż ZAWSZE - będzie ona zwracała Promise
// dlatego potem wystarczy nam tylko "return" lub "throw"
async function giveMePromiseAsyncVersion(password) {
	const someData = { userName: 'admin' };
	if(password === 's3cr3t k3y') {
		return someData;
	}
	throw new Error('Nieprawidłowe hasło');
}


// Kod z zadania b404 napisane w stylu async/await
async function codeFromTaskB404() {

	async function makeAjaxCallAsPromise(url) {
		// Albo:
		return 'resolved';
		// Albo:
		// throw new Error('reject');
	}

	try {
		const data1 = await makeAjaxCallAsPromise('https://first');
		const data2 = await makeAjaxCallAsPromise('https://second' + data1.url);
		const data3 = await makeAjaxCallAsPromise('https://third' + data2.url);
		console.log('THIS IS COOLNESS !!!', data3);
	} catch (err) {
		console.log('error 😐', err);
	}
}
