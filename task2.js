document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    function validateForm() {
        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            isValid = false;
        } else {
            nameError.textContent = "";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message is required.";
            isValid = false;
        } else {
            messageError.textContent = "";
        }

        return isValid;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        if (validateForm()) {
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim(),
            };

            console.log("Form submitted successfully:", formData);

            form.reset();
        }
    });
});