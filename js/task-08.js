const formSubmit = document.querySelector(".login-form");


formSubmit.addEventListener("submit", e => {
    e.preventDefault(); 
    const { email, password } = e.currentTarget; 
    if (email.value === "" || password.value === "") {
        return alertMsg(); 
    }
    successMsg();
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);
    email.value = "";
    password.value = "";
});

const alertMsg = () => alert("Please fill all the fields!!!");
const successMsg = () => alert("Submitted!!!");

