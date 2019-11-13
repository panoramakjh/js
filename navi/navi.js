const naviContainer = document.querySelector(".js-navigator"),
    naviTitle = naviContainer.querySelector("span");

const API_KEY = "c018f2fd292d97f0c7e7aa84946d5845";



function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
            naviTitle.innerText = `${position.coords.latitude}, ${position.coords.longitude}`
			// console.log(position.coords.latitude + ' ' + position.coords.longitude);
		}, function(error){
            naviTitle.innerText = "Error"
			// console.log('error');
		},{
			enableHighAccuracy: false,
			maximumAge: 0,
			timeout: Infinity
		});
	}else{
        naviTitle.innerText = "GPS를 지원하지 않습니다."
		// console.log('GPS를 지원하지 않습니다.');
	}
}

function init(){
	getLocation();
}
init();