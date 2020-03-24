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
            //console.log(response);
            const ClasesData = JSON.parse(response);
            let templates = '';
            console.log(ClasesData);
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

    Fetch_docentes_clases();
});