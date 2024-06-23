import $ from 'jquery';

function alternar(menu) {

    var oMenu = document.getElementById(menu);

    if (oMenu.classList.contains('abierto')) {
        oMenu.classList.remove('abierto');
        oMenu.classList.add('cerrado');
    } else {
        oMenu.classList.remove('cerrado');
        oMenu.classList.add('abierto');
   }
}

$(function() {

});

window.alternar = alternar; 
