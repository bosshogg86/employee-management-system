INSERT INTO departments (name)
VALUES ('Audio'),
  ('Video'),
  ('Camera'),
  ('Tape'),
  ('Production');
INSERT INTO roles (title, salary, department_id)
VALUES ('A1', 100000, 1),
  ('A2', 80000, 1),
  ('V1', 120000, 2),
  ('Camera Operator', 100000, 3),
  ('EVS', 120000, 4),
  ('RO', 120000, 4),
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
-- update employee manager
-- UPDATE roles
-- LEFT JOIN departments ON roles.department_id = departments.id
-- SET roles.department_id = departments.id
-- WHERE department
-- UPDATE employees
--   LEFT JOIN roles
--   ON employees.manager_id = employees.id
-- SET 
-- WHERE roles.department_id = 1;
-- LEFT JOIN employees ON employees.manager_id = employees.employee_id
-- SET manager_id = 
-- WHERE department_id = 1,
--   2,
--   3,
--   4;