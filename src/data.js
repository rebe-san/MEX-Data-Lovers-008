//Declaracion de funciones
window.functions = {
  getData: async url => {
    try {
      //Hace la Peticion
      const respuesta = await fetch(url);

      //respuesta en formato json
      return await respuesta.json();
    } catch (error) {
      console.error(error);
    }
  },

  //Filtrado por nombre
  filterName: (string, array) => {
    return array.filter(objPokemon => {
      return objPokemon.name === string;
    });
  },

  //Filtrado por tipo
  filterType: (array, type) => {
    return array.filter(objPokemon => {
      for (let i = 0; i < objPokemon.type.length; i++) {
        return objPokemon.type[i] === type;
      }
    });
  },

  //Filtrado por debilidad
  filterWeak: (array, type) => {
    return array.filter(objPokemon => {
      for (let i = 0; i < objPokemon.weaknesses.length; i++) {
        return objPokemon.weaknesses[i] === type;
      }
    });
  },

  //Funcion de ordenamiento por nombre de forma ascendente
  orderedAscArray: array => {
    return array.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  },

  //Funcion de ordenamiento por nombre de forma ascendente
  orderedDescArray: array => {
    return array.sort(function(a, b) {
      if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  },

  computeStats: array => {
    let averageHeight = 0;
    array.forEach(objPokemon => {
      averageHeight = parseFloat(objPokemon.height.slice(0, 4)) + averageHeight;
    });
    return averageHeight / array.length;
  }
};
