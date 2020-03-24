$(document).ready(function() {
    let buttonDocente = document.getElementById('ButonCloseClass'),
        BtnCloseDocentes = document.getElementById('BtnCloseDocentes'),
        form_docentes_father = document.getElementById('form_docentes_father'),
        form_docentes_child = document.getElementById('form_docentes_child');


    buttonDocente.addEventListener('click', function() {
        form_docentes_father.classList.add('visible');
        form_docentes_child.classList.add('visible');
    });

    BtnCloseDocentes.addEventListener('click', function() {
        form_docentes_father.classList.remove('visible');
        form_docentes_child.classList.remove('visible');
        alert($('#EstadoDoc').val());
    });


    $('#FormAddDocentes').submit(function(e) {

        const Datadocente = {
            cedula: $('#cedulaDoc').val(),
            nombres: $('#NombresDoc').val(),
            apellidos: $('#ApellidosDoc').val(),
            foto: $('#FotoDoc').val(),
            fecha_nacimiento: $('#FechaNacimientoDoc').val(),
            estado_civil: $('#EstadoDoc').val(),
            especialidad: $('#especialidadDoc').val(),
            direccion: $('#DireccionDoc').val(),
            email: $('#EmailDoc').val(),
            telefono: $('#TelefonoDoc').val(),
            gSanguineo: $('#GrupoSanguineo').val(),
            peso: $('#PesoCorporal').val(),
            altura: $('#AlturaCorporal').val(),
            medicinas: $('#Medicinas').val(),
            alergias: $('#Alergias').val(),
            patologias: $('#Patologias').val()
        };

        $.post('../php/backend/docentes/savedocentes.php', Datadocente, function(respuesta) {
            alert(respuesta);
            $('#FormAddDocentes').trigger('reset');
            form_docentes_father.classList.remove('visible');
            form_docentes_child.classList.remove('visible');
        });


        e.preventDefault();
    });


});