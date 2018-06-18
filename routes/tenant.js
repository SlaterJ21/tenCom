const express = require('../node_modules/express')
const router = express.Router()
// const path = require('path');

console.log('u in da right hizzzaaaaaayyyyyyyyy')
router.use(express.static('/public/tenantPortfolio'))

// // viewed at http://localhost:3000
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/../public/'));
// });


// app.get('/', function (req, res) {
//   res.send('<form action="/users/add" method="get">' +
//               'First Name:<br> <input type="text" name="first"><br><br>'+
//               'Last Name:<br> <input type="text" name="last"><br><br>'+
//               '<input type="submit" value="Add User"> '+
//               '</form><br><br>');
// });


module.exports = router
