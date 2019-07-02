const showData = () => { 
    for (let i=0; i<151 ; i++){//ciclo para recorrer el arreglo de objetos
        let objPokemon=POKEMON.pokemon[i];// variable objePokemon guarda el objeto pokemon 
        console.log(objPokemon);   
        let elementName= document.createElement("p");//Crea un nodo p 
        let contentName=document.createTextNode(objPokemon.name);//Crea un nodo de texto 
        elementName.appendChild(contentName);// Agrega el contenido(contentName) al elemento(elementName)
        document.body.appendChild(elementName);//Agrega elementName al final del cuerpo del documento 

        let elementImage= document.createElement("img");//Crea un nodo img
        elementImage.setAttribute("src",objPokemon.img);//Establece el atributo(src) al elemento (elementImage)
        document.body.appendChild(elementImage);//Agrega elementImage al final del cuerpo del documento 
        console.log("OTRO POKEMON");
    }
};
showData();