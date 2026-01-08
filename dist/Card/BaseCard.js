import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-ignore
import CardBody from './CardBody';
const BASE_CARD_CLASSNAME = 'card';
const colorVariants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'];
const textVariants = ['white', 'muted'];
const BaseCard = /*#__PURE__*/React.forwardRef(({
  prefix,
  className,
  bgColor,
  textColor,
  borderColor,
  hasBody = false,
  children,
  as: Component = 'div',
  ...props
}, ref) => {
  const classes = classNames(className, prefix ? `${prefix}-${BASE_CARD_CLASSNAME}` : BASE_CARD_CLASSNAME, bgColor && `bg-${bgColor}`, textColor && `text-${textColor}`, borderColor && `border-${borderColor}`);
  return /*#__PURE__*/React.createElement(Component, {
    ref: ref,
    ...props,
    className: classes
  }, hasBody ? /*#__PURE__*/React.createElement(CardBody, null, children) : children);
});

/* eslint-disable react/require-default-props */
BaseCard.propTypes = {
  /** Prefix for component CSS classes. */
  prefix: PropTypes.string,
  /** Background color of the card. */
  bgColor: PropTypes.oneOf(colorVariants),
  /** Text color of the card. */
  textColor: PropTypes.oneOf([...colorVariants, ...textVariants]),
  /** Border color of the card. */
  borderColor: PropTypes.oneOf(colorVariants),
  /** Determines whether the card should render its children inside a `CardBody` wrapper. */
  hasBody: PropTypes.bool,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Additional CSS class names to apply to the card element. */
  className: PropTypes.string,
  /** The content to render inside the card. */
  children: PropTypes.node
};
export default BaseCard;
//# sourceMappingURL=BaseCard.js.map