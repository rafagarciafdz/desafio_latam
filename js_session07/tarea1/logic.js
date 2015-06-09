// 1. Pon tu nombre al atributo value del campo first name
$("input[name='firstname']").val("Rafael");

// 2. Pon el valor a la pregunta Favorite Day of Week a Monday
$("select[name='fav_day']").val("Monday");

// 3. Cambia la etiqueta de First name a 'Tu nombre'
$("label[name='first_name_label']").html("Tu nombre");

// 4. Obtén el valor del atributo 'name' del campo Favorite Day of The Week
var cuatro = $("select[name='fav_day']").attr("name");
console.log(cuatro);

// 5. Escoge la opción Female de la pregunta de género.
$("input[type='radio'][name='sex'][value='female']").attr("checked", 1);

// 6. Encuentra la primera form del documento y pon el atributo name = personal_info
//$("form").first().attr("name", "personal_info");
//$("form:nth-child(1)").attr("name", "personal_info");
$("form").eq(0).attr("name", "personal_info");


// 7. Encuentra la segunda form del documento y pon el atributo name = job_info
//$("form").last().attr("name", "job_info");
//$("form:nth-child(4)").attr("name", "job_info");
$("form").eq(1).attr("name", "job_info");

// 8. Agrega un título h1 a cada una de las formas que diga 'Entrevista personal', 'Entrevista de trabajo' respectivamente
$("label[name='first_name_label']").before("<h1>Entrevista personal</h1>");
$("form").last().before("<h1>Entrevista de trabajo</h1>");

// 9. Agrega un título a la pregunta Male/Female 'Gender'
$("input[type='radio'][name='sex'][value='male']").before("<h2>Gender</h2>");

// 10. Agrega una pregunta Email: con un input de tipo texto después de last name
$("input[name='lastname']").after("<br>Email<br><input type='text'>");

// 11. Agrega la clase form a ambas formas
$("form").addClass("form");