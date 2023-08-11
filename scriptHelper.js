// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   const missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src=${imageUrl}>`;
   
}

function validateInput(testInput) {
   if(!testInput || testInput.trim()===""){
    return "Empty";
   }
   if(isNaN(testInput)){
    return "Not a Number";
   }else{
    return "Is a Number"
   }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //console.log("test",pilot.value);
    const validatePilot = validateInput(pilot.value);
    const validateCoPilot = validateInput(copilot.value);
    const validateFuelLevel = validateInput(fuelLevel.value);
    const validateCargoLevel = validateInput(cargoLevel.value);

   if(validatePilot==="Empty"){
    alert("Pilot Name cannot be Empty");
   }
   if(validatePilot==="Is a Number"){
     alert("Pilot Name cannot be a number");
   }

  

   if(validateCoPilot === "Empty"){
    alert("CO Pilot Name cannot be Empty");
   }
   
   if(validateCoPilot === "Is a Number"){
    alert("CO Pilot Name cannot be number");
   }
   if(validateCargoLevel==="Empty"){
     alert("Cargo Mass cannot be a Empty");
   }

   if(validateFuelLevel==="Empty"){
    alert("Fuel Level cannot be a Empty");
  }

   if(validateFuelLevel==="Not a Number"){
    alert("Fuel Level must be a Number");
   }
   if(validateCargoLevel==="Not a Number"){
    alert("Cargo Level must be a Number");
   }
   
   if(pilot.value && copilot.value && fuelLevel.value && cargoLevel.value){
   const launchStatus = document.getElementById("launchStatus");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelLevelStatus = document.getElementById("fuelStatus");
   const CargoMassStatus = document.getElementById("cargoStatus");
   list.style.visibility = 'visible'; 
   pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for Launch`;
   copilotStatus.innerHTML =`CoPilot ${copilot.value } is ready for Launch`;


  if(fuelLevel.value<10000){
    launchStatus.innerHTML = "Shuttle not ready for launch";
    fuelLevelStatus.innerHTML = "there is not enough fuel for the journey";
    launchStatus.style.color = 'red';
  }else{
    fuelLevelStatus.innerHTML='';
  }
  if(cargoLevel.value>10000){
    launchStatus.innerHTML = "Shuttle not ready for launch";
    launchStatus.style.color = '#C7254E';
    CargoMassStatus.innerHTML="there is too much mass for the shuttle to take off";
  }else{
    CargoMassStatus.innerHTML=''
  }
  
  if(fuelLevel.value>10000 && cargoLevel.value<10000){  
  launchStatus.innerHTML = "Shuttle ready for launch";
  launchStatus.style.color = '#419F6A';
  list.style.visibility = 'hidden'; 
  }

  



}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json();
  });

    return planetsReturned;
}

function pickPlanet(planets) {
  return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
