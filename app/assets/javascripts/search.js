/*global jQuery*/(document).ready(function($) {
  if ($('#edit-from').val()=="") $('#edit-from').val("Откуда");
  if ($('#edit-to').val()=="") $('#edit-to').val("Куда");

	$("#edit-from").focus(function() {
		if ($(this).val()=="Откуда") $(this).val("");
		$(this).css("color", "black");
	});
	
	$("#edit-from" ).blur(function() {
		if ($(this).val()==""){
			$(this).val("Откуда"); 
			$(this).css("color", "#c1c1c1");
		}
	});
	
	$("#edit-to").focus(function() {
		if ($(this).val()=="Куда") $(this).val("");
		$(this).css("color", "black");
	});
	
	$("#edit-to").blur(function() {
		if ($(this).val()==""){
			$(this).val("Куда");
			$(this).css("color", "#c1c1c1");
		}
	});
	
	$("#go").click(function(e) {			
		if ($("#edit-from").val()=="Откуда") $("#edit-from").val("");
		if ($("#edit-to").val()=="Куда") $("#edit-to").val("");
		$("#edit-from").val($("#edit-from").val().charAt(0).toUpperCase() + $("#edit-from").val().slice(1));
		$("#edit-to").val($("#edit-to").val().charAt(0).toUpperCase() + $("#edit-to").val().slice(1));
		window.open("//ros-bilet.ru/search/list?from="+$("#edit-from").val()+"&to="+$("#edit-to").val()+"&ref=",'_top');
	});
});