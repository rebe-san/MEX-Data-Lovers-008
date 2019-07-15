//Declaracion de Variables

//Funcion de filtrado po nombre
window.functions={
filterName:(string,array)=>{ // Guarda en filterByName el objeto que cumple con  la condicion.
  let filterByName=array.filter((objPokemon)=> {return objPokemon.name === string;});
  return filterByName;
},
//Filtrado por tipo
/* const filterType=(type)=>{// Falta pasar el tipo para quee ejecute la funcion.
  let filterType = arrayPokemon.filter(filterByType=(objPokemon,type)=> {
      for(let i=0; i< objPokemon.type.length; i++){
        console.log(objPokemon.type);
        return objPokemon.type[i] === type;
      }  
  });
  return filterType;
} */
//Funcion de ordenamiento por nombre de forma ascendente
orderedAscArray:(array)=>{
let orderedArrayAsc=array.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});
return orderedArrayAsc; 
},
//Funcion de ordenamiento por nombre de forma ascendente
orderedDescArray:(array)=>{
let orderedArrayDesc=array.sort(function (a, b) {
  if (a.name > b.name) {
    return -1;
  }
  if (a.name < b.name) {
    return 1;
  }
 return 0;
});
return orderedArrayDesc;
},
/* computeStats : (array)=>{
  let averageHeight= 0;
  array.forEach((objPokemon) => { 
    console.log(objPokemon.height);
    console.log(objPokemon.height.slice(0,4));
    console.log(parseFloat(objPokemon.height.slice(0,4)));
    console.log("Pokemones "+arrayPokemon.length);
    averageHeight=parseFloat(objPokemon.height.slice(0,4))+averageHeight;});
    console.log("Promedio "+averageHeight/arrayPokemon.length);
}, */
};
//Declaracion de variables globales
/* window.filterType=filterType;*/ 

//Calcula el promedio de altura de los pokemones
