document.getElementById("login-button").addEventListener("click", function () {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Validate inputs
    if (username.trim() === "") {
        alert("Please enter a username.");
        return;
    }

    if (password.trim() === "") {
        alert("Please enter a password.");
        return;
    }

    // You can perform further actions here, such as sending the data to a server for authentication
    // For this example, let's just display the inputs
    alert("Username: " + username + "\nPassword: " + password);
});
