$(function() {
	var floorPlanImagesArray = [{
		name: "casaNova",
		imgURL: "assets/img/casaNova.jpg",
		bedroomCount: 0,
		rentAmount: 1200
	}, {
		name: "monteCristo",
		imgURL: "assets/img/monteCristo.jpg",
		bedroomCount: 1,
		rentAmount: 1650
	}, {
		name: "shangriLa",
		imgURL: "assets/img/shangriLa.jpg",
		bedroomCount: 3,
		rentAmount: 1825
	}, {
		name: "versailles",
		imgURL: "assets/img/versailles.jpg",
		bedroomCount: 2,
		rentAmount: 4000
	}, {
		name: "xanadu",
		imgURL: "assets/img/xanadu.jpg",
		bedroomCount: 2,
		rentAmount: 1525
	}, {
		name: "hogwarts",
		imgURL: "assets/img/hogwarts.jpg",
		bedroomCount: 3,
		rentAmount: 1825
	}, {
		name: "camelot",
		imgURL: "assets/img/camelot.jpg",
		bedroomCount: 2,
		rentAmount: 1825
	}, {
		name: "elDorado",
		imgURL: "assets/img/elDorado.jpg",
		bedroomCount: 1,
		rentAmount: 1825
	}, {
		name: "vanityFair",
		imgURL: "assets/img/vanityFair.jpg",
		bedroomCount: 2,
		rentAmount: 1825
	}, {
		name: "atlantis",
		imgURL: "assets/img/atlantis.jpg",
		bedroomCount: 1,
		rentAmount: 1825
	}, {
		name: "utopia",
		imgURL: "assets/img/utopia.jpg",
		bedroomCount: 3,
		rentAmount: 2825
	}, {
		name: "liliput",
		imgURL: "assets/img/liliput.jpg",
		bedroomCount: 0,
		rentAmount: 525
	}];
	// onload hide the reset filters and clear rental listings results
	$(".resetFiltersRow").hide();
	$(".floorPlans").empty();
	localStorage.clear();
	// add all listings on page load
	for (var i = 0; i < floorPlanImagesArray.length; i++) {
		var floorPlanImage = $('<img>');
		floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
		$(".floorPlans").append(floorPlanImage);
	}
	// when cancel button is clicked, reload the page
	$(".cancelFiltersButton").click(function() {
		location.reload();
	});
	// capture bedroom count input and store in localStorage
	$('.bedroomSelectionButtons').on("click", function() {
		$(".bedroomSelectionButtons.btn-primary").removeClass("btn-primary");
		$(this).toggleClass("btn-primary");
		var bedroomSelection = $(this).val();
		localStorage.removeItem("bedroomCount");
		localStorage.setItem("bedroomCount", bedroomSelection);
		return false;
	});
	// display filtered results when Apply Filters button is clicked
	$(".applyFiltersButton").click(function() {
		var bedroomsToCheck = localStorage.getItem("bedroomCount");
		var minRentToCheck = localStorage.getItem("minRentPrice");
		var maxRentToCheck = localStorage.getItem("maxRentPrice");
		// collapse and show relevant rows
		$(".resetFiltersRow").hide();
		$("#moreFiltersButton").show();
		$(".moreFiltersRow").hide();
		$(".floorPlans").empty();
		// if statement to filter if no bedroom or rent amounts are selected
		if (bedroomsToCheck == null && minRentToCheck == null && maxRentToCheck == null) {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				var floorPlanImage = $('<img>');
				floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
				$(".floorPlans").append(floorPlanImage);
			}
		}
		// if statement to filter if bedroom count is not selected
		if (bedroomsToCheck == null && minRentToCheck !== null && maxRentToCheck !== null) {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (minRentToCheck <= floorPlanImagesArray[i].rentAmount && floorPlanImagesArray[i].rentAmount <= maxRentToCheck) {
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					$(".floorPlans").append(floorPlanImage);
				}
			}
		}
		// if statement to filter if rent amount is not selected
		if (bedroomsToCheck !== null && minRentToCheck == null && maxRentToCheck == null) {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (bedroomsToCheck == floorPlanImagesArray[i].bedroomCount) {
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					$(".floorPlans").append(floorPlanImage);
				}
			}
		}
		// // if statement to filter if min rent amount is not selected
		if (bedroomsToCheck !== null && minRentToCheck == null && maxRentToCheck !== null) {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (bedroomsToCheck == floorPlanImagesArray[i].bedroomCount && floorPlanImagesArray[i].rentAmount <= maxRentToCheck) {
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					$(".floorPlans").append(floorPlanImage);
				}
			}
		}
		// if statement to filter if max rent amount is not selected
		if (bedroomsToCheck !== null && minRentToCheck !== null && maxRentToCheck == null) {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (bedroomsToCheck == floorPlanImagesArray[i].bedroomCount && minRentToCheck <= floorPlanImagesArray[i].rentAmount) {
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					$(".floorPlans").append(floorPlanImage);
				}
			}
		} else {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (bedroomsToCheck == floorPlanImagesArray[i].bedroomCount && minRentToCheck <= floorPlanImagesArray[i].rentAmount && floorPlanImagesArray[i].rentAmount <= maxRentToCheck) {
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					$(".floorPlans").append(floorPlanImage);
				}
			}
		}
		if ($('.floorPlans:empty').length) {
			$(".floorPlans").append("<h4>No matching results.</br>Try changing your search criteria.</h4>");
		}
	});
	// rent range slider
	$(function() {
		$('.ui-slider .ui-slider-handle').prepend('<img id="sliderButton" src="../img/sliderButton.jpg" />')
		$("#sliderRentAmount").slider({
			range: true,
			min: 500,
			max: 4000,
			values: [500, 4000],
			step: 25,
			slide: function(event, ui) {
				if ($(window).width() <= 425) {
					$(ui.handle).text("$" + ui.value);
					$(ui.handle).css({
						'text-align': 'center',
						'padding-top': '8%',
						'font-size': '70%'
					});
					localStorage.setItem("minRentPrice", ui.values[0]);
					localStorage.setItem("maxRentPrice", ui.values[1]);
				}
				if ($(window).width() > 425) {
					$(ui.handle).text("$" + ui.value);
					$(ui.handle).css({
						'text-align': 'center',
						'padding-top': '18%',
						'font-size': '70%'
					});
					localStorage.setItem("minRentPrice", ui.values[0]);
					localStorage.setItem("maxRentPrice", ui.values[1]);
				}
			},
		});
		// clear values displaying on slide handle when reset all button is clicked
		$(".resetAllButton").click(function() {
			$('.ui-slider .ui-slider-handle').text('')
		})
	});
	// toggle classes to show which bathroom count is selected
	$('.bathroomSelectionButtons').on("click", function() {
		$(".bathroomSelectionButtons.btn-primary").removeClass("btn-primary")
		$(this).toggleClass("btn-primary");
	});
	// area range slider
	$(function() {
		$("#sliderSQFT").slider({
			range: true,
			min: 800,
			max: 8000,
			values: [800, 8000],
			step: 25,
			slide: function(event, ui) {
				$("ui.handle").text(ui.value + "sq.ft.");
				if ($(window).width() <= 425) {
					$(ui.handle).css({
						'text-align': 'center',
						'padding-top': '8%',
						'font-size': '70%'
					});
				}
				if ($(window).width() > 425) {
					$(ui.handle).css({
						'text-align': 'center',
						'padding-top': '18%',
						'font-size': '70%'
					});
				}
			},
		});
		$(".resetAllButton").click(function() {
			$('.ui-slider .ui-slider-handle').text('')
		})
	});
	// clear all selected filters when reset all button is clicked
	$(".resetAllButton").click(function() {
		localStorage.clear();
		$("#sliderRentAmount").slider("option", "values", [500, 4000]);
		$("#sliderSQFT").slider("option", "values", [800, 8000]);
		$(".bedroomSelectionButtons.btn-primary").removeClass("btn-primary");
		$(".bathroomSelectionButtons.btn-primary").removeClass("btn-primary");
	});
	// show row with reset all filters button and hide more filters button
	$("#moreFiltersButton").click(function() {
		$(".resetFiltersRow").show();
		$(".moreFiltersRow").show();
		$("#moreFiltersButton").hide();
	});
	// add more amenities
	$("#moreAmenitiesButton").click(function moreAmenitiesPopulate() {
		$("#leftAmenitiesList").append("<div class='checkbox'><label><input type='checkbox' value=''>SWIMMING POOL</label></div><div class='checkbox'><label><input type='checkbox' value=''>WIRELESS INTERNET</label></div><div class='checkbox'><label><input type='checkbox' value=''>HOT COFFEE</label></div><div class='checkbox'><label><input type='checkbox' value=''>SECURITY SYSTEM</label></div>");
		$("#rightAmenitiesList").append("<div class='checkbox'><label><input type='checkbox' value=''>FIREPLACE</label></div><div class='checkbox'><label><input type='checkbox' value=''>CABLE TELEVISION</label></div><div class='checkbox'><label><input type='checkbox' value=''>CLIMATE CONTROLLED</label></div><div class='checkbox'><label><input type='checkbox' value=''>TENNIS COURTS</label></div>");
		$("#moreAmenitiesButton").replaceWith("<div class='col-md-6 col-md-offset-6' id='lessAmenitiesButton' role='button'<label><span class='glyphicon glyphicon-chevron-up'></span> LESS</label></div>");
	});
	// sections to show/hide at mobile width
	if ($(window).width() <= 425) {
		$(".mobileFiltersButtonRow").show();
		$(".landingPageFiltersRow").hide();
		// hide large screen filters section when filters are applied
		$("#mobileFiltersButton").click(function() {
			$(".resetFiltersRow").show();
			$(".mobileFiltersButtonRow").hide();
		});
		$(".applyFiltersButton").click(function() {
			$(".mobileFiltersButtonRow").show();
			$(".filtersSection").css("height", "45px");
			$(".landingPageFiltersRow").hide();
		});
	}
	// hide filters button for mobile width when at laptop width
	if ($(window).width() > 425) {
		$(".mobileFiltersButtonRow").hide();
	}
	// make filters section full screen on mobile width when mobile filters button is clicked
	$("#mobileFiltersButton").click(function() {
		$(".landingPageFiltersRow").show();
		$(".moreFiltersRow").show();
		$("#moreFiltersButton").hide();
		$(".filtersSection").css({
			"height": $(window).height(),
			"overflow-y": "scroll",
			"-webkit-overflow-scrolling": "touch"
		});
	});
});