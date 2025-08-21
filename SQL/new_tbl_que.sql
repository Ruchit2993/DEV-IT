Select * from Employees_New
select * from Departments_New

select Emp.EmpID, Emp.EmpName, Emp.Salary, Dept.DeptName 
from Employees_New as Emp
Join Departments_New as Dept
On Emp.DeptID = Dept.DeptID
Where Emp.salary > 65000

select e1.EmpID, e1.EmpName, e1.Gender, e1.DeptID, e1.Salary, e1.ManagerID, e2.EmpName
from Employees_New as e1
left join Employees_New as e2
on e1.ManagerID = e2.EmpID


select e1.EmpID, e1.EmpName, e1.Gender, e1.DeptID, e1.Salary, e1.ManagerID, e2.EmpName
from Employees_New as e1
cross join Employees_New as e2
--on e1.ManagerID = e2.EmpID

