'use strict'

function success (responseData){
    return {
        success: true,
        dateTime:  new Date(),
        data: responseData
    }
}

function error (methodName, e){
    console.error(`Error at ${methodName}: `, e);
    return {
        success: false,
        dateTime:  new Date(),
        message: error.message || "Ocurrió un error en la petición"
    }
}


module.exports = {
    success,
    error
}