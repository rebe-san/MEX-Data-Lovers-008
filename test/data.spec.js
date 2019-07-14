require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


// Taller test Silvana
// const dataMock = [
//  {
// informacion de tu data
// },
//  {
// informacionde tu data
// },
//];





//require('../src/data.js');


//describe('filterData', () => {
  //it('is a function', () => {
    //expect(typeof filterData).toBe('function');
  //});

  //it('Deberia retornar un arreglo de objetos', () => {
    //expect(filterData() instanceOf Array).toBe("true");
  //});

  //it('Deberia retornar un arreglo de objetos', () => {
    //expect(filterData(dataMock,"Rick")).toBe([rick]);
  //});

//});