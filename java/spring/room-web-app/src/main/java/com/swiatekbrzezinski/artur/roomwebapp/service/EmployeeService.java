package com.swiatekbrzezinski.artur.roomwebapp.service;

import com.swiatekbrzezinski.artur.roomwebapp.models.Employee;
import com.swiatekbrzezinski.artur.roomwebapp.models.Room;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {

    private static final List<Employee> employees = new ArrayList();

    static {
        employees.add(new Employee("9f717667-505a-4074-ba43-ceae2c0e9f4b", "Adams", "Roy", "HOUSEKEEPING"));
        employees.add(new Employee("3cb69467-dcaa-4d53-84d9-c0d7ba439645", "Adams", "Martin", "SECURITY"));
        employees.add(new Employee("a36df0b3-da59-47e3-b110-37a5a222d46b", "Alvarez", "Roger", "FRONT_DESK"));
        employees.add(new Employee("0e235279-ba2d-40f8-8cfa-c346be49eb47", "Alvarez", "Anne", "HOUSEKEEPING"));
        employees.add(new Employee("461f5182-9ab1-4e27-a1fb-0c2669bfbb55", "Alvarez", "Ann", "CONCIERGE"));
        employees.add(new Employee("eeefd5a8-d4b8-49b0-af0d-a7e9eb170db6", "Anderson", "Betty", "HOUSEKEEPING"));
        employees.add(new Employee("5ee0a977-6856-455e-becb-0a4de6d08958", "Anderson", "Laura", "HOUSEKEEPING"));
        employees.add(new Employee("784234d6-5b90-4471-a51e-eb00940a5608", "Armstrong", "Christopher", "HOUSEKEEPING"));
        employees.add(new Employee("241c9d7b-f6e9-46e7-807a-e82f33d7ab35", "Bell", "David", "HOUSEKEEPING"));
        employees.add(new Employee("f01ec3b4-7e44-49d1-8601-929d88524286", "Berry", "Paula", "SECURITY"));
        employees.add(new Employee("cb2f2846-d432-4f81-b6cb-06c03c9aaf03", "Bishop", "Dennis", "HOUSEKEEPING"));
        employees.add(new Employee("fff66b51-fd6b-40ac-9422-79079595a05f", "Bishop", "Carolyn", "CONCIERGE"));
    }

    public List<Employee> getAllEmployees() {
        return employees;
    }

}
