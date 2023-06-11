fetch('../json/infor.json')
  .then(response => response.json())
  .then(data => {
    /* NOMBRE DE TITUTLO */
    var nombre = data.nombre.nombre;
    $("#nombre").append("<p> " + nombre + " </p>");

    /* MENSAJE PRINCIPAL */
    $("#banner").append('<h2 id="titulo">' + data.tituloPrincipal.titulo + '</h2>');
    $("#banner").append('<p id="mensaje">' + data.tituloPrincipal.subtitulo + '</p>');

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

fetch('../json/projectslinks.json')
  .then(response => response.json())
  .then(data => {

    var links = [data.alphaBotChat.link];
    var projectNames = [data.alphaBotChat.name];

    for (let i = 0; i < links.length; i++) {
      $("#galery").append('<div id="project"> <a href="' + links[i] + '" target="_blank">' + projectNames[i] + '</a></div>');
    }

  console.error('Error al cargar el archivo JSON:', error);
});
