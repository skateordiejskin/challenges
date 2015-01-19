function fibonacci(n) {
	if(n === undefined || n > 50){
		n = 50;
	}
	var fibNum = 1,
		finalString = fibNum.toString()+' ';
	for (var i = 0; i < n; i++) {
		finalString = finalString + fibNum.toString()+' ';
		fibNum = fibNum + fibNum;
	}
	return finalString;
}