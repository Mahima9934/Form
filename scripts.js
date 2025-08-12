document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  name.classList.remove("error-border", "success-border");
  email.classList.remove("error-border", "success-border");
  message.classList.remove("error-border", "success-border");

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    name.classList.add("error-border");
    isValid = false;
  } else if (!/^[a-zA-Z\s]+$/.test(name.value.trim())) {
    nameError.textContent = "Only letters and spaces allowed";
    name.classList.add("error-border");
    isValid = false;
  } else {
    name.classList.add("success-border");
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    email.classList.add("error-border");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email";
    email.classList.add("error-border");
    isValid = false;
  } else {
    email.classList.add("success-border");
  }

  // Message validation
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required";
    message.classList.add("error-border");
    isValid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = "At least 10 characters required";
    message.classList.add("error-border");
    isValid = false;
  } else {
    message.classList.add("success-border");
  }

  // If valid, submit
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset();

    // Remove success borders after reset
    name.classList.remove("success-border");
    email.classList.remove("success-border");
    message.classList.remove("success-border");
  }
});
