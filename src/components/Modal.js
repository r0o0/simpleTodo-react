import React, { Fragment, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
// COMPONENT
import Form from './Form';
import { addClass, removeClass } from '../utils/general';
// CSS
import './Modal.sass';

function Modal(props) {
  const {
    submitState,
  } = props;
  const [isSubmit, setIsSubmit] = useState(null);
  const [isModalClosed, setIsModalClosed] = useState(true);
  const modal = useRef(null);
  const triggerBtn = useRef(null);

  const openModal = () => {
    removeClass(modal.current.querySelector('.modal--wrapper'), 'hide--modal');
    addClass(modal.current, 'show');
    addClass(modal.current.querySelector('.modal--wrapper'), 'show--modal');
    addClass(triggerBtn.current, 'hide');
    setIsModalClosed(false);
    setIsSubmit(false);
  };

  const closeModal = () => {
    removeClass(modal.current.querySelector('.modal--wrapper'), 'show--modal');
    setTimeout(() => addClass(modal.current.querySelector('.modal--wrapper'), 'hide--modal'), 100);
    setTimeout(() => removeClass(modal.current, 'show'), 400);
    removeClass(triggerBtn.current, 'hide');
    const form = document.querySelector('form');
    if (isSubmit === null) {
      form.reset();
    }
    if (isSubmit) {
      submitState(isSubmit);
    }
    setIsModalClosed(true);
  };

  // Close modal on form submit
  useEffect(() => {
    if (isSubmit) {
      closeModal();
    }
  }, [isSubmit]);

  return (
    <Fragment>
      <input
        ref={triggerBtn}
        className="btn--show"
        type="button"
        value="Add todo"
        onClick={() => openModal()}
      />
      <div ref={modal} className="modal">
        <div className="modal--wrapper">
          <Form submitState={isSubmit => setIsSubmit(isSubmit)} isModalClosed={isModalClosed} />
          <input
            className="btn--close"
            type="button"
            value="Close"
            onClick={() => closeModal()}
          />
        </div>
      </div>
    </Fragment>
  )
}

Modal.propTypes = {
  submitState: PropTypes.func.isRequired,
}

export default Modal;
