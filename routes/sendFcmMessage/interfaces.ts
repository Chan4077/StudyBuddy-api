export interface NotificationRequest {
  /**
   * The notification request's actions
   */
  notificationActions?: NotificationAction[];
  /**
   * The notification request's body
   */
  notificationBody?: string;
  /**
   * The notification request's Android Oreo Notification Channel ID
   */
  notificationChannelId?: string;
  /**
   * The notification request's colour as a hexadecimal colour value
   */
  notificationColor?: string;
  /**
   * The notification request's icon
   */
  notificationIcon?: string;
  /**
   * The notification request's priority
   */
  notificationPriority?: NotificationPriority;
  /**
   * The notification request's title
   */
  notificationTitle: string;
  /**
   * The notification request's time-to-live (TTL)
   */
  notificationTtl?: number;
  /**
   * The user or topic to send the notification request to
   */
  userOrTopic: string;
}

export const NOTIFICATION_REQUEST_VALID_KEYS = [
  'notificationActions',
  'notificationBody',
  'notificationChannelId',
  'notificationColor',
  'notificationIcon',
  'notificationPriority',
  'notificationTitle',
  'notificationTtl',
  'userOrTopic'
]

export const NOTIFICATION_REQUEST_REQUIRED_KEYS = [
  'notificationTitle',
  'userOrTopic'
]

export interface NotificationAction {
  /**
   * The notification action's icon
   */
  actionIcon?: string;
  /**
   * The notification action's title
   */
  actionTitle: string;
  /**
   * The notification action's type
   */
  actionType?: string;
}

export type NotificationPriority = 'normal' | 'high';
