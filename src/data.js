let arrayPokemon=POKEMON.pokemon;

//Funcion de filtrado
const filterName=(string)=>{  
    console.log ("string pasado "+ string)
    let filterName = arrayPokemon.filter((objPokemon)=> {return objPokemon.name === string;});
    //console.log(filterArrayName);
    return filterName;
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
  // a must be equal to b
  return 0;
});
return orderedAscArray;
/*console.log("orderedAscArray");
console.log(orderedAscArray);
console.log("arraypokemon");
console.log(arrayPokemon);*/
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
  // a must be equal to b
  return 0;

});
return orderedDescArray;
/*console.log("orderedDescArray");
console.log(orderedDescArray);
console.log("arraypokemon");
console.log(arrayPokemon);*/

}


window.filterName=filterName;
window.orderedAscArray=orderedAscArray;
window.orderedDescArray=orderedDescArray;
window.arrayPokemon = arrayPokemon;
//Funcion de ordenar por ID
/*const orderedArrayForId =()=>{
arrayPokemon.sort(function (a, b) {//Ordena de forma ascendente
  if (a.id > b.id) {
    return 1;
  }
  if (a.id < b.id) {
    return -1;
  }
  // a must be equal to b
  return 0;
});
}*/