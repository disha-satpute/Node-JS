var accounting=require('./Account')

var acc123= accounting.Account(25000);

acc123.withdraw(24000);

console.log("total balance : "+acc123.getBalance());

acc123.deposit(5000);

console.log("total balance : "+acc123.getBalance());