document.getElementById('RegisterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;
    clearErrors(); 

    const fullName = document.querySelector('input[name="fullName"]').value.trim();
    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phoneNumber = document.querySelector('input[name="phoneNumber"]').value.trim();
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (fullName === '') {
        showError('fullName', 'Veuillez entrer votre nom complet.');
        isValid = false;
    }

    if (username === '') {
        showError('username', 'Veuillez entrer un nom d\'utilisateur.');
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError('email', 'Veuillez entrer une adresse e-mail valide.');
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        showError('phoneNumber', 'Veuillez entrer un numéro de téléphone valide.');
        isValid = false;
    }

    if (password === '') {
        showError('password', 'Veuillez entrer un mot de passe.');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPassword', 'Les mots de passe ne correspondent pas.');
        isValid = false;
    }

    if (!gender) {
        showError('gender', 'Veuillez sélectionner un genre.');
        isValid = false;
    }

    if (isValid) {
        this.submit();
    }
});

function showError(inputName, message) {
    const input = document.querySelector(`input[name="${inputName}"]`);
    const errorElement = document.getElementById(inputName + 'Error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
    input.classList.add('error');
}

function clearErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(error => {
        error.classList.remove('show');
        error.textContent = '';
    });

    const inputs = document.querySelectorAll('input.error');
    inputs.forEach(input => {
        input.classList.remove('error');
    });
}
