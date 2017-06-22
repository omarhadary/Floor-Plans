var floorPlanImages= {
    "Casa Nova": {
        name: "casaNova",
        imgURL: "assets/img/casaNova",
        bedroomCount: 0,
        rentAmount: 1200
    },
    "Monte Cristo": {
        name: "monteCristo",
        imgURL: "assets/img/monteCristo",
        bedroomCount: 1,
        rentAmount: 1650 
    },
    "Shangri-La": {
        name: "shangriLa",
        imgURL: "assets/img/shangriLa",
        bedroomCount: 3,
        rentAmount: 1825
    },
    "Versailles": {
        name: "versailles",
        imgURL: "assets/img/versailles",
        bedroomCount: 2,
        rentAmount: 4000
    },
    "Xanadu": {
        name: "xanadu",
        imgURL: "assets/img/xanadu",
        bedroomCount: 2,
        rentAmount: 1525
    },
    "Hogwarts": {
        name: "hogwarts",
        imgURL: "assets/img/hogwarts",
        bedroomCount: 3,
        rentAmount: 1825
    },
    "Camelot": {
        name: "camelot",
        imgURL: "assets/img/camelot",
        bedroomCount: 2,
        rentAmount: 1825
    },
    "El Dorado": {
        name: "elDorado",
        imgURL: "assets/img/elDorado",
        bedroomCount: 1,
        rentAmount: 1825
    },
    "Vanity Fair": {
        name: "vanityFair",
        imgURL: "assets/img/vanityFair",
        bedroomCount: 2,
        rentAmount: 1825
    },
    "Atlantis": {
        name: "atlantis",
        imgURL: "assets/img/atlantis",
        bedroomCount: 1,
        rentAmount: 1825
    },
    "Utopia": {
        name: "utopia",
        imgURL: "assets/images/utopia",
        bedroomCount: 3,
        rentAmount: 2825
    },
    "Liliput": {
        name: "liliput",
        imgURL: "assets/images/liliput",
        bedroomCount: 0,
        rentAmount: 525
    }
};

// function to show all listings when page loads
//      on load, loop through floorPlanImages and pass to #floor-plans
// function to use bedroom count onclick
//      on release of bedroom count button, clear the #floor-plans, loop through the floorPlansImages and only push the results matching
// function to use rent toggle
    // on release, check value of the newly position bracket, clear the results in the and loop through the floorPlans images to update the results in the #floor-plan
// On Click More Filters, expand the filters area. On click of cancel button, go back to minimal filters area, onclick of apply button, filter the floorPlanImages by the bedroom and rent parameters already entered
// at mobile screen, only show a filters button and expand the filters screen once clicked