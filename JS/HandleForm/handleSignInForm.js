
    function showError(input, message) {
        let parent = input.parentElement;
        let small = parent.querySelector('small');
        // Thêm text thông báo lỗi vào small bỏ trống
        small.innerText = message;
        small.style.color = 'rgb(206, 30, 30)';
    }

    function showSuccess(input) {
        let parent = input.parentElement;
        let small = parent.querySelector('small');
        // Nếu nhập thì small trống
        small.innerText = '';
    }

    function checkEmptyError(listInput) {
        let isEmptyError = false;
        listInput.forEach(input => {
            if (!input.value.trim()) {
                isEmptyError = true;
                showError(input, "Không được để trống");
            }
            else{
                showSuccess(input)
            }
        });
        return isEmptyError
    }
    var username = document.querySelector('.login_username');
    var password = document.querySelector('.login_password');
    var form = document.querySelector('.signIn_form');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Không load trang

    });

    var btnSumit = document.querySelector('.btn--Submit');

    
    btnSumit.onclick = function (e){
        e.preventDefault();
        checkEmptyError([username, password]);
    }
