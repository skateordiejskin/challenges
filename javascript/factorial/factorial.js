function factorial(num) {
	var factorial = 1,
		i;
	for (i = num; i > 0; i--) {
		factorial *= i;
	}
	return factorial;
}