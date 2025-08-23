//  login button functionallity

document.getElementById('loginButton')
.addEventListener('click',function(e){
    e.preventDefault();
    const mobileNumber = 12345678;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-Number").value;
    const  mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-Number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    console.log(mobileNumberValueConverted,pinNumberValueConverted);

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html";
    }
    else{
        alert('invalid credentials')
    }


})