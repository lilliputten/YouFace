/** @module FormTextInput.fixture
 *  @since 2020.10.07, 00:20
 *  @changed 2020.10.07, 00:49
 */

import React from 'react'
import FormTextInput from './FormTextInput'
import FormGroup from '../FormGroup'
// import FormButton from '../FormButton'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

export default {
  default: <FormTextInput
    className="addClassName"
    type="text"
    name="name"
    id="defaultInput"
    inputId="defaultInputControl"
    value="value"
    placeholder="placeholder"
    title="title"
    /*
    defaultValue="defaultValue"
    onChange={this.onLimitChange}
    onFocusOut={this.validateValues}
    disabled={false}
    ref={(domElem) => { this.LimitInput = domElem }}
    */
  />,
  fullWidth: <FormTextInput
    type="text"
    name="name"
    id="fullWidthInput"
    fullWidth
  />,
  // buttonSample: <FormButton text="Button sample" style="default" />
}