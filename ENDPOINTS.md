# List of API endpoints

This file contains the full list of endpoints that the API exposes.

Note: All API endpoints are prefixed with <https://studybuddy-api.herokuapp.com>.

## `GET` /v1/user/:userId

Retrieves a user's details.

### Route parameters

Parameter | Description
---|---
`userId` | The ID of the user to retrieve details from

## `GET` /v1/user

Retrieves a user's details.

### Query parameters

Parameter | Description | Required
---|---|---
`id` | The ID of the user to retrieve details from | Yes

## `DELETE` /v1/user/:userId

Deletes a user from the list of authenticated users.

### Route parameters

Parameter | Description
---|---
`userId` | The ID of the user to retrieve details from

## `DELETE` /v1/user

Deletes a user from the list of authenticated users.

**Currently disabled for now to fix a potential flaw where anyone could delete a user without explicit authentication.**

### Query parameters

Parameter | Description | Required
---|---|---
`id` | The ID of the user to retrieve details from | Yes

## `GET` /v1/uptime

Gets the uptime of the NodeJS server.

Returns the current uptime in seconds as a number.

## `GET` /v1/apis

Gets all API endpoints.

Returns an array of API endpoints.
