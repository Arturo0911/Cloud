$(document).ready(function() {

    //$('#TableWorkers').DataTable();
    let btn_abrir = document.getElementById('Add'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        close = document.getElementById('Close-button');

    btn_abrir.addEventListener('click', function() {
        console.log('El botón de abrir esta funcionando correctamente');
        overlay.classList.add('active');
        popup.classList.add('active');
    });

    close.addEventListener('click', function() {
        console.log('El botón de cerrar está funcionando correctamente');
        overlay.classList.remove('active');
        popup.classList.remove('active');

    });



    function fetchWorkers() {

        $.get('../php/backend/fetch_workers.php', function(response) {

            let Data = JSON.parse(response);
            let Template = '';

            Data.forEach(element => {
                Template += `
                    <tr>
                        <td>${element.cedula}</td>
                        <td>${element.nombres}</td>
                        <td>${element.apellidos}</td>
                        <td>${element.deparmaneto}</td>
                        <td>${element.jornada}</td>
                        <td>
                            <button class="button-danger"><img class ="img_button" src="../statics/icon_images/graphic-design.png">Modificar</button>
                            <button class="button-view"><img class ="img_button" src="../statics/icon_images/visibility.png">Ver</button>
                        </td>
                    </tr>
                `
            });
            $('#workers').html(Template);

        });
        //event.preventDefault();
    }


    $('#FormAddWork').submit(function(e) {
        console.log('El botón de guardar está funcionando');
        const Data = {
            cedula: $('#cedula').val(),
            nombres: $('#nombres').val(),
            apellidos: $('#apellidos').val(),
            Foto_work: $('#Foto_work').val(),
            direccion: $('#direccion').val(),
            telefono: $('#telefono').val(),
            email: $('#email').val(),
            departamento: $('#departamento').val(),
            cargo: $('#cargo').val(),
            jornada: $('#jornada').val(),
            usuario: $('#usuario').val(),
            clave: $('#clave').val()
        };
        $.post('../php/backend/saveworkers.php', Data, function(response) {
            alert(response);
        });
    });
    fetchWorkers();







});