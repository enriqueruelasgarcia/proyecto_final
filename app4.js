const btnPro = document.getElementById('btnPro');
btnPro.addEventListener('click', () => {
    let nombre = document.getElementById('nombre1').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let codigo = document.getElementById('codigo').value;
    let product = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        codigo: codigo,
    }
    fetch('http://localhost:3000/api/productos/', {
        method: 'post',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json'
        }
    })
})

const btnCus = document.getElementById('btnCus');
btnCus.addEventListener('click', () => {
    let nombre = document.getElementById('nombre').value;
    let celular = document.getElementById('celular').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('correo').value;
    let customer = {
        nombre: nombre,
        celular: celular,
        edad: edad,
        correo: correo
    }
    fetch('http://localhost:3000/api/clientes/', {
        method: 'post',
        body: JSON.stringify(customer),
        headers: {
            'Content-type': 'application/json'
        }
    })
})

fetch('http://localhost:3000/api/productos/', {
        method: 'get'
    })
    .then(response => response.json())
    .then(json => {
        let menu = document.getElementById('menu');
        let opciones = '';
        for (let i = 0; i < json.length; i++) {
            opciones += `<option>${json[i].nombre}</option>`
        }
        menu.innerHTML = opciones;
    })

const btnFor = document.getElementById('btnFor');
btnFor.addEventListener('click', () => {
    let cantpro = document.getElementById('cantPro').value;
    let div = document.getElementById('formPro')
    let form = '';
    for (let i = 0; i < cantpro; i++) {
        form += `
        <p>Producto ${i+1}</p>
        <form>
        <label for="pronom${i}">nombre
        <input type="text" id="pronom${i}">
        </label><br>
        <label for="cant${i}">cantidad
        <input type="number" id="cant${i}">
        </label>
        </form><br><br>`
    }
    div.innerHTML = form;
})

const btnFac = document.getElementById('btnFac');
btnFac.addEventListener('click', () => {
    let cantidad = document.getElementById('cantPro').value;
    let pros = [];
    for (let i = 0; i < cantidad; i++) {
        let nombrepro = document.getElementById(`pronom${i}`).value;
        let cantpro = document.getElementById(`cant${i}`).value;
        pros.push({ nombre: nombrepro, cantidad: cantpro })
    }
    let fac = {
        products: pros
    }
    console.log(pros)
    fetch('http://localhost:3000/api/facturas', {
        method: 'post',
        body: JSON.stringify(fac),
        headers: {
            'content-type': 'application/json'
        }
    }).then
})