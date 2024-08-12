document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (validateCredentials(username, password)) {
        message.style.color = '#27ae60';
        message.textContent = 'Login successful!';
    } else {
        message.style.color = '#e74c3c';
        message.textContent = 'Invalid username or password.';
    }
});

function validateCredentials(username, password) {
    const validUsers = {
        'user1': 'password1',
        'user2': 'password2',
        'user3': 'password3'
    };
    return validUsers[username] === password;
}
