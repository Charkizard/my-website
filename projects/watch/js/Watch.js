window.onload = function () {

	// Set Raphael JS variables

		// BG/Core elements
		var paper = new Raphael(document.getElementById('watchContainer'), 700, 500);
		var svg = document.querySelector("svg");
		var w = svg.getAttribute("width");
		var h = svg.getAttribute("height");
		var background = paper.rect(0, 0, 500, 500);

		// Main watch components
		var topStrap = paper.rect(137.5,10,125,103);
		var bottomStrap = paper.rect(137.5,300,125,103);
		var face = paper.circle(200,200,140);
		var face12H = paper.rect(198.5, 70, 5, 20).attr({fill: "#313131", stroke: "none"});
		var face3H = paper.rect(310, 198.5, 20, 5).attr({fill: "#313131", stroke: "none"});
		var face6H = paper.rect(198.5, 310, 5, 20).attr({fill: "#313131", stroke: "none"});
		var face9H = paper.rect(70, 198.5, 20, 5).attr({fill: "#313131", stroke: "none"});
		var crown = paper.rect(344, 192.5, 8, 15);

		var topHingeLeft = paper.path("M280 30 L300 100 L265 80 V30 z");
		var topHingeRight = paper.path("M280 30 L300 100 L265 80 V30 z");
		var bottomHingeLeft = paper.path("M280 30 L300 100 L265 80 V30 z");
		var bottomHingeRight = paper.path("M280 30 L300 100 L265 80 V30 z");

		// Main watch (side view) 
		var topStrapSide = paper.rect(412,10,13,100);
		var bottomStrapSide = paper.rect(412,300,13,100);
		var faceSide = paper.rect(400,60,25,280,0);
		var screenSide = paper.rect(397,60,3,280,0);
		var crownSide = paper.circle(412, 200, 10);
		var topHingeSide = paper.path("M425 30 V100 H400 L410 30 z");
		var bottomHingeSide = paper.path("M425 30 V100 H400 L410 30 z");

		// Analogue hands
		var seconds = paper.rect(196.5,78,5,140);
		var minutes = paper.rect(196.5,90,7.5,110);
		var hours = paper.rect(194.3,115,10,85);

		// Digital displays
		var displayBG = paper.circle(200,200,42);
		var displayDateBG = paper.circle(165, 165, 21);

		var displayDate = paper.text(165, 163, "");
		var displayDay = paper.text(200, 180, "");
		var displayTime = paper.text(200, 200, "00:00:00");
		var displayAMPM = paper.text(200, 220, "");

		var displayTimeESTBG = paper.circle(142,280,25);
		var displayTimePSTBG = paper.circle(202,280,25);
		var displayTimeJSTBG = paper.circle(262,280,25);
		var displayTimeEST = paper.text(142, 267, "EST");
		var displayTimePST = paper.text(202, 267, "PST");
		var displayTimeJST = paper.text(262, 267, "JST");
		var displayTimeESTTime = paper.text(142, 280, "00:00:00");
		var displayTimePSTTime = paper.text(202, 280, "00:00:00");
		var displayTimeJSTTime = paper.text(262, 280, "00:00:00");

		var displayStopWatchBG = paper.circle(260,135,30);
		var displayStopWatch = paper.text(260,122,"Stopwatch");
		var displayStopWatchTime = paper.text(260,135,"00:00:00");

		// Interactive controls
		var timeControlsTitle = paper.text(515, 50, "Change the time:").hide();
		var alarmControlsTitle = paper.text(501, 200, "Set an alarm:").hide();
		var stopwatchControlsTitle = paper.text(650, 50, "Stopwatch:").hide();

		var increaseTimeHoursBG = paper.circle(470, 95, 0).hide();
		var decreaseTimeHoursBG = paper.circle(470, 145, 0).hide();
		var increaseTimeMinutesBG = paper.circle(520, 95, 0).hide();
		var decreaseTimeMinutesBG = paper.circle(520, 145, 0).hide();
		var increaseTimeSecondsBG = paper.circle(570, 95, 0).hide();
		var decreaseTimeSecondsBG = paper.circle(570, 145, 0).hide();

		var increaseTimeHours = paper.text(470, 95, "H+").hide();
		var decreaseTimeHours = paper.text(470, 145, "H-").hide();
		var increaseTimeMinutes = paper.text(520, 95, "M+").hide();
		var decreaseTimeMinutes = paper.text(520, 145, "M-").hide();
		var increaseTimeSeconds = paper.text(570, 95, "S+").hide();
		var decreaseTimeSeconds = paper.text(570, 145, "S-").hide();

	// Customise Raphael JS elements

		// BG/Core elements
		background.attr({stroke: "none"});

		// Main watch components
		topStrap.attr({fill: "#222222", stroke: "none"});
		bottomStrap.attr({fill: "#222222", stroke: "none"});
		face.attr({fill: "#FFF", stroke: "#1F303F", "stroke-width": "12px" });
		crown.attr({fill: "#222222", stroke: "none"});

		topHingeLeft.attr({fill: "#1F303F", stroke: "none"});
		topHingeRight.attr({fill: "#1F303F", stroke: "none"}).transform("t-165,0s-1, 1");
		bottomHingeLeft.attr({fill: "#1F303F", stroke: "none"}).transform("t0,270s1, -1");
		bottomHingeRight.attr({fill: "#1F303F", stroke: "none"}).transform("t-165,270s-1, -1");

		// Main watch (side view) components
		topStrapSide.attr({fill: "#222222", stroke: "none"});
		bottomStrapSide.attr({fill: "#222222", stroke: "none"});
		faceSide.attr({fill: "#1F303F", stroke: "none", "stroke-width": "3px" });
		screenSide.attr({fill: "#ffffff", stroke: "none" });
		crownSide.attr({fill: "#222222", stroke: "none"});

		topHingeSide.attr({fill: "#1F303F", stroke: "none"});
		bottomHingeSide.attr({fill: "#1F303F", stroke: "none"}).transform("t0,270s1, -1");;

		// Analogue hands
		seconds.attr({fill: "#F44336", stroke: "none"});
		minutes.attr({fill: "#313131", stroke: "none"});
		hours.attr({fill: "#313131", stroke: "none"});

		// Digital displays
		displayBG.attr({fill: "rgba(0,0,0,0.9)", stroke: "none"});
		displayDateBG.attr({fill: "rgba(0,0,0,0.9)", stroke: "#FFFFFF", "stroke-width": "2px"});

		displayDate.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#EEEEEE"});
		displayDay.attr({"font-family": "Open Sans Regular", "font-size": "14px", "fill": "#9E9E9E"});
		displayAMPM.attr({"font-family": "Open Sans Regular", "font-size": "14px", "fill": "#9E9E9E"});
		displayTime.attr({fill: "#ffffff", "font-size": "18px", "font-weight": "100", "font-family": "Open Sans Light"});

		displayTimeESTBG.attr({fill: "rgba(0,0,0,0.1)", stroke: "none"});
		displayTimePSTBG.attr({fill: "rgba(0,0,0,0.1)", stroke: "none"});
		displayTimeJSTBG.attr({fill: "rgba(0,0,0,0.1)", stroke: "none"});

		displayTimeESTTime.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});
		displayTimePSTTime.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});
		displayTimeJSTTime.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});

		displayTimeEST.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});
		displayTimePST.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});
		displayTimeJST.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});

		displayStopWatchBG.attr({fill: "rgba(0,0,0,0.1)", stroke: "none"});
		displayStopWatchTime.attr({fill: "#999", "font-size": "11px", "font-weight": "100", "font-family": "Open Sans Regular"});
		displayStopWatch.attr({fill: "#999", "font-size": "8px", "font-weight": "100", "font-family": "Open Sans Regular"});

		// Interactive controls
		timeControlsTitle.attr({"font-family": "Open Sans Regular", "font-size": "16px", "fill": "#FFFFFF"});
		alarmControlsTitle.attr({"font-family": "Open Sans Regular", "font-size": "16px", "fill": "#FFFFFF"});
		stopwatchControlsTitle.attr({"font-family": "Open Sans Regular", "font-size": "16px", "fill": "#FFFFFF"});

		increaseTimeHoursBG.attr({fill: "#ffffff", stroke: "#1F303F", "stroke-width": "3px"});
		decreaseTimeHoursBG.attr({fill: "#ffffff", stroke: "#1F303F", "stroke-width": "3px"});
		increaseTimeMinutesBG.attr({fill: "#ffffff", stroke: "#1F303F", "stroke-width": "3px"});
		decreaseTimeMinutesBG.attr({fill: "#ffffff", stroke: "#1F303F", "stroke-width": "3px"});
		increaseTimeSecondsBG.attr({fill: "#ffffff", stroke: "#1F303F", "stroke-width": "3px"});
		decreaseTimeSecondsBG.attr({fill: "#ffffff", stroke: "#1F303F", "stroke-width": "3px"});

		increaseTimeHours.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#1F303F"});
		decreaseTimeHours.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#1F303F"});
		increaseTimeMinutes.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#1F303F"});
		decreaseTimeMinutes.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#1F303F"});
		increaseTimeSeconds.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#1F303F"});
		decreaseTimeSeconds.attr({"font-family": "Open Sans Regular", "font-size": "12px", "fill": "#1F303F"});

	// Variables
	var incrementHours = 0;
	var incrementMinutes = 0;
	var incrementSeconds = 0;
	var crownClicked = false;
	var faceArray = ["#B2B2B3", "#F9AF44", "#1F303F"];
	var strapArray = ["#774C29", "#000000", "#222222"];
	faceArrayIndex = 0;
	strapArrayIndex = 0;
	alarmTime = null;

	// Functions
	function updateTime(){
		today = new Date();
		today.setHours(today.getHours() + incrementHours);
		today.setMinutes(today.getMinutes() + incrementMinutes);
		today.setSeconds(today.getSeconds() + incrementSeconds);

		h = addLeadingZeroes(today.getHours());		//Today's time (hours)
		m = addLeadingZeroes(today.getMinutes());	//Today's time (minutes)
		s = addLeadingZeroes(today.getSeconds());	//Today's time (seconds)

		// Set timezones
		today.setHours(today.getHours() - 5);
		ESTh = addLeadingZeroes(today.getHours());
		today.setHours(today.getHours() - 3);
		PSTh = addLeadingZeroes(today.getHours());
		today.setHours(today.getHours() + 17);
		JSTh = addLeadingZeroes(today.getHours());

		// Reset timezone to GMT
		today.setHours(today.getHours() - 17);

		day = getDay().toUpperCase();				//Today's date (day)
		date = today.getDate();						//Today's date (date)
		month = getMonth().toUpperCase();			//Today's date (month)
		ampm = getAmPm();
		time24H = h + ":" + m + ":" + s;

		if(alarmTime){
			console.log('time24H: ', time24H);
			console.log('alarmTime: ', alarmTime);
			if(time24H == alarmTime){
				runAlarm();
			}
		}
		
		drawWatch();

		setTimeout(updateTime, 1000);
	}
	updateTime();


	function drawWatch(){
	    // Change time into degrees.
    	sDegree = (s * 360) / 60;
    	mDegree = (m * 360) / 60;
    	hDegree = (h * 360) / 12;

	    // Digital time + display
	    displayDate.attr({text: date + "\n" + month});
	    displayDay.attr({text: day});
	    displayTime.attr({text: h + ":" + m + ":" + s});
	    displayAMPM.attr({text: ampm});

	    displayTimeESTTime.attr({text: ESTh + ":" + m + ":" + s});
	    displayTimePSTTime.attr({text: PSTh + ":" + m + ":" + s});
	    displayTimeJSTTime.attr({text: JSTh + ":" + m + ":" + s});

	    // Analogue time
	    seconds.animate({transform: [ 'r', sDegree, 200, 200]});
	    minutes.animate({transform: [ 'r', mDegree, 200, 200]});
	    hours.animate({transform: [ 'r', hDegree, 200, 200]});
	}

	// Adds leading zeroes if needed
	function addLeadingZeroes(i) {
	    if (i < 10) {i = "0" + i};  
	    return i;
	}

	// Get day of the week
	function getDay(){
		var weekday = new Array(7);
		weekday[0]=  "Sun";
		weekday[1] = "Mon";
		weekday[2] = "Tue";
		weekday[3] = "Wed";
		weekday[4] = "Thu";
		weekday[5] = "Fri";
		weekday[6] = "Sat";
		return weekday[today.getDay()];
	}

	// Get month
	function getMonth(){
		var month = new Array(12);
		month[1] = "Jan";
		month[2] = "Feb";
		month[3] = "Mar";
		month[4] = "Apr";
		month[5] = "May";
		month[6] = "Jun";
		month[7]=  "Jul";
		month[8] = "Aug";
		month[9] = "Sep";
		month[10] = "Oct";
		month[11] = "Nov";
		month[12] = "Dev";
		return month[today.getMonth()+1];
	}

	// Return period of time (AM or PM)
	function getAmPm(){
		if (h >= 12) {
		    ampm = "PM";
		} else {
			ampm = "AM";
		}
		return ampm;
	}

	// Convert 24H time to 12H time
	function get12HTime(){
	    if (h >= 12) {
	        h = h - 12;
	    }
	    return h + ":" + m + ":" + s;
	}

	function showControls(){
		if(crownClicked){
			// Hide time manipulation controls
			decreaseTimeHoursBG.animate({ r : 0 }, 700, "bounce", function () { this.hide() });
			increaseTimeHoursBG.animate({ r : 0 }, 700, "bounce", function () { this.hide() });
			decreaseTimeMinutesBG.animate({ r : 0 }, 600, "bounce", function () { this.hide() });
			increaseTimeMinutesBG.animate({ r : 0 }, 600, "bounce", function () { this.hide() });
			decreaseTimeSecondsBG.animate({ r : 0 }, 500, "bounce", function () { this.hide() });
			increaseTimeSecondsBG.animate({ r : 0 }, 500, "bounce", function () { this.hide() });

			timeControlsTitle.animate({ opacity : 0 }, 250, function () { this.hide() });
			alarmControlsTitle.animate({ opacity : 0 }, 250, function () { this.hide() });
			stopwatchControlsTitle.animate({ opacity : 0 }, 250, function () { this.hide() });
			increaseTimeHours.animate({ opacity : 0 }, 250, function () { this.hide() });
			decreaseTimeHours.animate({ opacity : 0 }, 250, function () { this.hide() });
			increaseTimeMinutes.animate({ opacity : 0 }, 250, function () { this.hide() });
			decreaseTimeMinutes.animate({ opacity : 0 }, 250, function () { this.hide() });
			increaseTimeSeconds.animate({ opacity : 0 }, 250, function () { this.hide() });
			decreaseTimeSeconds.animate({ opacity : 0 }, 250, function () { this.hide() });

			document.getElementById("timeManipulation").style.display = 'none';
			document.getElementById("stopWatchControls").style.display = 'none';

			document.getElementById("hoursInput").value = '';
			document.getElementById("minutesInput").value = '';
			document.getElementById("secondsInput").value = '';

			// Animate crown
			crown.animate({'width': "8"}, 500, "bounce");
			crownClicked = false;
		} else {
			// Show time manipulation controls
			increaseTimeHoursBG.show();
			decreaseTimeHoursBG.show();
			increaseTimeMinutesBG.show();
			decreaseTimeMinutesBG.show();
			increaseTimeSecondsBG.show();
			decreaseTimeSecondsBG.show();

			increaseTimeHoursBG.animate({ r : 20 }, 500, "bounce");
			decreaseTimeHoursBG.animate({ r : 20 }, 500, "bounce");
			increaseTimeMinutesBG.animate({ r : 20 }, 600, "bounce");
			decreaseTimeMinutesBG.animate({ r : 20 }, 600, "bounce");
			increaseTimeSecondsBG.animate({ r : 20 }, 700, "bounce");
			decreaseTimeSecondsBG.animate({ r : 20 }, 700, "bounce");

			timeControlsTitle.animate({ opacity : 100 }, 200, function () { this.show() });
			alarmControlsTitle.animate({ opacity : 100 }, 200, function () { this.show() });
			stopwatchControlsTitle.animate({ opacity : 100 }, 200, function () { this.show() });
			increaseTimeHours.animate({ opacity : 100 }, 200, function () { this.show() });
			decreaseTimeHours.animate({ opacity : 100 }, 200, function () { this.show() });
			increaseTimeMinutes.animate({ opacity : 100 }, 200, function () { this.show() });
			decreaseTimeMinutes.animate({ opacity : 100 }, 200, function () { this.show() });
			increaseTimeSeconds.animate({ opacity : 100 }, 200, function () { this.show() });
			decreaseTimeSeconds.animate({ opacity : 100 }, 200, function () { this.show() });

			document.getElementById("timeManipulation").style.display = 'block';
			document.getElementById("stopWatchControls").style.display = 'block';

			// Animate crown
			crown.animate({'width': "13"}, 500, "bounce");
			crownClicked = true;
		}
	}

	// Toggle colours and straps
	function toggleFace(){
		var nextColour = getNextFace();
		face.attr({stroke: nextColour});
		topHingeLeft.attr({fill: nextColour});
		topHingeRight.attr({fill: nextColour});
		bottomHingeLeft.attr({fill: nextColour});
		bottomHingeRight.attr({fill: nextColour});
		faceSide.attr({fill: nextColour});
		topHingeSide.attr({fill: nextColour});
		bottomHingeSide.attr({fill: nextColour});

		increaseTimeHoursBG.attr({stroke: nextColour});
		decreaseTimeHoursBG.attr({stroke: nextColour});
		increaseTimeMinutesBG.attr({stroke: nextColour});
		decreaseTimeMinutesBG.attr({stroke: nextColour});
		increaseTimeSecondsBG.attr({stroke: nextColour});
		decreaseTimeSecondsBG.attr({stroke: nextColour});

		increaseTimeHours.attr({fill: nextColour});
		decreaseTimeHours.attr({fill: nextColour});
		increaseTimeMinutes.attr({fill: nextColour});
		decreaseTimeMinutes.attr({fill: nextColour});
		increaseTimeSeconds.attr({fill: nextColour});
		decreaseTimeSeconds.attr({fill: nextColour});
	}

	function toggleStrap(){
		var nextColour = getNextStrap();
		topStrap.attr({fill: nextColour});
		bottomStrap.attr({fill: nextColour});
		topStrapSide.attr({fill: nextColour});
		bottomStrapSide.attr({fill: nextColour});
	}

	
	function getNextFace() {
		var nextFace = faceArray[faceArrayIndex++%faceArray.length];
		return nextFace;
	};

	function getNextStrap() {
		var nextStrap = strapArray[strapArrayIndex++%strapArray.length];
		return nextStrap;
	};

	function validateAlarm(){
		console.log('Validating...');
		document.getElementById("validationMessage").style.display = 'none';
		var errors = false;
		var errorMessage = "<p>Oops! Looks like there were some errors in your last attempt to set an alarm:</p><ul>";
		var successMessage = "<p style='text-align: center;'>Wooo! Alarm successfully set!</p>";
		if(!document.getElementById('hoursInput').value ||
			!document.getElementById('minutesInput').value ||
			!document.getElementById('secondsInput').value){
			errors = true;
		} else {
			var hoursInput = document.getElementById('hoursInput').value;
			var minutesInput = document.getElementById('minutesInput').value;
			var secondsInput = document.getElementById('secondsInput').value;
		}

		var hoursLength = document.getElementById('hoursInput').value.toString().length;
		var minutesLength = document.getElementById('minutesInput').value.toString().length;
		var secondsLength = document.getElementById('secondsInput').value.toString().length;

		console.log(hoursLength, minutesLength, secondsLength);

		if(!document.getElementById('hoursInput').value){
			errorMessage+= "<li>The value for the hours field is not exactly 2 digits.</li>";
			errors = true;
		} else if(hoursLength !== 2){
			errorMessage+= "<li>The value for the hours field is not exactly 2 digits.</li>";
			errors = true;
		} else if(document.getElementById('hoursInput').value > 23){
			errorMessage+= "<li>The value for the hours field is over 23.</li>";
			errors = true;
		}
		
		if(!document.getElementById('minutesInput').value){
			errorMessage+= "<li>The value for the minutes field is not exactly 2 digits.</li>";
			errors = true;
		} else if(minutesLength !== 2){
			errorMessage+= "<li>The value for the minutes field is not exactly 2 digits.</li>";
			errors = true;
		} else if(document.getElementById('minutesInput').value > 59){
			errorMessage+= "<li>The value for the minutes field is over 59.</li>\n";
			errors = true;
		}

		if(!document.getElementById('secondsInput').value){
			errorMessage+= "<li>The value for the seconds field is not exactly 2 digits.</li>";
			errors = true;
		} else if(secondsLength !== 2){
			errorMessage+= "<li>The value for the seconds field is not exactly 2 digits.</li>";
			errors = true;
		} else if(document.getElementById('secondsInput').value > 59){
			errorMessage+= "<li>The value for the seconds field is over 59.</li>";
			errors = true;
		}

		if(errors){
			document.getElementById("validationMessage").innerHTML = errorMessage+ "</ul>";
			document.getElementById("validationMessage").style.display = 'block';
		} else {
			document.getElementById("validationMessage").innerHTML = successMessage;
			document.getElementById("validationMessage").style.display = 'block';
			setAlarm(hoursInput, minutesInput, secondsInput);
		}
		console.log(hoursInput + ":" + minutesInput + ":" + secondsInput);
	}

	function setAlarm(h, m, s){
		console.log('Setting alarm for: ', h+":"+m+":"+s);
		alarmTime =  h+":"+m+":"+s;
	}

	function runAlarm(){
		document.getElementById('alarmOverlay').style.display = 'block';
		alarmTime = null;
	}

	function hideAlarmDialog(){
		document.getElementById('alarmOverlay').style.display = 'none';
		document.getElementById('validationMessage').style.display = 'none';
	}

	document.getElementById("closeAlarmMessage").addEventListener("click", hideAlarmDialog, false);
	document.getElementById("alarmSubmit").addEventListener("click", validateAlarm, false);


	// Stopwatch functionality
	var stopWatchH = 0;
	var stopWatchM = 0;
	var stopWatchS = 0;
	var hoursTime = 1;
	var minutesTime = 1;
	var secondsTime = 1;
	var reset = false;
	var stop = false;
	var start = false;
	var stopwatch = new Date();
	stopwatch.setHours(0);
	stopwatch.setMinutes(0);
	stopwatch.setSeconds(0);

	function stopWatchTick(){
		if(reset){
			stopwatch.setHours(0);
			stopwatch.setMinutes(0);
			stopwatch.setSeconds(0);
		} else if(stop){
			stopwatch.setHours(stopWatchH);
			stopwatch.setMinutes(stopWatchM);
			stopwatch.setSeconds(stopWatchS);
		} else if(start){
			if(hoursTime >= 23){
				hoursTime = 0;
			}else if(minutesTime >= 59){
				stopwatch.setHours(hoursTime++);
				stopwatch.setMinutes(0);
				minutesTime = 1;
			}else if(secondsTime >= 59){
				stopwatch.setMinutes(minutesTime++);
				stopwatch.setSeconds(0);
				secondsTime = 1;
			} else {
				stopwatch.setSeconds(secondsTime++);
			}
		}
		stopWatchH = addLeadingZeroes(stopwatch.getHours());
		stopWatchM = addLeadingZeroes(stopwatch.getMinutes());
		stopWatchS = addLeadingZeroes(stopwatch.getSeconds());

		displayStopWatchTime.attr({text: stopWatchH + ":" + stopWatchM + ":" + stopWatchS});

		setTimeout(stopWatchTick, 1000);
	}
	stopWatchTick();

	function stopWatchStart(){
		// console.log('stopWatchStart...');
		stop = false;
		reset = false;
		start = true;
	}
	function stopWatchStop(){
		// console.log('stopWatchStop...');
		start = false;
		reset = false;
		stop = true;
	}
	function stopWatchReset(){
		// console.log('stopWatchReset...');
		stopwatch.setHours(0);
		stopwatch.setMinutes(0);
		stopwatch.setSeconds(0);
		hoursTime = 1;
		minutesTime = 1;
		secondsTime = 1;
		start = false;
		stop = false;
		reset = true;
	}

	document.getElementById("start").addEventListener("click", stopWatchStart, false);
	document.getElementById("stop").addEventListener("click", stopWatchStop, false);
	document.getElementById("reset").addEventListener("click", stopWatchReset, false);

	// Time Manipulation controls
	increaseTimeHoursBG.node.onclick = function(){ incrementHours++; };
	decreaseTimeHoursBG.node.onclick = function(){ incrementHours--; };
	increaseTimeMinutesBG.node.onclick = function(){ incrementMinutes++; };
	decreaseTimeMinutesBG.node.onclick = function(){ incrementMinutes--; };
	increaseTimeSecondsBG.node.onclick = function(){ incrementSeconds++; };
	decreaseTimeSecondsBG.node.onclick = function(){ incrementSeconds--; };
	increaseTimeHours.node.onclick = function(){ incrementHours++; };
	decreaseTimeHours.node.onclick = function(){ incrementHours--; };
	increaseTimeMinutes.node.onclick = function(){ incrementMinutes++; };
	decreaseTimeMinutes.node.onclick = function(){ incrementMinutes--; };
	increaseTimeSeconds.node.onclick = function(){ incrementSeconds++; };
	decreaseTimeSeconds.node.onclick = function(){ incrementSeconds--; };

	// Hover states
	increaseTimeHoursBG.mouseover(function(){ increaseTimeHours.attr({fill: "#ffffff"}); });
	increaseTimeMinutesBG.mouseover(function(){ increaseTimeMinutes.attr({fill: "#ffffff"}); });
	increaseTimeSecondsBG.mouseover(function(){ increaseTimeSeconds.attr({fill: "#ffffff"}); });
	decreaseTimeHoursBG.mouseover(function(){ decreaseTimeHours.attr({fill: "#ffffff"}); });
	decreaseTimeMinutesBG.mouseover(function(){ decreaseTimeMinutes.attr({fill: "#ffffff"}); });
	decreaseTimeSecondsBG.mouseover(function(){ decreaseTimeSeconds.attr({fill: "#ffffff"}); });
	increaseTimeHoursBG.mouseout(function(){ increaseTimeHours.attr({fill: "#1F303F"}); });
	increaseTimeMinutesBG.mouseout(function(){ increaseTimeMinutes.attr({fill: "#1F303F"}); });
	increaseTimeSecondsBG.mouseout(function(){ increaseTimeSeconds.attr({fill: "#1F303F"}); });
	decreaseTimeHoursBG.mouseout(function(){ decreaseTimeHours.attr({fill: "#1F303F"}); });
	decreaseTimeMinutesBG.mouseout(function(){ decreaseTimeMinutes.attr({fill: "#1F303F"}); });
	decreaseTimeSecondsBG.mouseout(function(){ decreaseTimeSeconds.attr({fill: "#1F303F"}); });

	// Adding classes to time manipulation controls
	increaseTimeHoursBG.node.setAttribute("class", "button");
	decreaseTimeHoursBG.node.setAttribute("class", "button");
	increaseTimeMinutesBG.node.setAttribute("class", "button");
	decreaseTimeMinutesBG.node.setAttribute("class", "button");
	increaseTimeSecondsBG.node.setAttribute("class", "button");
	decreaseTimeSecondsBG.node.setAttribute("class", "button");
	increaseTimeHours.node.setAttribute("class", "button-text");
	decreaseTimeHours.node.setAttribute("class", "button-text");
	increaseTimeMinutes.node.setAttribute("class", "button-text");
	decreaseTimeMinutes.node.setAttribute("class", "button-text");
	increaseTimeSeconds.node.setAttribute("class", "button-text");
	decreaseTimeSeconds.node.setAttribute("class", "button-text");

	// Click events
	crown.click(function(){ showControls(); });
	crownSide.click(function(){ showControls(); });

	face.click(function(){ toggleFace(); });
	topHingeLeft.click(function(){ toggleFace(); });
	topHingeRight.click(function(){ toggleFace(); });
	bottomHingeLeft.click(function(){ toggleFace(); });
	bottomHingeRight.click(function(){ toggleFace(); });
	faceSide.click(function(){ toggleFace(); });
	topHingeSide.click(function(){ toggleFace(); });
	bottomHingeSide.click(function(){ toggleFace(); });

	topStrap.click(function(){ toggleStrap(); });
	bottomStrap.click(function(){ toggleStrap(); });
	topStrapSide.click(function(){ toggleStrap(); });
	bottomStrapSide.click(function(){ toggleStrap(); });

}