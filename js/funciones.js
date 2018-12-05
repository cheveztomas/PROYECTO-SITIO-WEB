//Esta función se encarga de determinar si se encuentra cerrado o abierto el local.
function abierto(){
	//Variables
	var horaActual=new Date();
	var hora=horaActual.getHours().toString();
	var minutos=horaActual.getMinutes().toString();
	var diaS=horaActual.getDay();
	var time;
	//Inicio
	//Se verifica que el dia de la semana sea diferente de sabado o domingo.
	if (diaS=="0" || diaS=="6") {
		//Se mustra al usuario si el local se encuntra abierto o cerrado.
		estadoHorario.value="Cerrado";
	}
	//Se verifica si se encuentra el local abierto por el horario.
	if (parseInt(hora)<7 || parseInt(hora)>=17) {
		//Se muestra al usuario el mensaja.
		estadoHorario.value="Cerrado";
	}
	//Se verifica si el local se encuentra abierto y se le mustra el usuario un mensaje.
	if (parseInt(hora)>=7 && parseInt(hora)<17) {
		estadoHorario.value="Abierto";
	}

	//Se llama a la función cada segundo.
	time=setTimeout("abierto()", 60000);
}

//Función para la galeria de modelos.
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

function listaCatalogo(){
	//Variables
	var lista=document.getElementsByClassName("check");

	//Inicio
	lista=
	console.log(lista);
}