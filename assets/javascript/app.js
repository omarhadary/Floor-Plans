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
// onload
$(function() {
	// hide the reset all filters row
	$(".resetFiltersRow").hide();
	// clear rental results 
	$(".floorPlans").empty();
	// add all listings on page load
	for (var i = 0; i < floorPlanImagesArray.length; i++) {
		var floorPlanImage = $('<img>');
		floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
		$(".floorPlans").append(floorPlanImage);
	}
});
// display filtered rentals by bedroom count
    // $('button:button').click(function() {
    // var bedroomSelection = null;
    // bedroomSelection = $(this).val();
    // console.log(bedroomSelection);
$("button.applyFiltersButton").click(function() {
    var bedroomSelection;
    bedroomSelection = $('.bedroomSelectionButtons').val();
    console.log(bedroomSelection);
    // for(var i=0; i <floorPlanImagesArray.length; i++) {
    //     if (bedroomSelection == floorPlanImagesArray[i].bedroomCount) {
    //         console.log(floorPlanImagesArray[i].name);
    //     }
    //     return;
    // }
    
    // var bedroomSelection = $(".bedroomSelectionButtons").attr("value");
    // $(".input-group-btn > button.btn").on("click", function(){
    //     bedroomSelection = +this.innerHTML;
    // });
    // console.log("Value is " + bedroomSelection);
    // });
});
// $('.bedroomSelectionButtons').click(function() {
//             console.log($(this).attr("value"));
//         });
// rent range pocker take 2 
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
    $('.ui-slider .ui-slider-handle').prepend('<img id="sliderButton" src="../img/sliderButton.png" />')
    $( "#sliderRentAmount" ).slider({
        range:true,
        min: 500,
        max: 4000,
        values: [ 500, 4000 ],
        slide: function( event, ui ) {
        $( "#rentPrice" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    // ,
    // create: function(event, ui) {
    //         var minValue=$(this).slider('values',0);
    //         var maxValue=$(this).slider('values',1);
    //         $(this).find('.ui-slider-handle').append("$"+$( "#sliderRentAmount" ).slider( "values", 0 ));
    //     }
    });
    $( "#rentPrice" ).val( "$" + $( "#sliderRentAmount" ).slider( "values", 0 ) +
        " - $" + $( "#sliderRentAmount" ).slider( "values", 1 ) );
    // $( "#minRentPrice" ).val( "$" + $( "#sliderRentAmount" ).slider( "values", 0 ));
});
$( "#minRentPrice" ).val( "$" + $( "#slider" ).slider( "values", 0 ));
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
    // $('.ui-slider .ui-slider-handle').prepend('<img id="sliderButton" src="../img/sliderButton.png" />')
    $( "#sliderSQFT" ).slider({
        range:true,
        min: 850,
        max: 7500,
        values: [ 850, 7500 ],
        step: 50,
        slide: function( event, ui ) {
        $( "#area" ).val(ui.values[ 0 ] + " sq. ft. - " + ui.values[ 1 ] +" sq.ft.");
    }
    // ,
    // create: function(event, ui) {
    //         var minValue=$(this).slider('values',0);
    //         var maxValue=$(this).slider('values',1);
    //         $(this).find('.ui-slider-handle').append("$"+$( "#sliderSQFT" ).slider( "values", 0 ));
    //     }
    });
    $( "#area" ).val($( "#sliderSQFT" ).slider( "values", 0 ) +
        " sq. ft - " + $( "#sliderSQFT" ).slider( "values", 1 ) +" sq. ft.");
});
// show row with reset all filters button and hid more filters button
$("#moreFiltersButton").click(function() {
	$(".resetFiltersRow").show();
	$("#moreFiltersButton").hide();
});
// add more amenities
$("#moreAmenitiesButton").click(function() {
		$("#leftAmenitieslist").append("<div class='checkbox'><label><input type='checkbox' value=''>SWIMMING POOL</label></div><div class='checkbox'><label><input type='checkbox' value=''>WIRELESS INTERNET</label></div><div class='checkbox'><label><input type='checkbox' value=''>HOT COFFEE</label></div><div class='checkbox'><label><input type='checkbox' value=''>SECURITY SYSTEM</label></div>");
		$("#rightAmenitiesList").append("<div class='checkbox'><label><input type='checkbox' value=''>FIREPLACE</label></div><div class='checkbox'><label><input type='checkbox' value=''>CABLE TELEVISION</label></div><div class='checkbox'><label><input type='checkbox' value=''>CLIMATE CONTROLLED</label></div><div class='checkbox'><label><input type='checkbox' value=''>TENNIS COURTS</label></div>");
		$("#moreAmenitiesButton").replaceWith("<div class='col-md-6 col-md-offset-6' role='button'>Less</div>");
	})
	// function to use bedroom count onclick
	//      on release of bedroom count button, clear the #floor-plans, loop through the floorPlansImages and only push the results matching
	// function to use rent toggle
	// on release, check value of the newly position bracket, clear the results in the and loop through the floorPlans images to update the results in the #floor-plan
	// On Click More Filters, expand the filters area. On click of cancel button, go back to minimal filters area, onclick of apply button, filter the floorPlanImages by the bedroom and rent parameters already entered
	// at mobile screen, only show a filters button and expand the filters screen once clicked