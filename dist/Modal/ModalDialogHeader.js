import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const ModalDialogHeader = /*#__PURE__*/React.forwardRef(({
  as = 'div',
  children,
  ...props
}, ref) => (/*#__PURE__*/React.createElement(as, {
  ...props,
  ref,
  className: classNames('pgn__modal-header', props.className)
}, children)));
ModalDialogHeader.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the header */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string
};
ModalDialogHeader.defaultProps = {
  as: 'div',
  className: ''
};
export default ModalDialogHeader;
//# sourceMappingURL=ModalDialogHeader.js.map