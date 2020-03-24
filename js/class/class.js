$(document).ready(function() {

    let ButtonAdd = document.getElementById('ButonAddClass'),
        ButtonClose = document.getElementById('ButonCloseClass'),
        ButtonCacnel = document.getElementById('BtnClose'),
        DivFather = document.getElementById('form_clases_father'),
        DivSon = document.getElementById('form_clases_child');

    ButtonAdd.addEventListener('click', function() {
        DivFather.classList.add('visible');
        DivSon.classList.add('visible');
    });

    ButtonClose.addEventListener('click', function() {
        DivFather.classList.remove('visible');
        DivSon.classList.remove('visible');
    });

    ButtonCacnel.addEventListener('click', function() {
        DivFather.classList.remove('visible');
        DivSon.classList.remove('visible');
    });

    function Fetch_docentes_clases() {
        $.get('../php/backend/clases/getclases.php', function(response) {
            const ClasesData = JSON.parse(response);
            let templates = '';
            ClasesData.forEach(element => {
                templates += `
                <tr>
                    <td>${element.nombre_materia}</td>
                    <td>${element.grupo_especialidad}</td>
                    <td>${element.director_cedula}</td>
                    <td>${element.director_nombre}</td>
                </tr>
                `
            });
            $('#Clases').html(templates);

        });
    }

    let cedulaDoc = document.getElementById('cedula');
    cedulaDoc.addEventListener('click', function() {
        Dataverificar = {
            cedulaverifi: $('#cedula').val()
        };
        $.post('../php/backend/docentes/getnames.php', Dataverificar, function(respuesta) {
            const datosDoc = JSON.parse(respuesta);
            console.log(respuesta);
            console.log(datosDoc.nombres);
            //console.log(respuesta.nombres);
            $('#Nombres').val(datosDoc.nombres + ' ' + datosDoc.apellidos);
        });
    });

    $('#FormAddClases').submit(function(e) {

        DataClasesadd = {
            especialidad: $('#especialidad').val(),
            materia: $('#materia').val(),
            cedula: $('#cedula').val(),
            Nombres: $('#Nombres').val()
        };
        $.post('../php/backend/clases/addclases.php', DataClasesadd, function(response) {
            alert(response);
        });
        e.preventDefault();
    });




    Fetch_docentes_clases();
});