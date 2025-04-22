import { useState, useEffect } from 'react';
import './App.css';
import TodoList from './Todolist';
import {
    fetchTodos,
    createTodo,
    deleteTodo,
    updateTodo,
} from './axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const response = await fetchTodos();
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    if (!newTodo.title.trim()) return; // Avoid empty title

    try {
      const response = await createTodo({
        ...newTodo,
        completed: false,
      });
      setTodos([...todos, response.data]);
      setNewTodo({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  };

  const removeTodo = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const editTodo = async (id, updatedTodo) => {
    try {
      const response = await updateTodo(id, updatedTodo);
      setTodos(todos.map((todo) => (todo.id === id ? response.data : todo)));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const updated = { ...todo, completed: !todo.completed };
    await editTodo(id, updated);
  };

  return (
    <div id="todo">
      <h2>TODO APP</h2>
      <input
        type="text"
        placeholder="Title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      /><br/>
      <input
        type="text"
        placeholder="Description"
        value={newTodo.description}
        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
      /><br/>
      <button onClick={addTodo}>Add Todo</button>

      <TodoList
        todos={todos}
        onDelete={removeTodo}
        onToggle={toggleTodo}
        onUpdate={editTodo}
      />
    </div>
  );
}

export default App;
