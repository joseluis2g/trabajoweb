$(document).ready(function () {
    ingreso();
});

addEvents:function ingreso() {
    $('#validacion').on("click", function () {
		
        var name = $("#name").val();
        var password = $("#password").val();
        
        
        if (name != null && name.length > 0 &&
            password != null && password.length > 0)
        {
        	var attempt = 3;
            if (name == "prueba" && password == "123"){
				$('.alert-header h3').text('Exito!');
				$('.alert-message p').text('Ingreso exitoso! Seras redireccionado en 3 segundos');
				$('.alert-expander').fadeIn(400);
				$('.alert-fade').fadeIn();
				window.setTimeout(function () { 
			        window.location = 'contacto.html';
			    }, 3000); 
				return false;
			} else {
				$('.alert-header h3').text('Atencion!');
				$('.alert-message p').text('Verifique correctamente la informacion que ingreso');
				$('.alert-expander').fadeIn(400);
				$('.alert-fade').fadeIn();
				return false;
			}
        } else {
			$('.alert-header h3').text('Atencion!');
			$('.alert-message p').text('Verifique los campos antes de enviar la informacion');
			$('.alert-expander').fadeIn(400);
			$('.alert-fade').fadeIn();
			return false;
		}
		return false;
    });	
    
    $('.alert-close').click(function(){
        $('.alert-expander').fadeOut(300);
        $('.alert-fade').fadeOut();
    });
}
