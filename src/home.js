//add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const inputAddMoney = document.getElementById('input-add-money').value;
    const inputPin = document.getElementById('input-pin').value;
    console.log(inputAddMoney, inputPin);

    // verify pin (Temporary)
    if(inputPin === '1234'){
        console.log('Adding Money to your Acccount')

        const balance = document.getElementById('acc-balance').innerText;

        const addMoneyNumber = parseFloat(inputAddMoney);
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        document.getElementById('acc-balance').innerText = newBalance;
    
    }else{
        alert('Failed to add money! Please check you pin.')
    }
})