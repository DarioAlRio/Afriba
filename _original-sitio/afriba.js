function slideShow() {

    //Set the opacity of all images to 0
    //Pone a 0 la opacidad de todas las imágenes
    $('#seccion-slider a').css({ opacity: 0.0 });

    //Get the first image and display it (set it to full opacity)
    //Obtiene la primera imagen y la muestra (pone a 1 la opacidad)
    $('#seccion-slider a:first').css({ opacity: 1.0 });

    //Set the caption background to semi-transparent
    $('#seccion-slider .caption').css({ opacity: 0.8 });

  //Resize the width of the caption according to the image width
    $('#seccion-slider .caption').css({ width: $('#seccion-slider a').find('img').css('width') });

  //Get the caption of the first image from REL attribute and display it
    $('#seccion-slider .content').html($('#seccion-slider a:first').find('img').attr('rel'))
  .animate({ opacity: 0.8 }, 400);

  //Call the gallery function to run the slideshow, 6000 = change to next image after 10 seconds
  setInterval('gallery()', 6000);

}

function gallery() {

  //if no IMGs have the show class, grab the first image
    var current = ($('#seccion-slider a.show') ? $('#seccion-slider a.show') : $('#seccion-slider a:first'));

  //Get next image, if it reached the end of the slideshow, rotate it back to the first image
    var next = ((current.next().length) ? ((current.next().hasClass('caption')) ? $('#seccion-slider a:first') : current.next()) : $('#seccion-slider a:first'));

  //Get next image caption
  var caption = next.find('img').attr('rel');

  //Set the fade in effect for the next image, show class has higher z-index
  next.css({ opacity: 0.0 })
  .addClass('show')
  .animate({ opacity: 1.0 }, 1000);

  //Hide the current image
  current.animate({ opacity: 0.0 }, 1000)
  .removeClass('show');

   //Set the opacity to 0 and height to 1px
  $('#seccion-slider .caption').animate({ opacity: 0.0 }, { queue: false, duration: 0 }).animate({ height: '1px' }, { queue: true, duration: 300 });

   //Animate the caption, opacity to 0.8 and heigth to 100px, a slide up effect
  $('#seccion-slider .caption').animate({ opacity: 0.8 }, 100).animate({ height: '50px' }, 500);

   //Display the content
  $('#seccion-slider .content').html(caption);
}

//Validación del formulario de confirmacion del pedido

function validaNumero(){
var numero ='';

  numero = $("input[name='numero']").val();
  if ($.trim(numero)==''){
    //alert('Debe teclear un número o código para el pedido.');
    $("input[name='numero']").focus();
    $("input[name='numero']").addClass("destacar");
    return false;
  }
  else return true;
}

function validaFecha(){

var Fecha_de_Recogida = new String("");
    s = new String("");
    diar = new String("");
    mesr = new String("");
    anor = new String("");
    diah = new String("");
    mesh = new String("");
    anoh = new String("");
    hoy = new String("");

  hoy = $("input[name='hoy']").val();
  Fecha_de_Recogida = $("input[name='fecha']").val();

  if ( (Fecha_de_Recogida.length < 10) || (Fecha_de_Recogida.indexOf("/") != 2 ))
  {
	//alert('(Fecha_de_Recogida.length < 10) || (Fecha_de_Recogida.indexOf("/") != 2 ) || (Fecha_de_Recogida.indexOf("/") != 5 )');
    $("input[name='fecha']").focus();
    $("input[name='fecha']").addClass("destacar");
    return false;
  }  
  else 
  {
    s = Fecha_de_Recogida.substring(3, Fecha_de_Recogida.length);
    
    diar = Fecha_de_Recogida.substring(0,2);
    mesr = Fecha_de_Recogida.substring(3,5);
    anor = Fecha_de_Recogida.substring(6, Fecha_de_Recogida.length);
    
    if ( (isNaN(diar)) || (isNaN(mesr)) || (isNaN(anor)) || (parseInt(diar, 10) > 31) || (parseInt(diar, 10) <= 0) || (parseInt(mesr, 10) > 12) || (parseInt(mesr, 10) <= 0))
    {
      //alert('isNaN');
      $("input[name='fecha']").focus();
      $("input[name='fecha']").addClass("destacar");
      return false;
    }
    
    diah = hoy.substring(0,2);
    mesh = hoy.substring(3,5);
    anoh = hoy.substring(6, Fecha_de_Recogida.length);
    
    if (parseInt(anor, 10) < parseInt(anoh, 10))
    {
      alert('La fecha de carga: ' + Fecha_de_Recogida + '\n no puede ser anterior a la fecha de hoy: ' + hoy);	
      $("input[name='fecha']").focus();
      $("input[name='fecha']").addClass("destacar");
      return false;
    }
    else
    { 
    	if ((parseInt(mesr, 10) < parseInt(mesh, 10)) && (parseInt(anor, 10) == parseInt(anoh, 10))) 
	    {
	      alert('La fecha de carga: ' + Fecha_de_Recogida + '\n no puede ser anterior a la fecha de hoy: ' + hoy);
	      $("input[name='fecha']").focus();
	      $("input[name='fecha']").addClass("destacar");
	      return false;
        }
	    else
	    {
 		   if ((parseInt(diar, 10) < parseInt(diah, 10)) && (parseInt(mesr, 10) == parseInt(mesh, 10)) && (parseInt(anor, 10) == parseInt(anoh, 10)))
 		   {
 		     alert('La fecha de carga: ' + Fecha_de_Recogida + '\n no puede ser anterior a la fecha de hoy: ' + hoy);
 		     $("input[name='fecha']").focus();
 		     $("input[name='fecha']").addClass("destacar");
 		     return false;
 	       }	    
       }
    }
  }  
  return true;
}

function validaHora(){
var Hora_de_Carga = new String("");
var Hora = new String("");
var Minutos = new String("");
  
  Hora_de_Carga = $("input[name='hora']").val();
  if ((Hora_de_Carga.length < 5) || (Hora_de_Carga.indexOf(":") != 2 )) {
    //alert('La hora de carga es incorrecta. El formato es hh:mm');
    $("input[name='hora']").focus();
    $("input[name='hora']").addClass("destacar");
    return false;
  } 
  else {
    Hora = Hora_de_Carga.substring(0,1);
    Minutos = Hora_de_Carga.substring(3,4);
    if ( (isNaN(Hora)) || (isNaN(Minutos)) ){
      //alert('La hora de carga es incorrecta. El formato es hh:mm');
	  $("input[name='hora']").focus();
      $("input[name='hora']").addClass("destacar");
      return false;
    }
    if ( (parseInt(Hora) < 0) || (parseInt(Hora) > 23) ||
         (parseInt(Minutos) < 0) || (parseInt(Minutos) > 59) ) {
      //alert('La hora de carga es incorrecta. El formato es hh:mm');
      $("input[name='hora']").focus();
      $("input[name='hora']").addClass("destacar");
      return false;
    }
  }
  return true;
}

function validaPorteador(){
  var PorteadorStr = '';
  PorteadorStr = $("input[name='porteador']").val();
  if ($.trim(PorteadorStr) == '') {
    $("input[name='porteador']").focus();
    $("input[name='porteador']").addClass("destacar");
    return false;
  }
  else return true;
}

function validaDestinatario(){
  var DestinatarioStr = '';
  DestinoStr = $("input[name='destinatario']").val();
  if ($.trim(DestinoStr) == '') {
    $("input[name='destinatario']").focus();
    $("input[name='destinatario']").addClass("destacar");
    return false;
  }
  else return true;
}

function validaPicking(){
  diferencia = 0;
  cantidad = 0;
  intReferencias = $("#formulario-confirmacion input[name='cantidad']").length;

  // Comprobar que las cantidades tecleadas son números
  for (i=0; i < intReferencias; i++){
    if (isNaN($("#formulario-confirmacion input[name='cantidad']:eq(" + i + ")").val())){
      alert('Debe teclear una cantidad');	
      $("#formulario-confirmacion input[name='cantidad']:eq(" + i + ")").focus();
      $("#formulario-confirmacion input[name='cantidad']:eq(" + i + ")").addClass("destacar");
      return false;
    }
    cantidad = $("#formulario-confirmacion input[name='cantidad']:eq(" + i + ")").val() + cantidad;
  }
  
  // Comprobar que que haya tecleado una cantidad en al menos una referencia  
  if (cantidad == 0){
  	alert( 'Debe teclear una cantidad en al menos una referencia.' );
    $("#formulario-confirmacion input[name='cantidad']:eq(0)").focus();
    return false;        
  }  
  return true;
}
  
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


$(function () {
            
            //Execute the slideShow
            slideShow();
            
 			$( document ).tooltip({
				position: {
					my: "center bottom-20",
					at: "center top",
					using: function( position, feedback ) {
						$( this ).css( position );
						$( "<div>" )
							.addClass( "arrow" )
							.addClass( feedback.vertical )
							.addClass( feedback.horizontal )
							.appendTo( this );
					}
				}
			});            
            //Oculta los enlaces que aún no están activos.
            $("[href='#']").hide(); 
            
            $("[tabindex='0']").focus();
            
			/* modal windows */
			$("a.modal").on("click", function(){
		        /* fade in the modal window and add a close button to it */
		        $("#loginWindow").css({});
		        $("#loginWindow").fadeIn(250).prepend("<a href='' class='close' style='float:right;margin-bottom:18px'><img src='images/stop.png' style='border: 0;'/></a>");
		        /* 
		         * define the margins so that the modal is centered properly on the screen
		         * we add 80px to the height/width to accomodate for the padding and border
		         * width defined in the css
		         */
		        var modalMarginTop = ($("#loginWindow").height() + 80) / 2;
		        var modalMarginLeft = ($("#loginWindow").width() + 80) / 2;
		        /* apply the margins to the modal window */
		        $("#loginWindow").css({
		            'margin-top' : -modalMarginTop,
		            'margin-left' : -modalMarginLeft
		        });
		        
		        $("#loginWindow").css("display", "table");
		        $("#loginWindow").css("border-collapse", "separate");
		        $("#loginWindow").css("border-spacing", "5px 8px");
		        
		        $("#loginWindow [name='Login']").focus();
	
		        /* fade in the shade! (tired of the cheesy jokes yet?) */
		        $("body").append("<div id='modalShade'></div>"); // add the shade layer to bottom of the body
		        $("#modalShade").css("opacity", 0.7).fadeIn(250); // set the opacity with jQuery to avoid all of the nasty CSS needed for IE
		        return false; // keep the link from acting naturally
		    });
			
		    /*
		     * close the modal and pull down the shade
		     */

		    $("a.close, #modalShade").on("click", function() { // clicking on the close or shade layer
		    	
		        $("#modalShade", "#loginWindow").fadeOut(function() {
		        	$("#modalShade, a.close").remove();  // remove the shade and the close button
    		    });
    		    return false;
        	});            
        	
        	//Validar formulario de contacto
        	$("input[name='enviarEmail']").on("click", function(){
        	  
        	  var enviar = true;
        	  
        	  if (($.trim($("input[name='nombre']").val()) == '')){
        	    $("#errorNombre").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("input[name='nombre']").addClass("destacar");
        	    enviar = false;
        	  }
        	  
        	  if (($.trim($("input[name='telefono']").val()) == '')){
        	    $("#errorTelefono").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("input[name='telefono']").addClass("destacar");
        	    enviar = false;
        	  }   
        	  
        	  if (($.trim($("input[name='empresa']").val()) == '')){
        	    $("#errorEmpresa").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("input[name='empresa']").addClass("destacar");
        	    enviar = false;
        	  }           	  
        	  
			  if (!IsEmail($("input[name='email']").val())){
        	    $("#errorEmail").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("input[name='email']").addClass("destacar");
        	    enviar = false;
			  }	  

        	  if (!($("input[name='PaletA']").prop("checked")) && !($("input[name='PaletE']").prop("checked"))){
        	    $("#errorTipo").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    enviar = false
        	  }
        	  
        	  if (!($("input[name='H180']").prop("checked")) && !($("input[name='H190']").prop("checked")) && !($("input[name='H230']").prop("checked"))){
        	    $("#errorAltura").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    enviar = false;
        	  }          	  

        	  if (!($("input[name='P800']").prop("checked")) && !($("input[name='P1000']").prop("checked")) && !($("input[name='P1250']").prop("checked"))){
        	    $("#errorPeso").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    enviar = false;
        	  }          	  

        	  if (!($.isNumeric($("input[name='stock']").val()))){
        	    $("#errorStock").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("input[name='stock']").addClass("destacar");
        	    enviar = false;
        	  }
        	  else {
        	    if (parseInt($("input[name='stock']").val()) <= 0){
      	  	    	$("#errorStock").fadeIn();
      	  	    	$("#errorGeneral").fadeIn();
        	    	$("input[name='stock']").addClass("destacar");
        	    	enviar = false;
        	    }
        	  } 

        	  if (!($.isNumeric($("input[name='entradas']").val()))){
        	    $("#errorEntradas").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("input[name='entradas']").addClass("destacar");
        	    enviar = false;
        	  }
        	  else {
        	    if (parseInt($("input[name='entradas']").val()) <= 0){
      	  	    	$("#errorEntradas").fadeIn();
      	  	    	$("#errorGeneral").fadeIn();
        	    	$("input[name='entradas']").addClass("destacar");
        	    	enviar = false;
        	    }
        	  } 

        	  if (($.trim($("textarea[name='mensaje']").val()) == '')){
        	    $("#errorMensaje").fadeIn();
        	    $("#errorGeneral").fadeIn();
        	    $("textarea[name='mensaje']").addClass("destacar");
        	    enviar = false;
        	  }   			  
			  	 
			  if (enviar){
			    $("#formulario-contacto").prop("action", "/cgi-bin/afriba.exe/contacto"); 
 			    $("#formulario-contacto").submit();	
			  }
        	});
        	
        	$("#form_contacto input, textarea").keypress(function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});
        	
        	$("input[name='PaletA']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});
        	
        	$("input[name='PaletE']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});        	
        	
        	$("input[name='H180']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});        	
        	
        	$("input[name='H190']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});        	      
        	
        	$("input[name='H230']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});
        	
        	$("input[name='P800']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});        	        	  	
        	
        	$("input[name='P1000']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});        	        	  	
        	
        	$("input[name='P1250']").on("click", function(){
        	   $(".errorContacto").fadeOut();
        	   $(this).removeClass("destacar");
        	});        	        	  	
        	
        	 // Seleccionar / quitar seleccion a los palés (formulario StockDetallado y formulario PackingList.
        	 $("input[name='todos']").on("click", function(){
        	   checkit = $(this).prop("checked");
        	   referencia = $(this).val();
        	   $("." + referencia).each(function(index){
        	     $(this).prop("checked", checkit);
        	   });
        	 });
        	 
        	 // Validar que haya al menos un palet seleccionado para agregar / eliminar del pedido.
        	 $("input[name='pedido']").on("click", function(){
        	 	var palet = false;
        	 	
        	 	$("input[name='palet']").each(function(index){
        	    	if ($(this).prop("checked")) {
        	    	  palet = $(this).prop("checked");
        	    	}
        	   });

        	   if (palet) { 
        	     if ($("#stockDetallado").length){
        	       $("#stockDetallado").submit(); 
        	     }  
        	     if ($("#eliminar").length){
        	       $("#eliminar").submit(); 
        	     }          	     
        	   }
        	   else { alert('Debe seleccionar al menos un palet.'); }
        	 });
        	 
        	 // Validar que haya al menos un articulo seleccionado para ver
        	  
        	 $("input[name='AceptarSeleccion']").on("click", function(){
        	 	var articulo = false;
        	 	
        	 	$("input[name='articulo']").each(function(index){
        	    	if ($(this).prop("checked")) {
        	    	  articulo = $(this).prop("checked");
        	    	}
        	   });

        	   if (articulo) { 
        	     if ($("#stockDetallado").length){
        	       $("#stockDetallado").submit(); 
        	     }  
        	     if ($("#eliminar").length){
				   $("#eliminar").submit(); 
        	     }
        	   }
        	   else { alert('Debe seleccionar al menos un artículo.'); }
        	 });
       	 

        	 // Validar el formulario de pedidos
        	 $("input[name='enviar']").on("click", function(){
        	 	if (validaNumero() && validaFecha() && validaHora() && validaPorteador() && validaDestinatario()) {
        	 	  $("input[name='enviar']").attr("disabled", true);
        	 	  $("#formulario-confirmacion").prop("action", "/cgi-bin/AfribaNew.exe/EnviarPedido");
        	 	  $("#formulario-confirmacion").submit();
        	 	}
        	 });
        	 
        	 $("input[name='enviarRecepcion']").on("click", function(){
        	 	if (validaNumero() && validaFecha() && validaHora() && validaPicking()) {
        	 	  $("#formulario-confirmacion").prop("action", "/cgi-bin/AfribaNew.exe/EnviarRecepcion");
        	 	  $("#formulario-confirmacion").submit();
        	 	}
        	 });
        	 
        	 $("input[name='enviarPicking']").on("click", function(){
        	 	if (validaNumero() && validaFecha() && validaHora() && validaPicking()) {
        	 	  $("#formulario-confirmacion").prop("action", "/cgi-bin/AfribaNew.exe/EnviarPedidoPicking");
        	 	  $("#formulario-confirmacion").submit();
        	 	}
        	 });
        	 
        	 
        	 $("#formulario-confirmacion input").keypress(function(){
        	   $(this).removeClass("destacar");
        	 });
});

