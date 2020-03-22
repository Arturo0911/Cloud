<?php include('includes/header.php');?>
<form action="process/save_data_alumno.php" method="POST" enctype="multipart/form-data">

    <div class="container-ingresos">
        <label >Cedula</label>
        <input type="text" required  name="cedula" placeholder="cedula..">

        <label >Nombres</label>
        <input type="text" required name="Nombres" placeholder="Nombres..">

        <label >Apellido</label>
        <input type="text" required name="Apellido" placeholder="Apellido..">

        <label >Fecha de nacimiento</label>
        <input type="date" required name="Fecha" >

        <label >Edad</label>
        <input type="text" required name="Edad" placeholder="Edad..">

        <label>Sexo</label>
        <select name="Sexo">
            <option value="MASCULINO">MASCULINO</option>
            <option value="FEMENINO">FEMENINO</option>
            <option value="NO BINARIO">NO BINARIO</option>
        </select>

        <label >Foto</label>
        <input type="file" required name="Foto">


        <label >Estado</label>
        <select name="Estado">
            <option value="ACTIVO">ACTIVO</option>
            <option value="INACTIVO">INACTIVO</option>
            <option value="RETIRADO">RETIRADO</option>
        </select>

        <label >Periodo lectivo</label>
        <input type="text" required name="Periodo" placeholder="Periodo lectivo..">

        <label >Direccion</label>
        <input type="text" required name="Direccion" placeholder="Direccion..">

        <label >Teléfono</label>
        <input type="text" required name="Teléfono" placeholder="Teléfono..">

        <label >Último curso</label>
        <input type="text" required name="curso" placeholder="Último curso..">

        <label >Nombre del padre</label>
        <input type="text" required name="Nombre_padre" placeholder="Nombre del padre..">

        <label >Teléfono del padre</label>
        <input type="text" required name="Telefono_padre" placeholder="Teléfono del padre..">

        <label >Nombre de la madre</label>
        <input type="text" required name="Nombre_madre" placeholder="Nombre de la madre..">

        <label >Teléfono de la madre</label>
        <input type="text" required name="Telefono_madre" placeholder="Teléfono de la madre..">

        <label >Parentesco del representante</label>
        <input type="text" required name="Parentesco" placeholder="Parentesco del representante..">

        <label >Teléfono de emergencia</label>
        <input type="text" required name="Telefono_emergencia" placeholder="Teléfono de emergencia..">

        <label >Grupo sanguíneo</label>
        <input type="text" required name="Grupo" placeholder="Grupo sanguíneo..">

        <label >Peso</label>
        <input type="text" required name="Peso" placeholder="Peso en Kgs..">

        <label >Altura</label>
        <input type="text" required name="Altura" placeholder="Altura en metros..">

        <label >Medicinas contradictorias</label>
        <input type="text" required name="Medicinas" placeholder="Medicinas contradictorias..">


        

        <input type="submit" value="Submit" name="Guardar">
    </div>

</form>
<?php include('includes/footer.php'); ?>