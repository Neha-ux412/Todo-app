package com.hitam.todo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hitam.todo.entity.Todo;
import com.hitam.todo.repo.TodoRepository;
import com.hitam.todo.service.TodoService;

@Controller
@CrossOrigin("http://localhost:5173/")
public class TodoController {
	@Autowired
	TodoService todoService;
	@Autowired
	TodoRepository todoRepository;
	@PostMapping("/todos")
	@ResponseBody
	public Todo insert(@RequestBody Todo todo) {
		todoService.insert(todo);
		return todo;
	}
	@GetMapping("/todos")
	@ResponseBody
	public List<Todo> getAllTodos(){
		return todoService.getAllTodos();
	}
	@PutMapping("/todos/{id}")
	@ResponseBody
	public Todo update(@RequestBody Todo todo,@PathVariable int id) {
		if(todoRepository.existsById(id)) {
			todo.setId(id);
			todoService.update(todo);
			return todo; 
			
			
		}
		else{
			return null;
		}
	}
	@DeleteMapping("/todos/{id}")
	@ResponseBody
	public void delete(@PathVariable int id) {
		todoRepository.deleteById(id);	}

}
