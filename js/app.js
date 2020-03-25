$(document).ready(function() {

    function GetEvents() {
        $.get('php/backend/fetch_events.php', function(response) {
            //console.log('Funcionando Boton')
            //console.log(response);
            const DataEvents = JSON.parse(response);
            let template_eventos = ''
            DataEvents.forEach(values => {
                template_eventos += `
                <tr>
                    <td>${values.Fecha}</td>
                    <td>${values.titulo}</td>
                </tr>
                `
                $('#Eventos_data').html(template_eventos);
            });

        });
    }

    $('#Form_eventos').submit(function(event) {
        const ValuesEvents = {
            Fecha: $('#Fecha').val(),
            Dia: $('#Dia').val(),
            Cedula: $('#Cedula').val(),
            Nombres: $('#Nombres').val(),
            Titulo: $('#Titulo').val(),
            Descripcion: $('#Descripcion').val()
        };
        $.post('php/backend/save_events.php', ValuesEvents, function(response) {
            alert(response);
            GetEvents();
        });
    });







    $.get('php/backend/users_consult.php', function(response) {

        const Tasks = JSON.parse(response);
        let DataTemplate = '';
        DataTemplate = `
            <tr>
                <td>${Tasks[1].filas_alumnos}</td>
                <td>${Tasks[0].filas}</td>
                <td>${Tasks[2].filas_trabajadores}</td>
            </tr>
                `
        $('#DataUsers').html(DataTemplate);
    });


    var cedula = sessionStorage.getItem('cedula');
    const CacheLogin = {
        'cedula': cedula
    };
    //FetchRows();
    GetEvents();
    $.post('php/common/cache.php', CacheLogin, function(response) {

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

    });




    /*$('#ocultar').click(function(event) {
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
    });

    $('#logo').click(function(event) {
        event.preventDefault();
        $('#Header_class').fadeOut();
    });


    $('#Appear').click(function(event) {
        event.preventDefault();
        $('#Header_class').show(2000);
    });*/


    let ApperButton = document.getElementById('ButtonAdd'),
        closeButton = document.getElementById('Btn_close_week'),
        Hide_form = document.getElementById('Hide_form'),
        popup_form = document.getElementById('popup_form');

    ApperButton.addEventListener('click', function() {
        Hide_form.classList.add('visible');
        popup_form.classList.add('visible');
    });

    closeButton.addEventListener('click', function() {
        Hide_form.classList.remove('visible');
        popup_form.classList.remove('visible');
    });




});