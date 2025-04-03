import React from 'react';
import { Row, Stack } from '@openedx/paragon';
import { IntlProvider } from '@edx/frontend-platform/i18n';
import ProblemTypeSelect from './content/ProblemTypeSelect';
import Preview from './content/Preview';
import AdvanceTypeSelect from './content/AdvanceTypeSelect';
import SelectTypeWrapper from './SelectTypeWrapper';
import * as hooks from './hooks';
import {
  AdvancedProblemType,
  isAdvancedProblemType,
  ProblemType,
  ProblemTypeKeys,
} from '../../../../data/constants/problem';
import messages from './content/messages'; // Import messages.ts

interface Props {
  onClose: (() => void) | null;
}

const SelectTypeModal: React.FC<Props> = ({
  onClose,
}) => {
  const [selected, setSelected] = React.useState<ProblemType | AdvancedProblemType>(ProblemTypeKeys.SINGLESELECT);
  hooks.useArrowNav(selected, setSelected);

  return (
    <IntlProvider locale="en" messages={messages}>
      <SelectTypeWrapper onClose={onClose} selected={selected}>
        <Row className="justify-content-center">
          {(!isAdvancedProblemType(selected)) ? (
            <Stack direction="horizontal" gap={4} className="flex-wrap mb-6">
              <ProblemTypeSelect selected={selected} setSelected={setSelected} />
              <Preview problemType={selected} />
            </Stack>
          ) : <AdvanceTypeSelect selected={selected} setSelected={setSelected} />}
        </Row>
      </SelectTypeWrapper>
    </IntlProvider>
  );
};

export default SelectTypeModal;