package com.jpa.application.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.jpa.application.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

	Employee findByEmpNo(String empNo);
	List<Employee> findByFullNameLike(String fullName);
	List<Employee> findByHireDateGreaterThan(Date hireDate);
	
	@Query(" SELECT COALESCE(MAX(e.id), 0) FROM Employee e ")
	Long getMaxId();
}
