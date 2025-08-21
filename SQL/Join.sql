CREATE TABLE Departments (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50) NOT NULL
);

INSERT INTO Departments (DeptID, DeptName)
VALUES
(10, 'HR'),
(20, 'IT'),
(40, 'Marketing');

CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50) NOT NULL,
    DeptID INT NULL,  
    FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);

INSERT INTO Employees (EmpID, EmpName, DeptID)
VALUES
(1, 'Alice', 10),
(2, 'Bob', 20)
INSERT INTO Employees (EmpID, EmpName, DeptID) VALUES(6, 'Dhruv', 60)
INSERT INTO Employees (EmpID, EmpName) VALUES (3, 'Ronin')
INSERT INTO Departments (DeptID, DeptName) VALUES(60, 'Data & Analytics');

SELECT * FROM Employees;
SELECT * FROM Departments;

--Drop table Employees;
--Drop table Departments;

--Inner Join
SELECT *
FROM Employees e
INNER JOIN Departments d
    ON e.DeptID = d.DeptID;


--left join
SELECT *
FROM Employees e
LEFT JOIN Departments d
    ON e.DeptID = d.DeptID;

--right join
SELECT *
FROM Employees e
RIGHT JOIN Departments d
    ON e.DeptID = d.DeptID;

--full join
SELECT *
From Employees e
FULL JOIN Departments d
ON e.DeptID = d.DeptID;

-- cross join
SELECT *
From Employees e
CROSS JOIN Departments d



