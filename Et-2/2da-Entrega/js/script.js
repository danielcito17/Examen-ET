document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("postulacionForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let rut = document.getElementById("rut").value;
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let celular = document.getElementById("celular").value;

        // Validar el RUT (debe ser más específico dependiendo del formato del RUT)
        if (!rut.match(/^[0-9]+-[0-9kK]{1}$/)) {
            alert("Por favor, ingrese un RUT válido. El formato correcto es 12345678-9.");
            return;
        }

        // Validar el nombre (solo letras y espacios)
        if (!nombre.match(/^[a-zA-Z\s]+$/)) {
            alert("Por favor, ingrese un nombre válido. Solo se permiten letras y espacios.");
            return;
        }

        // Validar el email (formato básico de email)
        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
            alert("Por favor, ingrese un email válido. Ejemplo: usuario@dominio.com.");
            return;
        }

        // Validar el celular (debe contener solo números y tener 8 a 15 dígitos)
        if (!celular.match(/^[0-9]{8,15}$/)) {
            alert("Por favor, ingrese un número de celular válido. Solo se permiten números y debe tener entre 8 y 15 dígitos.");
            return;
        }

        // Si todas las validaciones pasan, enviar el formulario
        alert("Registro exitosamente.");
        document.getElementById("postulacionForm").submit();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactoForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        // Validar el nombre (solo letras y más de 3 caracteres)
        if (!nombre.match(/^[a-zA-Z\s]{3,}$/)) {
            alert("Por favor, ingrese un nombre válido. Debe contener solo letras y tener más de 3 caracteres.");
            return;
        }

        // Validar el email (debe ser un correo de Gmail)
        if (!email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)) {
            alert("Por favor, ingrese un correo electrónico de Gmail válido. Ejemplo: usuario@gmail.com.");
            return;
        }

        // Validar el mensaje (más de 3 caracteres)
        if (mensaje.length < 4) {
            alert("Por favor, ingrese un mensaje válido. Debe tener más de 3 caracteres.");
            return;
        }

        // Si todas las validaciones pasan, enviar el formulario
        alert("Formulario enviado exitosamente.");
        document.getElementById("contactoForm").submit();
    });
});

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 8;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container .box')];
    for(var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].style.display = 'inline-block';
    }
    currentItem += 4;
    if(currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none'
    }
}


//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=150 heigth=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar" data-id="${elemento.id}" >X</a>
        </td>
    
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');   
    }

}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false
}
