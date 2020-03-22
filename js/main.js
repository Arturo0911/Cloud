$(document).ready(function() {
    var cedula = sessionStorage.getItem('cedula');
    const CacheLogin = {
        'cedula': cedula
    };

    $.post('../php/common/cache.php', CacheLogin, function(response) {

        const Credenciales_User = JSON.parse(response);
        let template = '';
        Credenciales_User.forEach(element => {
            template += `
            <li>${element.nombres}</li>
            <li>${element.apellidos}</li>
            <li>${element.cargo}</li>
            `
        });

        $('#container').html(template);
        alert('Bienvenido Sr/Sra: ' +
            Credenciales_User[0].nombres + ' ' +
            Credenciales_User[0].apellidos);
    });




    $('#ocultar').click(function(event) {
        event.preventDefault();
        $('#Capaefectos').fadeOut();
        console.log('se está presionando el boton de ocultar');
    });

    $('#mostrar').click(function(event) {
        event.preventDefault();
        $('#Capaefectos').show(1000);
        console.log('se está presionando el boton de mostrar');
    });

    $('#cargando').click(function(event) {
        event.preventDefault();
        $('#cargando_div').css("display", "inline");
        /*$('#destino').load("destino.html", function() {
            $('#cargando_div').css("display", "none");
        });*/
    });

});