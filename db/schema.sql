DROP DATABASE IF EXISTS employeeDB;
CREATE DATABASE employeeDB;
USE employeeDB;
CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (255) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR (255) NOT NULL,
    salary DECIMAL (19, 4) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (255) NOT NULL,
    last_name VARCHAR (255) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);