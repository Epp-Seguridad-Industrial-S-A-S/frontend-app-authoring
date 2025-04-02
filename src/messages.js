import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  connectionError: {
    id: 'authoring.alert.error.connection',
    defaultMessage: 'We encountered a technical error when loading this page. This might be a temporary issue, so please try again in a few minutes. If the problem persists, please go to the {supportLink} for help.',
    description: 'Error message shown to users when there is a connectivity issue with the server.',
  },
  supportText: {
    id: 'authoring.alert.support.text',
    defaultMessage: 'Support Page',
  },
  // Custom Notification Messages
    CustomNotificationSaving: {
      id: 'course-authoring.notifications.customNotificationSaving',
      defaultMessage: 'Saving',
      description: 'Message displayed when something is being saved',
    },
    CustomNotificationAdding: {
      id: 'course-authoring.notifications.customNotificationAdding',
      defaultMessage: 'Adding',
      description: 'Message displayed when something is being added',
    },
    CustomNotificationDuplicating: {
      id: 'course-authoring.notifications.customNotificationDuplicating',
      defaultMessage: 'Duplicating',
    description: 'Message displayed when something is being duplicated',
  },
  CustomNotificationDeleting: {
    id: 'course-authoring.notifications.customNotificationDeleting',
    defaultMessage: 'Deleting',
    description: 'Message displayed when something is being deleted',
  },
  CustomNotificationCopying: {
    id: 'course-authoring.notifications.customNotificationCopying',
    defaultMessage: 'Copying',
    description: 'Message displayed when something is being copied',
  },
  CustomNotificationPasting: {
    id: 'course-authoring.notifications.customNotificationPasting',
    defaultMessage: 'Pasting',
    description: 'Message displayed when something is being pasted',
  },
  CustomNotificationDiscardingChanges: {
    id: 'course-authoring.notifications.customNotificationDiscardingChanges',
    defaultMessage: 'Discarding changes',
    description: 'Message displayed when changes are being discarded',
  },
  CustomNotificationPublishing: {
    id: 'course-authoring.notifications.customNotificationPublishing',
    defaultMessage: 'Publishing',
    description: 'Message displayed when something is being published',
  },
  CustomNotificationHidingFromStudents: {
    id: 'course-authoring.notifications.customNotificationHidingFromStudents',
    defaultMessage: 'Hiding from students',
    description: 'Message displayed when something is being hidden from students',
  },
  CustomNotificationMakingVisibleToStudents: {
    id: 'course-authoring.notifications.customNotificationMakingVisibleToStudents',
    defaultMessage: 'Making visible to students',
    description: 'Message displayed when something is being made visible to students',
  },
  CustomNotificationEmpty: {
    id: 'course-authoring.notifications.customNotificationEmpty',
    defaultMessage: '',
    description: 'Empty message, possibly used for placeholder text',
  },
});

export default messages;
