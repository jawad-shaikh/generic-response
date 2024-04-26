# Generic Response

This module provides a set of functions for generating standardized HTTP responses for various scenarios in web development. These responses are designed to streamline the handling of common HTTP status codes and simplify the process of crafting consistent responses across different parts of an application.

# Installation

```bash
npm install generic-response
```

```js
const { okResponse } = require('generic-response');

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    const response = okResponse(users, "Users retrieved successfully.");
    return res.status(response.status.code).json(response);
  } catch (error) {
    const response = serverErrorResponse(error.message);
    return res.status(response.status.code).json(response);
  }
};

// Example response

{
  "status": {
    "code": 200,
    "success": true
  },
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    // More user objects if available
  ],
  "error": null,
  "message": "Users retrieved successfully."
}

```

Available Functions
- okResponse(data, message): Returns a successful response with a status code of 200.
- createSuccessResponse(data, message): Returns a successful response for a resource creation operation (status code 201).
- updateSuccessResponse(data, message): Returns a successful response for a resource update operation (status code 200).
- deleteSuccessResponse(data, message): Returns a successful response for a resource deletion operation (status code 200).
- emptyResponse(): Returns an empty response with a status code of 204.
- badRequestResponse(message): Returns a response indicating a client error with a status code of 400.
- unauthorizedResponse(message): Returns a response indicating authentication failure with a status code of 401.
- forbiddenResponse(message): Returns a response indicating insufficient permissions with a status code of 403.
- notFoundResponse(message): Returns a response indicating that the requested resource was not found with a status code of 404.
- conflictErrorResponse(message): Returns a response indicating a conflict with the current state of the server with a status code of 409.
- tooManyRequestsResponse(message): Returns a response indicating that the client has sent too many requests in a given amount of time with a status code of 429.
- serverErrorResponse(message): Returns a response indicating an internal server error with a status code of 500.
- genericResponse(statusCode, data, message): Returns a generic response with the specified status code, data, and message.
