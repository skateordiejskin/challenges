function palindrome(s) {
	var reversed = s.split("").reverse().join("");
	if(reversed === s){
		return "Yes";
	} else {
		return "No";
	}
}