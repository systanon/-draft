import React from 'react';
import Form from './../Form/Form.js';
// import FormCopy from './../Form/FormCopy.js';
import './ModalWindow.scss';
import ErrorBoundary from './../ErrorBoundary/ErrorBoundary.js';

export default class ModalWindow extends React.Component {
  render() {
    return (
      <div className='overlay' onClick={this.props.onClick}>
        <ErrorBoundary>
          <Form
            // propsy={"propsy"}
            {...this.props}
            // submit={this.props.submit}
            // closeModalHendler={this.props.closeModalHendler}
          />
        </ErrorBoundary>
      </div>
    );
  }
}
