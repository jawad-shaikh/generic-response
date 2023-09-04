const okResponse = require("./lib/okResponse");
const createSuccessResponse = require("./lib/createSuccessResponse");
const updateSuccessResponse = require("./lib/updateSuccessResponse");
const deleteSuccessResponse = require("./lib/deleteSuccessResponse");
const emptyResponse = require("./lib/emptyResponse");
const badRequestResponse = require("./lib/badRequestResponse");
const unauthorizedResponse = require("./lib/unauthorizedResponse");
const forbiddenResponse = require("./lib/forbiddenResponse");
const notFoundResponse = require("./lib/notFoundResponse");
const conflictErrorResponse = require("./lib/conflictErrorResponse");
const tooManyRequestsResponse = require("./lib/tooManyRequestsResponse");
const serverErrorResponse = require("./lib/serverErrorResponse");
const genericResponse = require("./lib/genericResponse");

module.exports = {
    okResponse,
    createSuccessResponse,
    updateSuccessResponse,
    deleteSuccessResponse,
    emptyResponse,
    badRequestResponse,
    unauthorizedResponse,
    forbiddenResponse,
    notFoundResponse,
    conflictErrorResponse,
    tooManyRequestsResponse,
    serverErrorResponse,
    genericResponse,
}
