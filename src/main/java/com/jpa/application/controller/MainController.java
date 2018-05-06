package com.jpa.application.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jpa.application.entity.Employee;
import com.jpa.application.repository.EmployeeRepository;

@RestController
public class MainController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	private List<Employee> employees = new ArrayList<>();
	
	@RequestMapping(value="/employees",
											method=RequestMethod.GET,
											produces="application/json")
	public List<Employee> getEmployees() {
		employees = (List<Employee>) employeeRepository.findAll();
		return employees;
	}
	
	
	
}
