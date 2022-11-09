var myBalance = 5000;

function acctNum(){
    var acct = prompt('enter your account name')
    if (acct === "" || acct.length !== 10 || isNaN(acct)) {
        alert('invalid account number');
        acctNum();
    }else{
        atm_pin();
    }
}
function atm_pin(){
    var atmPin = prompt('enter your atm pin');
    if (atmPin == "" || isNaN(atmPin) || atmPin.length !== 4) {
        alert('invalid pin');
        atm_pin();
    }else{
        atm_query();
    }
}
function get_balance() {
    alert('you current account balance is ' + myBalance);
    atm_query();
}
function deposit(){
    var depositAmt = parseInt(prompt('How much do you want to deposit'));
    if (isNaN(depositAmt) || depositAmt ==='') {
        alert('error: please enter a number');
        deposit();
    }else{
        myBalance += depositAmt;
        get_balance();
    }
}
function withdrawal(){
    var withdrawalAmt = parseInt(prompt('How much do you want to withdraw?'));
    if (isNaN(withdrawalAmt) || withdrawalAmt === '') {
        alert('Error: please enter a number');
        withdrawal();
    }else{
        myBalance -= withdrawalAmt;
        get_balance();
    }
}
function error(){
    var confirm_leave = confirm('you have selected to leave');
    if (confirm_leave) {
        window.close();
    }else{
        atm_query();
    }
}

function atm_query(){
    var choice = parseInt(prompt('what do you want to do\n 1.Balance\n 2.Deposit\n 3.Withdrawal\n 4. Exit'));
    if (choice == 1) {
        get_balance();
    }else if (choice == 2) {
        deposit();
    }else if(choice == 3){
        withdrawal();
    }else if(choice == 4){
        exit();
    }else{
        error();
    }
}
acctNum();