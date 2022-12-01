const btnSignup = document.getElementById('btnSignup');
btnSignup.addEventListener('click', () => {
    let username = document.getElementById('username1').value;
    let password = document.getElementById('password1').value;
    let password2 = document.getElementById('password2').value;
    let NewSeller = {
        username: username,
        password: password,
        password_repeat: password2
    }
    console.log(NewSeller)
    if (NewSeller.username.length < 3) {
        console.log('teclea un nombre de usuario mayor 3 caracteres')
    } else {
        if (NewSeller.password.length < 3) {
            console.log('teclea una contrasena mayor a 3 caracteres')
        }
        if (NewSeller.password != NewSeller.password_repeat) {
            console.log('ambas contrasenas deben coincidir')
        } else {
            fetch('http://localhost:3000/api/vendedores/', {
                method: 'post',
                body: JSON.stringify(NewSeller),
                headers: {
                    'Content-type': 'application/json'
                }
            })
        }
    }
})