import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getInputType } from './utils';

const INPUT_TYPES = ['radio', 'checkbox'];
const DEFAULT_COLUMNS_NUMBER = 2;

const SelectableBoxSet = React.forwardRef(({
  children,
  name,
  value,
  defaultValue,
  onChange,
  type,
  columns,
  className,
  ariaLabel,
  ariaLabelledby,
  ...props
}, ref) => {
  const inputType = getInputType('SelectableBoxSet', type);

  // Debug log
  console.log('SelectableBoxSet - value:', value, 'children:', children);

  const handleChildClick = (e) => {
    if (onChange) {
      onChange(e); // Propagate the event to ProblemTypeSelect
    }
  };

  return (
    <div
      ref={ref}
      className={classNames(
        'pgn__selectable_box-set',
        `pgn__selectable_box-set--${columns || DEFAULT_COLUMNS_NUMBER}`,
        className,
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          console.warn('Invalid child in SelectableBoxSet:', child);
          return child;
        }
        return React.cloneElement(child, {
          type: inputType,
          name,
          value: child.props.value,
          onClick: handleChildClick, // Use onClick instead of onChange
          checked: value === child.props.value,
          defaultChecked: defaultValue === child.props.value,
        });
      })}
    </div>
  );
});

SelectableBoxSet.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.oneOf(INPUT_TYPES),
  columns: PropTypes.number,
  className: PropTypes.string,
  ariaLabelledby: PropTypes.string,
  ariaLabel: PropTypes.any,
};

SelectableBoxSet.defaultProps = {
  children: undefined,
  onChange: () => {},
  value: undefined,
  defaultValue: undefined,
  type: 'radio',
  columns: DEFAULT_COLUMNS_NUMBER,
  className: undefined,
  ariaLabelledby: undefined,
  ariaLabel: undefined,
};

export default SelectableBoxSet;