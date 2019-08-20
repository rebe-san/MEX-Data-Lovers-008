//Declaracion de Variables

//Funcion de filtrado po nombre
window.functions={
filterName:(string,array)=>{ // Guarda en filterByName el objeto que cumple con  la condicion.
  let filterByName=array.filter((objPokemon)=> {return objPokemon.name === string;});
  return filterByName;
},
//Filtrado por tipo
filterType:(array,type)=>{// Falta pasar el tipo para quee ejecute la funcion.
  let filterType=array.filter((objPokemon)=> {
      for(let i=0; i< objPokemon.type.length; i++){
        if (objPokemon.type[i] === type) {
          return objPokemon.type[i]===type;
       }
      }        
  });
  console.log(filterType);
  return filterType;
},  

//Filtrado por debilidad
filterWeak:(array,type)=>{// Falta pasar el tipo para quee ejecute la funcion.
  let filterType=array.filter((objPokemon)=> {
      for(let i=0; i< objPokemon.weaknesses.length; i++){
        if (objPokemon.weaknesses[i] === type) {
          return objPokemon.weaknesses[i]===type;
       }
      }        
  });
  console.log(filterType);
  return filterType;
}, 

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
computeStats : (array)=>{
  let averageHeight= 0;
  array.forEach((objPokemon) => { 
    averageHeight=parseFloat(objPokemon.height.slice(0,4))+averageHeight ;
  });
  let avgHeight= averageHeight/array.length; 
  return avgHeight;
}, 
};