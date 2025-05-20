//cash out from the account
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputCashOutPin = document.getElementById('input-cash-out-pin').value;
    console.log(inputCashOut, inputCashOutPin);

    // verify pin (Temporary)
    if(inputCashOutPin === '1234'){
        console.log('Cashing out Money from your Account')

        const balance = document.getElementById('acc-balance').innerText;

        const cashOutNumber = parseFloat(inputCashOut);
        const balanceNumber = parseFloat(balance);

        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance);

        document.getElementById('acc-balance').innerText = newBalance;
    
    }else{
        alert('Failed to add money! Please check you pin.')
    }
})