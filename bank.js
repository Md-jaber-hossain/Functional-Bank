function inputUpdate(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function totalUpdate(inputId, inputValue){
    const totalField = document.getElementById(inputId);
    const totalValue = parseFloat(totalField.innerText);
    totalField.innerText = inputValue + totalValue;
}

function currentBalance(inputId){
    const currentBalanceField = document.getElementById(inputId);
    const currentBalanceValue = parseFloat(currentBalanceField.innerText);
    return currentBalanceValue;
}

function balanceUpdate(inputId, inputValue, isTrue){

    const currentBalanceValue = currentBalance('balance-total');
    const balanceUpdateField = document.getElementById(inputId);

    if(isTrue == true){
        balanceUpdateField.innerText = currentBalanceValue + inputValue;
    }
    else{
        balanceUpdateField.innerText = currentBalanceValue - inputValue;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const inputValue = inputUpdate('deposit-input');
    if(inputValue > 0){

        totalUpdate('deposit-total',inputValue);
        balanceUpdate('balance-total', inputValue, true);
    }
});

document.getElementById('withdraw-button').addEventListener('click', function(){

    const inputValue = inputUpdate('withdraw-input');
    const currentBalanceStore = currentBalance('balance-total');

    if(inputValue > 0 && inputValue <= currentBalanceStore){
        totalUpdate('withdraw-total',inputValue);
        balanceUpdate('balance-total', inputValue, false);
    }
})