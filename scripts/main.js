function verifyLoginDetails(){
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');
    var loginButton = document.querySelector('#sign-in');
    var error = document.querySelector('#error');
    var success = document.querySelector('[success]');

    loginButton.addEventListener('click', function(event){
        event.preventDefault();

        if (username.value === '' || password.value === ''){
            if (username.value === ''){
                error.style.visibility = 'visible';
                error.textContent = 'username field is blank!';
            }
    
            if (password.value === ''){
                error.style.visibility = 'visible';
                error.textContent = 'password field is blank!';
            }
        } else {
            error.textContent = 'signing in...';
            success.style.visibility = 'visible';
            success.style.height = '30px';
            success.style.transition = '';
            success.textContent = 'Welcome' + ' ' + username.value + ', ' + 'we are signing you in!';
        }
    });
}

verifyLoginDetails();