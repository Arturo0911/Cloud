$(document).ready(function() {
    function GetBecas() {
        $.get('../php/backend/fetch_becas.php', function(response) {
            const DataBecas = JSON.parse(response);
            let template = '';
            DataBecas.forEach(element => {
                template += `
                <tr cedulaBeca="${element.cedula_becado}">
                    <td>${element.tipo_beca}</td>
                    <td >${element.cedula_becado}</td>
                    <td>${element.nombres_becado}</td>
                    <td>${element.comentarios_becado}</td>
                    <td>
                        <input class="Btn_view" type="Button" value="Revisar">
                        <input class="Btn_modify" type="button" value="Modificar">
                    </td>
                </tr>
                `
            });
            $('#FetchDataBecas').html(template);
        });
    }
    GetBecas();
    let buttonAdd = document.getElementById('BtnAgregar'),
        buttonClose = document.getElementById('BtnClose'),
        FormOcultar = document.getElementById('Form_ocultar'),
        Contenido_ocultar_form = document.getElementById('Contenido_ocultar_form');


    buttonAdd.addEventListener('click', function() {
        console.log('funcionando boton agregar');
        FormOcultar.classList.add('visible');
        Contenido_ocultar_form.classList.add('visible');
    });

    buttonClose.addEventListener('click', function() {
        console.log('funcionando boton quitar');
        FormOcultar.classList.remove('visible');
        Contenido_ocultar_form.classList.remove('visible');
    });

    $('#Form_becas').submit(function(event) {
        DataBecas = {
            Tipo: $('#Tipo_beca').val(),
            Cedula: $('#Cedula').val(),
            Nombres: $('#Nombres').val(),
            Comentarios: $('#Comentarios').val()
        };
        $.post('../php/backend/savebecas.php', DataBecas, function(respuesta) {
            $('#Form_becas').trigger('reset');
            FormOcultar.classList.remove('visible');
            Contenido_ocultar_form.classList.remove('visible');
            alert(respuesta);
            GetBecas();
        });



        event.preventDefault();

    });
    $(document).on('click', '.Btn_modify', function() {
        let element = $(this)[0].parentElement.parentElement;
        //console.log(element);
        let id_beca = $(element).attr('cedulaBeca');
        console.log(id_beca);
        /*$.post('../php/updatedata/updatebecas', function() {

        });*/
    });

});