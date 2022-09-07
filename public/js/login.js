const username = document.getElementById("username");
let password = document.getElementById("password");
let loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();

    const userData = {
        username: username.value,
        password: password.value
    };

    fetch("/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then((res) => res.json())
    .then((data) => {
        document.location.replace("/");
    });
});