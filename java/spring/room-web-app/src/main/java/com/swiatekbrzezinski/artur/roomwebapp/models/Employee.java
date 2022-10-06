package com.swiatekbrzezinski.artur.roomwebapp.models;

public class Employee {
    private String guid;
    private String lastName;
    private String firstName;
    private String position;

    public Employee() {
    }

    public Employee(String guid, String lastName, String firstName, String position) {
        this.guid = guid;
        this.lastName = lastName;
        this.firstName = firstName;
        this.position = position;
    }

    public String getGuid() {
        return guid;
    }

    public void setGuid(String guid) {
        this.guid = guid;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
