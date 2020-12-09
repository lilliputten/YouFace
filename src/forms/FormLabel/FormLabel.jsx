/** @module FormLabel
 *  @class FormLabel
 *  @since 2020.10.06, 23:45
 *  @changed 2020.10.06, 23:46
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'

import FormItemHOC from '../FormItemHOC'

import './FormLabel.pcss'

const cnFormLabel = cn('FormLabel')

class FormLabel extends React.Component /** @lends @FormLabel.prototype */ {

  getClassName() {
    const {
      id,
      // clickable,
    } = this.props
    const classList = cnFormLabel({
      id,
      // clickable,
    }, [this.props.className])
    return classList
  }

  // Handlers...

  onClick = (event) => {
    const {
      disabled,
      onClick,
      // clickable,
    } = this.props
    if (/* clickable && */ !disabled && onClick && typeof onClick === 'function') {
      onClick(event)
    }
  }

  // Render...

  render() {

    const {
      id,
      name,
      disabled,
      htmlFor,
      text,
      children,
      title,
    } = this.props

    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      title,
    }

    return (
      <div {...renderProps}>
        <label
          className="FormLabel-Control"
          id={id}
          name={name}
          disabled={disabled}
          htmlFor={htmlFor}
          title={title}
        >
          {children || text || title}
        </label>
      </div>
    )

  }


}

FormLabel.propTypes = {
  id: PropTypes.string,
}
export default FormItemHOC({ hoverable: true })(FormLabel)
