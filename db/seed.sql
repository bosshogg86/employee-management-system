-- insert into dept
--insert into roles----------------------------------------------------------------
-- insert into employees
-- then update employee manager
INSERT INTO departments
VALUES (1, 'Audio'),
  (2, 'Video'),
  (3, 'Camera'),
  (4, 'Tape'),
  (5, 'Production');
INSERT INTO roles
VALUES (1, 'A1', 100000, 1),
  (2, 'A2', 80000, 1),
  (3, 'V1', 120000, 2),
  (4, 'Camera Operator', 100000, 3),
  (5, 'EVS', 120000, 4),
  (6, 'RO', 120000, 4),
  (7, 'Director', 200000, 5),
  (8, 'Producer', 250000, 5);
INSERT INTO employees
VALUES (1, 'James', 'Mileta', 4, 3),
  (2, 'James', 'Duysen', 4, 3),
  (3, 'Kyle', 'Farnham', 7, 8),
  (4, 'Steve', 'Lowe', 5, 3),
  (5, 'Raymond', 'Rodriguez', 6, 4),
  (6, 'Blake', 'Bos', 1, 3),
  (7, 'Sam', 'Jack', 2, 6),
  (8, 'Laura', 'Johnson', 8, NULL),
  (9, 'Brandon', 'Collins', 3, 3),
  (10, 'Eric', 'Sanchagrin', 4, 3);