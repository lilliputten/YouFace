/** @module FormSelect.fixture
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
 */
/* eslint-disable no-console */

import React from 'react'
import FormSelect from './FormSelect'
import FormGroup from '../FormGroup'
import FormLabeledGroup from '../FormLabeledGroup'
import FormLabel from '../FormLabel'

// Demo styles for cosmos engine
import 'demo.pcss'

import './FormSelect.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {
export const DemoWrapper = <FormGroup stack id="Wrapper" /> // ({ children }) => {

const demoOptions = [
  { val: 1, text: 'Ruinning' },
  { val: 2, text: 'Swimming extra long text item name string value' },
]

const demoChange = ({ checked, value }) => {
  console.log('demoChange', { checked, value })
  // debugger
}

// TODO: With label
export default {
  default: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
    />
  ),
  withExtraOptions: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
      singleChoice
      closeOnSelect
      controlButtonTheme="success"
      onChange={demoChange}
    />
  ),
  Question: (
    <FormSelect
      title="Select question"
      placeholder="Select some option"
      _singleChoice="force"
      _value={1}
      checked={[1]}
      onChange={demoChange}
      options={demoOptions}
      _closeOnSelect
      controlButtonTheme="default"
      fullWidth
      // show
    />
  ),
  withLabel: (
    <FormGroup id="withLabel" flow fullWidth>
      <FormLabel htmlFor="testId" title="Label title">Label</FormLabel>
      <FormSelect
        title="Select question"
        placeholder="Select some option"
        checked={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
        // show
      />
    </FormGroup>
  ),
  withLabeledGroup: (
    <FormLabeledGroup id="withLabeledGroup" title="withLabeledGroup" fullWidth flow>
      <FormSelect
        title="Select question"
        placeholder="Select some option"
        checked={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
        // show
      />
    </FormLabeledGroup>
  ),
}
