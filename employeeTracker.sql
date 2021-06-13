DROP DATABASE IF EXISTS employeetracker_dbo;
CREATE DATABASE employeetracker_db;

USE employee_db;

-- DB SCHEMA WITH THREE TABLES --

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,

    name VARCHAR(30) NOT NULL,

    PRIMARY KEY (id)



);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
)
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,

department_id INT NOT NULL,
FOREIGN KEY (department_id) REFERENCES department (id),
PRIMARY KEY (id)

