var accounting=require('./Account');

var acc123= accounting.Account(4000);

acc123.withdraw(2000);

console.log("total balance : "+acc123.getBalance());

acc123.deposit(25000);

console.log("total balance : "+acc123.getBalance());