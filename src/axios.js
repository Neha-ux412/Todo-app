import axios from 'axios';
const api_base_url = 'http://localhost:8083/todos';

export const fetchTodos = () => axios.get(api_base_url);
export const createTodo = (todo) => axios.post(api_base_url, todo);
export const updateTodo = (id, todo) => axios.put(`${api_base_url}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${api_base_url}/${id}`);
