'use strict'

const commonResponse  = require('../helpers/common-response.helper');

async function createCharacter (event){
    try{
        let { body: bodyData } = event;
        if(!bodyData) throw new Error ("No Content");
        bodyData = JSON.parse(bodyData);
        const { name, gender, age,  } = bodyData;
        //TODO: connect to Database and save
        return commonResponse.success({
          name,
          gender,
          age,
          createdAt: new Date()
        })
    }catch(e){
        return commonResponse.error("createCharacter", e)
    }
}

module.exports = {
    createCharacter
}