let URI;
let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function(evento){

    evento.preventDefault()
    let artista=document.getElementById("artista").value
    console.log(artista)
    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`
    const TOKEN="Bearer BQBj3G5fBHJ4oCFyjW8Sd9FdlcHHuvuaAQMtXYmnMKcMHCH5mMueXfACnd7wwAQgE2QYqsFYQw-UdDGkGuPYhNjOuQPdhKmjBmyo2RH8fBsyDDut5mk2fzWWVzno2x8b4O0JsQxnLo_6cCQ2aPZr83UA3iRJCSQU-PUcgs0lTzvX0-YHys3KQNaGlkzPV73GlBs"
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN},
    }
    fetch(URI,PETICION)
    .then(function(respuesta){
        return respuesta.json() //garantizo formato JSON
    })
    .then(function(respuesta){
        console.log(respuesta) //Hago lo que quiera con respuesta
        console.log(respuesta.tracks) //accedo a un atributo de la respuesta

        //recorrer un arreglo
        let fila=document.getElementById("fila")
        fila.innerHTML =""

        respuesta.tracks.forEach(function(cancion){
            /*console.log(cancion)
            console.log(cancion.name)
            console.log(cancion.preview_url)
            console.log(cancion.album.images[0].url)
            console.log(cancion.popularity)
            console.log(cancion.album.name)
            console.log(cancion.album.release_date)*/
            let columna=document.createElement("div")
            columna.classList.add("col")

            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")

            let audio=document.createElement("audio")
            audio.classList.add("w-100")
            audio.setAttribute("controls","controls")
            audio.src=cancion.preview_url

            let imagen=document.createElement("img")
            imagen.classList.add("h-100","w-100","img-fluid")
            imagen.src=cancion.album.images[0].url

            let nombre=document.createElement("h6")
            nombre.classList.add("fw-bold", "text-center")
            nombre.textContent=cancion.album.name

            let popularidad=document.createElement("p")
            popularidad.classList.add("text-warning", "text-center")
            popularidad.textContent="Popularidad"+cancion.popularidad
            
        

            //PADRES E HIJOS
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(audio)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(popularidad)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)



        })


    })
    .catch(function(respuestaError){
        console.log(respuestaError)
    })

})

//RECETA PARA CONSUMIR APIS CON JS PURO

//1. si yo quiero consumir un api
//debo saber PARA DONDE IR Y A QUE SERVICIO....
//DEBO CONFIGURAR LA URI


//2. Configuro datos Especiales o DE CONTROL en el servidor


//3. Configuro la peticion
//NOTA: SOLO POST Y PUT CONFIGURAN BODY
//PARA JS LA PETICION ES UN OBJETO


//4. ARRANQUE PUES MIJO
//CONSUMA EL API
