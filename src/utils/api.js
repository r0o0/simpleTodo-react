import axios from 'axios';
const baseURL = process.env.REACT_APP_FIREBASE_API;

// fetch todo
const getTodos = (set) => {
  axios.get(`${baseURL}.json`)
  .then(res => {
    console.log('get todo', res.data);
    if (res.status === 200) {
      const data = res.data;
      set(data);
    }
  })
  .catch(error => {
    console.error(error);
  });
};

// delete todo item
const deleteTodo = (id) => {
  console.log(id);
  axios.delete(`${baseURL}/${id}.json`)
  .then(res => {
    console.log('delete todo', res.data);
  })
  .catch(error => {
    console.error(error);
  });
}

// post todo item
const postTodo = (data) => {
  axios.post(`${baseURL}.json`, data)
  .then(res => {
    console.log('post todo', res.data);
  })
  .catch(error => {
    console.error(error);
  });
}

// update todo item
const updateTodo = (id, data) => {
  axios.put(`${baseURL}/${id}.json`, data)
  .then(res => {
    console.log('update todo', res.data);
  })
  .catch(error => {
    console.error(error);
  });
};

export {
  getTodos,
  deleteTodo,
  postTodo,
  updateTodo,
};
