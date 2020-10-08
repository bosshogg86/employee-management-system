DROP DATABASE IF EXISTS emsDB;
CREATE DATABASE emsDB;
USE emsDB;
CREATE TABLE departments (
    id INT AUTO_INCREMENT NOT NULL,
    department VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL (19, 4) NOT NULL,
    department_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments(id) ON UPDATE CASCADE
);
CREATE TABLE employees (
    id INT AUTO_INCREMENT NOT NULL,
    firstName VARCHAR (30) NOT NULL,
    lastName VARCHAR (30) NOT NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON UPDATE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON UPDATE CASCADE
);