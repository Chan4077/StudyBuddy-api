# Interfaces

A list of TypeScript interfaces.

## `NotificationRequest`

Specifies a notification request to be supplied as the body for the `/v1/send-notification-request` API.

### Properties

Name | Description | Required? | Default
---|---|---|---
`notificationActions` | A list of [`NotificationAction`](#NotificationAction)s | No | -
`notificationBody` | The body of the notification | No | -
`notificationChannelId` | The notification channel to use for posting notifications on Android Oreo and up | No | `uncategorised`
`notificationColor` | The color of the notification (A hexadecimal color value) | No | `#3F51B5`
`notificationIcon` | The icon of the notification | No | -
`notificationPriority` | The priority of the notification (to be handled by FCM) | No | `normal`
`notificationTitle` | The title of the notification | Yes | -
`notificationTtl` | Time-to-live of the notification in seconds (indicates how long FCM should store the notification on the backend) | No | 28 weeks (`28*7*24*60*60`)
`userOrTopic` | The user or topic to send the notification to | Yes | -

## `NotificationAction`

Specifies a notification action for a notification.

### Properties

Name | Description | Required? | Default
---|---|---|---
`actionIcon` | The icon of the notification action | No | -
`actionTitle` | The title of the notification action | Yes | -
`actionType` | The intent type of the notification action | No | -

## `NotificationPriority`

Specifies the priority of a notification.

### Value

```typescript
type NotificationPriority = 'normal' | 'high';
```
