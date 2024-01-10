
let navbar=document.querySelector('.header .navbar')
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.add('active');
}
document.querySelector('#close-navbar').onclick=()=>{
    navbar.classList.remove('active');
};
let registerBtn=document.querySelector('.account-form .register-btn');
let loginBtn=document.querySelector('.account-form .login-btn');

registerBtn.onclick = ()=>{
    registerBtn.classList.add("active");
    loginBtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};

loginBtn.onclick = ()=>{
    registerBtn.classList.remove("active");
    loginBtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountForm=document.querySelector('.account-form')
document.querySelector('#account-btn').onclick=()=>{
    accountForm.classList.add('active');
}
document.querySelector('#close-form').onclick=()=>{
    accountForm.classList.remove('active');
};

var accordion=document.querySelectorAll('.faq .accordion-container .accordion');
accordion.forEach(acco =>{
    acco.onclick=()=>{
        accordion.forEach(dion=>dion.classList.remove('active'));
        acco.classList.toggle('active');
    }
})

function loadMore(){

    document.querySelectorAll('.courses .box-container .hide').forEach(show=>{
show.style.display='block'
    });
    document.querySelector('.load-more .btn').style.display='none'
};


//////////////////////////Register 


var islogin=0;
function register(event) {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Store registration information in localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert("Registration successful!");
}

function login(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Retrieve registration information from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Check if user is registered
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        islogin++;
        
    } else {
        
        alert("Please Register First");
        window.location.href = "home.html";
    }
}



