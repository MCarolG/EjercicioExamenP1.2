fetch("https://fakestoreapi.com/products")
    .then(Response => Response.json()) //Convierte la data a Json
    .then(data => {
        let fila = '<tr><th>Titulo</th><th>Precio</th><th>Descripcion</th><th>Categoria</th><th>imagen</th></tr>'
        for (let usuario of data) {
            fila += `<tr><td>${data.title}<td>
                        <td>${data.price}<td>
                        <td>${data.description}<td>
                        <td>${data.category}<td>
                        <td>${data.imagen}<td><tr>`
        }
        document.getElementById("tabla").innerHTML = fila
    })