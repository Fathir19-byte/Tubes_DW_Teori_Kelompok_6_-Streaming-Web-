function updatePasswordCriteria(password) {
    const criteria = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };
    
    const criteriaDiv = document.getElementById('passwordCriteria');
    
    if (password.length > 0) {
        criteriaDiv.classList.remove('d-none');
        
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
        
        updateCriteriaDisplay(criteria.length, minLength, 'Minimal 8 karakter');
        updateCriteriaDisplay(criteria.uppercase, hasUpperCase, 'Minimal 1 huruf kapital');
        updateCriteriaDisplay(criteria.lowercase, hasLowerCase, 'Minimal 1 huruf kecil');
        updateCriteriaDisplay(criteria.number, hasNumbers, 'Minimal 1 angka');
        updateCriteriaDisplay(criteria.special, hasSpecialChar, 'Minimal 1 simbol (!@#$%^&*...)');
    } else {
        criteriaDiv.classList.add('d-none');
    }
}

function updateCriteriaDisplay(element, isValid, text) {
    if (isValid) {
        element.textContent = '✅ ' + text;
        element.classList.remove('text-danger');
        element.classList.add('text-success');
    } else {
        element.textContent = '❌ ' + text;
        element.classList.remove('text-success');
        element.classList.add('text-danger');
    }
}

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
    
    const errors = [];
    
    if (password.length < minLength) {
        errors.push(`Password minimal ${minLength} karakter`);
    }
    
    if (!hasUpperCase) {
        errors.push("Password harus mengandung minimal 1 huruf kapital");
    }
    
    if (!hasLowerCase) {
        errors.push("Password harus mengandung minimal 1 huruf kecil");
    }
    
    if (!hasNumbers) {
        errors.push("Password harus mengandung minimal 1 angka");
    }
    
    if (!hasSpecialChar) {
        errors.push("Password harus mengandung minimal 1 simbol (!@#$%^&*...)");
    }
    
    return {
        isValid: errors.length === 0,
        message: errors.join("\n"),
        details: {
            length: password.length >= minLength,
            uppercase: hasUpperCase,
            lowercase: hasLowerCase,
            number: hasNumbers,
            special: hasSpecialChar
        }
    };
}

document.getElementById("password")?.addEventListener("input", function() {
    const password = this.value;
    const errorElement = document.getElementById("passwordError");
    
    updatePasswordCriteria(password);
    
    if (password.length > 0) {
        const result = validatePassword(password);
        
        if (!result.isValid) {
            this.classList.add('is-invalid');
            errorElement.textContent = result.message.split('\n')[0];
            errorElement.classList.remove('d-none');
        } else {
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorElement.classList.add('d-none');
        }
    } else {
        this.classList.remove('is-invalid', 'is-valid');
        errorElement.classList.add('d-none');
    }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    document.getElementById("email").classList.remove('is-invalid');
    document.getElementById("password").classList.remove('is-invalid');
    emailError.classList.add('d-none');
    passwordError.classList.add('d-none');

    if (!email) {
        document.getElementById("email").classList.add('is-invalid');
        emailError.textContent = 'Email tidak boleh kosong';
        emailError.classList.remove('d-none');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("email").classList.add('is-invalid');
        emailError.textContent = 'Format email tidak valid';
        emailError.classList.remove('d-none');
        return;
    }

    if (!password) {
        document.getElementById("password").classList.add('is-invalid');
        passwordError.textContent = 'Password tidak boleh kosong';
        passwordError.classList.remove('d-none');
        return;
    }
    
    const result = validatePassword(password);
    
    if (!result.isValid) {
        document.getElementById("password").classList.add('is-invalid');
        passwordError.textContent = result.message;
        passwordError.classList.remove('d-none');
        return;
    }
    
    if (sessionStorage.getItem("isLogin") === "false") {
        alert("Anda belum login");
        return;
    }
    
    sessionStorage.setItem("isLogin", "true");
    sessionStorage.setItem("userEmail", email);
    
    alert("Login berhasil! Redirect ke homepage...");
    
    window.location.href = "../index.html";
});

window.addEventListener('load', function() {
    document.getElementById("loginForm").reset();
});