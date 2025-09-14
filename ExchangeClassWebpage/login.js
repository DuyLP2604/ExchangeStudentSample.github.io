const openPass = document.getElementById("openPass");
const closePass = document.getElementById("closePass");
const password = document.getElementById("password_type");

openPass.addEventListener("click", () => {
    openPass.style.display = "none";
    closePass.style.display = "block";
    password.type = "text";
});

closePass.addEventListener("click", () => {
    openPass.style.display = "block";
    closePass.style.display = "none";
    password.type = "password";
});

function setCookie(name, value){
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/; max-age=" + (10*60);
}

function deleteCookie(name){
    document.cookie = name +"=; path=/; max-age=0";
}

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let username = document.getElementById("username").value;
    let key = password.value;

    if(username && key){
        setCookie("username", username);

        setTimeout(() => {
            window.location.href = "home.html";
        }, 3000);
    }

    else{
        alert("Missing");
    }
});

