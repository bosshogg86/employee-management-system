DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;
CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR (255) NOT NULL,
    salary DECIMAL (10) NOT NULL,
    department_id INT (4) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    role_id INT (4) NOT NULL,
    manager_id INT (4) NULL,
    PRIMARY KEY (id)
);