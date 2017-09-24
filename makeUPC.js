const getSum = require('./checksum.js');

function getUPC(array){
	len = array.length;
	UPCarray = [];
	var reg = new RegExp('^[0-9]+$');
	for (i = 0; i<len;i++){
		if(array[i].length ==12 || array[i].length ==14){
			UPCnum = array[i].substr(1);
			if (array[i].length ==14){
				UPCnum = UPCnum.substring(0, UPCnum.length - 2);
			}
			if(reg.test(UPCnum)){
				lastDigit = getSum.calcCheckSum(UPCnum);
				fullUPC = UPCnum + lastDigit;
				UPCarray.push(fullUPC);

			}
		}
	}
  UPCarray = new Set(UPCarray);
	return UPCarray;
}
 // console.log(getUPC(["000000004889KF"]));


//exports
module.exports.getUPC = getUPC;
