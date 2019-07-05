POKEMON.pokemon.forEach(showData = (objPokemon) => {
        //Crea un div por cada  pokemon
        let elementDiv= document.createElement("div");
        //Crea un nodo div
        document.getElementById("results-page").appendChild(elementDiv)//Adjunta el elemento(div) al div con id result-page
        elementImage.setAttribute("class",objPokemon.img);
        //Muestra la imagen en el div (elementDiv)
        let elementImage= document.createElement("img");//Crea un nodo img
        elementImage.setAttribute("src",objPokemon.img);//Establece el atributo(src) al elemento (elementImage)
        /* elementImage.setAttribute("style", ";");*/
        elementDiv.appendChild(elementImage);//Agrega elementImage al div (elemntDiv) 
        //Muestra el nombre en el div (elementDiv)
        let elementName= document.createElement("p");//Crea un nodo p 
        let contentName=document.createTextNode("Nombre: "+objPokemon.name);//Crea un nodo de texto 
        elementName.appendChild(contentName);// Agrega el contenido(contentName) al elemento(elementName)
        elementDiv.appendChild(elementName);//Agrega elementName al div (elemntDiv) 
        //Muestra el tipo en el div (elementDiv)
        let elementType= document.createElement("p");//Crea un nodo p 
        let contentType=document.createTextNode("Tipo: "+objPokemon.type);//Crea un nodo de texto 
        elementType.appendChild(contentType);// Agrega el contenido(contentType) al elemento(elementType)
        elementDiv.appendChild(elementType);//Agrega elementType al div (elemntDiv) 
        //Muestra las debilidades en el div (elementDiv)
        let elementWeak= document.createElement("p");//Crea un nodo p 
        let contentWeak=document.createTextNode("Debilidades: "+objPokemon.weaknesses);//Crea un nodo de texto 
        elementWeak.appendChild(contentWeak);// Agrega el contenido(contentWeak) al elemento(elementWeak)
        elementDiv.appendChild(elementWeak);//Agrega elementName al div (elemntDiv) 
});