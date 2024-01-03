
import type { NuxtLink } from '#build/components';
<template>
    <body>
    <div style=" width: 45%; height: 100%; background-color:white; margin-left: 800px; ">
    </div>
    <div class="container-signin">
    <div class="signin-image">
        <img src="~/assets/images/banner.jpeg" alt=" ">
    </div>
    <div class="wrapper">
        <div class="bg-white w-1/4 flex content-end"></div>
        <img class=" login-image mx-auto" src="~/assets/images/logo.svg" alt="vokasi">
        <header>Welcome, <span>JUARA</span></header>
        <form class="bg-bgmain" action="#">
            <div class="field email">
                <div class="input-area">
                    <input type="email" placeholder="Email Address" name="email">
                    <i class="icon fas fa-envelope"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Email can't be blank</div>
            </div>
            <div class="field password">
                <div class="input-area">
                    <input type="password" placeholder="Password" name="password">
                    <i class="icon fas fa-lock"></i>
                    <i class="error error-icon fas fa-exclamation-circle"></i>
                </div>
                <div class="error error-txt">Password can't be blank</div>
            </div>
            <div class="pass-txt"><a href="#">Forgot password?</a></div>
            <NuxtLink to="/indexMahasiswa">
             <input type="button" value="Login">
            </NuxtLink>
            <NuxtLink to="/signup">
             <input type="button" value="Signup">
            </NuxtLink>
        </form>
    </div>
    </div>
</body>
</template>

<!-- <script setup>
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      const emailInput = document.querySelector(".field.email input");
      const passwordInput = document.querySelector(".field.password input");
  
      if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        event.preventDefault(); // Prevent form submission
        displayPopup("Mohon masukkan email dan password terlebih dahulu");
      }
    });
  
    function displayPopup(message) {
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.textContent = message;
  
      document.body.appendChild(popup);
  
      setTimeout(function () {
        popup.remove();
      }, 3000); // Remove popup after 3 seconds
    }
  });
  
</script> -->

 <style scoped>
 .login-image{
    margin: 10px auto;

 }
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5372F0;
    
}

header span{
    color: #FFC857;
}

::selection{
    color: #fff;
}
.container-signin{
    display: flex;
    flex-direction: row;
    border-radius: 50px;
    position: absolute;
    z-index: 30;
}

.signin-image{
    width: 580px;
    overflow: hidden;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
}

.signin-image img{
    margin-bottom: 0px;
    height: 570px;
    overflow: hidden;
}
 
.wrapper{
    width: 480px;
    height: 570px;
    padding: 40px 30px 50px 30px;
    background: #263A59;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    text-align: center;
}
.wrapper header{
    font-size: 35px;
    font-weight: 600;
}
.wrapper form{
    margin: 40px 0;
}
form .field{
    width: 100%;
    margin-bottom: 20px;
}
form .field.shake{
    animation: shake 0.3s ease-in-out;
}
@keyframes shake {
    0%, 100%{
        margin-left: 0;
    }
    20%, 80%{
        margin-left: -12px;
    }
    40%, 60%{
        margin-left: 12px;
    }
}
form .field .input-area{
    height: 50px;
    width: 100%;
    position: relative;
}
form input{
    width: 100%;
    height: 100%;
    outline: none;
    padding: 0 45px;
    font-size: 18px;
    background: white;
    caret-color: #5372F0;
    border-radius: 30px;
    border: 1px solid #bfbfbf;
    border-bottom-width: 2px;
    transition: all 0.2s ease;
}
form .field input:focus,
form .field.valid input{
    border-color: #5372F0;
}
form .field.shake input,
form .field.error input{
    border-color: #dc3545;
}
.field .input-area i{
    position: absolute;
    top: 50%;
    font-size: 18px;
    pointer-events: none;
    transform: translateY(-50%);
}
.input-area .icon{
    left: 15px;
    color: #bfbfbf;
    transition: color 0.2s ease;
}
.input-area .error-icon{
    right: 15px;
    color: #dc3545;
}
form input:focus ~ .icon,
form .field.valid .icon{
    color: #5372F0;
}
form .field.shake input:focus ~ .icon,
form .field.error input:focus ~ .icon{
    color: #bfbfbf;
}
form input::placeholder{
    color: #bfbfbf;
    font-size: 17px;
}
form .field .error-txt{
    color: #dc3545;
    text-align: left;
    margin-top: 5px;
}
form .field .error{
    display: none;
}
form .field.shake .error,
form .field.error .error{
    display: block;
}
form .pass-txt{
    text-align: left;
    margin-top: -10px;
}
.wrapper a{
    color: #5372F0;
    text-decoration: none;
}
.wrapper a:hover{
    text-decoration: underline;
}
form input[type="submit"]{
    height: 50px;
    margin-top: 30px;
    color: #ECAA2D ;
    padding: 0;
    border: solid 5px #ECAA2D;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
}
form input[type="submit"]:hover{
    background: #ECAA2D ;
    color: black;
    font-weight: bold;
}

form input[type="button"]{
    height: 50px;
    margin-top: 20px;
    color: #ECAA2D ;
    padding: 0;
    border: solid 5px #ECAA2D;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
}
form input[type="button"]:hover{
    background: #ECAA2D ;
    color: black;
    font-weight: bold;
}

@media screen and (max-width: 768px) {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
    
    body {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #5372F0;
    }
    
    .container-signin {
        display: flex;
        flex-direction: row;
        width: 50%;
    }
    
    .signin-image {
        width: 50%;
        overflow: hidden;
        border-bottom-left-radius: 15px;
        border-top-left-radius: 15px;
    }
    
    .signin-image img {
        margin-bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .wrapper {
        width: 50%;
        padding: 20px;
        background: #fff;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        text-align: center;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
    
    .wrapper header {
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
    }
    
    form .field {
        margin-bottom: 15px;
    }
    
 }

 .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 999;
  }

  
  

</style>
 