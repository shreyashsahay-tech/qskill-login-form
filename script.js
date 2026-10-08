const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    // Check if email is empty
    if (email === "") {

        alert("Please enter your email address.");

        return;
    }


    // Check email format
    if (!email.includes("@")) {

        alert("Please enter a valid email address.");

        return;
    }


    // Check if password is empty
    if (password === "") {

        alert("Please enter your password.");

        return;
    }


    // Check password length
    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    // Successful validation
    alert("Login successful!");

});