package com.swiatekbrzezinski.artur.roomwebapp.controllers;

import com.swiatekbrzezinski.artur.roomwebapp.models.Employee;
import com.swiatekbrzezinski.artur.roomwebapp.service.EmployeeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/employees")

public class StaffRestController {

    private final EmployeeService employeeService;

    public StaffRestController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

}
