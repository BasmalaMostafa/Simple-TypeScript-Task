class Account {
    debitAmount() { }
    ;
    creditAmount() { }
    ;
    getBalance() { }
    ;
}
class Current_Account extends Account {
    constructor(interest_rate) {
        super();
        this.interest_rate = interest_rate;
    }
    addCustomer() { }
    removeCustomer() { }
}
class Saving_Account extends Account {
    constructor(min_Balance) {
        super();
        this.min_Balance = min_Balance;
    }
    addCustomer() { }
    removeCustomer() { }
}
