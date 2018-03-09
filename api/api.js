var network = require("../utils/network")
let host = 'https://yixiuge.xyz/scavenger/';

function getAllBrands(success,fail){
  var url = host + 'getAllElectronicsBrand/'
  network._get(url,success,fail)
}
function getAllBanner(success, fail) {
  var url = host + 'getAllBanner/'
  network._get(url, success, fail)
}
function getAllMalfunctionCategory(success,fail) {
  var url = host + 'getAllMalfunctionCategory/'
  network._get(url,success,fail)
}
function getMalfunctionCategoryByID(categoryID,success,fail){
  var para = { categoryID: categoryID }
  var url = host + "getMalfunctionCategoryByID/"
  network._post(url,para,success,fail)
}
function getPopularMalfunctionDetail(success, fail){
  var url = host +"getPopularMalfunctionDetail/"
  network._get(url, success, fail)
}
function getMalfunctionDetailByCategory(categoryID,success,fail){
  var para = {categoryID: categoryID}
  var url = host + "getMalfunctionDetailByCategory/"
  network._post(url,para,success,fail)
}
function getElectronicsModelByBrand(brandID,success,fail){
  var para = { brandID: brandID }
  var url = host + "getElectronicsModelByBrand/"
  network._post(url, para, success, fail)
}

function getMalfunctionDetailByID(detailID,success, fail){
  var para = { detailID: detailID }
  var url = host + "getMalfunctionDetailByID/"
  network._post(url, para, success, fail)
}

function getElectronicsBrandByID(brandID, success, fail) {
  var para = { brandID: brandID }
  var url = host + "getElectronicsBrandByID/"
  network._post(url, para, success, fail)
}

function getElectronicsModelByID(modelID, success, fail) {
  var para = { modelID: modelID }
  var url = host + "getElectronicsModelByID/"
  network._post(url, para, success, fail)
}

function getUser(tel,success,fail){
  var para = { tel: tel, validationCode: 0 }
  var url = host + "getUser/"
  network._post(url, para, success, fail)
}

function createRepairOrder(para,success,fail){
  var url = host + "createRepairOrder/"
  network._post(url, para, success, fail)
}


module.exports.getAllBrands = getAllBrands
module.exports.getAllBanner = getAllBanner
module.exports.getAllMalfunctionCategory = getAllMalfunctionCategory
module.exports.getPopularMalfunctionDetail = getPopularMalfunctionDetail
module.exports.getMalfunctionDetailByCategory = getMalfunctionDetailByCategory
module.exports.getMalfunctionCategoryByID = getMalfunctionCategoryByID
module.exports.getElectronicsModelByBrand = getElectronicsModelByBrand
module.exports.getElectronicsBrandByID = getElectronicsBrandByID
module.exports.getMalfunctionDetailByID = getMalfunctionDetailByID
module.exports.getElectronicsModelByID = getElectronicsModelByID
module.exports.getUser = getUser
module.exports.createRepairOrder = createRepairOrder