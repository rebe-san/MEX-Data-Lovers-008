require('../src/data.js'); 
/* require('../src/data/pokemon/pokemon.js');  */
const array= [{
    "name": "Bulbasaur"
  }, {
    "name": "Ivysaur"
  }, {
    "name": "Venusaur"
  }, {
    "name": "Charmander"
  }, {
    "name": "Charmeleon"
  }
];

const arrayOrderAz= [{
  "name": "Bulbasaur"
}, {
  "name": "Charmander"
}, {
  "name": "Charmeleon"
}, {
  "name": "Ivysaur"  
}, {
  "name": "Venusaur"
}
];

const arrayOrderZa= [{
  "name": "Venusaur"
  
}, {
  "name": "Ivysaur" 
  
}, {
  "name": "Charmeleon"
}, {
  "name": "Charmander" 
}, {
  "name": "Bulbasaur"
}
];
describe('dataFunctions', () => {
  it('functions es un objeto', () => {//Test para comprobar que dataFunctions es un objeto 
    expect(typeof(functions)).toBe('object');
  }); 

  it('filterName es un funcion', () => { //Test para comprobar que filtername es una funcion 
    expect(typeof(functions.filterName)).toBe('function');
  });

  it('filterName es correcta', () => { //Test para comprobar que filtername es una funcion 
    expect(functions.filterName('Charmeleon',array)).toEqual([array[4]]);
  });

  it('orderedAscArray es una funcion', () => { //Test para comprobar que filtername es una funcion 
    expect(typeof(functions.orderedAscArray)).toBe('function');
  });
  
  it('orderedAscArray es correcta', () => { //Test para comprobar que filtername es una funcion 
    expect(functions.orderedAscArray(array)).toEqual(arrayOrderAz);
  });

  it('orderedDescArray es una funcion', () => { //Test para comprobar que filtername es una funcion 
    expect(typeof(functions.orderedDescArray)).toBe('function');
  });
  
  it('orderedADescArray es correcta', () => { //Test para comprobar que filtername es una funcion 
    expect(functions.orderedDescArray(array)).toEqual(arrayOrderZa);
  });
});
