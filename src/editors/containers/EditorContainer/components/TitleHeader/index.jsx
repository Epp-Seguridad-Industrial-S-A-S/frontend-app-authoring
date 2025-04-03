import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, IconButton, Truncate } from '@openedx/paragon';
import { EditOutline } from '@openedx/paragon/icons';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { selectors } from '../../../../data/redux';
import { localTitleHooks } from './hooks';
import messages from './messages';
import EditableHeader from './EditableHeader';

const TitleHeader = ({ isInitialized, intl }) => {
  if (!isInitialized) { return intl.formatMessage(messages.loading); }
  const dispatch = useDispatch();
  const rawTitle = useSelector(selectors.app.displayTitle);
  // Ensure title is a string; fallback to empty string if invalid
  const title = typeof rawTitle === 'string' ? rawTitle : (rawTitle?.title || '');

  const {
    inputRef,
    isEditing,
    handleChange,
    handleKeyDown,
    localTitle,
    startEditing,
    cancelEdit,
    updateTitle,
  } = localTitleHooks({ dispatch });

  if (isEditing) {
    return (
      <EditableHeader
        {...{
          inputRef,
          handleChange,
          handleKeyDown,
          localTitle,
          updateTitle,
          cancelEdit,
        }}
      />
    );
  }
  return (
    <div className="d-flex flex-row align-items-center mt-1">
      <Truncate>
        {title}
      </Truncate>
      <IconButton
        alt={intl.formatMessage(messages.editTitleLabel)}
        iconAs={Icon}
        className="mx-2"
        onClick={startEditing}
        size="sm"
        src={EditOutline}
      />
    </div>
  );
};

TitleHeader.propTypes = {
  isInitialized: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
};

export const TitleHeaderInternal = TitleHeader; // For testing only
export default injectIntl(TitleHeader);