var factors = [], lastPrime = 2;
function isPrime(num){
	if(num === 2){
		return true;
	} else if(num % 2 === 0){
		factors.push(2);
		num = num/2;
		return false;
	} else {
		return false;
	}
}
function getFactors(num){
	for(i = lastPrime+1; i <= num; i++){
		if(num % i === 0){
			num = num/i;
			factors.push(i);
			lastPrime = i;
		}
	}
	return factors.join(", ");
}
function primeFactors(num){
	if(isPrime(num) === false){
		return getFactors(num);
	} else {
		return num;
	}
}