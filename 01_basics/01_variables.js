const accountId = 1234
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
/* 
Preffered not to use var
*/


//accountId = 2  not allowed 
accountEmail = "xyz@gmail.com"
accountPassword = "98765"
accountCity = "Patna"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])