DROP DATABASE IF EXISTS emploteeTracker_dbo;
CREATE DATABASE employee_db;

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

