let emailX = document.querySelector("#emailX");
let passwordX = document.querySelector("#passwordX");
let emailO = document.querySelector("#emailO");
let passwordO = document.querySelector("#passwordO");

let getemailX = localStorage.getItem("emailX");
let getpasswordX = localStorage.getItem("passwordX");
let getemailO = localStorage.getItem("emailO");
let getpasswordO = localStorage.getItem("passwordO");

function submit_login(){
    if(emailX.value === "" || passwordX.value === "" || emailO.value === "" || passwordO.value === ""){
        alert("Please, fill your signIn ...")
    }else{
        if(
            getemailX.trim() === emailX.value.trim() && getpasswordX.trim() === passwordX.value.trim() 
            && getemailO.trim() === emailO.value.trim() && getpasswordO.trim() === passwordO.value.trim()
        ){
            emailX.value = "";
            passwordX.value = "";
            emailO.value = "";
            passwordO.value = "";
            
            setTimeout(()=>{
                window.location = "index.html" ;
            },1200);
        }else{
            alert("Email or password isn't correct !!!");
        }
    }
}