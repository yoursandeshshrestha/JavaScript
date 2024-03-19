const accountId = 144553
var accountPassword = "12345"
accountCity = "Siliguri"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ss@SS.com"
accountPassword = "21212121"
accountCity = "Siliguri"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])