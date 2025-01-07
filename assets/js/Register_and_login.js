//=====================================Login&sign up Validation&Cookies==============================================


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const button = document.getElementById("btn");

    if (!form || !usernameInput || !emailInput || !passwordInput || !button) {
        console.error("Required form elements not found in the DOM.");
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const usernamePattern = /^[a-zA-Z]{3,}\s[a-zA-Z]{3,}$/;
        if (!usernamePattern.test(usernameInput.value)) {
            alert("Username must contain two parts, each with at least 3 letters, separated by a space.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert("Please enter a valid email address.");
            return;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            alert("Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.");
            return;
        }

        if (button.textContent === "Login") {
            handleLogin(usernameInput.value, passwordInput.value);
        } else if (button.textContent === "Sign Up") {
            handleSignup(usernameInput.value, emailInput.value, passwordInput.value);
        }
    });
});

function handleLogin(username, password) {
    setCookie("UserName", username, 7);
    setCookie("Password", password, 7);

    alert("Login Successful! Cookies set for 7 days.");
    
}

function handleSignup(username, email, password) {
    setCookie("UserName", username, 7);
    setCookie("Email", email, 7);
    setCookie("Password", password, 7);

    alert("Registration Successful! Cookies set for 7 days.");

}

function setCookie(cookieName, cookieValue, days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;
}





