import React from 'react';
import classNames from 'classnames';
import ChipIcon from './ChipIcon';
export const CHIP_PGN_CLASS = 'pgn__chip';
const Chip = /*#__PURE__*/React.forwardRef(({
  children,
  className,
  variant = 'light',
  iconBefore,
  iconBeforeAlt,
  iconAfter,
  iconAfterAlt,
  onIconBeforeClick,
  onIconAfterClick,
  disabled = false,
  isSelected = false,
  onClick,
  ...props
}, ref) => {
  const hasInteractiveIcons = !!(onIconBeforeClick || onIconAfterClick);
  const isChipInteractive = !hasInteractiveIcons && !!onClick;
  const interactionProps = isChipInteractive ? {
    onClick,
    onKeyPress: onClick,
    tabIndex: 0,
    role: 'button'
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(CHIP_PGN_CLASS, `pgn__chip-${variant}`, className, {
      disabled,
      selected: isSelected,
      interactive: isChipInteractive
    }),
    ref: ref,
    ...interactionProps,
    ...props
  }, iconBefore && /*#__PURE__*/React.createElement(ChipIcon, {
    className: `${CHIP_PGN_CLASS}__icon-before`,
    src: iconBefore,
    onClick: onIconBeforeClick,
    alt: iconBeforeAlt,
    variant: variant,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames(`${CHIP_PGN_CLASS}__label`, {
      'p-before': iconBefore,
      'p-after': iconAfter
    })
  }, children), iconAfter && /*#__PURE__*/React.createElement(ChipIcon, {
    className: `${CHIP_PGN_CLASS}__icon-after`,
    src: iconAfter,
    onClick: onIconAfterClick,
    alt: iconAfterAlt,
    variant: variant,
    disabled: disabled
  }));
});
export default Chip;
//# sourceMappingURL=index.js.map