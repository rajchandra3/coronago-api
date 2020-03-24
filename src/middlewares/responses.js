var dataNotFoundError = (res)=>{
    res.json({
        code : 1,
        message : "Error! Data you asked for was not found."
    });
}
var emptyBodyRequestError = (res)=>{
    res.json({
        code : 1,
        message : "Warning : We found this request to be suspicious. Please refrain from making requests with empty body. This may lead to your account being blocked or terminated without any notice!"
    });
}

const emptyFieldWarning = (field_name,res)=>{
    res.json({
        code:1,
        message: `${field_name} can't be empty! Please fill the ${field_name} field and submit again`
    })
}

var emptyQueryRequestError = (res)=>{
    res.json({
        code : 1,
        message : "Request query is empty!"
    });
}

var errorResponse = (res,e)=>{
    process.env.APP_ENV=='development'?console.log(e):null;
    res.json({
        code : 1,
        message : "Something went wrong. Please refresh the page and try again!",
        error:{
            name: e.name,
            message: e._message
        }
    });
}

var hasLessCharactersResponse = (res,lowerLimit,upperLimit,type)=>{
    res.json({
        code : 1,
        message : `Looks like you haven't written enough! Make sure the ${type} is between ${lowerLimit} and ${upperLimit} characters`
    })
}

var hasMoreCharactersResponse = (res,lowerLimit,upperLimit,type)=>{
    res.json({
        code : 1,
        message : `Looks like you have written more than enough! Make sure the ${type} is between ${lowerLimit} and ${upperLimit} characters`
    })
}

var invalidQueryResponse = (res)=>{
    res.json({
        code : 1,
        message : "Invalid request! We are unable to process the content you are looking for",
        redirect : false
    });
}

var isProfaneResponse = (res,type)=>{
    res.json({
        code : 1,
        message : `Something doesn't look good in your ${type}, our system found it to be profane!`
    })
}

var successResponse = (res)=>{
    res.json({
        code : 0,
        message : `Your changes were saved successfully.`
    })
}

/**
 * @param {Object} res @param {Number} code @param {String} message @param {Boolean} loggedIn @param {Object} response object
 */
var sendResponse = (res,code,message,loggedIn,data)=>{
    res.json({
        code : code,
        message : message,
        loggedIn : loggedIn,
        content : data
    });
}

var unableToUpdateError = (res)=>{
    res.json({
        code : 1,
        message : "We are unable to update!",
    });
}

var unauthorizedAccess = (res)=>{
    res.json({
        code : 1,
        message : "You are not allowed to access this part of CodePark ;)",
    });
}


module.exports = {
    dataNotFoundError,
    emptyBodyRequestError,
    emptyFieldWarning,
    emptyQueryRequestError,
    errorResponse,
    hasLessCharactersResponse,
    hasMoreCharactersResponse,
    invalidQueryResponse,
    isProfaneResponse,
    sendResponse,
    successResponse,
    unableToUpdateError,
    unauthorizedAccess
};
