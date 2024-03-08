document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    const loginDropdown = document.getElementById('login_dropdown');

    // Event Listener เพื่อเปิด/ปิด dropdown เมื่อคลิกที่ login button
    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // ป้องกันการเปลี่ยนหน้าเว็บเมื่อคลิกที่ลิงก์

        // เปลี่ยนการแสดงผลของ dropdown เป็น block หรือ none ตามปัจจุบัน
        if (loginDropdown.style.display === 'block') {
            loginDropdown.style.animationDirection = 'forward';
            loginDropdown.style.display = 'none';
        } else {
            loginDropdown.style.display = 'block';
        }
    });

    // Event Listener เพื่อปิด dropdown เมื่อคลิกที่พื้นหลังที่ไม่ใช่ส่วนของ dropdown
    document.addEventListener('click', function(event) {
        const isClickInsideDropdown = loginDropdown.contains(event.target);
        const isClickInsideLoginButton = event.target === loginButton;
        
        if (!isClickInsideDropdown && !isClickInsideLoginButton) {
            loginDropdown.style.display = 'none';
            
        }
    });
});



