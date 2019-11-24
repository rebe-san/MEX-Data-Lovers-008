//Declaraciion de variables.
const orderAsc = document.getElementById("order-az");
const orderDesc = document.getElementById("order-za");
const search = document.getElementById("search");
const averageH = document.getElementById("average-height");
const typeChart = document.getElementById("type-chart");
const typesList = document.getElementById("types-list");
const weaknessList = document.getElementById("weakness-list");
const mainContainer = document.getElementById("main-container");

const createElement = element => document.createElement(element);
const setAttribute = (element, attribute, nameAttribute) => element.setAttribute(attribute, nameAttribute);
const appendChild = (parent, child) => parent.appendChild(child);

//Funcion que crea los nodos en el div results-container
const createNodes = array => {
  //section de pokemons
  let sectionResults = createElement("section");
  setAttribute(sectionResults, "class", "container-results");
  array.forEach(objPokemon => {
    //Crea un div por cada  pokemon
    let elementDiv = createElement("div");

    //Agrega una clase(objPokemon) al elemento (elementDIv)
    setAttribute(elementDiv, "class", "obj-pokemon");

    //Adjunta el hijo(elementDiv) al padre(sectionResults)
    appendChild(sectionResults, elementDiv);
    let elementImage = createElement("img");
    setAttribute(elementImage, "src", objPokemon.img);
    appendChild(elementDiv, elementImage);
    let elementName = createElement("p");
    let contentName = document.createTextNode(objPokemon.name);
    appendChild(elementName, contentName);
    appendChild(elementDiv, elementName);
    let elementType = createElement("p");
    let contentType = document.createTextNode("Tipo: " + objPokemon.type);
    appendChild(elementType, contentType);
    appendChild(elementDiv, elementType);
    let elementWeak = createElement("p");
    let contentWeak = document.createTextNode("Debilidades: " + objPokemon.weaknesses);
    appendChild(elementWeak, contentWeak);
    appendChild(elementDiv, elementWeak);
  });
  appendChild(mainContainer, sectionResults);
};

//Funcion que borra los nodos en el div results-container
const deleteNodes = () => {
  while (mainContainer.hasChildNodes())
    mainContainer.removeChild(mainContainer.firstChild);
};

//Funcion que muestra la data ordenada de forma ascendente por nombre
const ArrayAsc = array => {
  deleteNodes();
  createNodes(window.functions.orderedAscArray(array));
};
// //Funcion que muestra la data ordenada de forma descendente por nombre
const ArrayDesc = array => {
  deleteNodes();
  createNodes(window.functions.orderedDescArray(array));
};
// //Funcion que filtra la data por nombre.
const filterDataByName = array => {
  deleteNodes();
  let inputName = document.getElementById("input-name").value;
  let inputNameConverted = inputName[0].toUpperCase() + inputName.slice(1).toLowerCase();
  createNodes(window.functions.filterName(inputNameConverted, array));
};
// //Funcion que muestra la data ordenada de forma ascendente por nombre
const filterDataByType = (array, type) => {
  deleteNodes();
  createNodes(window.functions.filterType(array, type));
};

// //Funcion que muestra la data ordenada de forma ascendente por nombre
const filterDataByWeakness = (array, type) => {
  deleteNodes();
  createNodes(window.functions.filterWeak(array, type));
};

// //Funcion que muestra la altura promedio
const average = array => {
  deleteNodes();
  let sectionAverage = createElement("section");
  setAttribute(sectionAverage, "class", "section-average");
  let elementP = createElement("p");
  let content = document.createTextNode(
    "Altura Promedio " + window.functions.computeStats(array)
  );
  appendChild(elementP, content);
  appendChild(sectionAverage, elementP);
  appendChild(mainContainer, sectionAverage);
};

//Grafica de los tipos de pokemon
const showChart = () => {
  deleteNodes();
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    // Crea la tabla de datos
    var data = google.visualization.arrayToDataTable([
      ["Tipo", "Porcentaje"],
      ["Agua", 32],
      ["Fuego", 12],
      ["Planta", 14],
      ["Tierra", 14],
      ["Hielo", 5],
      ["Eléctrico", 9],
      ["Roca", 11],
      ["Volador", 19],
      ["Venenoso", 33],
      ["Insecto", 12],
      ["Psíquico", 14],
      ["Normal", 24],
      ["Volador", 8],
      ["Dragón", 3]
    ]);

    // Establece las opciones de la grafica
    var options = {
      title: "Tipos de Pokemon"
    };
    let sectionChart = createElement("section");
    sectionChart.setAttribute("id", "pie-chart");
    mainContainer.appendChild(sectionChart);

    // Inicializa y dibuja la grafica
    var chart = new google.visualization.PieChart(
      document.getElementById("pie-chart")
    );
    chart.draw(data, options);
  }
};

const main = async () => {
  const data = await window.functions.getData("./data/pokemon/pokemon.json"); //Guarda la el json generado por la peticion
  createNodes(data.pokemon);
  orderAsc.addEventListener("click", () => ArrayAsc(data.pokemon));
  orderDesc.addEventListener("click", () => ArrayDesc(data.pokemon));
  search.addEventListener("click", () => filterDataByName(data.pokemon));
  averageH.addEventListener("click", () => average(data.pokemon));
  typeChart.addEventListener("click", () => showChart(data.pokemon));
  typesList.addEventListener("click", e => filterDataByType(data.pokemon, e.target.dataset.type));
  weaknessList.addEventListener("click", e => filterDataByWeakness(data.pokemon, e.target.dataset.weakness));
};

main();
