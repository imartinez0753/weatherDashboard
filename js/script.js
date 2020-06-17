// $("h3").text(moment().format("llll"));

$("#poop").on("click", function () {
	console.log("hit");
	var cityName = $("#cityInput").val();
	var cityResult = $("<button>");
	cityResult.addClass("list-group-item");
	cityResult.text(cityName);
	$("#cityUl").append(cityResult);
	$("h3").text(cityName + " " + moment().format("llll"));

	// console.log(inputText);

	$.ajax({
		url:
			"https://api.openweathermap.org/data/2.5/weather?q=" +
			cityName +
			",us&appid=6f57cdea4243d1500ab921ec9947fe41",
		method: "GET",
	}).then(function (response) {
		console.log(response);
	});
	console.log($("#cityInput").val());
});
