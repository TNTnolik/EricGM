let textID = 0;
let timer = 20
console.log(text.length);

$(document).ready(function() {
	for(var t in type){
		$("#"+t).text(type[t]);
	};
	for(var a in admin){
		$("#"+a).text(admin[a]);
	}
	$("#title").text(text[0]["title"]);
	$("#text").text(text[0]["text"]);
	textID = 1;

	var _Seconds = timer ,int;
	int = setInterval(function() { 
	  if (_Seconds > 0) {
	    _Seconds--;
	  } else {
	  	if(textID==text.length){
	  		$("#title").text(text[0]["title"]);
			$("#text").text(text[0]["text"]);
	  		textID = 1;
	  	} else {
	  		$("#title").text(text[textID]["title"]);
			$("#text").text(text[textID]["text"]);
			textID++;
	  	}
	    _Seconds = timer;
	  }
	}, 1000);


	
});


