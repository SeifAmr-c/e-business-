
const card = document.getElementById('card-number');

card.addEventListener('input', () => {
    const rawValue = card.value.replace(/\s/g, '');
    
    if (rawValue) {
        const formatted = rawValue.match(/.{1,4}/g)?.join(' ') || rawValue;
        card.value = formatted;
    }
    
    if (rawValue.length === 16) {
        card.classList.remove('border-white-900');
        card.classList.add('border-green-900');
    } else {
        card.classList.remove('border-green-900');
        card.classList.remove('border-white-900');
        card.classList.add('border-red-900');
    }
    if (rawValue === "") {
        card.classList.remove('border-red-900');
        card.classList.add('border-white-900');
    }

    if (rawValue.charAt(0) === '5') {
        document.getElementById('mastercard').classList.remove('hidden')
    }else{
        document.getElementById('mastercard').classList.add('hidden')
    }
    if (rawValue.charAt(0) === '4') {
        document.getElementById('visa').classList.remove('hidden')
    }else{
        document.getElementById('visa').classList.add('hidden')
    }
});

card.addEventListener('keypress', (e) => {
    if (e.key < '0' || e.key > '9' || card.value.replace(/\s/g, '').length >= 16) {
        e.preventDefault();
    }
});

const cvv = document.getElementById('CVV') ; 
cvv.addEventListener('keypress',(e) => {
    if (e.key < '1' || e.key > '9') {
        e.preventDefault();
    }
})
cvv.addEventListener('input' , () => {
    if (cvv.value.length === 3) {
        cvv.classList.remove('border-white-900');
        cvv.classList.add('border-green-900');
    } else {
        cvv.classList.remove('border-green-900');
        cvv.classList.remove('border-white-900');
        cvv.classList.add('border-red-900');
    }
    if (cvv.value === "") {
        cvv.classList.remove('border-red-900');
        cvv.classList.add('border-white-900');
    }
})

const thename = document.getElementById('name') ; 
thename.addEventListener('input' , () => {
    const pattern = /^[A-Za-z]+$/ ; 
    if(!pattern.test(thename.value)) {
        document.getElementById('error-name').classList.remove('hidden') ;
        thename.classList.add('border-red-900') ;
        thename.classList.remove('border-White-900') ;
        thename.classList.remove('border-green-900') ;
    }else{
        document.getElementById('error-name').classList.add('hidden') ;
        thename.classList.add('border-green-900') ;
        thename.classList.remove('border-red-900') ;

    }
    if(thename.value === "") {
        document.getElementById('error-name').classList.add('hidden') ;
        thename.classList.remove('border-red-900') ;
        thename.classList.remove('border-green-900') ;
    }
})

const expiry = document.getElementById('Expiry-date');
expiry.addEventListener('input', () => {
    const value = expiry.value.trim();
    const error = document.getElementById('expiryerror');
    if (expiry.value === "") {
        expiry.classList.remove('border-red-900');
        expiry.classList.remove('border-green-900');
        error.classList.add('hidden');
        return ; 
    }
    
    const formatPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!formatPattern.test(value)) {
        error.classList.remove('hidden'); 
        expiry.classList.add('border-red-900');
        expiry.classList.remove('border-white-900');
        expiry.classList.remove('border-green-900');
        return; 
    } else {
        const theYear= new Date().getFullYear(); 
        const theyear2 = String(theYear).slice(-2); 
        const currentMonth = new Date().getMonth() + 1;

        const [month, year] = value.split('/').map(Number);

        if (year < 25 || month < currentMonth) {
            error.classList.remove('hidden'); 
            expiry.classList.add('border-red-900');
            expiry.classList.remove('border-green-900');
        } else {
            error.classList.add('hidden'); 
            expiry.classList.add('border-green-900');
            expiry.classList.remove('border-red-900');
        }
    }

});
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    const cardValid = card.classList.contains('border-green-900');
    const cvvValid = cvv.classList.contains('border-green-900');
    const nameValid = thename.classList.contains('border-green-900');
    const expiryValid = expiry.classList.contains('border-green-900');

    if (!cardValid || !cvvValid || !nameValid || !expiryValid) {
        e.preventDefault(); 
        alert("Please Check The Infomration You Have Given Again.");
    } else {
        e.preventDefault(); 
        alert("Payment successful! Redirecting you to the home page...");
        window.location.href = "landing.html"; 
    }
});

