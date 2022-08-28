function limpiar(){
    document.getElementById('calcu').reset();
}

function sumar(){
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('res').innerHTML = x+y;
}

function restar(){
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('res').innerHTML = x-y;
}

function multiplicar(){
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('res').innerHTML = x*y;
}

function dividir(){
    var x = parseInt(document.getElementById('n1').value);
    var y = parseInt(document.getElementById('n2').value);
    document.getElementById('res').innerHTML = x/y;
}