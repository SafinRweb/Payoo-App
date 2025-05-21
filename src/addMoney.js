//add money to the account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const inputPin = getInputFieldValueById('input-pin');
    console.log(addMoney, inputPin);

    // verify pin (Temporary)
    if(inputPin === 1234){
        console.log('Adding Money to your Account')

        const balance = getTextFieldValueById('acc-balance');
        const newBalance = balance + addMoney;
        console.log(newBalance);

        document.getElementById('acc-balance').innerText = newBalance;
    
        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-gray-200');
        div.innerHTML= `
        <h4 class="text-xl font-bold">Cash In</h4>
        <p class="text-lg">Added ${addMoney} to your account</p>`

        document.getElementById('transaction-container').appendChild(div);

    }else{
        alert('Failed to add money! Please write pin 1234.')
    }
})