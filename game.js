
function scrollTrack() {
	document.addEventListener('click', function (event) {
		var RaceFinish = false;
		var my_money = document.getElementById("funds").innerText;

		if (event.path[0].id == "start"){
			var bet = document.getElementById("amount").value;

			my_money = parseInt(my_money);
			bet = parseInt(bet);
			
			if (my_money >= bet && bet > 0){
				document.getElementById("funds").innerText = parseInt(my_money) - parseInt(bet);
                var horse = document.getElementsByClassName("horse");
				
				setInterval(function() {
					var horse = document.getElementsByClassName("horse");
					var scroller = document.getElementById('scroll');

					for (var i = 0; i < horse.length; i++) {
						var pTop = horse[i].offsetTop;

						if(RaceFinish == false && pTop >= 30 && pTop <= window.innerHeight * 4 - 50 - (i * window.innerHeight * 0.04)){
							var a2 = document.getElementsByTagName("div");
							for (var i2 = 0; i2 < a2.length; i2++){
								var item = a2[i2];
								if (item.classList.contains("bush")){
									if (horse[i].offsetTop >= window.innerHeight * 0.6 - 50 - (i * window.innerHeight * 0.04) && horse[i].offsetTop <= window.innerHeight * 0.65 - 50 - (i * window.innerHeight * 0.04) || horse[i].offsetTop >= window.innerHeight * 0.9 - 50 - (i * window.innerHeight * 0.04) && horse[i].offsetTop <= window.innerHeight * 1 - 50 - (i * window.innerHeight * 0.04) || horse[i].offsetTop >= window.innerHeight * 1.3 - 50 - (i * window.innerHeight * 0.04) && horse[i].offsetTop <= window.innerHeight * 1.4 - 50 - (i * window.innerHeight * 0.04) || horse[i].offsetTop >= window.innerHeight * 1.9 - 50 - (i * window.innerHeight * 0.04) && horse[i].offsetTop <= window.innerHeight * 2 - 50 - (i * window.innerHeight * 0.04) || horse[i].offsetTop >= window.innerHeight * 2.1 - 50 - (i * window.innerHeight * 0.04) && horse[i].offsetTop <= window.innerHeight * 2.2 - 50 - (i * window.innerHeight * 0.04) || horse[i].offsetTop >= window.innerHeight * 2.6 - 50 - (i * window.innerHeight * 0.04) && horse[i].offsetTop <= window.innerHeight * 2.7 - 50 - (i * window.innerHeight * 0.04)){
										horse[i].className = 'horse standDown';
										horse[i].style.top = pTop + i + Math.floor(Math.random() * 5) + 1 + 'px';
										console.log(item.classList + ": Jump :)");
									}
								}else{
									horse[i].className = 'horse runDown';
									horse[i].style.top = pTop + Math.floor(Math.random() * 3) + 1 + 'px';
								}
							}

                        }else if(RaceFinish == false && horse[horse.length - 1].offsetTop >= window.innerHeight * 4 - 50 - (i * window.innerHeight * 0.04)){
							RaceFinish = true;
							var horse2 = document.getElementsByClassName("horse");
							for (var i2 = 0; i2 < horse2.length; i2++) {
								horse[i2].className = 'horse standDown';
							}
							console.log("Bitti");
						}
					}

					scroller.scrollTop = scroller.scrollTop + 2;
				}, 8);
			}
		}
	});
}

document.addEventListener('DOMContentLoaded', scrollTrack);
