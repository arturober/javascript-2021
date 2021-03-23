document.addEventListener('DOMContentLoaded', e => {
    let input = document.getElementById("input1");
    input.addEventListener('focus', e => {
        input.style.fontWeight = 'bold';
    });
    input.addEventListener('blur', e => {
        input.style.fontWeight = 'normal';
    });
    input.addEventListener('input', e => {
        input.value = input.value.toLocaleUpperCase();
    });
    input.addEventListener('paste', e => {
        console.log("No se puede pegar texto");
        e.preventDefault();
    });
    input.addEventListener('select', e => {
        let texto = input.value.substring(input.selectionStart, input.selectionEnd);
        console.log("Has seleccionado el texto: " + texto);
    });
});