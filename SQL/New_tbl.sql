CREATE TABLE Employees_New (
    EmpID INT PRIMARY KEY,
    EmpName NVARCHAR(50),
    Gender NVARCHAR(10),
    DeptID INT,
    Salary DECIMAL(10,2),
    HireDate DATE,
    ManagerID INT NULL
);

INSERT INTO Employees_New (EmpID, EmpName, Gender, DeptID, Salary, HireDate, ManagerID) VALUES
(1, 'Amit Sharma', 'Male', 10, 60000, '2018-02-12', NULL),
(2, 'Priya Patel', 'Female', 20, 55000, '2019-06-01', 1),
(3, 'Rahul Verma', 'Male', 10, 75000, '2017-01-20', 1),
(4, 'Sneha Iyer', 'Female', 30, 52000, '2020-03-15', 2),
(5, 'Ravi Kumar', 'Male', 20, 48000, '2021-07-18', 2),
(6, 'Neha Singh', 'Female', 10, 67000, '2016-11-11', 3),
(7, 'Arjun Mehta', 'Male', 30, 51000, '2019-05-30', 4),
(8, 'Komal Gupta', 'Female', 20, 59000, '2018-09-23', 2),
(9, 'Vikas Reddy', 'Male', 40, 72000, '2017-08-09', 3),
(10, 'Pooja Nair', 'Female', 40, 53000, '2020-01-14', 9),
(11, 'Suresh Das', 'Male', 10, 65000, '2018-04-10', 3),
(12, 'Meena Joshi', 'Female', 20, 47000, '2021-10-05', 2),
(13, 'Nikhil Chauhan', 'Male', 30, 56000, '2019-12-20', 7),
(14, 'Anita Rao', 'Female', 40, 60000, '2017-07-07', 9),
(15, 'Manoj Pillai', 'Male', 20, 52000, '2019-11-29', 2),
(16, 'Divya Shah', 'Female', 30, 69000, '2016-06-06', 4),
(17, 'Rohan Jain', 'Male', 10, 58000, '2021-02-02', 11),
(18, 'Kavita Desai', 'Female', 20, 75000, '2015-09-15', 1),
(19, 'Santosh Yadav', 'Male', 40, 62000, '2018-08-18', 9),
(20, 'Shreya Menon', 'Female', 30, 54000, '2020-12-12', 7);

select * from Employees_New

CREATE TABLE Departments_New (
    DeptID INT PRIMARY KEY,
    DeptName NVARCHAR(50),
    Location NVARCHAR(50)
);

INSERT INTO Departments_New (DeptID, DeptName, Location) VALUES
(10, 'IT', 'Mumbai'),
(20, 'HR', 'Delhi'),
(30, 'Finance', 'Bangalore'),
(40, 'Sales', 'Hyderabad');

ALTER TABLE Employees_New
ADD CONSTRAINT FK_Employees_Departments
FOREIGN KEY (DeptID) REFERENCES Departments_New(DeptID);

SELECT e.EmpName, e.Gender, d.DeptName, e.Salary
FROM Employees_New e
INNER JOIN Departments_New d ON e.DeptID = d.DeptID;
