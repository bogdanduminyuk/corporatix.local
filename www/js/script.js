window.onload = function () {
	$("#nav table td").click(
		function () {
			$("#nav table td.active").removeClass("active");
			$(this).addClass("active");
		}
	);
	
	$("#slider_pagination span").click(
		function () {
			$("#slider_pagination span.active").removeClass("active");
			$(this).addClass("active");
		}
	);
	
}