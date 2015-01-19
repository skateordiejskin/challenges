
String.prototype.count = function(s1){
	 return (this.length - this.replace(new RegExp(s1,"g"), '').length) / s1.length;
}

function countVowels(s){
	var a, e, i, o, u, string;

	s = s.toLowerCase();
	a = s.count('a');
	e = s.count('e');
	i = s.count('i');
	o = s.count('o');
	u = s.count('u');
	var total = a+e+i+o+u;
	return "Total: " + total + ' Vowels: a: ' + a + ' e: '+ e + ' i: '+ i + ' o: '+ o + ' u: ' + u;
}
