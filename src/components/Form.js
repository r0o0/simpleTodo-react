import React, { useReducer, useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
// UTILS
import { postTodo } from '../utils/api';
import { addClass, removeClass } from '../utils/general';
// CSS
import './Form.sass';

function Form(props) {

  const {
    submitState,
  } = props;

  const initialState = {
    todo: null,
    category: null,
    isDone: false,
  }
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);
  const [submit, setSubmit] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [todoError, setTodoError] = useState(null);
  const [categoryError, setCategoryError] = useState(null);

  // input value onChange
  const handleChange = (e) => {
    const type = e.target.id;
    setSubmit(false);
    setState({ [type]: e.target.value });
    console.log('handle change', state);
    if (type === 'todo') {
      setTodoError(false);
    }
    if (type === 'category') {
      setCategoryError(false);
    }
    if (e.target.value <= 0) {
      setReadyToSubmit(false);
    }
  };

  // error validation
  const handleError = useCallback((type, value) => {
    console.log('%c handle Error', 'background: red; color: white', type, value);
    if (value.length <= 0) {
      if (type === 'todo') {
        setTodoError(true);
      }
      if (type === 'category') {
        setCategoryError(true);
      }
      if (readyToSubmit) {
        setReadyToSubmit(false);
      }
    } else {
      if (type === 'todo') {
        setTodoError(false);
      }
      if (type === 'category') {
        setCategoryError(false);
      }
    }
  }, [readyToSubmit]);

  // input onBlur
  const handleBlur = (e) => {
    const type = e.target.id;
    setSubmit(false);
    setState({ [type]: e.target.value });
    if (state.todo !== null && state.category !== null) {
      if (type === 'todo' && state.todo.length <= 0) {
        setTodoError(true);
      }
      if (type === 'category' && state.todo.length <= 0) {
        setCategoryError(true);
      }
    }
    if (e.target.value <= 0) {
      setReadyToSubmit(false);
    }
  };

  // Keyboard Event
  const handleKeyboardEvent = (e) => {
    if (e.keyCode === 13 && e.target.id === 'todo') {
      e.preventDefault();
    }
    if (e.keyCode === 13 || e.keyCode === 9) {
      // console.log('%c KEY ENTER', 'background: green; color: white;', e.target);
      handleError(e.target.id, e.target.value);
    }
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (readyToSubmit) {
      // console.log('%c SUBMIT VALID', 'background: white; color: green');
      postTodo(state);
      submitState(true);
      // reset
      document.querySelector('form').reset();
      setReadyToSubmit(false);
    }
  };

  useEffect(() => {
    const todoI = document.querySelector('#todo');
    const categoryI = document.querySelector('#category');

    console.log('%c effect', 'background: blue; color: white;', '\n', 'ready to submit:',  readyToSubmit, '\n', 'error states:', todoError, categoryError, '\n', 'state:', state);
    if (todoError) {
      addClass(todoI, 'error__input');
    } else {
      removeClass(todoI, 'error__input');
    }
    if (categoryError) {
      addClass(categoryI, 'error__input');
    } else {
      removeClass(categoryI, 'error__input');
    }
    if (todoError !== null && categoryError !== null) {
      if (!todoError && !categoryError) {
        setReadyToSubmit(true);
      }
    }
  }, [state, todoError, categoryError, readyToSubmit]);

  useMemo(() => {
    const todoI = document.querySelector('#todo');
    const categoryI = document.querySelector('#category');
    if (!readyToSubmit && submit) {
      if (todoI.value === null || state.todo <= 0) {
        handleError(todoI.id, todoI.value);
        setReadyToSubmit(false);
      }
      if (categoryI.value === null || state.category <= 0) {
        handleError(categoryI.id, categoryI.value);
        setReadyToSubmit(false);
      }
    }
  }, [readyToSubmit, submit, handleError, state]);

  return (
    <form className="form__todo" onSubmit={e => handleSubmit(e)}>
      <div className="inputBox">
        <label>
          Todo
          <input
            id="todo"
            className="inputBox__field"
            type="input"
            onChange={(e) => handleChange(e)}
            onKeyDown={e => handleKeyboardEvent(e)}
            onBlur={e => handleBlur(e)}
            autoComplete="off"
          />
        </label>
        {todoError ? <p className="error__msg">Please enter todo.</p> : null}
      </div>
      <div className="inputBox">
        <label>
          Category
          <input
            id="category"
            type="input"
            className="inputBox__field"
            onChange={e => handleChange(e)}
            onKeyDown={e => handleKeyboardEvent(e)}
            onBlur={e => handleBlur(e)}
            autoComplete="off"
          />
        </label>
        {categoryError ? <p className="error__msg">Please enter category.</p> : null}
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

Form.propTypes = {
  submitState: PropTypes.func.isRequired,
  isModalClosed: PropTypes.bool.isRequired,
};

export default Form;
