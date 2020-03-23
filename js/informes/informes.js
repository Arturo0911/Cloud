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
        FormOcultar.classList.add('visible');
        Contenido_ocultar_form.classList.add('visible');
    });

    buttonClose.addEventListener('click', function() {
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


    let BtnModifyClose = document.getElementById('BtnCerrarModify'),
        FormModify = document.getElementById('Container_modify'),
        SubFormModify = document.getElementById('sub_containter_modify');


    BtnModifyClose.addEventListener('click', function() {
        FormModify.classList.remove('visible');
        SubFormModify.classList.remove('visible');
    });


    $(document).on('click', '.Btn_modify', function() {
        let element = $(this)[0].parentElement.parentElement;
        let id_beca = $(element).attr('cedulaBeca');
        $.post('../php/backend/updatedata/getdatabecas.php', { id_beca }, function(response) {
            const JsonData = JSON.parse(response);

            $('#Modify_tipo_beca').val(JsonData.tipo_beca);
            $('#Modify_cedula').val(JsonData.cedula_becado);
            $('#Modify_nombres').val(JsonData.nombres_becado);
            $('#Modify_comentarios_beca').val(JsonData.comentarios_becado);
            FormModify.classList.add('visible');
            SubFormModify.classList.add('visible');
        });
    });


    $('#Form_modify').submit(function(e) {

        const DataModify = {
            modificar_tipo_beca: $('#Modify_tipo_beca').val(),
            modificar_cedula: $('#Modify_cedula').val(),
            modificar_nombres: $('#Modify_nombres').val(),
            modificar_comentarios: $('#Modify_comentarios_beca').val()
        }

        $.post('../php/backend/updatedata/updatebecas.php', DataModify, function(respuesta) {
            alert(respuesta);
            $('#Form_modify').trigger('reset');
            FormModify.classList.remove('visible');
            SubFormModify.classList.remove('visible');
            GetBecas();
        });
        e.preventDefault();
    });

});