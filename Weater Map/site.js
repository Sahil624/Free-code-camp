$('document').ready(function(){
var empx = document.getElementById("temp");  
var cloud = document.getElementById("cloud");
var name = document.getElementById("name");
var weather = document.getElementById("weather");
var wind = document.getElementById("wind");
var lat;
var long;
var unit='c';


function getLocation() {
    if (navigator.geolocation) {
    	console.log(unit);
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    //x.innerHTML = "Latitude: " + position.coords.latitude + 
    //"<br>Longitude: " + position.coords.longitude; 
    lat = position.coords.latitude;
    long = position.coords.longitude;
    setUrl(lat,long,unit);
    console.log(lat);
}

//Set the url by putting lat and long

function setUrl(lat,long){
var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&APPID=5b7dafe069df8056a836b430b440b44b';
console.log(url);

//Get the Actual Object
(function() {
  $.getJSON( url, {
    tags: "mount rainier",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
    	putWeather(data,unit);
      console.log(data);
    });
})();


}

// Puts the Data into HTML

function putWeather(data){
	//unit = 'c';

	var imageUrl = "http://www.ukweatherforecast.co.uk/wp-content/uploads/2016/07/Capture-1.jpg";
	var tep = calcTemp(data.main['temp'],unit);
	temp.innerHTML = tep + ' <sup>o</sup>'+unit  ;
	cloud.innerHTML = data.clouds['all']+'%';
	name.innerHTML = data['name'];
	weather.innerHTML = data.weather[0]['main'];
	wind.innerHTML = data.wind['speed'] + 'm/hr';
	console.log("abc"+ unit);
	setBackground(data);
	setCloud(data);

	function change(unit){
		unit = user.promt('enter');

		if (unit == 'c'){
			unit = 'F';
		}

		else{
			unit = 'c';
		}

		//putWeather(data);
	}	
	
}

function calcTemp(k,unit){
	
	if (unit == 'c'){
	return Math.floor(k-273.15);
	}

	else{
		return Math.floor(k-459.67);
	}
}

function setBackground(data){
		if (data.weather[0]['main'] == 'Clear'){
		imageUrl="http://www.ukweatherforecast.co.uk/wp-content/uploads/2016/07/Capture-1.jpg";
	}

	else if (data.weather[0]['main'] == 'Windy'){
		imageUrl="https://s-media-cache-ak0.pinimg.com/736x/a4/09/5b/a4095b6e6411af7c984cc6f96998c27d.jpg"
	}

	else if (data.weather[0]['main'] == 'Drizzle') {
		imageUrl = "https://allyeaglesci.files.wordpress.com/2013/09/ws_partly_cloudy_1600x1200.jpg";
	}	

	else{
		imageUrl = "https://i.ytimg.com/vi/3eqOFdzyWNg/maxresdefault.jpg";
	}

	$('body').css('background-image', 'url(' + imageUrl + ')');
}


function setCloud(data){
	if (data.clouds['all'] == 0){
			document.getElementById("cloud-icon").innerHTML= '<i class="wi wi-day-sunny"></i>';
	}

	else if ((data.clouds['all'] < 18) &&  (data.clouds['all'] > 0)){
		document.getElementById("cloud-icon").innerHTML= '<i class="wi wi-cloudy"></i>';
	}

	else if ((data.clouds['all'] >= 19) && (data.clouds['all'] < 40)){
		document.getElementById("cloud-icon").innerHTML= '<i class="wi wi-cloudy"></i><i class="wi wi-cloudy"></i>';	
	}

	else if ((data.clouds['all'] > 41) && (data.clouds['all'] < 80)){
		document.getElementById("cloud-icon").innerHTML= '<i class="wi wi-cloudy"></i><i class="wi wi-cloudy"></i><i class="wi wi-cloudy"></i>';	
	}

	else{
		document.getElementById("cloud-icon").innerHTML= '<i class="wi wi-cloudy"></i><i class="wi wi-cloudy"></i><i class="wi wi-cloudy"></i><i class="wi wi-cloudy"></i>';	
	}
}	


// Start the program by getting location
getLocation(unit);
console.log(unit);

function change(unit){
		if (unit == 'c'){
			unit = 'F';
		}

		else{
			unit = 'c';
		}

		console.log(unit);
		getLocation(unit);
	}

});


/* Image Urls

Clear :- http://www.ukweatherforecast.co.uk/wp-content/uploads/2016/07/Capture-1.jpg

Windy :- https://s-media-cache-ak0.pinimg.com/736x/a4/09/5b/a4095b6e6411af7c984cc6f96998c27d.jpg

Rainy :- http://4.bp.blogspot.com/-ufU7ZIdby_4/VcQUqTA8lnI/AAAAAAADbmg/GMKUnc1tjsI/s1600/Animals%2BIn%2BRainy%2BWeather%2B%2B%25286%2529-704489.jpg

Cloudy :- http://www.thenewstribune.com/news/weather/1gnc53/picture128115604/ALTERNATES/FREE_640/weather%20photo
*/