// Esperar a que el DOM se cargue completamente antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function() {
    // Definir el precio base del producto
    let precio = 4000000;

    // Inicializar la cantidad de productos en 0.
    let cantidad = 0;

    // Seleccionar elementos del DOM relevantes utilizando querySelector
    const precioSpan = document.querySelector(".precio-inicial");
    const cantidadSpan = document.querySelector(".cantidad");
    const totalSpan = document.querySelector(".valor-total");

    // Mostrar el precio base en el span correspondiente utilizando innerHTML.
    precioSpan.innerHTML = precio;

    // Función para actualizar el total a pagar.
    function actualizarTotal() {
        // Calcular el total multiplicando el precio por la cantidad.
        totalSpan.innerHTML = precio * cantidad;
    }

    // Actualizar el total inicial.
    actualizarTotal();

    // Seleccionar los botones de incrementar y decrementar
    const btnIncrementar = document.getElementById("btn-incrementar");
    const btnDecrementar = document.getElementById("btn-decrementar");

    // Agregar evento al botón de incrementar, utilizando el onClick().
    btnIncrementar.onclick = function() {
        // Aumentar la cantidad de productos
        cantidad++;
        // Actualizar la cantidad mostrada en el DOM.
        cantidadSpan.innerHTML = cantidad;
        // Actualizar el total a pagar.
        actualizarTotal();
    };

    // Agregar evento al botón de decrementar, utilizando el onClick().
    btnDecrementar.onclick = function() {
        // Verificar que la cantidad no sea menor que cero
        if (cantidad > 0) {
            // Disminuir la cantidad de productos
            cantidad--;
            // Actualizar la cantidad mostrada en el DOM
            cantidadSpan.innerHTML = cantidad;
            // Actualizar el total a pagar
            actualizarTotal();
        }
    };

});

