function createHtml(char) {
  window.open("characterPage.html", "_self"); //esto hace q lo demas de abajo ya no aplique
  setActualPj(char);
  changePjPage(char);
  //hay 2 opciones, encontrar una forma q esto funcione(? tipo enviando el parametro o algo idk, o, hacer q los primeros botones y la char page sean el mismo html
}

