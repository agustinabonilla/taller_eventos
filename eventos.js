const saludarButton = document.getElementById('saludarButton');
saludarButton.onclick = function() {
    alert('Hola!');
};
const divContenedor = document.querySelector('div');
divContenedor.addEventListener('click', function() {
    alert('Hola! Soy el div');
});
