package com.hitam.todo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hitam.todo.entity.Todo;
import com.hitam.todo.repo.TodoRepository;

@Service
public class TodoService {
	@Autowired
	TodoRepository todoRepository;

	public void insert(Todo todo) {
		todoRepository.save(todo);
		
	}

	public List<Todo> getAllTodos() {
		// TODO Auto-generated method stub
		return(List<Todo>) todoRepository.findAll();
	}

	public void update(Todo todo) {
		todoRepository.save(todo);
		
	}
	
	

}
