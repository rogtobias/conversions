//BMI calculator
var height = parseFloat(prompt("enter your height in inches: "));

var weight = parseFloat(prompt("enter your weight: "));

var bmi = function (height, weight){
	return weight / (height * height) * 703
}

alert(bmi(height, weight));


//Fahrenheit to celcius conversion
 var temperature = parseFloat(prompt("Give me a temperature in Fahrenheit: "));

var convertedTemp = function(per){
	return ((per - 32) * 5) / 9;
};

alert(convertedTemp(temperature));

//gallons to liters conversion
var gallons = parseFloat(prompt("enter unit in gallons: "));

var convert = function(per){
	return per * 3.78541;
}

alert(convert(gallons));
