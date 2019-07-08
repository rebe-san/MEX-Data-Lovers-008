//Declaraciion de variables.
const orderAsc=document.getElementById("order-az"); //Elemento A-Z del menu desplegable
const orderDesc=document.getElementById("order-za"); //Elemento Z-A del menu desplegable
const  divResults=document.getElementById("results-container");//Contenedor donde se muestra toda la data
const  inputName=document.getElementById("input-name");
const  iconoSearch=document.getElementById("icono-search");
//Funcion que crea los nodos en el documento html.        
const nodesPokemon = (objPokemon) => {
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
}
//Funcion que muestra toda la data.
const data = () => { 
    arrayPokemon.forEach((objPokemon) => {nodesPokemon(objPokemon);})
}
//Funcion que muestra la data ordenada de forma ascendente por nombre
const orderArrayAsc = () => {
    while (divResults.hasChildNodes()) {  
        divResults.removeChild(divResults.firstChild);
      } 
    let orderedArray=orderedAscArray();
    orderedArray.forEach(orderData = (objPokemon) => {nodesPokemon(objPokemon);});
}
//Funcion que muestra la data ordenada de forma descendente por nombre
const orderArrayDesc = () => {
    while (divResults.hasChildNodes()) {  
        divResults.removeChild(divResults.firstChild);
    } 
    let orderedArray=orderedDescArray();
    orderedArray.forEach(orderData = (objPokemon) => {nodesPokemon(objPokemon);});
}
//Funcion que busca la data por nombre.
const filterDataByName = () => {
    while (divResults.hasChildNodes()) {
        divResults.removeChild(divResults.firstChild);
    } 
    let inputName= document.getElementById("input-name").value;
    let filterArray=filterName(inputName);
    filterArray.forEach((objPokemon) => { nodesPokemon(objPokemon);});
} 
//Declaracion de eventos
orderAsc.addEventListener('click',orderArrayAsc);
orderDesc.addEventListener('click',orderArrayDesc);
iconoSearch.addEventListener('click',filterDataByName);

data();

