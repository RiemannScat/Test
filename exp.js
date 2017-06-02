var input = "Your phrase";
var output = "";

var key = "Key sentence";
var keyIndex = 0;

var keyCode = toCode(key);

function sum(arr1, arr2){
	var sum = [];
	for (let i = 0, j = 0; i < arr1.length; i++, j++){
		j = i;

		while (j >= arr2.length){
			j -= i;
		}

		sum[i] = arr1[i] + arr2[j];
	}
	return sum;
}

function diff(arr1, arr2){
	var diff = [];
	var j = 0;
	for (let i = 0; i < arr1.length; i++, j++){
		j = i;

		while (j >= arr2.length){
			j -= i;
		}

		diff[i] = arr1[i] - arr2[j];
	}
	return diff;
}

function toCode(str){
	var num = [];
	for (let i = 0; i < str.length; i++){
		num[i] = str.charCodeAt(i);
	}
	return num;
}

function toText(num){
	var str = "";
	for (let i = 0; i < num.length; i++){
		str += String.fromCharCode(num[i]);
	}
	return str;
}

function encrypt(input){	
	var inCode = toCode(input);
	output = toText(sum(inCode, keyCode));
	console.log("Output: " + output);
	return output;
}

function decrypt(input){	
	var inCode = toCode(input);
	output = toText(diff(inCode, keyCode));
	console.log("Output: " + output);
	return output;
}