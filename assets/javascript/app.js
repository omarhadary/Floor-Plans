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
// rent range picker
$(function() {
    $( "#slider-3" ).slider({
        range:true,
        min: 500,
        max: 4000,
        values: [ 500, 4000 ],
        slide: function( event, ui ) {
        $( ".ui-slider-handle" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( ".ui-slider-handle" ).val( "$" + $( "#slider-3" ).slider( "values", 0 ) +
        " - $" + $( "#slider-3" ).slider( "values", 1 ) );
});
// move in date picker
// $(function() {
//     $("#datepicker").datepicker();
// });
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