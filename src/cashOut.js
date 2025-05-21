//cash out from the account
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const cashOutPin = getInputFieldValueById('input-cash-out-pin');
    console.log(cashOut, cashOutPin);

    // verify pin (Temporary)
    if(cashOutPin === 1234){
        console.log('Cashing out Money from your Account')

        const balance = getTextFieldValueById('acc-balance');
        if(cashOut > balance){
            alert('You do not have enough balance to cash out this amount');
            return;
        }
        if(cashOut < 0){
            alert('You can not cash out negative amount');
            return;
        }
        const newBalance = balance - cashOut;
        console.log(newBalance);

        document.getElementById('acc-balance').innerText = newBalance;
    
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-gray-200');
        div.innerHTML= `
        <h4 class="text-xl font-bold">Cash Out</h4>
        <p class="text-lg">Removed ${cashOut} Tk from your account</p>`

        document.getElementById('transaction-container').appendChild(div);

    }else{
        alert('Failed to add money! Please write pin 1234.')
    }
})