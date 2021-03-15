'use strict'

const commonResponse  = require('../helpers/common-response.helper');
const swapi = require("../providers/swapi");

async function swapiGetAllPlanets (){
    try{
        const data = await swapi.getAllPlanets();
        //TODO: Translate fields
        return commonResponse.success(data)
      }catch(e){
        return commonResponse.error("swapiGetAllPlanets", e)
      }
}

async function swapiGetPlanetById(event){
    try{
        const planetId =  event.pathParameters.planetId;
        const data = await swapi.getPlanetById(planetId);
        //TODO: Translate fields
        return commonResponse.success(data)
      }catch(e){
        return commonResponse.error("swapiGetPlanetById", e)
      }
}


module.exports = {
    swapiGetAllPlanets,
    swapiGetPlanetById
}