var floorPlanImagesArray = [
    {
        name: "casaNova",
        imgURL: "assets/img/casaNova.jpg",
        bedroomCount: 0,
        rentAmount: 1200
    },
    {
        name: "monteCristo",
        imgURL: "assets/img/monteCristo.jpg",
        bedroomCount: 1,
        rentAmount: 1650 
    },
    {
        name: "shangriLa",
        imgURL: "assets/img/shangriLa.jpg",
        bedroomCount: 3,
        rentAmount: 1825
    },
    {
        name: "versailles",
        imgURL: "assets/img/versailles.jpg",
        bedroomCount: 2,
        rentAmount: 4000
    },
    {
        name: "xanadu",
        imgURL: "assets/img/xanadu.jpg",
        bedroomCount: 2,
        rentAmount: 1525
    },
    {
        name: "hogwarts",
        imgURL: "assets/img/hogwarts.jpg",
        bedroomCount: 3,
        rentAmount: 1825
    },
    {
        name: "camelot",
        imgURL: "assets/img/camelot.jpg",
        bedroomCount: 2,
        rentAmount: 1825
    },
    {
        name: "elDorado",
        imgURL: "assets/img/elDorado.jpg",
        bedroomCount: 1,
        rentAmount: 1825
    },
    {
        name: "vanityFair",
        imgURL: "assets/img/vanityFair.jpg",
        bedroomCount: 2,
        rentAmount: 1825
    },
    {
        name: "atlantis",
        imgURL: "assets/img/atlantis.jpg",
        bedroomCount: 1,
        rentAmount: 1825
    },
    {
        name: "utopia",
        imgURL: "assets/img/utopia.jpg",
        bedroomCount: 3,
        rentAmount: 2825
    },
    {
        name: "liliput",
        imgURL: "assets/img/liliput.jpg",
        bedroomCount: 0,
        rentAmount: 525
    }
];

$(function() {
    // function to hide the reset all filters row
    $(".resetFiltersRow").hide();

    $(".floorPlans").empty();
    // function to add all listings on page load
    for (var i = 0; i < floorPlanImagesArray.length; i++){
        var floorPlanImage = $('<img>');
        floorPlanImage.attr('src', floorPlanImagesArray[i].imgURL);
        $(".floorPlans").append(floorPlanImage);
    }
});

// function to show reset all filters row
$("#moreFiltersButton").click(function(){
    $(".resetFiltersRow").show();
    $("#moreFiltersButton").hide();
});

// function to use bedroom count onclick
//      on release of bedroom count button, clear the #floor-plans, loop through the floorPlansImages and only push the results matching
// function to use rent toggle
    // on release, check value of the newly position bracket, clear the results in the and loop through the floorPlans images to update the results in the #floor-plan
// On Click More Filters, expand the filters area. On click of cancel button, go back to minimal filters area, onclick of apply button, filter the floorPlanImages by the bedroom and rent parameters already entered
// at mobile screen, only show a filters button and expand the filters screen once clicked