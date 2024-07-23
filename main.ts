class Account{
    private acc_no:number;
    private balance:number;

    debitAmount(){};
    creditAmount(){};
    getBalance(){};
}

interface IAccount{
    date_of_opening;

    addCustomer();
    removeCustomer();
}

class Current_Account extends Account implements IAccount{
    date_of_opening: any;

    constructor(private interest_rate:number){
        super();
    }

    addCustomer() {}
    removeCustomer() {}
}

class Saving_Account extends Account implements IAccount{
    date_of_opening: any;

    constructor(private min_Balance:number){
        super();
    }

    addCustomer() {}
    removeCustomer() {}
}

