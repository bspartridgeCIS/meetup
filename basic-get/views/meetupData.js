
function getJSON() {
	var apiKey = '2d2f4039402862755951237b7d1649';
	var xhr = new XMLHttpRequest();
	xhr.open("GET", 'https://api.meetup.com/find/groups?text=women%20in%20tech&page=1&sign=true&key='+ apiKey, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var data = xhr.responseText;
			var meetup = JSON.parse(data);
			// innerText does not let the attacker inject HTML elements.
			document.getElementById("meetupImage").src = meetup.photo.photo_link;
			document.getElementById("meetupName").innerText = meetup.name;
			document.getElementById("meetupLocation").innerText = meetup.city;
			document.getElementById("meetupCat").innerText = meetup.category.name;
		}
	}
	xhr.send();
