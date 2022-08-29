let language = {
	eng: {
		menu: "Menu",		
		footerdesc:
			"Barbershop is a No.1 place to get latest in town a men’s haircut and Ladies hairstyling in City of Berlin. Here you can get luxury barber experience at a reasonable price",
	},
};

if (window.location.hash) {
	if (location.hash.substring(1) === "de") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];
	} else if (location.hash.substring(1) === "eng") {
		$("[data-language=menu]").text(language.eng.menu);		
		$("[data-language=footerdesc]").text(language.eng.footerdesc);
	}
}

$("[data-callLang]").on("click", function () {
	if ($(this).attr("data-callLang") === "de") {
		window.location.href = window.location.toString().split(/\?|#/)[0];
		return false;
	}
	window.location.hash = $(this).attr("data-callLang");
	location.reload(true);
});
