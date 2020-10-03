INSERT INTO Departments (name)
VALUES ('Audio'),
  ('Video'),
  ('Camera'),
  ('Tape'),
  ('Production');
INSERT INTO Roles (title, salary, department_id)
VALUES ('A1', 120000, 1),
  ('A2', 80000, 1),
  ('V1', 120000, 2),
  ('Camera Operator', 100000, 3),
  ('EVS', 120000, 4),
  ('RO', 100000, 4),
  ('Director', 200000, 5);
INSERT INTO Employees (firstName, lastName, role_id)
VALUES ('James', 'Mileta', 4),
  ('James', 'Duysen', 4),
  ('Steve', 'Lowe', 5),
  ('Raymond', 'Rodriguez', 6),
  ('Blake', 'Bos', 1),
  ('Alina', 'Wong', 2),
  ('Brandon', 'Collins', 3),
  ('Eric', 'Sanchagrin', 4),
  ('Kyle', 'Farnham', 7);
UPDATE Employees
  LEFT JOIN RSoles ON Employees.role_id = Roles.id
SET manager_id = 9
WHERE department_id < 5;