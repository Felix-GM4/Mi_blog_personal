function mostrarMensaje(){
    alert("HOLA!!!, Bienvenidos...");
}

const form = document.getElementById('butonE');


function mensajeEnviado(event) { event.preventDefault(); 
    var nombre = document.getElementById("nombre").value; 
    var email = document.getElementById("email").value; 
        if (nombre === "" || email === "") { 
            alert("Por favor, ingrese toda la información requerida."); 
        } else { 
            alert("La información fue enviada correctamente."); 
         document.forms[0].submit(); 
         }
        } document.addEventListener("DOMContentLoaded", 
            function() { 
                var boton = document.getElementById("botonE"); boton.addEventListener("click", mensajeEnviado); 

});