/** @module FormBooleanHOC
 *  @class FormBooleanHOC
 *  @since 2020.12.10, 22:17
 *  @changed 2020.12.10, 22:17
 */
/* eslint-disable react/require-default-props, react/jsx-max-depth */

import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'utils'

// import FormItem from '../FormItem'
// import FormItemHOC from '../FormItemHOC'

import './FormBooleanHOC.pcss'

const cnFormBooleanHOC = cn('FormBooleanHOC')

// Unique id counter
let uniqIdCount = 1

const defaultState = { // Default state
  // hoverable: false,
  // focusable: false,
}

// class FormBooleanHOC extends React.PureComponent [>* @lends @FormBooleanHOC.prototype <] {
const wrapFormBooleanHOC = (WrappedComponent, params = {}) => class FormBoolean extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    id: params.id,
    value: false,
  }

  // Helper methods...

  getStateOrPropOrParam(id) { // Get parameter from state or from props
    return (this.state[id] != null) ? this.state[id] :
      (this.props[id] != null) ? this.props[id] :
        params[id]
  }

  createUniqId() {
    return 'FormItem' + (uniqIdCount++)
  }

  getId(props) {
    props = props || this.props
    return props.id || this.id || (this.id = this.createUniqId())
  }

  // Lifecycle methods...

  /* getDerivedStateFromProps???
   * static getDerivedStateFromProps(props, state) {
   *   // TODO: Update event subscriptions if `hoverable` flag changed?
   *   return deriveState(params, props, state) // deriveStateFromProps(props, state)
   * }
   */

  constructor(props) {
    super(props)
    // this.formItemRef = React.createRef()
    const { value } = this.props
    // this.state = deriveState(defaultState, params, props) // deriveStateFromProps(props, defaultState)
    this.id = props.id || params.id
    this.state = {
      value,
    }
  }

  componentDidMount() {
    // const { formItemRef: { current } = {} } = this
    this.afterRender()
  }

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.value
    const propsValue = this.props.value
    const stateValue = this.state.value
    if (propsValue !== prevValue && propsValue !== stateValue) { // New value from props
      this.setState({
        value: propsValue,
      }, this.updateValueWithState)
    }
    else if (stateValue !== prevState.value) { // New value from state
      this.updateValueWithState(this.state)
    }
    this.afterRender()
  }

  // Helper methods...

  getClassName() {
    const { id } = this.props
    const { value } = this.state
    const checked = !!value
    const mods = { id, checked }
    const classList = cnFormBooleanHOC(mods, [this.props.className])
    return classList
  }

  focus() { // Invoke containing input focus method
    // if (this.inputDomElem && typeof this.inputDomElem.focus == 'function') {
    //   this.inputDomElem.focus()
    // }
  }

  select() { // Invoke containing input select method
    // if (this.inputDomElem && typeof this.inputDomElem.select == 'function') {
    //   this.inputDomElem.select()
    // }
  }

  afterRender() { // Calling after each (including first) render
    // // TODO: Move `focus` and `select` forwarding to `FormItem` (for `focusable` variant)?
    // if (this.formItemRef && this.formItemRef.current) {
    //   if (!this.formItemRef.current.focus && this.focus) {
    //     this.formItemRef.current.focus = this.focus.bind(this)
    //   }
    //   if (!this.formItemRef.current.select && this.select) {
    //     this.formItemRef.current.select = this.select.bind(this)
    //   }
    // }
  }

  updateValueWithState = (state) => {
    const { id, onChange, disabled } = this.props
    if (!disabled && typeof onChange === 'function') {
      const { value } = state
      onChange({ id, value })
    }
  }

  // Events...

  handleChange = ({ value }) => {
    this.setState(({ value: stateValue }) => {
      if (value == null) {
        value = !stateValue
      }
      return { value }
    })
  }

  // Render...

  renderInput() {
    const {
      id,
      inputId,
      name,
      // disabled,
      setDomRef, // From FormItemHOC
      tabIndex, // focusable
    } = this.props
    const { value } = this.state
    const checked = !!value
    const inputProps = {
      type: 'checkbox',
      className: cnFormBooleanHOC('Input'),
      id: inputId || id || name,
      name: name || inputId || id,
      checked,
      onChange: this.handleChange,
      // onFocus={this.handleFocused}
      // onBlur={this.handleUnfocused}
      ref: setDomRef,
      tabIndex,
    }
    return (
      <input {...inputProps} />
    )
  }

  render() {
    const {
      id,
      disabled,
    } = this.props
    const { value } = this.state
    const renderProps = {
      id,
      className: this.getClassName(),
      disabled,
      value,
      handleChange: this.handleChange,
      // ref: setDomRef, // Init ref for FormItemHOC
      // ref: this.formItemRef,
      // tabIndex,
    }
    return (
      <WrappedComponent
        {...this.props}
        {...renderProps}
        // id={id}
      />
    )
  }

}

/** Usage:
 * FormBooleanHOC(component)
 * FormBooleanHOC(params)(component)
 */
const FormBooleanHOC = (params) => {
  if (typeof params === 'string') { // Passed identifier
    params = { id: params }
  }
  if (typeof params === 'object') { // Params passed -> metafabric
    return (component) => wrapFormBooleanHOC(component, params)
  }
  else { // Component passed -> simple fabric
    return wrapFormBooleanHOC(params)
  }
}

// export default FormItemHOC({ hoverable: true, focusable: true, framed: false })(FormBooleanHOC)
export default FormBooleanHOC

