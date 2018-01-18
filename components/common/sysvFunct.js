export const compareEntries = (array1, array2) => {
	let retVals = [];
	for (const i in array1){
		while(array1[i][0]){
			if (array2[i].indexOf(array1[i][0]) != -1){
				if (retVals[i])
					retVals[i].push(array1[i].shift());
				else
					retVals[i]=[array1[i].shift()];
            }
			else 
				array1[i].shift();
		}
	}
	return retVals;
}

const numToStr = (number) => {
	number = number.toString();
	number = number.split('');
	for (i in number){
		number[i] = parseFloat(number[i]);
    }
	let retVal = '';
	for (let i = 0; i < number.length; i++){
		if (number[i+1]) {
			curChar = number[i]*10+number[i+1];
        }
		else {
			curChar = number[i]*10+number[0];
		}
		curChar = curChar/100;
		curChar = curChar*62;
		curChar -= curChar%1;
		curChar+=48;
		if (curChar > 57)
			curChar+=7;
		if (curChar > 90)
			curChar+=6;
		curChar = String.fromCharCode(curChar);
		retVal+=curChar;
	}
	return retVal
}

export const uniqueId = (degree) => {
	let cryptoArray = new Uint32Array(degree);
	cryptoArray = crypto.getRandomValues(cryptoArray);
	retVal = '';
	for (i of cryptoArray){
		retVal+=numToStr(i);
	}
	return retVal;
}

export const randomInt = (max, min) => {
	if (min)
		limit = max-min;
	else
		limit = max;
	let retVal = Math.random()*limit;
	retVal -= retVal % 1;
	if (min)
		retVal += min;
	return retVal;
}