// Acá usamos las funciones de Jquery para la consulta de la base de datos.
$(document).ready(function() {
    $('#form-login').submit(function(e) {
        const DataLogin = {
            user: $('#usuario').val(),
            clave: $('#clave').val()
        };
        $.post('php/login/login-success.php', DataLogin, function(response) {

            const data = JSON.parse(response);
            if (data.length == 0) {
                alert('Credenciales incorrectas');
                $('#form-login').trigger('reset');
            } else {
                //console.log('cedula: ' + data[0].cedula);

                const cacheLogin = {
                    'cedula': data[0].cedula
                };
                sessionStorage.setItem('cedula', data[0].cedula);
                window.location.href = 'mainpage.html';
                //console.log('cedula: ' + data[0].cedula);

                //console.log('cedula: ' + data[0].cedula);

            }
        });
        e.preventDefault();
    });
});