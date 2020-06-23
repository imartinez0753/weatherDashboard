// $("h3").text(moment().format("llll"));
var cityLocal = JSON.parse(localStorage.getItem("city")) || [];
//---------------------------------------------------------------------

$(document).ready(function () {
	$(cityLocal).each(function (x) {
		var localLast = $("<button>");
		localLast.text(cityLocal[x]);
		localLast.addClass("list-group-item");
		$("#cityUl").append(localLast);
	});
	function Cheese(cityName) {
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
			$("#tempature").text("Tempature: " + tempature + " F°");
			$("#humidity").text("Humidity: " + humidity + "%");
			$("#windSpeed").text("Wind speed is: " + windSpeed + " MPH");
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
				//---------------------------------------------------------------
				var time1 = forecast.list[0].dt;
				var currentTime = moment.unix(time1).format("L");
				console.log(currentTime);

				$("#day1").text(currentTime);
				$("#temp1").text(
					"Temp: " +
						(forecast.list[0].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid1").text("Humidity: " + forecast.list[0].main.humidity + "%");
				//-----------------------------------------------------------------
				var time2 = forecast.list[1].dt;
				var currentTime2 = moment.unix(time2).format("L");
				console.log(currentTime2);
				$("#day2").text(currentTime2);
				$("#temp2").text(
					"Temp: " +
						(forecast.list[1].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid2").text("Humidity: " + forecast.list[1].main.humidity + "%");
				//----------------------------------------------------------------
				var time3 = forecast.list[2].dt;
				var currentTime3 = moment.unix(time3).format("L");
				console.log(currentTime);
				$("#day3").text(currentTime3);
				$("#temp3").text(
					"Temp: " +
						(forecast.list[2].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid3").text("Humidity: " + forecast.list[2].main.humidity + "%");
				//--------------------------------------------------------------------
				var time4 = forecast.list[3].dt;
				var currentTime4 = moment.unix(time4).format("L");
				console.log(currentTime4);
				$("#day4").text(currentTime4);
				$("#temp4").text(
					"Temp: " +
						(forecast.list[3].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid4").text("Humidity: " + forecast.list[3].main.humidity + "%");
				//----------------------------------------------------------------------
				var time5 = forecast.list[4].dt;
				var currentTime5 = moment.unix(time5).format("L");
				console.log(currentTime5);
				$("#day5").text(currentTime5);
				$("#temp5").text(
					"Temp: " +
						(forecast.list[4].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid5").text("Humidity: " + forecast.list[4].main.humidity + "%");
			});
		});
	}
	$(".list-group-item").on("click", function () {
		console.log("hit");

		var placeName = $(this).text();
		$("h3").text(placeName + ": " + moment().format("llll"));
		Cheese(placeName);
	});

	$("#search").on("click", function () {
		console.log("hit");
		var cityName = $("#cityInput").val();
		//------------------------------------------

		var hasCity = false;
		if (cityLocal != null) {
			$(cityLocal).each(function (x) {
				if (cityLocal[x] === cityName) {
					hasCity = true;
				}
			});
		}
		if (hasCity === false) {
			cityLocal.push(cityName);
		}
		localStorage.setItem("city", JSON.stringify(cityLocal));
		// localStorage.getItem("cityLocal" + cityName);
		//--------------------------------------------------------
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
			$("#tempature").text("Tempature: " + tempature + " F°");
			$("#humidity").text("Humidity: " + humidity + "%");
			$("#windSpeed").text("Wind speed is: " + windSpeed + " MPH");
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
				//---------------------------------------------------------------
				var time1 = forecast.list[0].dt;
				var currentTime = moment.unix(time1).format("L");
				console.log(currentTime);

				$("#day1").text(currentTime);
				$("#temp1").text(
					"Temp: " +
						(forecast.list[0].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid1").text("Humidity: " + forecast.list[0].main.humidity + "%");
				//-----------------------------------------------------------------
				var time2 = forecast.list[1].dt;
				var currentTime2 = moment.unix(time2).format("L");
				console.log(currentTime2);
				$("#day2").text(currentTime2);
				$("#temp2").text(
					"Temp: " +
						(forecast.list[1].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid2").text("Humidity: " + forecast.list[1].main.humidity + "%");
				//----------------------------------------------------------------
				var time3 = forecast.list[2].dt;
				var currentTime3 = moment.unix(time3).format("L");
				console.log(currentTime);
				$("#day3").text(currentTime3);
				$("#temp3").text(
					"Temp: " +
						(forecast.list[2].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid3").text("Humidity: " + forecast.list[2].main.humidity + "%");
				//--------------------------------------------------------------------
				var time4 = forecast.list[3].dt;
				var currentTime4 = moment.unix(time4).format("L");
				console.log(currentTime4);
				$("#day4").text(currentTime4);
				$("#temp4").text(
					"Temp: " +
						(forecast.list[3].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid4").text("Humidity: " + forecast.list[3].main.humidity + "%");
				//----------------------------------------------------------------------
				var time5 = forecast.list[4].dt;
				var currentTime5 = moment.unix(time5).format("L");
				console.log(currentTime5);
				$("#day5").text(currentTime5);
				$("#temp5").text(
					"Temp: " +
						(forecast.list[4].main.temp * 1.8 - 459.67).toFixed(2) +
						" F°"
				);
				$("#humid5").text("Humidity: " + forecast.list[4].main.humidity + "%");
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
});
