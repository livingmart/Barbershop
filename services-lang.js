let language = {
	eng: {
		menu: "Menu",
		servicespagetittle: "services",
		ourservices: "Our Services",
		ourservicedesc:
			"Barbershop offers world-class men's haircuts, beard grooming, and hot razor shaves. Here  are just some of the services we are known for",
		tradhaircuttittle: "TRADITIONAL HAIRCUTS",
		tradhaircuttittledesc:
			"This classic and traditional service is perfect if you want your hair to be done the right way. Our barbers will be glad to help you with it",
		beardtrimtittle: "BEARD TRIM",
		beardtrimdesc:
			"Today beards require more tailoring than in earlier days. That’s why we believe our beard trim  service may be useful for you",
		shorthairtittle: "Short sassy Haircut",
		shorthairdesc:
			"Short layered haircuts for women include some of the most creative new looks from modern  stylists",
		braidhairtittle: "Braided Hairstyles",
		braidhairdesc: "Colorists! Snazzy means stylish and attractive",
		footerdesc:
			"Barbershop is a No.1 place to get latest in town a men’s haircut and Ladies hairstyling in City of Berlin. Here you can get luxury barber experience at a reasonable price",
		navhome: "Home",
		navservices: "Services",
		navgallery: "Gallery",
		navcontacts: "Contacts"
	},
};

if (window.location.hash) {
	if (location.hash.substring(1) === "de") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];
	} else if (location.hash.substring(1) === "eng") {
		$("[data-language=menu]").text(language.eng.menu);
		$("[data-language=servicespagetittle]").text(
			language.eng.servicespagetittle
		);
		$("[data-language=ourservices]").text(language.eng.ourservices);
		$("[data-language=ourservicedesc]").text(language.eng.ourservicedesc);
		$("[data-language=tradhaircuttittle]").text(language.eng.tradhaircuttittle);
		$("[data-language=tradhaircuttittledesc]").text(
			language.eng.tradhaircuttittledesc
		);
		$("[data-language=beardtrimtittle]").text(language.eng.beardtrimtittle);
        $("[data-language=beardtrimdesc]").text(language.eng.beardtrimdesc);
        $("[data-language=shorthairtittle]").text(language.eng.shorthairtittle);
		$("[data-language=shorthairdesc]").text(language.eng.shorthairdesc);
		$("[data-language=braidhairtittle]").text(language.eng.braidhairtittle);
		$("[data-language=braidhairdesc]").text(language.eng.braidhairdesc);        
        $("[data-language=footerdesc]").text(language.eng.footerdesc);
		$("[data-language=navhome]").text(language.eng.navhome);
		$("[data-language=navservices]").text(language.eng.navservices);
		$("[data-language=navgallery]").text(language.eng.navgallery);        
		$("[data-language=navcontacts]").text(language.eng.navcontacts);
        
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
