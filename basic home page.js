// add to cart alert

// let topAlert = document.getElementById("topOn");

// topAlert.addEventListener("click", () => tp());

// let tp = () => {
//     alert("hi")
// }

// function cart() {
//     alert("Your Add To Cart Is Empty :");
// }

function cart() {
    let crt = document.getElementById("cart-main");

    crt.style.display = "block";
    crt.style.zIndex = "999";
}

function clsCrt() {
    let carT = document.getElementById("cart-main");

    carT.style.display = "none";
}

// search navbar ----

function navSearch() {
    let searchNav = document.getElementById("showSearch");

    searchNav.style.display = "block";
}

function removeSearchNav() {
    let removeSearch = document.getElementById("showSearch");

    removeSearch.style.display = "none";
}

// responsive navbar

const mob_Nav = document.querySelector(".mob-icon");

mob_Nav.addEventListener("click", () => toggleNav());

const header_Nav = document.querySelector(".navbar-main");

const toggleNav = () => {
    header_Nav.classList.toggle("active");
};

// slider home page

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 1300,
        disableoninteracton: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

// footer email error show

function FooterEmailerror() {
    let frm = document.forms["FormFooter"]["eml"].value;

    let ErrorFooterP = document.getElementById("errorFooterEmail");

    let footerInput = document.getElementById("emailFooterDiv");

    if (frm === "") {
        ErrorFooterP.style.display = "block";
        footerInput.style.borderColor = "red";
        // footerInput.classList.toggle("error")
        return false;
    }
}

// men fregnanace

let hideIcon = document.getElementById("heart-hide");

let showIcon = document.getElementById("heart-show");

let iconInp = document.getElementById("icon-input");

function freg() {
    if (iconInp.type === "password") {
        iconInp.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
        hideIcon.style.color = "gold";
    } else {
        iconInp.type = "password";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
        showIcon.style.color = "#232329";
    }
}

// card 2

let hideicoN = document.getElementById("heart-hide-2");

let showicoN = document.getElementById("heart-show-2");

let iconinP = document.getElementById("icon-input-2");

function freG() {
    if (iconinP.type === "password") {
        iconinP.type = "text";
        hideicoN.style.display = "block";
        showicoN.style.display = "none";
        hideicoN.style.color = "gold";
    } else {
        iconinP.type = "password";
        hideicoN.style.display = "none";
        showicoN.style.display = "block";
        hideicoN.style.color = "#232329";
    }
}

// card 3

let hideicon_three = document.getElementById("heart-hide-3");

let showicon_three = document.getElementById("heart-show-3");

let iconinp_three = document.getElementById("icon-input-3");

function fregThree() {
    if (iconinp_three.type === "password") {
        iconinp_three.type = "text";
        hideicon_three.style.display = "block";
        showicon_three.style.display = "none";
        hideicon_three.style.color = "gold";
    } else {
        iconinp_three.type = "password";
        hideicon_three.style.display = "none";
        showicon_three.style.display = "block";
        hideicon_three.style.color = "#232329";
    }
}

// card 4

let hideicon_four = document.getElementById("heart-hide-4");

let showicon_four = document.getElementById("heart-show-4");

let iconinp_four = document.getElementById("icon-input-4");

function fregFour() {
    if (iconinp_four.type === "password") {
        iconinp_four.type = "text";
        hideicon_four.style.display = "block";
        showicon_four.style.display = "none";
        hideicon_four.style.color = "gold";
    } else {
        iconinp_four.type = "password";
        hideicon_four.style.display = "none";
        showicon_four.style.display = "block";
        hideicon_four.style.color = "#232329";
    }
}

// // card 5

let hideicon_five = document.getElementById("heart-hide-5");

let showicon_five = document.getElementById("heart-show-5");

let iconinp_five = document.getElementById("icon-input-5");

function fregFive() {
    if (iconinp_five.type === "password") {
        iconinp_five.type = "text";
        hideicon_five.style.display = "block";
        showicon_five.style.display = "none";
        hideicon_five.style.color = "gold";
    } else {
        iconinp_five.type = "password";
        hideicon_five.style.display = "none";
        showicon_five.style.display = "block";
        hideicon_five.style.color = "#232329";
    }
}

// fregTradMen

let hideicon_men_trad = document.getElementById("icons-div-men-tard-hide");

let showicon_men_trad = document.getElementById("icons-div-men-tard-show");

let iconinp_men_trad = document.getElementById("icons-div-men-tard-inp");

function fregTradMen() {
    if (iconinp_men_trad.type === "password") {
        iconinp_men_trad.type = "text";
        hideicon_men_trad.style.display = "block";
        showicon_men_trad.style.display = "none";
        hideicon_men_trad.style.color = "gold";
    } else {
        iconinp_men_trad.type = "password";
        hideicon_men_trad.style.display = "none";
        showicon_men_trad.style.display = "block";
        hideicon_men_trad.style.color = "#232329";
    }
}

function fregMenTwo() {
    let hideicon_men_trad_two = document.getElementById("icons-div-men-trad-2");

    let showicon_men_trad_two = document.getElementById("icons-div-men-trad-2");

    let iconinp_men_trad_two = document.getElementById("icons-div-men-trad-2");

    if (iconinp_men_trad_two.type === "password") {
        iconinp_men_trad_two.type === "text";
        hideicon_men_trad_two.style.display = "block";
        showicon_men_trad_two.style.display = "none";
        hideicon_men_trad_two.style.color = "gold";
    } else {
        iconinp_men_trad_two.type = "password";
        hideicon_men_trad_two.style.display = "none";
        showicon_men_trad_two.style.display = "block";
        hideicon_men_trad_two.style.color = "#232329";
    }
}

// form validation contact

function mForms() {
    let name = document.forms["mFrm"]["nm"].value;
    let userName = document.getElementById("errorDiv");
    let errorUser = document.getElementById("error-frm1");

    if (name === "") {
        document.getElementById("error-frm1").innerHTML = "*This Field Is Required";

        userName.style.borderColor = "red";

        errorUser.style.animationName = "errorP";

        return false;
    } else {
        document.getElementById("error-frm1").innerHTML = "";

        userName.style.borderColor = "gray";

        errorUser.style.animationName = "";
    }

    let email = document.forms["mFrm"]["em"].value;
    let userEmail = document.getElementById("error-div2");
    let errorEmail = document.getElementById("error-frm2");

    if (email === "") {
        document.getElementById("error-frm2").innerHTML = "*This Field Is Required";

        userEmail.style.borderColor = "red";

        errorEmail.style.animationName = "errorP";

        return false;
    } else {
        document.getElementById("error-frm2").innerHTML = "";

        userEmail.style.borderColor = "gray";

        errorEmail.style.animationName = "";
    }

    let phn = document.forms["mFrm"]["phn"].value;
    let userPhn = document.getElementById("error-div3");
    let errorPhn = document.getElementById("error-frm3");

    if (phn === "") {
        document.getElementById("error-frm3").innerHTML = "*This Field Is Required";

        userPhn.style.borderColor = "red";

        errorPhn.style.animationName = "errorP";

        return false;
    } else {
        document.getElementById("error-frm3").innerHTML = "";

        userPhn.style.borderColor = "gray";

        errorPhn.style.animationName = "";
    }

    let sub = document.forms["mFrm"]["sub"].value;
    let userSub = document.getElementById("error-div4");
    let errorSub = document.getElementById("error-frm4");

    if (sub === "") {
        document.getElementById("error-frm4").innerHTML = "*This Field Is Required";

        userSub.style.borderColor = "red";

        errorSub.style.animationName = "errorP";

        return false;
    } else {
        alert("Your Data Is Submit ");
    }
}

// login form eye

let eye_open = document.getElementById("eye-open");
let eye_close = document.getElementById("eye-close");
let pass_inp = document.getElementById("pass");

function eyeF() {
    if (pass_inp.type === "password") {
        pass_inp.type = "text";
        eye_open.style.display = "block";
        eye_close.style.display = "none";
        eye_open.style.color = "red";
    } else {
        pass_inp.type = "password";
        eye_open.style.display = "none";
        eye_close.style.display = "block";
    }
}

// login form validation

function formFunction() {
    let user = document.forms["mForm_Login"]["user"].value;
    let pass = document.forms["mForm_Login"]["pass"].value;

    let user_div = document.getElementById("user-div");
    let pass_div = document.getElementById("pass-div");

    const user_email = "abdul11@gmail.com";
    const user_pass = "@123456rehman";

    if (user === "") {
        document.getElementById("error-login-form").innerHTML =
            "*This is a required Field";

        user_div.style.borderColor = "red";

        return false;
    } else {
        document.getElementById("error-login-form").innerHTML = "";

        user_div.style.borderColor = "dimgray";
    }

    if (pass === "") {
        document.getElementById("error-login-form2").innerHTML =
            "*This is a required Field";

        pass_div.style.borderColor = "red";

        return false;
    } else {
        document.getElementById("error-login-form2").innerHTML = "";

        pass_div.style.borderColor = "dimgray";
    }

    if (user === user_email && pass === user_pass) {
        alert("Login Done");
    } else {
        alert("Username & Password Was Incorrect");
    }
}

// sign-in create
function signFrm() {
    let name = document.getElementById("user-div-signin").value;
    let name_two = document.getElementById("user-div-signin2").value;
    let name_three = document.getElementById("user-div-signin3").value;
    // let name_four = document.getElementById("user-div-signin4").value;
    let name_four = document.forms["sign-in-frm"]["passwordNm"].value;
    // let name_five = document.getElementById("user-div-signin5").value;
    let name_five = document.forms["sign-in-frm"]["CpasswordNm"].value;

    let inp = document.getElementById("input-sign-in-div-main");
    let inp_two = document.getElementById("input-sign-in-div-main2");
    let inp_three = document.getElementById("input-sign-in-div-main3");
    let inp_four = document.getElementById("input-sign-in-div-main4");
    let inp_five = document.getElementById("input-sign-in-div-main5");

    // for name first or last

    if (name === "") {
        document.getElementById("error-sign-up").innerHTML =
            "*This is a required Field";
        inp.style.borderColor = "red";
        return false;
    } else {
        document.getElementById("error-sign-up").innerHTML = "";
        inp.style.borderColor = "dimgray";
    }

    if (name_two === "") {
        document.getElementById("error-sign-up2").innerHTML =
            "*This is a required Field";
        inp_two.style.borderColor = "red";

        return false;
    } else {
        document.getElementById("error-sign-up2").innerHTML = "";
        inp_two.style.borderColor = "dimgray";
    }

    // for email

    if (name_three === "") {
        document.getElementById("error-sign-up3").innerHTML =
            "*This is a required Field";
        inp_three.style.borderColor = "red";

        return false;
    } else {
        document.getElementById("error-sign-up3").innerHTML = "";
        inp_three.style.borderColor = "dimgray";
    }

    // for passwords

    if (name_four === "") {
        document.getElementById("error-sign-up4").innerHTML =
            "*This is a required Field";
        inp_four.style.borderColor = "red";

        return false;
    } else if (name_four.length <= 7 || name_four.length >= 16) {
        document.getElementById("error-sign-up4").innerHTML =
            "Password Length must be under 8 to 15";
        inp_four.style.borderColor = "red";

        return false;
    } else {
        document.getElementById("error-sign-up4").innerHTML = "";
        inp_four.style.borderColor = "dimgray";
    }

    if (name_five === "") {
        document.getElementById("error-sign-up5").innerHTML =
            "*This is a required Field";
        inp_five.style.borderColor = "red";

        return false;
    } else if (name_five.length <= 7 || name_five.length >= 16) {
        document.getElementById("error-sign-up5").innerHTML =
            "Password Length must be under 8 to 15";
        inp_four.style.borderColor = "red";

        return false;
    } else if (name_five != name_four) {
        document.getElementById("error-sign-up5").innerHTML =
            "Confirm Password Does Not Match with Password";
        inp_four.style.borderColor = "red";

        return false;
    } else {
        document.getElementById("error-sign-up5").innerHTML = "";
        inp_five.style.borderColor = "dimgray";
    }


}

// password strength

function inp_str() {

    let pass_div = document.getElementById("input-sign-in-div-main4");
    let pass_Str_inp = document.getElementById("user-div-signin4");
    let psStr = document.getElementById("passStr");

    pass_Str_inp.addEventListener("input", () => {
        if (pass_Str_inp.value.length <= 4) {
            pass_div.style.borderColor = "red"
            psStr.style.color = "red"
            psStr.innerHTML = "Weak"
        }
        else if (pass_Str_inp.value.length >= 5 && pass_Str_inp.value.length <= 8) {
            pass_div.style.borderColor = "yellow"
            psStr.style.color = "yellow"
            psStr.innerHTML = "Normal"
        }
        else if (pass_Str_inp.value.length >= 9 && pass_Str_inp.value.length <= 16) {
            pass_div.style.borderColor = "green"
            psStr.style.color = "green"
            psStr.innerHTML = "Normal"
        }

    })
}


// show hide password
function showPass() {
    let showPass = document.getElementById("show-password-para");
    let hidePass = document.getElementById("hide-password-para");

    // let pass_inp = document.getElementById("user-div-signin4");
    let pass_inp = document.forms["sign-in-frm"]["passwordNm"];

    if (pass_inp.type === "password") {
        pass_inp.type = "text";
        showPass.style.display = "none";
        hidePass.style.display = "block";
    } else {
        pass_inp.type = "password";
        showPass.style.display = "block";
        hidePass.style.display = "none";
    }
}

function showCpass() {
    let showPass = document.getElementById("show-C-password-para");
    let hidePass = document.getElementById("hide-C-password-para");

    // let pass_inp = document.getElementById("user-div-signin5");
    let pass_inp = document.forms["sign-in-frm"]["CpasswordNm"];

    if (pass_inp.type === "password") {
        pass_inp.type = "text";
        showPass.style.display = "none";
        hidePass.style.display = "block";
    } else {
        pass_inp.type = "password";
        showPass.style.display = "block";
        hidePass.style.display = "none";
    }
}
