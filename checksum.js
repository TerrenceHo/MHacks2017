function calcCheckSum(number){
	 digitList = [];
	 length = number.length;
	for (j = 0; j<length; j++){
		digitList.push(+number.charAt(j));
	}
	 addOdd = digitList[0] + digitList[2] + digitList[4] + digitList[6] + digitList[8] + digitList[10];
	 multiplyOdd = addOdd*3;
	 addEven = digitList[1] + digitList[3] + digitList[5] + digitList[7] + digitList[9];
	 sumEvenOdd = addEven + multiplyOdd;
	 lastDigit = sumEvenOdd%10;
	if (lastDigit!=0){
		lastDigit = -1*(lastDigit-10);
	}
	return lastDigit; 
}

// console.log(getLastDigit("00000004889"));

//export 
module.exports.calcCheckSum = calcCheckSum;