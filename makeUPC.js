const getSum = require('./checksum.js');

function getUPC(array){
	len = array.length;
	UPCarray = [];
	var reg = new RegExp('^[0-9]+$');
	for (i = 0; i<len;i++){
		// console.log(array[i]);
		if(array[i].length ==12){
			if(reg.test(array[i])){
				UPCnum = array[i].substr(1);
				lastDigit = getSum.calcCheckSum(UPCnum);
				fullUPC = UPCnum + lastDigit;
				UPCarray.push(fullUPC);

			}
		}
	}
	// console.log(UPCarray);
	return UPCarray;
}

//exports
module.exports.getUPC = getUPC;