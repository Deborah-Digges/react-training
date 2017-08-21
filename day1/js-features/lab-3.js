/*
Let's practice writing some OO code in JS (ES 2017).
Create Lab03.js file. Implement the following and run it using NodeJS.

Create a class called Account with the following.
1) It has a balance that needs to be initialized with a value greater than 10000
2) Methods to deposit, withdraw. If there isn't sufficient balance don't allow withdraw.
3) You can withdraw only 3 times. After that you will be charged 0.5% of the amount as Fees.
4) Method to print the statement. The statement shows the date, type of transaction(Deposit, Withdraw, Fees ...etc) and amount
5) Create an object of Account(20000) and call deposit twice and withdraw 5-6 times. Print the statement and Balance finally 
*/

class Account {
    
    
    constructor(initialBalance) {
        if(initialBalance < 10000) {
            throw "Initial balance below minimum allowed";
        }
        this.balance = initialBalance;
        this.withdrawCount = 0;
        this.maxWithdrawls = 3;
        this.transactions = [];
    }
    
    deposit(amountToDeposit) {
        this.balance += amountToDeposit;
        this.transactions.push(new Transaction(amountToDeposit, new Date(), "DEPOSIT"))
    }
    
    withdraw(amountToWithdraw) {
        if(this.withdrawCount >= this.maxWithdrawls) {
            if((1.05 * amountToWithdraw) > this.balance) {
                throw "Insufficient Funds";
            }
            // charge a 5% fee
            this.balance -= 0.05 * amountToWithdraw;
            this.transactions.push(new Transaction(amountToWithdraw * 0.05, new Date(), "HANDLING"))
        }
        
        if(amountToWithdraw > this.balance) {
            throw "Insufficient funds";
        }
        
        this.balance -= amountToWithdraw;
        this.withdrawCount += 1;
        this.transactions.push(new Transaction(amountToWithdraw, new Date(), "WITHDRAW"))
    }
    
    printStatement() {
        console.log("Transaction Date\t\tAmount\t\tTransaction Type")
        for(var i=0; i<this.transactions.length; ++i) {
            
            console.log(this.transactions[i].date.toDateString() + "\t\t" + this.transactions[i].amount + "\t\t"
                        + this.transactions[i].type);
        }
        console.log("Balance Remaining: " + this.balance);
    }
}

class Transaction {
    constructor(amount, date, type) {
        this.amount = amount;
        this.date = date;
        this.type = type;
    }
}

var account = new Account(10000);
account.deposit(100);
account.deposit(100);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.withdraw(200);
account.printStatement();
