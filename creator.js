function createHtml(char) {
  setActualPj(char);
  changePjPage(char);
  showCharPage();
  eliminarElemento("charSelect");
}

function showCharPage(){
	document.getElementById("headerBar").style.visibility = "visible";
	document.getElementById("mainBox").style.visibility = "visible";
}

