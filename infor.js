fetch('infor.json')
  .then(response => response.json())
  .then(data => {
    /* NOMBRE DE TITUTLO */
    var nombre = data.nombre.nombre;
    $("#nombre").append("<p> " + nombre + " </p>");

    /* MENSAJE PRINCIPAL */
    $("#texto").append('<h2 id="titulo">' + data.tituloPrincipal.titulo + '</h2>');
    $("#texto").append('<p id="mensaje">' + data.tituloPrincipal.subtitulo + '</p>');
    $("#texto").append('<button><span class="material-symbols-outlined">expand_more</span></button>');

    /* INFORMACION SOBRE MI */
    $("#left").append('<h2>' + data.sobreMi.titulo + '</h2>');
    $("#left").append('<p>' + data.sobreMi.parrafo1 + '</p>');
    $("#left").append('<p>' + data.sobreMi.parrafo2 + '</p>');

    /* HABILIDADES */
    /* $("#skils").append('<h2>' + data.habilidades.titulo + '</h2>'); */

    /* PROYECTOS */
    $("#tituloProyectos").text(data.proyectos.titulo);
    $("#pProyectos").text(data.proyectos.parrafo1);

    /* CONTACTO */
    $("#tContacto").text(data.contacto.titulo);
    $("#pContacto").text(data.contacto.parrafo1);
  })
  .catch(error => {
    // Maneja el error en caso de que la carga falle
    console.error('Error al cargar el archivo JSON:', error);
});
