let usernameX = document.querySelector("#usernameX");
let emailX = document.querySelector("#emailX");
let passwordX = document.querySelector("#passwordX");

let usernameO = document.querySelector("#usernameO");
let emailO = document.querySelector("#emailO");
let passwordO = document.querySelector("#passwordO");

function submit_register() {
    if (usernameX.value === "" || emailX.value === "" || passwordX.value === "" || usernameO.value === "" || emailO.value === "" || passwordO.value === ""){
        alert("Please, fill your signUp ...");
    }else{
        localStorage.setItem("usernameX" , usernameX.value.trim());
        localStorage.setItem("emailX" , emailX.value.trim());
        localStorage.setItem("passwordX" , passwordX.value.trim());
        localStorage.setItem("usernameO" , usernameO.value.trim());
        localStorage.setItem("emailO" , emailO.value.trim());
        localStorage.setItem("passwordO" , passwordO.value.trim());

        usernameX.value = "";
        emailX.value = "";
        passwordX.value = "";
        usernameO.value = "";
        emailO.value = "";
        passwordO.value = "";

        setTimeout(()=>{
            window.location = "index.html";
        },1200);
    }
}