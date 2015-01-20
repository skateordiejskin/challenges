var ans = 1;
function fastExponentsLoop(base, exponent) {
	var result = 1;
	for (var i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}

function fastExponentsRecursion(base, exponent) {
	if (exponent !== 0) {
		ans *= base;
		--exponent;
		//console.log(ans);
		fastExponentsRecursion(base, exponent);
	}
	return ans;
}