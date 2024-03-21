document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const loginDropdown = document.getElementById('login_dropdown');
    const register = document.getElementById("register");
    
    // Event Listener เพื่อเปิด/ปิด dropdown เมื่อคลิกที่ login button
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการเปลี่ยนหน้าเว็บเมื่อคลิกที่ลิงก์

        // เปลี่ยนการแสดงผลของ dropdown เป็น block หรือ none ตามปัจจุบัน
        if (loginDropdown.style.display === 'block' || register.style.display === 'block' ) {
            loginButton.innerHTML ='Login ▼';
            loginDropdown.style.animationDirection = 'forward';
            loginDropdown.style.display = 'none';
            register.style.display = 'none';
        } else {
            loginDropdown.style.display = 'block';
            loginButton.innerHTML ='Login ▲';
        }
    });


    // Event Listener เพื่อปิด dropdown เมื่อคลิกที่พื้นหลังที่ไม่ใช่ส่วนของ dropdown หรือ register
    document.addEventListener('click', function(event) {
        const isClickInsideDropdown = loginDropdown.contains(event.target);
        const isClickInsideLoginButton = event.target === loginButton;
        const isClickInsideRegister = event.target === register;

        if (!isClickInsideDropdown && !isClickInsideLoginButton && !isClickInsideRegister) {   
        } 
    });
});

const registerText = document.querySelector(".register-link");
const register = document.getElementById("register");

registerText.addEventListener('click', () => {
    reg_complete.style.display = 'none';
    register.style.display = 'block';
    register_header.style.display = 'block';
    form_reg.style.display = 'block';
    submitsignup.style.display ='block';
});

const backtosign = document.querySelector(".backto-sign-in");

backtosign.addEventListener('click', () => {
    register.style.display = 'none';
    loginDropdown.style.animationDirection = 'forward';
    loginDropdown.style.display = 'block';
});

const submitsignup = document.querySelector(".submit-signup");
const register_header = document.querySelector(".register_header");
const form_reg = document.querySelector(".form-reg");
const reg_complete= document.querySelector(".reg-complete");
const login_after= document.querySelector(".login-after-reg");
const loginButton = document.getElementById('login');

submitsignup.addEventListener('click', () => {
    register_header.style.display = 'none';
    form_reg.style.display = 'none';
    submitsignup.style.display ='none'


    setTimeout(() => {
      reg_complete.style.display = 'block';
    },500);

    setTimeout(() => {
      login_after.style.display = 'block'
    },1000);




});

login_after.addEventListener('click', () => {
    register.style.display = 'none';
    loginDropdown.style.display = 'block';
});

loginButton.addEventListener ('click',() => {
    loginButton.innerHTML ='  ^  ';
});