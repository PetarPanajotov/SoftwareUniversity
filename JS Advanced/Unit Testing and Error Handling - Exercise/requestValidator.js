// Write a function that validates an HTTP request object. The object has the properties method, uri, version, and message. Your function will receive the object as a parameter and has to verify that each property meets the following requirements:

// · method - can be GET, POST, DELETE or CONNECT

// · uri - must be a valid resource address or an asterisk (*); a resource address is a combination of alphanumeric characters and periods; all letters are Latin; the URI cannot be an empty string

// · version - can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string

// · message - may contain any number of non-special characters (special characters are <, >, \, &, ', ")

// If a request is valid, return it unchanged.

// If any part fails the check, throw an Error with the message "Invalid request header: Invalid {Method/URI/Version/Message}".

// Replace the part in curly braces with the relevant word. Note that some of the properties may be missing, in which case the request is invalid. Check the properties in the order in which they are listed above. If more than one property is invalid, throw an error for the first encountered.

// Input / Output

// Your function will receive an object as a parameter. Return the same object or throw an Error as described above as an output.
function requestValidator(objectInfo) {
    let validMethods = ["GET", "POST", "DELETE", "CONNECT"]
    let validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"]
    let patternURI = /^[\w.]+$/g
    let messagePattern = [`<`, `>`, `\\`, `&`, `'`,`"`]
    if (typeof objectInfo !== "object") {
        throw new Error("input have to be object")
    }
    if (!validMethods.includes(objectInfo.method)) {
        throw new Error("Invalid request header: Invalid Method")
    }
    if (!objectInfo.hasOwnProperty("uri")) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (objectInfo.uri !== "*" && (objectInfo.uri).match(patternURI) === null) {
        throw new Error ('Invalid request header: Invalid URI')
    }
    if (!validVersions.includes(objectInfo.version)) {
        throw new Error ('Invalid request header: Invalid Version')
    }
    if (!objectInfo.hasOwnProperty('message')) {
        throw new Error ('Invalid request header: Invalid Message')
    }
    for (let ch of objectInfo.message) {
        if (messagePattern.includes(ch)) {
            throw new Error ('Invalid request header: Invalid Message')
        }
    }
    return objectInfo
}
console.log(requestValidator({

    method: 'GET',
    
    uri: 'dsad',
    message: "'; DROP TABLE"
    
    }))