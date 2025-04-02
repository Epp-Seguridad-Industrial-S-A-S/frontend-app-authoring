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
      id: 'course-authoring.notifications.custom0',
      defaultMessage: 'Saving',
      description: 'Message displayed when something is being saved',
    },
    CustomNotificationAdding: {
      id: 'course-authoring.notifications.custom1',
      defaultMessage: 'Adding',
      description: 'Message displayed when something is being added',
    },
    CustomNotificationDuplicating: {
      id: 'course-authoring.notifications.custom2',
      defaultMessage: 'Duplicating',
    description: 'Message displayed when something is being duplicated',
  },
  CustomNotificationDeleting: {
    id: 'course-authoring.notifications.custom3',
    defaultMessage: 'Deleting',
    description: 'Message displayed when something is being deleted',
  },
  CustomNotificationCopying: {
    id: 'course-authoring.notifications.custom4',
    defaultMessage: 'Copying',
    description: 'Message displayed when something is being copied',
  },
  CustomNotificationPasting: {
    id: 'course-authoring.notifications.custom5',
    defaultMessage: 'Pasting',
    description: 'Message displayed when something is being pasted',
  },
  CustomNotificationDiscardingChanges: {
    id: 'course-authoring.notifications.custom6',
    defaultMessage: 'Discarding changes',
    description: 'Message displayed when changes are being discarded',
  },
  CustomNotificationPublishing: {
    id: 'course-authoring.notifications.custom7',
    defaultMessage: 'Publishing',
    description: 'Message displayed when something is being published',
  },
  CustomNotificationHidingFromStudents: {
    id: 'course-authoring.notifications.custom8',
    defaultMessage: 'Hiding from students',
    description: 'Message displayed when something is being hidden from students',
  },
  CustomNotificationMakingVisibleToStudents: {
    id: 'course-authoring.notifications.custom9',
    defaultMessage: 'Making visible to students',
    description: 'Message displayed when something is being made visible to students',
  },
  CustomNotificationEmpty: {
    id: 'course-authoring.notifications.custom10',
    defaultMessage: '',
    description: 'Empty message, possibly used for placeholder text',
  },
});

export default messages;
