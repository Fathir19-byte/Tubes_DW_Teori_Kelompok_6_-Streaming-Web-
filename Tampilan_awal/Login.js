document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "123456") {
        // simpan status login
        sessionStorage.setItem("isLogin", "true");

        // pindah ke homepage
        window.location.href = "../HomePage/index.html";
    } else {
        alert("Email atau password salah!");
    }
});