/** @module Loader
 *  @since 2020.10.27, 00:39
 *  @changed 2021.04.22, 00:24
 *
 *  TODO: Place block (and local?) loaders into `ModalsController`?
 */

import React from 'react';
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure';
import { getCommonLangText } from 'utils/lang';
import { // Form items...
  FormButton,
  FormGroup,
  // utils as WebUiCoreUtils, // Moved to root index
} from 'forms';

const cnLoader = cn('Loader');

import './Loader.pcss';
import './Loader-animation.pcss';
import './Loader-modes.pcss';
import './Loader-themes.pcss';

// eslint-disable-next-line react/prefer-stateless-function
// export default class Loader extends React.PureComponent [>* @lends @Modal.prototype <] {

/** Loader component (FC)
 * @param {Boolean} [show]
 * @param {String} [theme] - Component theme (Light, none)
 * @param {Object} commonLang - Mapped language component
 */
const Loader = (props) => {
  const {
    id,
    lang,
    className/*  = 'preloader' */,
    mode,
    show,
    theme,
    // commonLang,
    text,
    onCancel,
    cancelText,
  } = props;
  const actions = (typeof onCancel === 'function') && (
    <div className={cnLoader('Actions')}>
      <FormGroup flow alignItems="center">
        <FormButton
          plain
          onDark={theme && theme.includes('Dark')}
          text={cancelText || getCommonLangText('cancelButton', 'Cancel', lang)}
          icon="faTimes"
          onClick={onCancel}
        />
      </FormGroup>
    </div>
  );
  const thisClassName = cnLoader({ mode, theme, show }, [ className, /* showClass */ ]);
  const showText = (text != null) ? text : getCommonLangText('loading', 'Loading...', lang);
  return (
    <div id={id} className={thisClassName}>
      <div className={cnLoader('Container')}>
        <div className={cnLoader('Spinner')} />
        <div className={cnLoader('Text')}>{showText}</div>
        {actions}
      </div>
    </div>
  );
};
export default Loader;
