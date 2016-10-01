function convertToRoman(num) {
 var toRoman = []; 
var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var modern = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for (var i = 0; i < modern.length; i++) {
        while (num >= modern[i]) {
            toRoman.push(roman[i]);
            num = num - modern[i];
        }
        final = toRoman.join('');
    }
    return final;
}
