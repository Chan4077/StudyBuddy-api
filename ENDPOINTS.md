# List of API endpoints

This file contains the full list of endpoints that the API exposes.

Note: All API endpoints are prefixed with <https://studybuddy-api.herokuapp.com>.

## `POST` /v1/send-notification-request

Sends a notification request for a user or a topic.

Use the request body to specify the notification request.

### Body parameters

See the [`NotificationRequest` interface](/INTERFACES.md#NotificationRequest) for all of the supported parameters.

## `POST` /v1/send-fcm-message

Sends a FCM message payload.

Similar to `/v1/send-notification-request`, but sends directly instead of POSTing to Cloud Firestore to be handled by Cloud Functions.

### Body parameters

See the [Firebase docs](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#resource-message) for all of the supported parameters.

## `GET` /v1/user/:userId

Retrieves a user's details from the list of authenticated users.

### Route parameters

Parameter | Description
---|---
`userId` | The ID of the user to retrieve details from

## `GET` /v1/user

Retrieves a user's details from the list of authenticated users.

### Query parameters

Parameter | Description | Required
---|---|---
`email` | The email of the user to retrieve details from | No
`id` | The ID of the user to retrieve details from | Yes (if no other parameters are specified)
`phoneNumber`/`number` | The phone number of the user to retrieve details from | No

## `DELETE` /v1/user/:userId

Deletes a user from the list of authenticated users.

### Route parameters

Parameter | Description
---|---
`userId` | The ID of the user to retrieve details from

## `DELETE` /v1/user

Deletes a user from the list of authenticated users.

**Currently disabled for now due to a potential security flaw where anyone could delete a user without the user acknowledging.**

### Query parameters

Parameter | Description | Required
---|---|---
`email` | The email of the user to delete | No
`id` | The ID of the user to delete | Yes (if no other parameters are specified)
`phoneNumber`/`number` | The phone number of the user to delete | No

## `GET` /v1/uptime

Gets the uptime of the NodeJS server.

Returns the current uptime in seconds as a number.
