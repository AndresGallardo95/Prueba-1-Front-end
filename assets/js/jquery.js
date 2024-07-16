// Inicialización de tooltips de Bootstrap cuando el documento está listo
$(function () {
    // Selecciona todos los elementos que tienen el atributo 'data-toggle="tooltip"'
    // y les aplica el método tooltip() para habilitar los tooltips
    $('[data-toggle="tooltip"]').tooltip();
});
