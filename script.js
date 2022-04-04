function mostrarVision(){
    document.getElementById('Vision').style.display = 'block' ;
    document.getElementById('Mision').style.display = 'none' ;
    document.getElementById('Valores').style.display = 'none' ;
    document.getElementById('Contacto').style.display = 'none' ;

}

function mostrarMision(){
    document.getElementById('Mision').style.display = 'block' ;
    document.getElementById('Vision').style.display = 'none' ;
    document.getElementById('Valores').style.display = 'none' ;
    document.getElementById('Contacto').style.display = 'none' ;

}

function mostrarValores(){
    document.getElementById('Valores').style.display = 'block' ;
    document.getElementById('Vision').style.display = 'none' ;
    document.getElementById('Mision').style.display = 'none' ;
    document.getElementById('Contacto').style.display = 'none' ;

}

function mostrarContacto(){
    document.getElementById('Contacto').style.display = 'block' ;
    document.getElementById('Vision').style.display = 'none' ;
    document.getElementById('Mision').style.display = 'none' ;
    document.getElementById('Valores').style.display = 'none' ;

}

function mostrarFormulario(){
    document.getElementById('formulario').style.display = 'block' ;
}

function mostrarFormulario1(){
    document.getElementById('formulario').style.display = 'none' ;
}

function mostrarReservacion(){
    document.getElementById('Reservacion').style.display = 'block' ;
}

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}