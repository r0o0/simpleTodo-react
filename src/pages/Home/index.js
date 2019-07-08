import React, { useEffect, useState } from 'react';
// COMPONENTS
import Modal from '../../components/Modal';
// UTILS
import { getTodos, deleteTodo, updateTodo } from '../../utils/api';
// CSS
import './Home.sass';

function Home() {
  const [deleteState, setDeleteState] = useState(false);
  const [submitState, setSubmitState] = useState(false);
  const [update, setUpdate] = useState(false);
  const [data, setData] = useState(null);

  // copy data function
  const newData = (oldData, newData) => {
    return Object.assign(oldData, newData);
  };

  // manage todo complete state
  const handleCheckedState = (e, key) => {
    const oldData = data[key];
    if(!data[key].isDone) {
      const data = newData(oldData, { isDone: true });
      updateTodo(key, data);
    } else {
      const data = newData(oldData, { isDone: false });
      updateTodo(key, data);
    }
    setUpdate(true);
  };

  // delete todo
  const handleDelete = (key) => {
    setDeleteState(true);
    deleteTodo(key);
  };

  // fetch todo && reset state
  useEffect(() => {
    // fetch todo list data
    // console.log('fetch data', data, '\n', update);
    const fetchData = async () => {
      await getTodos(setData);
    };
    setTimeout(() => fetchData(), 200);
    // reset
    setDeleteState(false);
    setSubmitState(false);
    setUpdate(false);
  }, [deleteState, submitState, update]);

  return (
    <div>
      <h1 className="title">Todos</h1>
      <ul className="todolist">
        {data !== null ? Object.keys(data).map(key => {
          const list = data[key];
          return (
            <li className={data[key].isDone ? 'todolist__list todo--done' : 'todolist__list'} key={key}>
              <div className="todolist__title">
                <h2 className="todolist__category text">{list.category}</h2>
                <p className="todolist__text text">{list.todo}</p>
              </div>
              <input className="todolist__checkbox" type="checkbox" checked={data[key].isDone} onChange={e => handleCheckedState(e, key)} />
              <input className="btn--delete" type="button" value="Delete" onClick={() => handleDelete(key)} />
            </li>
          );
        }): null}
      </ul>
      <Modal submitState={isSubmit => setSubmitState(isSubmit)} />
    </div>
  );
}

export default Home;
