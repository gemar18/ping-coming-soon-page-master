const submitBtn = document.querySelector(".submitBtn");
const email = document.querySelector(".email");
const message = document.querySelector(".msg");
submitBtn.addEventListener("click", validateEmail);
const timeout = setInterval(() => {
    message.classList.remove("error-msg");
    email.classList.remove("active");
}, 2500);

function validateEmail() {

    let reg = /^[^]+@[^]+\.[a-z]{2,3}$/;

    if (email.value.match(reg)) {
        message.classList.remove("error-msg");
        email.classList.remove("active");

    } else {
        email.classList.add("active");
        message.classList.add("error-msg");
        timeout;
    }
}