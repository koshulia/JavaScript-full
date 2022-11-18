export class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    return (this._balance += amount);
  }

  withdraw(amount) {
    if (this._balance < amount) {
      console.log('No enough funds');
      return;
    }
    return (this._balance -= amount);
  }
}
