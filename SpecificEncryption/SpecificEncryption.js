var table = []

function setup(){
	for (var j = 32; j <= 64; j++){
		table.push(String.fromCharCode(j));
	}

	for (var j = 65; j <= 122; j++){
		table.push(String.fromCharCode(j));
	}

	for (var j = 1040; j <= 1103; j++){
		table.push(String.fromCharCode(j));
	}
}
setup();

var output = "";

var key = "key phrase";

var keyCode = toCode(key);

function sum(arr1, arr2){
	var sum = [];
	for (var i = 0, j = 0; i < arr1.length; i++, j++){
		if (j >= arr2.length){
			j = 0;
		}

		sum[i] = arr1[i] + arr2[j];
		if (sum[i] >= table.length){
			sum[i] -= table.length;
		}
	}
	return sum;
}

function diff(arr1, arr2){
	var diff = [];
	for (var i = 0, j = 0; i < arr1.length; i++, j++){
		if (j >= arr2.length){
			j = 0;
		}

		diff[i] = arr1[i] - arr2[j];
		
		if (diff[i] < 0){
			diff[i] += table.length;
		}
	}
		return diff;
}

function toCode(str){
	var num = [];
	for (var i = 0; i < str.length; i++){
		for (var j = 0; j < table.length; j++){
			if (table[j] === str.charAt(i)){
				num[i] = j;
			}
		}
	}
	return num;
}

function toText(num){
	var str = "";
	for (var i = 0; i < num.length; i++){
		str += table[num[i]];
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
