
let date;
let time;
setInterval(() => {
time = new Date();
date = time.toLocaleDateString()
// document.write(time)
jack = () => {
	let time1 = "Current Time is:- " + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ' ' + date;
	// document.getElementById('display-4').innerText = time1;
	console.log(time1)
}

jack1 = () => {
	window.location.reload();
}

// jack()
// stop = setInterval(jack, 1000);
let time69;
time69 = "Current Time is:- " + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + '<br>on date ' + date;
document.getElementById('time').innerHTML = time69;
},1000)
// stop = setInterval(jack1, 1000);