// Definimos las llaves de encriptación
const llavesEncriptacion = {
	"e": "enter",
	"i": "imes",
	"a": "ai",
	"o": "ober",
	"u": "ufat"
}

//Funcion de copiar
function copyToClipboard() {
	var output = document.getElementById("output-text");
	output.select();
	document.execCommand("copy");
  
	// Mostrar alerta de texto copiado utilizando SweetAlert
	Swal.fire({
	  icon: 'success',
	  title: '¡Texto copiado al portapapeles!',
	  showConfirmButton: false,
	  timer: 1500
	});
  }

// Función para encriptar el texto
function encriptar() {
	let inputText = document.getElementById("input-text").value.toLowerCase();
	let outputText = encriptarTexto(inputText);
	document.getElementById("output-text").value = outputText;
	document.getElementById("history").value += outputText + "\n";
}

// Función para desencriptar el texto
function desencriptar() {
	let inputText = document.getElementById("input-text").value;
	let outputText = desencriptarTexto(inputText);
	document.getElementById("output-text").value = outputText;
	document.getElementById("history").value += outputText + "\n";
}

// Función para encriptar una cadena
function encriptarTexto(cadena) {
	for (const [llave, value] of Object.entries(llavesEncriptacion)) {
		cadena = cadena.replace(new RegExp(llave, "g"), value);
	}
	return cadena;
}

// Función para desencriptar una cadena
function desencriptarTexto(cadena) {
	for (const [llave, value] of Object.entries(llavesEncriptacion)) {
		cadena = cadena.replace(new RegExp(value, "g"), llave);
	}
	return cadena;
}