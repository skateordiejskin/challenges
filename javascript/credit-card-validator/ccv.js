function validateCreditCard(cardNum) {
	//split the array
	var cardArr = cardNum.split("");

	//get the last digit
	var lastDigit = cardArr.pop();

	//reverse the array
	cardArr = cardArr.reverse();

	//loop through the array and multiply each element by 2
	//if the value is greater than 9, subtract 9
	for (var i = 0; i < cardArr.length; i += 2) {
		cardArr[i] = cardArr[i] * 2;
		if (cardArr[i] > 9) {
			cardArr[i] = cardArr[i] - 9;
		}
	}

	console.log("x2 - 9: " + cardArr);
	var cardTotal = 0;
	//add the array elements together
	for (i = 0; i < cardArr.length; i++) {
		cardTotal += parseInt(cardArr[i]);
	}

	cardTotal = cardTotal*9;
	//if the sum of the array is equal to the last digit
	//return true
	//else return false
	if (parseInt(cardTotal % 10) === parseInt(lastDigit)) {
		return "yes";
	} else {
		return "no";
	}
}

function cardType(cardNum) {
	var cardArr = cardNum.split(""),
		mcArr = [51, 52, 53, 54, 55],
		amexArr = [34, 37];
	if (parseInt(cardArr[0]) === 4) {
		return "Visa";
	} else if (parseInt(cardArr[0]) === 6) {
		return "Discover";
	} else {
		var firstTwo = "" + cardArr[0] + cardArr[1];
		firstTwo = parseInt(firstTwo);
		if (mcArr.indexOf(firstTwo) !== -1) {
			return "MasterCard";
		} else if (amexArr.indexOf(firstTwo) !== -1) {
			return "American Express";
		}
	}
}