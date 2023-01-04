// Write your solution in this file!
const employee = {
    name: "Giselle Smith",
    streetAdress: "1313 Mocking Bird Lane"
}

//Returning an new object containing the updated key value
function updateEmployeeWithKeyAndValue(object, key, value) { 
    return newobject = {...object, [key]: value };
}

// Returning the same oject with key updated with new value
// Remember you only use brackets in function and not .notation
// Remember you don't use .notation when using brackets
// so you can't do object.[key]
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function deleteFromEmployeeByKey(object, key) {
    const newobj = {...object }
    delete newobj[key];
    return newobj;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}  