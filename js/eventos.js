console.log('Cargado archivo javascript');

function funcionInicial () {
	console.log('Esta es la funcion inicial referenciada desde nuestro editor.html');
};

function hazmeNegrita () {
	document.execCommand('bold',false,'');
};

function cambiarFuente(fuente) {
    document.execCommand("fontName", false, fuente);
};

function cambiarTamañoFuente(tamano) {
	document.execCommand("fontSize", false, tamano);
};

function cambiarColorFuente(color) {
	document.execCommand("foreColor", false, color);
};

function insertaListaOrdenada() {
	document.execCommand("insertOrderedList", false, '');
};

function centra() {
	document.execCommand("justifyCenter", false, '');
};

function justificaDerecha() {
	document.execCommand("justifyRight", false, '');
};

function justificaIzquierda() {
	document.execCommand("justifyLeft", false, '');
};

function formatoCabecera(cabecera) {
    document.execCommand('formatBlock', false, cabecera); 
};

