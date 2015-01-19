function calculatePi(n){
	if(n === undefined || n > 20){
		n = 20;
	}
	 return (16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)).toFixed(n);
}