window.addEventListener("load", function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
.then(
   function(respuesta) {
       return respuesta.json();
   }
)
.then(
    function(resultado){ 
        let infoGeneros = resultado.data;

        for (let index = 1; index < infoGeneros.length; index++) {
            const cadaGenero = infoGeneros[index];
            
            let nombreGenero = cadaGenero.name;
 
            let generoCover = cadaGenero.picture_medium; 
 
            let generoId = cadaGenero.id; 
                       
            console.log(generoId)

            let htmlGeneros = `<li class="listagenero"><a href="cadagenero.html?idGenero=`+ generoId + ` "><img src="`+ generoCover +` " class="portadagenero"></a>
            <a href="cadagenero.html?idGenero=` +  generoId + `"><h2 class="cadagenero nombre">` + nombreGenero + ` </h2></a></li>` 

            
            document.querySelector(".listadogeneros").innerHTML += htmlGeneros

       
        } /*cierra for */

        

    }) /* cierra .then */


}) /* cierra window.event */