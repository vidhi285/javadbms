document.addEventListener("DOMContentLoaded", function() {
    const nameField = document.querySelector("#nameField input");
    const emailField = document.querySelector("input[type='email']");
    const passwordField = document.querySelector("input[type='password']");
    const signUpBtn = document.getElementById("signupBtn");
    const signInBtn = document.getElementById("signinBtn");

    signUpBtn.addEventListener("click", function() {
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const password = passwordField.value.trim();

        if (/\d/.test(name)) {
            alert("Please enter a valid name without digits.");
            return;
        }

        if (!/@/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)/.test(password)) {
            alert("Please enter a strong password with at least 1 digit, 1 character, and 1 special character.");
            return;
        }

        signInBtn.classList.remove("disable");
        signUpBtn.classList.add("disable");

    
    });

    signInBtn.addEventListener("click", function() {
        const signInEmail = prompt("Please enter your email address:");

        if (signInEmail !== emailField.value.trim()) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your sign in is successful. Thanks for joining us!");

        
    nameField.value = '';
    emailField.value = '';
    passwordField.value = '';
    
    });
});
