

let botonBorrar = document.getElementById("botonBorrar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let total = document.getElementById("total");
let idMensaje = document.getElementById("idMensaje");

//------------------------eventos--------------------------------------//

botonBorrar.addEventListener("click",function(event){
event.preventDefault;
borrarCampos();
})

botonResumen.addEventListener("click", function(event){
    event.preventDefault;
    let mensaje = verificarCampos();
    mensaje =="Inicio" ?  calcularTotal(): idMensaje.innerText = mensaje;
    mensaje =="Inicio" ? idMensaje.style.visibility = "hidden" : idMensaje.style.visibility = "visible";
   })

categoria.addEventListener("change", function(event){
    event.preventDefault;
    total.innerText="Total a Pagar: $"
})

cantidad.addEventListener("change", function(event){
    event.preventDefault;
    total.innerText="Total a Pagar: $"
})

//-----------------------funciones-----------------------------//

function borrarCampos(){
    nombre.value="";
    apellido.value = "";
    mail.value="";
    cantidad.value = "";
    categoria.value = "";
    total.innerText = "Total a Pagar: $";
    idMensaje.value = "Inicio";
    idMensaje.style.visibility = "hidden";
}


            

function calcularTotal(){
let descuento = 0;
switch (categoria.value) {
    case "Estudiante":
        descuento = 0.2;
        break;
    case "Trainee":
        descuento = 0.5;
        break;
    case "Junior":
        descuento = 0.8;
        break;
    default:
        break;
}
let costoTotal = 200 * parseInt(cantidad.value) * descuento;
total.innerText = "Total a Pagar: $" + costoTotal;
}





function verificarCampos(){
    let mensaje = "Inicio";
    if (nombre.value =="" | apellido.value =="" | mail.value=="" | cantidad.value=="" | categoria.va==""){
        mensaje = "Complete todos los campos";
    }else if(isNaN(parseInt(cantidad.value)) | parseFloat(cantidad.value)%1 !=0){
        mensaje = "La cantidad debe ser un número entero";
    }else if (mail.value.indexOf("@") == -1){
        mensaje = "Mail inválido";
    }
    if (mensaje !="Inicio"){total.innerText = "Total a Pagar: $"};
    return mensaje;
    }

