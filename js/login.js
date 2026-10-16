/*
Login local de demostracion para recorrer
atravez del prototipo.
*/

(() => {
    const demoAccounts = [
        { email: "cliente@correo.com", password: "test1234", role: "cliente"},
        { email: "admin@correo.com", password: "test1234", role: "admin"},
    ];

    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passWordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error");
    const submitButton = document.querySelector('button[type="submit"]');

    if (!form || !emailInput || !passWordInput || !errorMessage || !submitButton) {
        return;
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.remove("hidden");
    }

    function clearError(message) {
        errorMessage.textContent = "";
        errorMessage.classList.add("hidden");
    }

    function authenticateDemoUser(email, password) {
        return demoAccounts.find(
            (account) =>
                account.email.toLowerCase() === email.toLowerCase() &&
                account.password === password,
        );
    }

    function getDestination(role) {
        if (role === "admin") return "admin.html";

        const next = new URLSearchParams(window.location.search).get("next");
        return next === "quote" ? "cotizar.html" : "cliente.html";
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        clearError();
        emailInput.value = emailInput.value.trim();

        // required, type=email y maxlength también están declarados en login.html.
        if (!form.reportValidity()) return;

        submitButton.disabled = true;
        submitButton.setAttribute("aria-busy", "true");
        const account = authenticateDemoUser(emailInput.value, passWordInput.value);
        if (!account) {
            showError("Correo o contraseña incorrectas.");
            passWordInput.focus();
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");
            return;
        }

        try {
            // Esto permite probar las páginas existentes, pero no protege el acceso.
            sessionStorage.setItem(
                "goodtimes-session",
                JSON.stringify({ role: account.role, email: account.email}),
            );
            window.location.assign(getDestination(account.role));
        } catch {
            showError("No se pudo iniciar la sesión en este navegador.");
            submitButton.disabled = false;
            submitButton.removeAttribute("aria-busy");
        }
    });

    emailInput.addEventListener("input", clearError);
    passWordInput.addEventListener("input", clearError)

})();