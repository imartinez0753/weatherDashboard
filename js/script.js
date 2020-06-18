// $("h3").text(moment().format("llll"));

$("#poop").on("click", function () {
	console.log("hit");
	var cityName = $("#cityInput").val();
	var cityResult = $("<button>");
	// console.log(tempature);
	cityResult.addClass("list-group-item");
	cityResult.text(cityName);
	$("#cityUl").append(cityResult);
	$("h3").text(cityName + ": " + moment().format("llll"));

	// console.log(inputText);

	$.ajax({
		url:
			"https://api.openweathermap.org/data/2.5/weather?q=" +
			cityName +
			",us&appid=6f57cdea4243d1500ab921ec9947fe41",
		method: "GET",
	}).then(function (response) {
		console.log(response);
		var tempature = (response.main.temp * 1.8 - 459.67).toFixed(2);
		var humidity = response.main.humidity;
		var windSpeed = response.wind.speed;

		var lonEl = response.coord.lon;
		var latEl = response.coord.lat;
		// lon.push(lonEl);
		// lat.push(latEl);
		console.log(tempature);
		$("#tempature").text("Tempature: " + tempature);
		$("#humidity").text("Humidity: " + humidity);
		$("#windSpeed").text("Wind speed is: " + windSpeed);
		// $("#uvIndex").text("Uv Index: " + uvIndex);
		var uvIndex =
			"http://api.openweathermap.org/data/2.5/uvi?appid=6f57cdea4243d1500ab921ec9947fe41&lat=" +
			latEl +
			"&lon=" +
			lonEl;
		$.ajax({
			url: uvIndex,
			method: "GET",
		}).then(function (data) {
			console.log(data);
			var uvIndex = data.value;
			$("#uvIndex").text("Uv Index: " + uvIndex);
		});

		var forecast =
			"api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}" +
			"api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={your api key}";
		// console.log(cityName);
		$.ajax({
			url:
				"https://api.openweathermap.org/data/2.5/forecast?q=" +
				cityName +
				",us&appid=6f57cdea4243d1500ab921ec9947fe41",
			method: "GET",
		}).then(function (forecast) {
			console.log(forecast);
		});
	});
	// var lon = [];
	// var lat = [];
	// var lonStr = lon[0];
	// var latStr = lat[0];
	// console.log(lonStr);
	// console.log(latStr);

	// console.log($("#cityInput").val());
});
