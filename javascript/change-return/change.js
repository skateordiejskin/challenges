var numQuarters = 0,
	numDimes = 0,
	numNickles = 0,
	numPennies = 0,
	numDollars = 0;

function calcChange(cost, amntGiven) {
	if (cost < amntGiven) {
		//console.log((amntGiven - cost).toFixed(2));
		calcNumOfCoins((amntGiven - cost));
		return 'Dollars: ' +  numDollars + ' | Quarters: ' + numQuarters + ' | Dimes: ' + numDimes + ' | Nickles: ' + numNickles + ' | Pennies: ' + numPennies;
	} else {
		return "Not enough money given";
	}
}

function calcNumOfCoins(change) {
	change = change.toFixed(2);
	var dollar = 1.00,
		quarter = .25,
		dime = .10,
		nickle = .05,
		penny = .01;
	if (change > dollar) {
		numDollars = Math.floor(change / dollar);
		calcNumOfCoins(change % dollar);
	} else if (change > quarter) {
		numQuarters = Math.floor(change / quarter);
		calcNumOfCoins(change % quarter);
	} else if (change > dime) {
		numDimes = Math.floor(change / dime);
		calcNumOfCoins(change % dime);
	} else if (change > nickle) {
		numNickles = Math.floor(change / nickle);
		calcNumOfCoins(change % nickle);
	} else if (change >= penny) {
		numPennies = Math.floor(change / penny);
		calcNumOfCoins(change % penny);
	}
}