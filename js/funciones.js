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

//Esta función retorna los elementos seleccionados.
function listaCatalogo(){
	//Variables
	var lista=document.getElementsByClassName("check");
	var listaSele=new Array();
	var longitud=0;
	var Elemento="";
	//Inicio
	//Se recorre el arreglo con todos los elementos que tengan la clase ckeck.
	for (var i = 0; i < lista.length; i++) {
		//Se verifica si el estado del elmento se encuentra seleccionado.
		if (lista[i].checked==true) {
			//Se guarda el valor del elmento en una variable de tipo string
			Elemento=lista[i].value.toString();
			//Se agrega al arreglo los elementos que si estan seleccionados.
			logitud=listaSele.push(Elemento);
		}
	}
	return listaSele;
}

//Esta función muestra los valores seleccionados.
function listaSeleccion(){
	//variables
	listaSele=new Array();
	//Inicio
	//Se invoca a la función listaCatalogo la cual retorna los elementos seleccionados.
	listaSele=listaCatalogo();

	//Se limpia el div que contiene la lista.
	document.getElementById('listaSeleccionada').innerHTML="";

	//Se recorre el arreglo el cual tiene la lista de los articulos seleccionados y se muestran en pantalla.
	for (var i = 0; i < listaSele.length; i++) {
		console.log(listaSele[i]);
		/*document.getElementById('listaSeleccionada').innerHTML+="<i class='fas fa-tractor'></i>"+". "+listaSele[i]+"<br>";*/
		document.getElementById('listaSeleccionada').innerHTML+='<label for="item'+i+'"> <i class="fas fa-tractor"></i>. '+listaSele[i]+' <input type="number" name="" min="1" pattern="^[0-9]+" id="item'+i+'" value="1" class="listaItem" placeholder=""></label><br>';
	}

	//Se verifica si se encuentra algo en arreglo para mostrar o no el botón.
	if (listaSele.length>0) {
		document.getElementById('listaWhatsApp').classList.add('botonVisible');
		document.getElementById('listaPDF').classList.add('botonVisible');
	}
	else {
		document.getElementById('listaWhatsApp').classList.remove('botonVisible');
		document.getElementById('listaPDF').classList.remove('botonVisible');
	}
}

function enviarListaWhatsApp(){
	//Variables
	//Se declara la variable con el valor inicial del mensaje que se quiere enviar.
	var link="https://wa.me/50689677620?text=";
	var lista=new Array();
	var cantidad=new Array();
	//Inicio
	//Se invoca a la función que tiene los elementos seleccionados y se guardan en una variable.
	lista=listaCatalogo();
	cantidad=cantidadesLista();

	//Se recorre el arreglo con los elementos seleccionados.
	for (var i = 0; i < lista.length; i++) {
		//Se verifica que no sea el ultimo elemento.
		if (i!=lista.length-1) {
			//Se va concatenado los elemetos de la lista.
			link+=lista[i]+" "+cantidad[i]+", %20";
		}
		else{
			link+=lista[i]+" "+cantidad[i];
		}
	}
	window.open(link,'_blank');
}

function GenerarPDF(){
	//Varaibles
	//Se instancia un documento.
	var doc= new jsPDF();
	var arregloLista=new Array();
	var acumulador=30;
	var cantidad=new Array();

	//Inicio
	cantidad=cantidadesLista();

	//Se establece un titulo al documento.
	doc.setFontSize(22);
	doc.text(20, 20, 'Kit-Bota Lista de Pedidos');

	//Se inboca a la función que retorna losa elementos seleccionados.
	arregloLista=listaCatalogo();

	//Se recorrele el arreglo de los elementos seleccionados.
	for (var i = 0; i < arregloLista.length; i++) {
		//Se establece un tamaño de fuente.
		doc.setFontSize(13);
		//Se establece lo que va contentener cada linea el primer parametro representa x el segundo y;
		doc.text(20,acumulador,"-"+arregloLista[i]+" - ("+cantidad[i]+')');
		acumulador+=5;
	}

	//Se guarda el documento.
	doc.save('Lista de Pedidos '+document.title+".pdf");
}

function cantidadesLista(){
	//Variables
	var arreglo=new Array();
	var arregloValores=new Array();

	//Inicio
	//Se guarda los valores de esa clase en un arreglo
	arreglo=document.getElementsByClassName("listaItem");
	//Se recorre el arreglo
	for (var i = 0; i < arreglo.length; i++) {
		//Se guardan los valres en arreglo.
		arregloValores[i]=arreglo[i].value;
	}
	//Se retorna el arreglo
	return arregloValores;
}