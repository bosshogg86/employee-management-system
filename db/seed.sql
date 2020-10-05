INSERT INTO departments (department)
VALUES ('Audio'),
  ('Video'),
  ('Camera'),
  ('Tape'),
  ('Production');
INSERT INTO roles (title, salary, department_id)
VALUES ('A1', 120000, 1),
  ('A2', 80000, 1),
  ('Video', 120000, 2),
  ('Camera Operator', 100000, 3),
  ('EVS', 120000, 4),
  ('RO', 100000, 4),
  ('Director', 200000, 5);
INSERT INTO employees (firstName, lastName, role_id)
VALUES ('James', 'Mileta', 4),
  ('James', 'Duysen', 4),
  ('Steve', 'Lowe', 5),
  ('Raymond', 'Rodriguez', 6),
  ('Blake', 'Bos', 1),
  ('Alina', 'Wong', 2),
  ('Brandon', 'Collins', 3),
  ('Eric', 'Sanchagrin', 4),
  ('Kyle', 'Farnham', 7);
UPDATE employees
  LEFT JOIN roles ON employees.role_id = roles.id
SET manager_id = 9
WHERE title IN ('Camera Operator', 'Video', 'EVS', 'A1');
UPDATE employees
  LEFT JOIN roles ON employees.role_id = roles.id
SET manager_id = 5
WHERE title = 'RO';
UPDATE employees
  LEFT JOIN roles ON employees.role_id = roles.id
SET manager_id = 1
WHERE title = 'A2';