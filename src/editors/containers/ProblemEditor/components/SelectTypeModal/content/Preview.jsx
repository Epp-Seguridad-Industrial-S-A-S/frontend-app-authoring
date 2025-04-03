import React from 'react';
import PropTypes from 'prop-types';
import { Hyperlink, Image, Container } from '@openedx/paragon';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n'; // Ensure this import is present
import messages from './messages';
import { ProblemTypes } from '../../../../../data/constants/problem';

const Preview = ({ problemType, intl }) => {
  if (problemType === null) {
    return null;
  }
  const data = ProblemTypes[problemType];
  return (
    <Container style={{ width: '494px', height: '400px' }} className="bg-light-300 rounded p-4">
      <div className="small">
        {data.title} {/* Render the React node directly */}
      </div>
      <Image
        fluid
        className="my-3"
        src={data.preview}
        alt={intl.formatMessage(messages.previewAltText, { problemType })}
      />
      <div className="mb-3">
        {data.previewDescription} {/* Render the React node directly */}
      </div>
      <Hyperlink destination={data.helpLink} target="_blank">
        <FormattedMessage {...messages.learnMoreButtonLabel} /> {/* Uses FormattedMessage */}
      </Hyperlink>
    </Container>
  );
};

Preview.defaultProps = {
  problemType: null,
};

Preview.propTypes = {
  problemType: PropTypes.string,
  intl: intlShape.isRequired,
};

export const PreviewInternal = Preview; // For testing only
export default injectIntl(Preview);