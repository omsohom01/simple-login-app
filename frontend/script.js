function showSignUp() {
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("signin-form").style.display = "none";
}

function showSignIn() {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("signin-form").style.display = "block";
}

async function signup() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    document.getElementById("message").innerText = result.message;
}

async function signin() {
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;

    const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    const result = await response.json();
    document.getElementById("message").innerText = result.message;
}
