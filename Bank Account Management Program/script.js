class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(deposit) {
    if(deposit > 0) {
      this.transactions.push({
        type: 'deposit',
        amount: deposit
      });
      this.balance += deposit;
      return `Successfully deposited $${deposit}. New balance: $${this.balance}`;
    }
    else if (deposit <= 0) {
     return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if(amount > 0 && amount <= this.balance) {
      this.transactions.push({
        type: 'withdraw',
        amount: amount
      });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    else if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
  }
 
 checkBalance() {
  return `Current balance: $${this.balance}`;
 }

 listAllDeposits() {
  const result =  this.transactions.filter(balance => balance.type === 'deposit') 
   .map(deposit => deposit.amount);

   return `Deposits: ${result.join(",")}`
      
   }

  listAllWithdrawals() {
   const result = this.transactions.filter((balance) => balance.type === 'withdraw')
   .map(deposit => deposit.amount); 
     

   return `Withdrawals: ${result.join(",")}` ;
 
  

}

}


const myAccount = new BankAccount();
myAccount.deposit(4000);
myAccount.deposit(5000);
myAccount.deposit(5000);
myAccount.withdraw(1000);
myAccount.withdraw(200);

console.log(myAccount.listAllDeposits())
console.log(myAccount.deposit(0))
console.log(myAccount.checkBalance())
console.log(myAccount);
