document.getElementById('btn-login')
    .addEventListener('click', function(event){
        event.preventDefault();
        
        const phoneNumber = document.getElementById('phn-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber, phoneNumber)

        //this is temporary
        if(phoneNumber==='5' && pinNumber==='1234'){
            console.log('you are logged in');
            window.location.href='/home.html'
        }else{
            alert('Wrong information')
        }

    })