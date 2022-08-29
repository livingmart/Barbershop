let language = {
    eng: {
        appTitle:"Barbershop",
		navhome: "Home",
		navservices: "Services",
		navgallery: "Gallery",
		navcontacts: "Contacts",
		herotittle: "Enjoy our barber services",
		herodesc:
			"Establish your new amazing look with Barbershop services! From haircuts to hot shaves, you can experience the best level of barbering in the area",
		heroappointment: "Book an appointment",
		whowearetittle: "WHO WE ARE",
		whowearedesc:
			" Expert in all hair textures and specializing in Relaxers, Texturizers, Cutting &Coloring. The salon uses only the finest hair care products and materials to give the accurate results that you want. The stylists are professional and friendly with their customers and offer fantastic haircuts and styles at an  affordable price",
		beardtrimtittle: "BEARD trim",
		beardtrimdesc:
			"Well trimmed beard is a must have element of every men’s image",
		mustachetrimtittle: "Mustache TRIM",
		mustachetrimdesc: "Mustaches also need to be trimmed  regularly",
		tradhaircuttittle: "TRADITIONAL HAIRCUTS",
		tradhaircutdesc: "One of the most popular services our barbers provide",
		shavestittle: "SHAVES",
		shavesdesc: "Our shaving services will make you look really  handsome",
		ourservicestittle: "OUR SERVICES",
		ourservicesdesc:
			"Men and Women Cuts, Styling, Olaplex, Full Special Treatment, Kids Haircut, Blow Dry Bar, Color, Ladies Strands, Men's haircut including Kevin Murphy Products and Styling & Women's Dyeing Tinting Color Bleaching",
		braidedtittle: "Braided Hairstyles",
		braideddesc: "Colorists! Snazzy means stylish and attractive",
		funkytittle: "Short Funky Hairstyles",
		funkydesc: "Colorists! Snazzy means stylish and attractive",
		choppytittle: "Choppy Pixie Cut",
		choppydesc:
			"Short layered haircuts for women include some of the most creative new looks from modern stylists",
		layeredtittle: "Layered Haircuts",
		layereddesc:
			"Short layered haircuts for women include some of the most creative new looks from modern stylists",
		ourbarberstittle: "OUR BARBERS",
		ourbarbersheading:
			"We employ only highly qualified barbers who are not just professionals, but also enjoy maintaining the atmosphere of a classic barbershop",
		ourbarbersdesc:
			"We all welcome clients and consulting with them on their desired hairstyles. Cutting and trimming hair according to clients' instructions. Styling hair using chemical solutions and styling tools. Shaving, trimming and shaping clients' beards and mustaches. Washing and conditioning clients' hair",
		footerdesc:
			"Barbershop is a No.1 place to get latest in town a men’s haircut and Ladies hairstyling in City of Berlin. Here you can get luxury barber experience at a reasonable price",
		appointmenttittle: "To book your appointment, Please use our contacts",
		appointmentdesc: "Call or send an SMS",
		close: "Close",
	},
};

if (window.location.hash) {
	if (location.hash.substring(1) === "de") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];
	} else if (location.hash.substring(1) === "eng") {
		document.title = language.eng.appTitle;
		$("[data-language=navhome]").text(language.eng.navhome);
		$("[data-language=navservices]").text(language.eng.navservices);
		$("[data-language=navgallery]").text(language.eng.navgallery);
		$("[data-language=navcontacts]").text(language.eng.navcontacts);
		$("[data-language=herotittle]").text(language.eng.herotittle);
		$("[data-language=herodesc]").text(language.eng.herodesc);
		$("[data-language=heroappointment]").text(language.eng.heroappointment);
		$("[data-language=whowearetittle]").text(language.eng.whowearetittle);
		$("[data-language=whowearedesc]").text(language.eng.whowearedesc);
		$("[data-language=beardtrimtittle]").text(language.eng.beardtrimtittle);
		$("[data-language=beardtrimdesc]").text(language.eng.beardtrimdesc);
		$("[data-language=mustachetrimtittle]").text(
			language.eng.mustachetrimtittle
		);
		$("[data-language=mustachetrimdesc]").text(language.eng.mustachetrimdesc);
		$("[data-language=tradhaircuttittle]").text(language.eng.tradhaircuttittle);
		$("[data-language=tradhaircutdesc]").text(language.eng.tradhaircutdesc);
		$("[data-language=shavestittle]").text(language.eng.shavestittle);
		$("[data-language=ourservicestittle]").text(language.eng.ourservicestittle);
		$("[data-language=ourservicesdesc]").text(language.eng.ourservicesdesc);
		$("[data-language=braidedtittle]").text(language.eng.braidedtittle);
		$("[data-language=braideddesc]").text(language.eng.braideddesc);
		$("[data-language=funkytittle]").text(language.eng.funkytittle);
		$("[data-language=funkydesc]").text(language.eng.funkydesc);
		$("[data-language=choppytittle]").text(language.eng.choppytittle);
		$("[data-language=choppydesc]").text(language.eng.choppydesc);
		$("[data-language=layeredtittle]").text(language.eng.layeredtittle);
		$("[data-language=layereddesc]").text(language.eng.layereddesc);
		$("[data-language=ourbarberstittle]").text(language.eng.ourbarberstittle);
		$("[data-language=ourbarbersheading]").text(language.eng.ourbarbersheading);
		$("[data-language=ourbarbersdesc]").text(language.eng.ourbarbersdesc);
		$("[data-language=footerdesc]").text(language.eng.footerdesc);
		$("[data-language=appointmenttittle]").text(language.eng.appointmenttittle);
		$("[data-language=appointmentdesc]").text(language.eng.appointmentdesc);
		$("[data-language=close]").text(language.eng.close);
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
