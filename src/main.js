//Declaraciion de variables.
const orderAsc=document.getElementById("order-az"); //Elemento A-Z del menu desplegable
const orderDesc=document.getElementById("order-za"); //Elemento Z-A del menu desplegable
const search=document.getElementById("search");//Icono de busqueda
const averageH=document.getElementById("average-height");
const typeChart=document.getElementById("type-chart");
const typesList= document.getElementById("types-list"); //Menu de tipos
const weaknessList= document.getElementById("weakness-list"); //Menu de debilidades
const mainContainer=document.getElementById("main-container");

const main = async () => {
    const data = await window.functions.getData("./data/pokemon/pokemon.json");//Guarda la el json generado por la peticion
    createNodes(data.pokemon);
    orderAsc.addEventListener('click',() => { ArrayAsc(data.pokemon); });
    orderDesc.addEventListener('click',()=>{ArrayDesc(data.pokemon);});
    search.addEventListener('click',()=>{filterDataByName(data.pokemon);});
    averageH.addEventListener('click',()=>{average(data.pokemon);});
    typeChart.addEventListener('click',()=>{showChart(data.pokemon);});
    typesList.addEventListener('click', (e) => { filterDataByType(data.pokemon,e.target.dataset.type);});
    weaknessList.addEventListener('click', (e) => {
    filterDataByWeakness(data.pokemon,e.target.dataset.weakness);
    });
};

//Funcion que crea los nodos en el div results-container
const createNodes = (array) => {
   //section de pokemons
   let sectionResults= document.createElement("section");//Crea un nodo div
   sectionResults.setAttribute("class","container-results");
    array.forEach((objPokemon) => {
    //Crea un div por cada  pokemon
    let elementDiv= document.createElement("div");//Crea un nodo div
    elementDiv.setAttribute("class","obj-pokemon"); //Agrega una clase(objPokemon) al elemento (elementDIv)
    sectionResults.appendChild(elementDiv);//Adjunta el hijo(elementDiv) al padre(divResults)
    //Muestra la imagen en el div (elementDiv)average
    let elementImage= document.createElement("img");//Crea un nodo img
    elementImage.setAttribute("src",objPokemon.img);//Agrega el atributo(src) al elemento (elementImage)
    elementDiv.appendChild(elementImage);//Adjunta el hijo(elementImage) al padre(elementDiv)
    //Muestra el nombre en el div (elementDiv)
    let elementName= document.createElement("p");//Crea un nodo p
    let contentName=document.createTextNode(objPokemon.name);//Crea un nodo de texto
    elementName.appendChild(contentName);// Adjunta el hijo(contentName) al padre(elementName)
    elementDiv.appendChild(elementName);//Adjunta el hijo(elementName) al padre(elemntDiv)
    //Muestra el tipo en el div (elementDiv)
    let elementType= document.createElement("p");//Crea un nodo p
    let contentType=document.createTextNode("Tipo: "+ objPokemon.type);//Crea un nodo de texto
    elementType.appendChild(contentType);// Adjunta el hijo(contentType) al padre(elementType)
    elementDiv.appendChild(elementType);//Adjunta el hijo(elementType) al padre(elemntDiv)
    //Muestra las debilidades en el div (elementDiv)
    let elementWeak= document.createElement("p");//Crea un nodo p
    let contentWeak=document.createTextNode("Debilidades: "+objPokemon.weaknesses);//Crea un nodo de texto
    elementWeak.appendChild(contentWeak);// Adjunta el hijo(contentWeak) al padre(elementWeak)
    elementDiv.appendChild(elementWeak);//Adjunta el hijo(elementName) al padre(elemntDiv)
});
mainContainer.appendChild(sectionResults);
};

//Funcion que borra los nodos en el div results-container
const  deleteNodes= () => {
    while (mainContainer.hasChildNodes()) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
};

//Funcion que muestra la data ordenada de forma ascendente por nombre
const ArrayAsc = (array) => {
    deleteNodes();
    let arrayAsc=window.functions.orderedAscArray(array);
    createNodes(arrayAsc);
};
// //Funcion que muestra la data ordenada de forma descendente por nombre
const ArrayDesc = (array) => {
    deleteNodes();
    let arrayDesc=window.functions.orderedDescArray(array);
    createNodes(arrayDesc);
};
// //Funcion que filtra la data por nombre.
const filterDataByName = (array) => {
    deleteNodes();
    let inputName= document.getElementById("input-name").value;
    let inputNameConverted = inputName[0].toUpperCase() +inputName.slice(1).toLowerCase();
    let arrayName= window.functions.filterName(inputNameConverted,array);
    createNodes(arrayName);

};
// //Funcion que muestra la data ordenada de forma ascendente por nombre
const filterDataByType = (array,type) => {
    console.log(type);
    deleteNodes();
    let arrayType= window.functions.filterType(array,type);
    createNodes(arrayType);
};

// //Funcion que muestra la data ordenada de forma ascendente por nombre
const filterDataByWeakness = (array,type) => {
    console.log(type);
    deleteNodes();
    let arrayWeak= window.functions.filterWeak(array,type);
    createNodes(arrayWeak);
};

// //Funcion que muestra la altura promedio
const average = (array) => {
    deleteNodes();
    let elementDiv= document.createElement("div");//Crea un nodo div
    elementDiv.setAttribute("class","div-average"); //Agrega una clase(objPokemon) al elemento (elementDIv)
    let avrHeigth=window.functions.computeStats(array);
    let element=document.createElement("p");//Crea un nodo div
    let content=document.createTextNode("Altura Promedio "+avrHeigth);//Crea un nodo de texto
    element.appendChild(content);// Adjunta el hijo(contentType) al padre(elementType)
    elementDiv.appendChild(element);
    mainContainer.appendChild(elementDiv);
};
//Grafica de los tipos de pokemon
const showChart = () =>{
    deleteNodes();
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Crea la tabla de datos
      var data = google.visualization.arrayToDataTable([
        ['Tipo', 'Porcentaje'],
        ['Agua', 32],
        ['Fuego', 12],
        ['Planta', 14],
        ['Tierra', 14],
        ['Hielo', 5],
        ['Eléctrico', 9],
        ['Roca', 11],
        ['Volador', 19],
        ['Venenoso', 33],
        ['Insecto', 12],
        ['Psíquico', 14],
        ['Normal', 24],
        ['Volador', 8],
        ['Dragón', 3]
        ]);

      // Establece las opciones de la grafica
      var options = {
                     'title':'Tipos de Pokemon'
                    };
    let elementDiv= document.createElement("div");//Crea un nodo div
    elementDiv.setAttribute("id","pie-chart"); //Agrega una clase(objPokemon) al elemento (elementDIv)
    mainContainer.appendChild(elementDiv);
      // Inicializa y dibuja la grafica
      var chart =new google.visualization.PieChart(document.getElementById('pie-chart'));
      chart.draw(data, options);
    }
};

main();
