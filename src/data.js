//Declaracion de Variables
let arrayPokemon=POKEMON.pokemon;//Arreglo de objetos pokemon
//Funcion de filtrado po nombre
const filterName=(string)=>{
  let filterName = arrayPokemon.filter((objPokemon)=> {return objPokemon.name === string;});
  return filterName;
}
//Filtrado por tipo
const filterType=(string)=>{
  let filterType = arrayPokemon.filter(
    showType=(objPokemon)=> {
        
    return objPokemon.type === "Grass";});
  return filterType;
}

//Funcion de ordenamiento por nombre de forma ascendente
const orderedAscArray =()=>{
let orderedAscArray=arrayPokemon.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
return orderedAscArray; 
}
//Funcion de ordenamiento por nombre de forma ascendente
const orderedDescArray =()=>{
let orderedDescArray=arrayPokemon.sort(function (a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
 return 0;
});
return orderedDescArray; 
}
//Declaracion de variables globales
window.arrayPokemon=arrayPokemon;
window.filterName=filterName;
window.orderedAscArray=orderedAscArray;
window.orderedDescArray=orderedDescArray;