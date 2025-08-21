Create Table Departments(
	DepartmentId INT PRIMARY KEY,
	Department NVARCHAR(20)
)
CREATE TABLE Employees (
EmployeeId INT PRIMARY KEY,
FName NVARCHAR(100),
DepartmentId INT,
Salary INT
)

Insert into Departments values (1,'IT')
Insert into Departments values (2,'HR')
Insert into Departments values (3,'Finance')
Insert into Departments values (4,'Marketing')

Insert into Employees values (1,'Alice',1,60000)
Insert into Employees values (2,'Bob',1,45000)
Insert into Employees values (3,'Corol',2,50000)
Insert into Employees values (4,'David',2,35000)
Insert into Employees values (5,'Eve',3,70000)
Insert into Employees values (6,'Frank',4,30000)
Insert into Employees values (7,'Grace',1,80000)


--Where
SELECT * FROM Employees 
WHERE Salary > 50000 AND DepartmentId = 1;
SELECT * FROM Employees 
WHERE Salary > 50000

--Order By
SELECT * FROM Employees 
ORDER BY DepartmentId ASC, Salary DESC;

--Top n
SELECT TOP 3 * FROM Employees 
ORDER BY Salary ASC;

--Group By
SELECT DepartmentId, COUNT(*) AS EmpCount, AVG(Salary) AS AvgSalary 
FROM Employees 
GROUP BY DepartmentId;

--Having
SELECT DepartmentId, COUNT(*) AS EmpCount 
FROM Employees 
GROUP BY DepartmentId 
HAVING COUNT(*) > 1;

--Where vs Having
-- WHERE Example: Filter employees before grouping
SELECT * FROM Employees WHERE Salary > 50000;
-- HAVING Example: Filter after grouping
SELECT DepartmentId, AVG(Salary) AS AvgSal 
FROM Employees 
GROUP BY DepartmentId 
HAVING AVG(Salary) > 50000;

--Assignment Operator
--@ is used to define Variables
DECLARE @bonus INT; 
SET @bonus = 5000;
UPDATE Employees SET Salary = Salary + @bonus WHERE DepartmentId = 1;
--adds bounus of the 5000 for the DepartmentID 1

--Arithmatic Operator
SELECT FName, Salary, Salary - 100.10 AS IncreasedSalary FROM Employees;
SELECT FName, Salary, Salary + 100.10 AS IncreasedSalary FROM Employees;
SELECT FName, Salary, Salary * 100.10 AS IncreasedSalary FROM Employees;
SELECT FName, Salary, Salary / 100 AS IncreasedSalary FROM Employees;

--Comparision Operator
-- != and <> Both Mean to the same Not Equal
SELECT * FROM Employees WHERE Salary <> 50000;
SELECT * FROM Employees WHERE Salary != 50000;

--Logical Operator
SELECT * FROM Employees WHERE DepartmentId = 1 OR (Salary > 60000 AND DepartmentId = 3);
SELECT * FROM Employees WHERE DepartmentId = 1 OR DepartmentId = 3;
SELECT * FROM Employees WHERE DepartmentId = 1;

--IN, BETWEEN, LIKE Operators

SELECT * FROM Employees WHERE DepartmentId IN (1,3);
SELECT * FROM Employees WHERE Salary BETWEEN 40000 AND 60000;
SELECT * FROM Employees WHERE Name LIKE 'A%';



Select * From Departments
Select * from Employees