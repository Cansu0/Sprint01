const zipCode = require('german-zip-codes');
var myDistrict = zipCode.getDistrictsByZipCode("12357");
console.log(myDistrict);
