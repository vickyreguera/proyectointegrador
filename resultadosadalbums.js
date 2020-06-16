window.addEventListener("load", function () {


    // acá lo de track
    let queryString = new URLSearchParams(location.search)

    let buscaAlbum = queryString.get("buscadoravanzadoalbum");

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q=" + buscaAlbum)

    .then(
        function(respuesta) {
            return respuesta.json();
         }
        )
    .then(
        function(informacion){
            let info = informacion.data;
    
            for (let index = 0; index < 1; index++) {
                const cadaAlbum = info [index];
           
                let idAlbum = cadaAlbum.id
                window.location.href="albums.html?idAlbums=" + idAlbum

                /* TODO ESTO LO TUVIMOS QUE SACAR POR EL WINDOW.LOCATION 
                document.querySelector(".tini").src = cadaAlbum.cover_medium;
               
                let cancion = `<h3 class="nombre"> <a href="albums.html?idAlbums=`+ idAlbum +`"">` + cadaAlbum.title + `</a> </h3>`

                document.querySelector(".nombre").innerHTML = cancion;

                let nombreArtista = cadaAlbum.artist.name;
                let idArtista = cadaAlbum.artist.id;
    
                let todoArtist = `<h5 class="cantante"><a class="linkeando" href="artists.html?idArtist=`+ idArtista + `">`+ nombreArtista + `</a> </li>`
                
                document.querySelector(".cantante").innerHTML = todoArtist;
                
                
                let escuchar = `https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=album&id=` + idAlbum + `&app_id=1`
                
    
                document.querySelector(".tini").src = escuchar

                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idAlbum)
                .then(
                    function(respuesta) {
                        return respuesta.json();
                     }
                    )
                .then(
                    function(resultados){

                        
                        
                

                        let tiempo = resultados.duration;
                        let lanzamiento = resultados.release_date
                        let infoAlbum =  `<article class="txchico"> Duración: </article>
                        <article class="txchico">Fecha de estreno: </article>
                        <article class="separar">` + tiempo + ` segundos</article>
                        <article class="fecha">` + lanzamiento + `</article>`
    

                        document.querySelector(".infoalbum").innerHTML = infoAlbum;
                    })


                fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idAlbum + "/tracks")
                .then(
                    function(respuesta) {
                        return respuesta.json();
                     }
                    )
                .then(
                    function(resultado){
                    
                    console.log(resultado);
                    let otrasCanciones = resultado.data
                    for (let index = 0; index < otrasCanciones.length; index++) {
                    const masSongs = otrasCanciones[index];



                console.log(masSongs);

                let nombreCancion = masSongs.title;
                let idCancion = masSongs.id
                let albumCanciones = `<li class="cancion"> <a href="tracks.html?idTrack=` + idCancion + `">`  + nombreCancion + ` </a> </li>`

                

                document.querySelector(".listacanciones").innerHTML += albumCanciones;



            } // cierra for
            
        })   
    */
            } // cierra for inicial
            
            
        }) // cierra then

    


}) //cierro el onload
