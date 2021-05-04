let actualPj;
const allPj = [
  hajimeHinata,
  akaneOwari,
  byakuyaTogami,
  chiakiNanami,
  fuyuhikoKuzuryu,
  gundhamTanaka,
  hiyokoSaionji,
  ibukiMioda,
  kazuichiSoda,
  mahiruKoizumi,
  mikanTsumiki,
  nagitoKomaeda,
  nekomaruNidai,
  pekoPekoyama,
  soniaNevermind,
  teruteruHanamura
];

//funciones
//pendiente mover a .js mas especificos y mejor ordenados
function createImage(alt) {
  image = document.createElement("IMG");
  image.setAttribute("src", actualImage);
  image.setAttribute("alt", alt);
  image.setAttribute("width", "308");
  image.setAttribute("height", "560");
  /*posicion temporal*/
  document.getElementsByTagName("body")[0].appendChild(image);
}

function showInfo(text) {
  eliminarElemento("details");
  let place = document.getElementById("infoBox");
  let box = document.createElement("div");
  let info = document.createElement("p");
  let t = document.createTextNode(text);
  info.appendChild(t);
  box.appendChild(info);
  box.setAttribute("id", "details");
  place.appendChild(box);
}

function showPresents(loves, likes) {
  eliminarElemento("details");
  let place = document.getElementById("infoBox");
  let box = document.createElement("div");
  let love = document.createElement("div");
  let like = document.createElement("div");
  let loTitle = document.createElement("h3");
  let liTitle = document.createElement("h3");
  let loText = document.createTextNode("Loves");
  let liText = document.createTextNode("Likes");
  loTitle.appendChild(loText);
  liTitle.appendChild(liText);
  love.appendChild(loTitle);
  like.appendChild(liTitle);
  addPresents(love, loves);
  addPresents(like, likes);
  box.appendChild(love);
  box.appendChild(like);
  box.setAttribute("id", "details");
  place.appendChild(box);
}

function showReportCard(pages) {
  //pages = characterReport const
  eliminarElemento("details");
  let place = document.getElementById("infoBox");
  let box = document.createElement("div");
  let button1 = createButton("1", "addReportPage(" + pages + "[0])");
  let button2 = createButton("2", "addReportPage(" + pages + "[1])");
  let button3 = createButton("3", "addReportPage(" + pages + "[2])");
  let button4 = createButton("4", "addReportPage(" + pages + "[3])");
  let button5 = createButton("5", "addReportPage(" + pages + "[4])");
  box.appendChild(button1);
  box.appendChild(button2);
  box.appendChild(button3);
  box.appendChild(button4);
  box.appendChild(button5);
  box.setAttribute("id", "details");
  place.appendChild(box);
  button1.click();
}

function addPresents(where, presents) {
  for (i = 0; i < presents.length; i++) {
    present = document.createElement("IMG");
    present.setAttribute("src", "presents/" + presents[i] + ".png");
    present.setAttribute("alt", presents[i]);
    present.setAttribute("title", presents[i]);
    present.setAttribute("width", "5%");
    present.setAttribute("height", "5%");
    where.appendChild(present);
  }
}

function createButton(text, action) {
  let button = document.createElement("button");
  let t = document.createTextNode(text);
  button.appendChild(t);
  button.setAttribute("onclick", action);
  return button;
}

function addReportPage(text) {
  eliminarElemento("reportPage");
  let where = document.getElementById("details");
  let rPage = document.createElement("div");
  let h = document.createElement("H3");
  let t = document.createTextNode(text);
  h.appendChild(t);
  rPage.appendChild(h);
  rPage.setAttribute("id", "reportPage");
  where.appendChild(rPage);
}

function eliminarElemento(id) {
  imagen = document.getElementById(id);
  if (!imagen) {
  } else {
    padre = imagen.parentNode;
    padre.removeChild(imagen);
  }
}

function nextPj() {
  let actualIndex = allPj.indexOf(actualPj);
  if (actualIndex == allPj.length - 1) {
    return allPj[0];
  } else {
    return allPj[actualIndex + 1];
  }
}

function prevPj() {
  let actualIndex = allPj.indexOf(actualPj);
  if (actualIndex == 0) {
    return allPj[allPj.length - 1];
  } else {
    return allPj[actualIndex - 1];
  }
}

function createHeaderBar() {
  let headerBar = document.createElement("header");
  let selectedPj = actualPj;
  let prevPj = prevPj();
  let nextPj = nextPj();
  let prevButton = createButton(
    "Anterior",
    "window.open('characters/" + prevPj + "/characterPage.html', '_self')"
  );
  let nextButton = createButton(
    "Siguiente",
    "window.open('characters/" + nextPj + "/characterPage.html', '_self')"
  );
  headerBar.appendChild(prevButton);
  for (h = 0; h < allPj.length; h++) {
    sprite = document.createElement("IMG");
    sprite.setAttribute(
      "src",
      "characters/" + allPj[h] + "/" + allPj[h] + "_Island_Mode_Icon.png"
    );
    sprite.setAttribute("alt", allPj[h]);
    sprite.setAttribute(
      "onclick",
      "window.open('characters/" + allPj[h] + "/characterPage.html', '_self')"
    );
    sprite.setAttribute("width", "2.5%");
    sprite.setAttribute("height", "2.5%");
    sprite.setAttribute("id", allPj[h] + "_sprite");
    headerBar.appendChild(sprite);
  }
  headerBar.appendChild(nextButton);
  document.getElementsByTagName("body")[0].appendChild(headerBar);
  document
    .getElementById(selectedPj + "_sprite")
    .setAttribute("class", "selectedPj");
}
