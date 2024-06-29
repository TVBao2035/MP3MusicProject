function checkInput() {
    const items = document.querySelectorAll(".item");
    const captchaInput = document.getElementById("captchatext");
    if (captchaInput.value == "") {
        captchaInput.classList.add("error");
        captchaInput.parentElement.classList.add("error");
    }
    for(const item of items) {
        if(item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        item.addEventListener("keyup", () => {
            if(item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}
function checkemail() {
    var email = document.getElementById('input_email').value;
    var errorEmail = document.getElementById('erroremail');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        errorEmail.textContent = "Email can't be blank!";
        errorEmail.style.display = 'block';
    } else if (!emailPattern.test(email)) {
        errorEmail.textContent = "Email invalidate!";
        errorEmail.style.display = 'block';
    } else {
        errorEmail.textContent = '';
        errorEmail.style.display = 'none';
        return email;
    }
}

function checkName() {
    var name = document.getElementById('username').value;
    var errorName = document.getElementById('errorname');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/
    if(name == '' || name == null)
    {
        errorName.textContent = "Name can't be blank!";
        errorName.style.display = 'block';
    }
    else if (!regexName.test(name)) {
        errorName.textContent = "Tên không hợp lệ!";
        errorName.style.display = 'block';
    }
    else {
        errorName.textContent = '';
        errorName.style.display = 'none';
        return name;
    }
}

function checkPassword() {
    var password = document.getElementById('password').value;
    var errorPassword = document.getElementById('errorpassword');
    var minLength = 6; 

    if (!password) {
        errorPassword.textContent = "Password can't be blank!";
        errorPassword.style.display = 'block';
    } else if (password.length < minLength) {
        errorPassword.textContent = "Mật khẩu phải có trên 5 ký tự!";
        errorPassword.style.display = 'block';
    }
    else if (password.length > 5) {
        errorPassword.style.display = 'none';
    } 
     else {
        errorPassword.textContent = '';
        errorPassword.style.display = 'none';
        return password;
    }
}
function checkConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password');
    var errorConfirmPassword = document.getElementById('errorconfirmpassword');
    if(!confirmPassword) {
        errorConfirmPassword.textContent = "Confirm Password can't be blank!";
        errorConfirmPassword.style.display = 'block';
    }
    else if(password!= confirmPassword) {
        errorConfirmPassword.textContent = "Xác nhận mật khẩu không đúng!";
        errorConfirmPassword.style.display = 'block';
    } else {
        errorConfirmPassword.textContent = '';
        errorConfirmPassword.style.display = 'none';
        return confirmPassword;
    }
}
let code;
function createCaptcha() {
    document.getElementById("captcha").innerHTML = "";
    let charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    let codelength = 6;
    let captcha = []

    for( let index = 0; index < codelength;index++) {
        let arrayindex = Math.floor(Math.random() * charsArray.length +1)
        if(captcha.indexOf(charsArray[arrayindex]) == -1) {
            captcha.push(charsArray[arrayindex])
        }
        else {
            index--;
        }
    }
    let canvas = document.createElement("canvas");
    canvas.id = "captcha";
    canvas.width = 170;
    canvas.height = 45;
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.padding = "12px";
    ctx.strokeText(captcha.join(""),30,30);
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canvas);
}
function checkCaptcha() {
    var captchatext = document.getElementById('captchatext').value;
    var errorCaptcha = document.getElementById('errorcaptcha');

    if (!captchatext) {
        errorCaptcha.textContent = "Captcha can't be blank!"; // Thay đổi thông báo lỗi tiếng Việt tại đây
    } else {
        errorCaptcha.textContent = '';
        // Kiểm tra nếu captchatext nhập đúng
        if (captchatext === code) {
            Swal.fire({
                title: "Success!",
                text: "Bạn đã đăng ký thành công!",
                icon: "success"
            });
            document.getElementById("submitbtn").disabled = false;
            form.reset();
            return false;
        } else {
            Swal.fire({
                title: "Error!",
                text: "Captcha không hợp lệ!",
                icon: "error"
            });
            createCaptcha(); // Tạo lại captcha mới
            document.getElementById("submitbtn").disabled = true;
        }
    }
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
    
});