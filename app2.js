const btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
    let username2 = document.getElementById('username').value;
    let password2 = document.getElementById('password').value;
    let seller = {
        username: username2,
        password: password2
    }
    console.log(seller)
    fetch('http://localhost:3000/api/login/', {
        method: 'post',
        body: JSON.stringify(seller),
        headers: {
            'Content-type': 'application/json'
        }
    })

})