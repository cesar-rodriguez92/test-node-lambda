'use strict';

const externalService =  require("../services/external");

module.exports.externalGetAllPlanets = async (event) => {
  console.log("Starting externalGetAllPlanets");
  return externalService.swapiGetAllPlanets();
}

module.exports.externalGetPlanetById = async (event) => {
  console.log("Starting externalGetPlanetById");
  return externalService.swapiGetPlanetById(event);
}
