// The task 



// Your code should not contain any console.logs.  It should just be a set of functions in homework3.js

// 4. push your project (homework3 directory) to github (name your repository homework3)




// -A function that takes at least three arguments and returns the result of some set of operations using those arguments
const magicOperations = function(a,b,c,d) {
	const result = (a*b + c*d)/2 - (a*c + b*d)/4;

	return result;
}


// -A function that takes no arguments and returns something
const selfControlledFunction = function() {
	const declaration = "I am a self controlled function and it's me to decide what I am saying! ";

	return declaration;
}


// -A function that takes arguments, does something but does not return anything
const warning = function(name) {
	alert("Hey, " + name + " be attentive, it's dangerous");
}

//A better example of the above mentioned requirements
const coloring = function(colorName) {
	document.body.style.backgroundColor = colorName;
}



// -A function called fullName that takes as argument first name and last name and returns the full name of the person 
const fullName = function(firstName, lastName) {
	return firstName + ' ' + lastName;
}



// -A function that takes three strings and returns the string that is the longest. 

const longestString = function(str1, str2, str3) {
	const firstLength = str1.length;
	const secondLength = str2.length;
	const thirdLength = str3.length;

	if (firstLength >= secondLength) {
		if (firstLength >= thirdLength) {
			return str1;
		} else {
			return thirdLength;
		}
	} else if (firstLength < secondLength) {
		if (secondLength >= thirdLength) {
			return str2;
		} else {
			return str3;
		}
	}
}



// -A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger 

const comparison = function(num1, num2) {

	if(num1 === num2) {
		return 0;
	} else if(num1 > num2) {
		return 1;
	} else {
		return -1;
	}
}


// -A function that takes three inputs and returns the first truethy value 

const firstTruethy = function(val1, val2, val3) {
	return val1 || val2 || val3;
}

