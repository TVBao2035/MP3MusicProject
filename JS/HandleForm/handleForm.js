function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = message;
    small.style.color = 'rgb(206, 30, 30)'; //màu đỏ
    input.style.border = '2px solid rgb(206, 30, 30)'; 
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    small.innerText = '';
    input.style.border = '2px solid green';
}

function checkEmptyError(input) {
    if (!input.value.trim()) {
        showError(input, "Không được để trống");
        return true;
    } else {
        showSuccess(input);
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById('input_email');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim()) {
        showError(email, "Email can't be blank!");
        return false;
    } else if (!emailPattern.test(email.value)) {
        showError(email, "Email invalidate!");
        return false;
    } else {
        showSuccess(email);
        return email.value;
    }
}

function checkName() {
    var name = document.getElementById('username');
    var regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;

    if (!name.value.trim()) {
        showError(name, "Name can't be blank!");
        return false;
    } else if (!regexName.test(name.value)) {
        showError(name, "Name invalidate!");
        return false;
    } else {
        showSuccess(name);
        return name.value;
    }
}

function checkPassword() {
    var password = document.getElementById('password');
    var minLength = 6;

    if (!password.value.trim()) {
        showError(password, "Password can't be blank!");
        return false;
    } else if (password.value.length < minLength) {
        showError(password, "Password must have more than 5 characters!");
        return false;
    } else {
        showSuccess(password);
        return password.value;
    }
}

function checkConfirmPassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password');

    if (!confirmPassword.value.trim()) {
        showError(confirmPassword, "Confirm Password can't be blank!");
        return false;
    } else if (password !== confirmPassword.value) {
        showError(confirmPassword, "Password was wrong!");
        return false;
    } else {
        showSuccess(confirmPassword);
        return confirmPassword.value;
    }
}

// Khai báo biến global để lưu trữ mã captcha
let code = "";
// Hàm tạo captcha mới
function createCaptcha() {
    // Xóa đi các phiên bản cũ của captcha
    document.getElementById("captcha").innerHTML = "";
    
    // Các ký tự có thể có trong captcha
    let charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
    let codelength = 6;
    let captcha = [];

    // Tạo ngẫu nhiên mã captcha
    for (let index = 0; index < codelength; index++) {
        let arrayindex = Math.floor(Math.random() * charsArray.length);
        captcha.push(charsArray[arrayindex]);
    }
    // Tạo canvas để hiển thị captcha
    let canvas = document.createElement("canvas");
    canvas.id = "captcha";
    canvas.width = 170;
    canvas.height = 45;
    let ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText(captcha.join(""), 30, 30);
    code = captcha.join("");

    // Thêm canvas vào phần tử captcha trong form
    document.getElementById("captcha").appendChild(canvas);
}

// Sự kiện khi nhấn nút "Refresh Captcha"
var refreshBtn = document.querySelector('.regenerate_captcha');
refreshBtn.addEventListener('click', function() {
    createCaptcha(); // Tạo captcha mới
    document.getElementById('captchatext').value = ''; // Xóa giá trị nhập captcha cũ
    showSuccess(document.getElementById('captchatext')); // Xóa thông báo lỗi của captcha cũ (nếu có)
    document.getElementById("submitbtn").disabled = true; // Đặt lại disabled để không cho submit
});

// Kiểm tra captcha khi người dùng nhập vào
function checkCaptcha() {
    var captchatext = document.getElementById('captchatext');

    if (!captchatext.value.trim()) {
        showError(captchatext, "Captcha can't be blank!");
        return false;
    } else {
        showSuccess(captchatext);

        // Kiểm tra xem captcha nhập vào có đúng không
        if (captchatext.value === code) {
            showSuccess(captchatext);
            return true;
        } else {
            showError(captchatext, "Captcha invaliate!");
            createCaptcha(); // Tạo captcha mới để người dùng nhập lại
            return false;
        }
    }
}
// Tạo captcha ban đầu khi trang được load
createCaptcha();

// Lắng nghe sự kiện blur của các input để kiểm tra lỗi
var inputs = document.querySelectorAll('.form_sign input');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        switch (input.id) {
            case 'username':
                checkName();
                break;
            case 'password':
                checkPassword();
                break;
            case 'input_email':
                checkEmail();
                break;
            case 'confirm_password':
                checkConfirmPassword();
                break;
            case 'captchatext':
                checkCaptcha();
                break;
            default:
                checkEmptyError(input);
                break;
        }
    });
});

// Sự kiện khi click nút Submit
var btnSubmit = document.querySelector('.btn--Submit');
btnSubmit.addEventListener('click', function(e) {
    e.preventDefault();

    let isFormValid = [
        checkName(),
        checkEmail(),
        checkPassword(),
        checkConfirmPassword(),
        checkCaptcha()
    ].every(Boolean);

    if (isFormValid) {
        Swal.fire({
            title: "Success!",
            text: "You have successfully registered!",
            icon: "success"
        }).then(() => {
            //đăng ký thành công và nhấn nút OK thì sẽ chuyển tới form Đăng Nhập
            window.location.href = "./signIn.html"; 
        });
    }
});
