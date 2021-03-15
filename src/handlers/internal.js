'use strict';

const internalService = require("../services/internal");

module.exports.createCharacter = async (event) => {
  console.log("Starting createCharacter");
  return internalService.createCharacter(event);
}
