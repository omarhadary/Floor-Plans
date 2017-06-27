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
	// onload hide the reset all filters row
	$(".resetFiltersRow").hide();
	// clear rental results 
	$(".floorPlans").empty();
	localStorage.clear();
	// add all listings on page load
	for (var i = 0; i < floorPlanImagesArray.length; i++) {
		var floorPlanImage = $('<img>');
		floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
		$(".floorPlans").append(floorPlanImage);
	}
	// when reset all button is clicked, reload the page
	$(".resetAllButton").click(function() {
		location.reload();
	});
	// capture bedroom count input and store in localStorage
	$('.bedroomSelectionButtons').on("click", function() {
		var bedroomSelection = $(this).val();
		localStorage.clear();
		localStorage.setItem("bedroomCount", bedroomSelection);
		// return false;
	});
	// display filtered results when Apply Filters button is clicked
	$("button.applyFiltersButton").click(function() {
		var bedroomsToCheck = localStorage.getItem("bedroomCount");
		var minRentToCheck = localStorage.getItem("minRentPrice");
		var maxRentToCheck = localStorage.getItem("maxRentPrice");
        // var minRentToCheck = parseInt(minRentToCheckRaw);
		// var maxRentToCheck = parseInt(maxRentToCheckRaw);
		console.log("bedroom entered " + bedroomsToCheck);
		console.log("min rent entered " + minRentToCheck);
		console.log("max rent entered " + maxRentToCheck);
		$(".floorPlans").empty();
        // if (minRentToCheck == null && maxRentToCheck == null) {
		// 	console.log("rent values are null");
		// 	for (var i = 0; i < floorPlanImagesArray.length; i++) {
		// 		var floorPlanImage = $('<img>');
		// 		floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
		// 		$(".floorPlans").append(floorPlanImage);
		// 	}
		// }
        //  {

            // cvcvcv working code block for rent amount cvcvcvcv
			// for (var j = 0; j < floorPlanImagesArray.length; j++) {
            //     console.log("are we here");
			// 	if (bedroomsToCheck == floorPlanImagesArray[j].bedroomCount && minRentToCheck <= floorPlanImagesArray[j].rentAmount && floorPlanImagesArray[j].rentAmount <= maxRentToCheck) {
            //         console.log("how about here");
			// 		console.log("rent value are not null");
			// 		console.log("min rent after loop is " + minRentToCheck);
			// 		console.log("max rent after loop is " + maxRentToCheck);
            //         console.log("listing rent amount " + floorPlanImagesArray[j].rentAmount);
			// 		var floorPlanImage = $('<img>');
			// 		floorPlanImage.attr('src', floorPlanImagesArray[j].imgURL);
			// 		// floorPlanImage.attr('data-type', floorPlanImagesArray[j].rentAmount);
			// 		$(".floorPlans").append(floorPlanImage);
			// 	}
			// }
		// }

// XZXZX good code block ZXZXZX

		if (bedroomsToCheck == null && minRentToCheck == null && maxRentToCheck == null) {
			console.log("rent values are null");
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				var floorPlanImage = $('<img>');
				floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
				$(".floorPlans").append(floorPlanImage);
			}
		}
		if (bedroomsToCheck == 3 && minRentToCheck !== null && maxRentToCheck !== null) {
			console.log("rent value are not null");
			console.log("min rent is " + minRentToCheck);
			console.log("max rent is " + maxRentToCheck);
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (floorPlanImagesArray[i].bedroomCount >= 3 && minRentToCheck <= floorPlanImagesArray[i].rentAmount <= maxRentToCheck) {
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					floorPlanImage.attr('data-type', floorPlanImagesArray[i].rentAmount);
					$(".floorPlans").append(floorPlanImage);
					console.log(floorPlanImagesArray[i].rentAmount);
				}
			}
		} else {
			for (var i = 0; i < floorPlanImagesArray.length; i++) {
				if (bedroomsToCheck == floorPlanImagesArray[i].bedroomCount && minRentToCheck <= floorPlanImagesArray[i].rentAmount && floorPlanImagesArray[i].rentAmount <= maxRentToCheck) {
					console.log("rent value are not null");
					console.log("min rent is " + minRentToCheck);
					console.log("max rent is " + maxRentToCheck);
					var floorPlanImage = $('<img>');
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					floorPlanImage.attr('data-type', floorPlanImagesArray[i].rentAmount);
					floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
					$(".floorPlans").append(floorPlanImage);
					console.log(floorPlanImage);
				}
			}
		}
	});
	// rent range picker take 2 
	// $("#slider").slider({
	//     range: true,
	//     min: 100,
	//     max: 500,
	//     step: 10,
	//     values: [100, 500],
	//     slide: function(event, ui) {
	//         var delay = function() {
	//             var handleIndex = $(ui.handle).data('index.uiSliderHandle');
	//             var label = handleIndex == 0 ? '#min' : '#max';
	//             $(label).html('$' + ui.value).position({
	//                 my: 'center top',
	//                 at: 'center bottom',
	//                 of: ui.handle,
	//                 offset: "0, 10"
	//             });
	//         };
	//         // wait for the ui.handle to set its position
	//         setTimeout(delay, 5);
	//     }
	// });
	// $('#minRentPrice').html('$' + $('#slider').slider('values', 0)).position({
	//     my: 'center top',
	//     at: 'center bottom',
	//     of: $('#slider a:eq(0)'),
	//     offset: "0, 10"
	// });
	// $('#maxRentPrice').html('$' + $('#slider').slider('values', 1)).position({
	//     my: 'center top',
	//     at: 'center bottom',
	//     of: $('#slider a:eq(1)'),
	//     offset: "0, 10"
	// });
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
				$("#minRentPrice").val("$" + ui.values[0]);
				$("#maxRentPrice").val(" - $" + ui.values[1]);
			},
			stop: function(event, ui) {
					localStorage.setItem("minRentPrice", ui.values[0]);
					localStorage.setItem("maxRentPrice", ui.values[1]);
				}
				// ,
				// create: function(event, ui) {
				//         var minValue=$(this).slider('values',0);
				//         var maxValue=$(this).slider('values',1);
				//         $(this).find('.ui-slider-handle').append("$"+$( "#sliderRentAmount" ).slider( "values", 0 ));
				//     }
		});
		$("#minRentPrice").val("$" + $("#sliderRentAmount").slider("values", 0));
		$("#maxRentPrice").val(" - $" + $("#sliderRentAmount").slider("values", 1));
		// $( "#minRentPrice" ).val( "$" + $( "#sliderRentAmount" ).slider( "values", 0 ));
	});
	// $("#minRentPrice").val("$" + $("#slider").slider("values", 0));
	// display min rent value below slider
	// $('#minRentPrice').html('$' + $('#slider').slider('values', 0)).position({
	//     my: 'center top',
	//     at: 'center bottom',
	//     // of: $('#slider a:eq(0)'),
	//     offset: "0, 10"
	// });
	// move in date picker
	// $(function() {
	//     $("#datepicker").datepicker();
	// });
	// area range slider
	$(function() {
		// $('.ui-slider .ui-slider-handle').prepend('<img id="sliderButton" src="../img/sliderButton.jpg" />')
		$("#sliderSQFT").slider({
			range: true,
			min: 800,
			max: 8000,
			values: [800, 8000],
			step: 25,
			slide: function(event, ui) {
				$("#minArea").val(ui.values[0] + " sq.ft. - ");
				$("#maxArea").val(ui.values[1] + " sq.ft.");
			},
			stop: function(event, ui) {
					localStorage.setItem("minArea", ui.values[0]);
					localStorage.setItem("maxArea", ui.values[1]);
				}
				// ,
				// create: function(event, ui) {
				//         var minValue=$(this).slider('values',0);
				//         var maxValue=$(this).slider('values',1);
				//         $(this).find('.ui-slider-handle').append("$"+$( "#sliderSQFT" ).slider( "values", 0 ));
				//     }
		});
		$("#minArea").val($("#sliderSQFT").slider("values", 0) + " sq.ft. ");
		$("#maxArea").val("- " + $("#sliderSQFT").slider("values", 1) + " sq.ft.");
	});
	// clear all selected filters
	$("button.cancelFiltersButton").click(function() {
		localStorage.clear();
		$("#sliderRentAmount").slider("option", "values", [500, 4000]);
		$("#minRentPrice").val("$" + $("#sliderRentAmount").slider("values", 0));
		$("#maxRentPrice").val(" - $" + $("#sliderRentAmount").slider("values", 1));
		$("#sliderSQFT").slider("option", "values", [800, 8000]);
		$("#minRentPrice").val("$" + $("#sliderRentAmount").slider("values", 0));
		$("#maxRentPrice").val(" - $" + $("#sliderRentAmount").slider("values", 1));
	});
	// show row with reset all filters button and hide more filters button
	$("#moreFiltersButton").click(function() {
		$(".resetFiltersRow").show();
		$("#moreFiltersButton").hide();
	});
	// add more amenities
	$("#moreAmenitiesButton").click(function() {
			$("#leftAmenitiesList").append("<div class='checkbox'><label><input type='checkbox' value=''>SWIMMING POOL</label></div><div class='checkbox'><label><input type='checkbox' value=''>WIRELESS INTERNET</label></div><div class='checkbox'><label><input type='checkbox' value=''>HOT COFFEE</label></div><div class='checkbox'><label><input type='checkbox' value=''>SECURITY SYSTEM</label></div>");
			$("#rightAmenitiesList").append("<div class='checkbox'><label><input type='checkbox' value=''>FIREPLACE</label></div><div class='checkbox'><label><input type='checkbox' value=''>CABLE TELEVISION</label></div><div class='checkbox'><label><input type='checkbox' value=''>CLIMATE CONTROLLED</label></div><div class='checkbox'><label><input type='checkbox' value=''>TENNIS COURTS</label></div>");
			$("#moreAmenitiesButton").replaceWith("<div class='col-md-6 col-md-offset-6' role='button'>Less</div>");
		})
		// function to use bedroom count onclick
		//      on release of bedroom count button, clear the #floor-plans, loop through the floorPlansImages and only push the results matching
		// function to use rent toggle
		// on release, check value of the newly position bracket, clear the results in the and loop through the floorPlans images to update the results in the #floor-plan
		// On Click More Filters, expand the filters area. On click of cancel button, go back to minimal filters area, onclick of apply button, filter the floorPlanImages by the bedroom and rent parameters already entered
		// at mobile screen, only show a filters button and expand the filters screen once clicked
});