'use strict'

const axios =  require('axios');

const apiBasePath = 'https://swapi.py4e.com/api';

async function getAllPlanets (){
    const url = `${apiBasePath}/planets`
    const response = await axios.get(url);
    return response.data;
};

async function getPlanetById(planetId){
    const url = `${apiBasePath}/planets/${planetId}`;
    const response = await axios.get(url);
    return response.data;
}


module.exports = {
    getAllPlanets,
    getPlanetById
}

