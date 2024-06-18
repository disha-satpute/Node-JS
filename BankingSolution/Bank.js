var accounting=require('./Account')

var acc123= accounting.Account(25000);

var withdrawAmount=acc123.withdraw(2000);

console.log("total balance : "+acc123.getBalance());

var DepositAmount=acc123.deposit(5000);


console.log("total balance : "+acc123.getBalance());