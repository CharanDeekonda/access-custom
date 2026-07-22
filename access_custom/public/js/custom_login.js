frappe.ready(function() {
    // Check if the user is currently on the login page
    if (window.location.pathname === '/login') {
        
        // Find the email field and erase the placeholder
        let email_field = document.getElementById('login_email');
        if (email_field) {
            email_field.setAttribute('placeholder', ''); 
            // Tip: You can also change '' to 'Email Address' if you don't want it completely blank!
        }

        // Failsafe: Just in case System Settings didn't update the title, force it here
        let login_title = document.querySelector('.page-card-head');
        if (login_title && login_title.innerText.includes('ACCESS HR')) {
            login_title.innerText = 'Login to AHIConnect';
        }
    }
});