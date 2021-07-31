$(document).ready(function() {
	for(var t in type){
		$("#"+t).text(type[t]);
	};
	for(var a in admin){
		$("#"+a).text(admin[a]);
	}
	$("#title").text(text[1]["title"]);
	$("#text").text(text[1]["text"]);
});
