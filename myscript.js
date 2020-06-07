function colorClock() {
	var date = new Date();

	var hours = date.getHours();
	if (hours < 10) {
		hours = '0' + hours;
	}

	var minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	var seconds = date.getSeconds();
	if (seconds < 10) {
		seconds = '0' + seconds;
	}

	var clockFace = hours + ':' + minutes + ':' + seconds;
	var hexColor = '#' + (seconds*1.75) + minutes + seconds;

	document.getElementById('clock').innerHTML = clockFace;
	document.body.style.background = hexColor;

	setTimeout(function () { colorClock(); }, 1000);

}

colorClock();
