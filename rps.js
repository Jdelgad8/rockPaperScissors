//Variables para determinar los valores de las elecciónes
var piedra = 0;
var	papel = 1;
var tijera = 2;

//Almacena el nombre que el usuario digite
var nombreUsuario;

//Variable para almacenar la opción del usuario
var opcionUsuario;

//Variable para almacenar la opción de la máquina, que por defecto será piedra
var opcionMaquina = piedra;

/*variable usada para determinar si es la primera vez que el usuario
digita una opción*/
var primerIntento = true;

//Variable usada para que el usuario confirme si desea continuar con su elección
var confirmarEleccion;

//Variable usada para que el ususario eliga si desea jugar una partida nueva
var seguirJugando = 1;

//Almacena los puntos del usuario y de la máquina
var puntosUsuario = 0;
var puntosMaquina = 0;

//Función que genera un número aleatorio entre el mínimo y el máximo
function generarNumeroAleatorio(minimo, maximo)
{
	var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numeroAleatorio; 
}

//Pide al usuario su nombre
nombreUsuario = prompt("Escriba su nombre.");

//Ciclo que controla cuando termina el juego
while(seguirJugando == 1)
{
	primerIntento = true;
	//Ciclo para controlar cuando el usuario elige una opción correcta y confirma su elección
	while(opcionUsuario > 2 || primerIntento == true)
	{
		//Pide al usuario que digite una opción
		opcionUsuario = prompt("Elige una opción:\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
		//Utiliza la función para generar la opción de la máquina aleatoreamente
		opcionMaquina = generarNumeroAleatorio(0,2);
		//Condicionales para confirmar al usuario la opción que eligió
		if (opcionUsuario == piedra)
		{
			//Muestra una alerta confirmando la opción del usuario
			alert("Usted eligió: Piedra");
			//Pide al usuario permiso para continuar con la opción elegida
			confirmarEleccion = prompt("¿Desea continuar con su elección?\nSi: 1\nNo: 0");
		}
		else if (opcionUsuario == papel)
		{
			alert("Usted eligió: Papel");
			confirmarEleccion = prompt("¿Desea continuar con su elección?\nSi: 1\nNo: 0");
			}
		else if (opcionUsuario == tijera)
		{
			alert("Usted eligió: Tijera");
			confirmarEleccion = prompt("¿Desea continuar con su elección?\nSi: 1\nNo: 0");
		}
		else
		{
			alert("Opción inválida. Por favor ingrese una opción valida.");
		}
		
		//Si el usuario elige la opción 1, termina el ciclo
		if(confirmarEleccion == 1)
		{
			primerIntento = false;
		}
	}

	//Para mostrar que opción eligió la máquina.
	if(opcionMaquina == piedra)
	{
		alert("La maquina eligió: piedra.")
	}
	else if(opcionMaquina == papel)
	{
		alert("La maquina eligió: papel.")
	}
	else
	{
		alert("La maquina eligió: tijera.")
	}

	//Condicionales para indicar al usuario quién gano la partida
	if(opcionUsuario == piedra)
	{
		if(opcionMaquina == piedra)
		{
			alert("Empate.");
		}
		else if(opcionMaquina == papel)
		{
			alert("La máquina gana.");
			puntosMaquina++;
		}
		else
		{
			alert(nombreUsuario+" gana");
			puntosUsuario++;
		}
	}
	else if(opcionUsuario == papel) 
	{
		if(opcionMaquina == piedra)
		{
			alert(nombreUsuario+" gana");
			puntosUsuario++;
		}
		else if(opcionMaquina == papel)
		{
			alert("Empate.");
		}
		else
		{
			alert("La máquina gana.");
			puntosMaquina++;
		}
	}
	else
	{
		if(opcionMaquina == piedra)
		{
			alert("La máquina gana.");
			puntosMaquina++;
		}
		else if(opcionMaquina == papel)
		{
			alert(nombreUsuario+" gana");
			puntosUsuario++;
		}
		else
		{
			alert("Empate");
		}
	}

	seguirJugando = prompt("¿Desea seguir jugando?\nSi: 1\nNo: 0");	
}

alert("Juego terminado\n"+nombreUsuario+" "+puntosUsuario+" puntos\nMaquina "+puntosMaquina+" puntos.")	
