$(document).ready(function(){	
	var number_ch = 0;
	var number_spec = 0;
	var number_letter = 0;
	var length_text = false;
	$("#text-password").keyup(function(){
		var text = $(this).val();
		var symbol = text[text.length-1];
		var number=/[^0-9.]/g;//?!№#%:;*/\+-
		//Проверка на длину
		if( 8 <= text.length){
			length_text = true;
		}
		else{
			length_text = false;	
		}
		//Проверям не удалил ли спец. символ, число или букву пользователь
    	number_letter = /[a-zа-яё]/i.test(text);
    	number_ch = /[0-9]/i.test(text);
		number_spec =/[?!№#%:;*/\+-]/i.test(text);
		
	});

	$("#btn-password").click(function(){
		var error = "";
		if(!length_text)
		   error += "Length less than 8* <br>";
		if(!number_letter)
			error += "Not letter* <br>";
		if(!number_spec)
			error += "Not special symbols*<br>";
		if(!number_ch)
			error += "Not number* <br>";
		
		$("#error-password").html(error);		
		$("#error-password").css("color","red");
	});
	

});
