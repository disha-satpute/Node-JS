var tax= require('./TaxController')
var notification = require('./notificationController')
var bank = require('./bankController')
var module = require('events')
var emitter = new module.EventEmitter();

//Registration of events with event Listeners
//attachment of event with event handler
//Mapping events with Callback functions

//configuration is always kept aside from actual calling function
//Event Routing
emitter.addListener('underBalance',notification.sendEmail);
emitter.addListener('underBalance',notification.sendSms);
emitter.addListener('underBalance',bank.blockAccount);
emitter.addListener('overBalance',tax.payIncomeTax);

exports.Account=function(InitialAmount){
    var balance=InitialAmount;

    var monitor=function(){
        if(balance>=25000){
            emitter.emit("overBalance");
        }
        else if(balance<5000){
            emitter.emit("underBalance");
        }
    }
    var withdraw=function(amount){
        balance= balance-amount;
        monitor();
    }
    var deposit=function(amount){
        balance= balance+amount;
        monitor();
    }
   var getBalance=function(amount){
    return balance;
   }
   //return block
    //allows to expose internal functions for outside invoking
    return{
        withdraw:withdraw,
        deposit:deposit,
        getBalance:getBalance
    }
}