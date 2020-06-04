window.addEventListener("load", function(){

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
       function(respuesta) {
           return respuesta.json();
       }
    )
    .then(
        function(resultado){
            console.log(resultado)
    
            let infoAlbums = resultado.albums.data;
    
           console.log(infoAlbums);
    
           for (let index = 0; index < 1; index++) {
               const cadaAlbum = infoAlbums[index];
               
               let nombreAlbum = cadaAlbum.title;
    
               let albumCover = cadaAlbum.cover_medium; 

               let artsitAlbum = cadaAlbum.artist.name
    
               let albumId = cadaAlbum.id; 
    
               let htmlAlbumsTrending = `<img class= "tini" src="`+ albumCover +`" alt="Album Tini">
               <h3>`+ nombreAlbum + `</h3>
               <h5> de ` + artsitAlbum + `</h5>`

               
               document.querySelector(".col-izq").innerHTML += htmlAlbumsTrending
        
           }
        })

    })
