$(document).ready(function(event) {
    alert('Está funcionando el save.js');
    /*let formData = new FormData($('#Form-sava-data-alumno')[0]);*/


    $('#Form-sava-data-alumno').submit(function(e) {
        let Data = {
            cedula: $('#cedula').val(),
            Nombres: $('#Nombres').val(),
            Apellido: $('#Apellido').val(),
            Fecha: $('#Fecha').val(),
            Edad: $('#Edad').val(),
            Sexo: $('#Sexo').val(),
            Foto: $('#Foto').val(),
            Estado: $('#Estado').val(),
            Periodo: $('#Periodo').val(),
            Direccion: $('#Direccion').val(),
            Teléfono: $('#Teléfono').val(),
            curso: $('#curso').val(),
            Nombre_padre: $('#Nombre_padre').val(),
            Telefono_padre: $('#Telefono_padre').val(),
            Nombre_madre: $('#Nombre_madre').val(),
            Telefono_madre: $('#Telefono_madre').val(),
            Parentesco: $('#Parentesco').val(),
            Telefono_emergencia: $('#Telefono_emergencia').val(),
            Grupo: $('#Grupo').val(),
            Peso: $('#Peso').val(),
            Altura: $('#Altura').val(),
            Medicinas: $('#Medicinas').val()
        };
        $.post('../php/backend/savedata.php', Data, function(response) {
            console.log('aqui va el valor de la data que estoy enviando ' + Data);
            console.log(response);
            $('#Form-sava-data-alumno').trigger('reset');
        });
        e.preventDefault();
    });


    event.preventDefault();
});