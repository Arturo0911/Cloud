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

    });


});