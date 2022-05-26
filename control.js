window.addEventListener('load', function() {

    let user_input = document.getElementById('user');
    let password_input = document.getElementById('password');
    let submit_button = document.getElementById('btnSubmit');
    let form = document.getElementById('loginForm');
    
    const styleFocusInput = (input) => {
        input.addEventListener('focus', (e) => {
            const field = e.target;
            field.classList.remove('error-input');
            field.nextElementSibling.innerHTML = "";
        })
    }
    
    styleFocusInput(user_input);
    styleFocusInput(password_input)

    function user () {
        const regexUser = new RegExp(user_input.pattern);
            const regexUserTest = regexUser.test(user_input.value);
        if(user_input.value.length < 1){
            user_input.classList.add('error-input');
            user_input.nextElementSibling.innerHTML = "Requerido";
            return false;
        }else if(!regexUserTest){
            user_input.classList.add('error-input');
            user_input.nextElementSibling.innerHTML = "Falta el arroba en el usuario";
            return false;
        }else{
            return true;
        }
    }

    function pass () {
        if(password_input.value.length < 1){
            password_input.classList.add('error-input');
            password_input.nextElementSibling.innerHTML = "Requerido";
            return false;
        }else{
            return true;
        }
    }

    submit_button.addEventListener('click', (e) => {
        e.preventDefault();
        user()
        pass()
        if(user() && pass()){
            form.submit();
        }
    })

})