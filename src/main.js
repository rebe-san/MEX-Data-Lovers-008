//Declaraciion de variables.
const orderAsc=document.getElementById("order-az"); //Elemento A-Z del menu desplegable
const orderDesc=document.getElementById("order-za"); //Elemento Z-A del menu desplegable
const divResults=document.getElementById("results-container");//Contenedor donde se muestra toda la data
const iconoSearch=document.getElementById("icono-search");//Icono de busqueda
const logoHeader=document.getElementById("logo-header");
const averageH=document.getElementById("average-height");
const typeChart=document.getElementById("type-chart");
const arrayPokemon=POKEMON.pokemon;
const typesList= document.getElementById("types-list"); //Menu de tipos
const weaknessList= document.getElementById("weakness-list"); //Menu de tipos
//Funcion que crea los nodos en el div results-container
const createNodes = (array) => {
    array.forEach((objPokemon) => {
    //Crea un div por cada  pokemon
    let elementDiv= document.createElement("div");//Crea un nodo div
    elementDiv.setAttribute("class","obj-pokemon"); //Agrega una clase(objPokemon) al elemento (elementDIv)
    divResults.appendChild(elementDiv);//Adjunta el hijo(elementDiv) al padre(divResults)
    //Muestra la imagen en el div (elementDiv)
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
    let contentType=document.createTextNode("Tipo: "+objPokemon.type);//Crea un nodo de texto 
    elementType.appendChild(contentType);// Adjunta el hijo(contentType) al padre(elementType)
    elementDiv.appendChild(elementType);//Adjunta el hijo(elementType) al padre(elemntDiv) 
    //Muestra las debilidades en el div (elementDiv)
    let elementWeak= document.createElement("p");//Crea un nodo p 
    let contentWeak=document.createTextNode("Debilidades: "+objPokemon.weaknesses);//Crea un nodo de texto 
    elementWeak.appendChild(contentWeak);// Adjunta el hijo(contentWeak) al padre(elementWeak)
    elementDiv.appendChild(elementWeak);//Adjunta el hijo(elementName) al padre(elemntDiv)
});

};
//Funcion que borra los nodos en el div results-container
const  deleteNodes= () => {
    while (divResults.hasChildNodes()) {  
        divResults.removeChild(divResults.firstChild);
    } 
};    
//Funcion que muestra toda la data.
const showData = () => {
    deleteNodes();
    arrayPokemon.sort(function (a, b) {
        return (a.id - b.id);
    }); 
    createNodes(arrayPokemon);
};
//Funcion que muestra la data ordenada de forma ascendente por nombre
const ArrayAsc = () => {
    deleteNodes();
    let array=window.functions.orderedAscArray(arrayPokemon);
    /* array.forEach((objPokemon) => {createNodes(objPokemon);}); */
    createNodes(array);
};
//Funcion que muestra la data ordenada de forma descendente por nombre
const ArrayDesc = () => {
    deleteNodes();
    let array=window.functions.orderedDescArray(arrayPokemon);
    createNodes(array);
};
//Funcion que filtra la data por nombre.
const filterDataByName = () => {
    deleteNodes(); 
    let inputName= document.getElementById("input-name").value;
    let inputNameConverted = inputName[0].toUpperCase() +inputName.slice(1).toLowerCase();
    let array= window.functions.filterName(inputNameConverted,arrayPokemon);
    createNodes(array);
};  
//Funcion que muestra la data ordenada de forma ascendente por nombre
const filterDataByType = (type) => {
    console.log(type);
    deleteNodes(); 
    let array= window.functions.filterType(arrayPokemon,type);
    createNodes(array);
}; 

//Funcion que muestra la data ordenada de forma ascendente por nombre
const filterDataByWeakness = (type) => {
    console.log(type);
    deleteNodes(); 
    let array= window.functions.filterWeak(arrayPokemon,type);
    createNodes(array);
};  

//Funcion que muestra la altura promedio
const average = () => {
    deleteNodes(); 
    let elementDiv= document.createElement("div");//Crea un nodo div
    elementDiv.setAttribute("class","obj-pokemon"); //Agrega una clase(objPokemon) al elemento (elementDIv)
    let avrHeigth=window.functions.computeStats(arrayPokemon);
    let element=document.createElement("p");//Crea un nodo div
    let content=document.createTextNode("Altura Promedio "+avrHeigth);//Crea un nodo de texto 
    element.appendChild(content);// Adjunta el hijo(contentType) al padre(elementType)
    elementDiv.appendChild(element);
    divResults.appendChild(elementDiv);
};

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
      // Inicializa y dibuja la grafica
      var chart = google.visualization.PieChart(document.getElementById('pie-chart'));
      chart.draw(data, options);
    }
}
//Declaracion de eventos
orderAsc.addEventListener('click',ArrayAsc);
orderDesc.addEventListener('click',ArrayDesc);
iconoSearch.addEventListener('click',filterDataByName);
logoHeader.addEventListener('click',showData);
averageH.addEventListener('click',average);
typeChart.addEventListener('click',showChart);
typesList.addEventListener('click', (e) => { 
    filterDataByType(e.target.dataset.type);
});
weaknessList.addEventListener('click', (e) => { 
    filterDataByWeakness(e.target.dataset.weakness);
});
showData();
/*computeStats();*/