import React from 'react';
import { Button, Container } from '@openedx/paragon';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import SelectableBox from '../../../../../sharedComponents/SelectableBox';
import {
  ProblemTypes,
  ProblemTypeKeys, // Corrected from "Problem صادرTypeKeys"
  AdvanceProblemKeys,
} from '../../../../../data/constants/problem';
import messages from './messages';

const ProblemTypeSelect = ({ selected, setSelected }) => {
  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log('handleChange - New selected value:', newValue);
    setSelected(newValue);
  };

  const handleClick = () => {
    console.log('handleClick - Switching to advanced:', AdvanceProblemKeys.BLANK);
    setSelected(AdvanceProblemKeys.BLANK);
  };

  const settings = { type: 'radio' };

  console.log('ProblemTypeSelect - Rendering with selected:', selected);

  return (
    <Container style={{ width: '494px', height: '400px' }}>
      <SelectableBox.Set
        name="problem-type"
        columns={1}
        onChange={handleChange}
        type={settings.type}
        value={selected}
      >
        {Object.values(ProblemTypeKeys).map((key) =>
          key !== 'advanced' ? (
            <SelectableBox
              className="border border-light-400 text-primary-500 shadow-none"
              id={key}
              key={key}
              value={key}
              {...settings}
            >
              {ProblemTypes[key].title}
            </SelectableBox>
          ) : null
        )}
      </SelectableBox.Set>
      <Button variant="link" className="pl-0 mt-2" onClick={handleClick}>
        <FormattedMessage {...messages.advanceProblemButtonLabel} />
      </Button>
    </Container>
  );
};

export default ProblemTypeSelect;