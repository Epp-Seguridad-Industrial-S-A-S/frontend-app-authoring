import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SelectableBoxSet from './SelectableBoxSet';
import { getInputType } from './utils'; // Corrected from './ OUTERutils'

const INPUT_TYPES = ['radio', 'checkbox'];

const SelectableBox = React.forwardRef(({
  type,
  value,
  checked,
  children,
  onClick,
  onFocus,
  inputHidden,
  isIndeterminate,
  isInvalid,
  className,
  name,
  ...props
}, ref) => {
  const inputType = getInputType('SelectableBox', type);
  const inputRef = useRef(null);

  console.log('SelectableBox - value:', value, 'checked:', checked);

  useEffect(() => {
    if (onClick && inputRef.current) {
      inputRef.current.onclick = (e) => onClick(e);
    }
  }, [onClick]);

  return (
    <div
      role="button"
      onKeyPress={() => inputRef.current.click()}
      onClick={() => inputRef.current.click()}
      onFocus={onFocus}
      className={classNames('pgn__selectable_box', className, {
        'pgn__selectable_box-active': checked,
        'pgn__selectable_box-invalid': isInvalid,
      })}
      tabIndex={0}
      ref={ref}
      {...props}
    >
      <input
        type={inputType}
        name={name}
        value={value}
        checked={checked}
        hidden={inputHidden}
        ref={inputRef}
        tabIndex={-1}
        onChange={() => {}}
        {...(type === 'checkbox' && { isIndeterminate })}
      />
      {children}
    </div>
  );
});

SelectableBox.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  checked: PropTypes.bool,
  type: PropTypes.oneOf(INPUT_TYPES),
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  inputHidden: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  isInvalid: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
};

SelectableBox.defaultProps = {
  value: undefined,
  checked: false,
  type: 'radio',
  onClick: () => {},
  onFocus: () => {},
  inputHidden: true,
  isIndeterminate: false,
  isInvalid: false,
  className: undefined,
  name: undefined,
};

SelectableBox.Set = SelectableBoxSet;
export default SelectableBox;