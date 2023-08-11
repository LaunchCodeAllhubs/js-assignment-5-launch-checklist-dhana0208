// Write your JavaScript code here!



window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planet = pickPlanet(listedPlanets);
        console.log(planet)
 
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
     console.log("here");
     const faultyItems = document.getElementById("faultyItems");
     const pilotName = document.getElementById("pilotName");
     const coPilotName = document.querySelector('input[name="copilotName"]');
     const fuelLevel = document.querySelector('input[name="fuelLevel"]');
     const cargoMass = document.querySelector('input[name="cargoMass"]');
     formSubmission(document,faultyItems,pilotName,coPilotName,fuelLevel,cargoMass);
     event.preventDefault();
    });



   
});