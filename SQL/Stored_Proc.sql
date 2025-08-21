--Stored Procedures
Create Procedure spGetEmpName_DeId
AS
BEGIN
select EmpName, DeptID from Employees
END

select * from Employees

spGetEmpName_DeId

Create Procedure spEmpNameDeptID
@EmpName nvarchar(20),
@DeptID int
AS
BEGIN
select * from Employees Where DeptID = @DeptID Or EmpName =@EmpName
END

spEmpNameDeptID 'Dev',60

sp_helptext spEmpNameDeptID

Create Procedure spEmpCount 
@DeptID int,
@empDeptCount int output
AS
BEGIN
select @empDeptCount = count(EmpID) from Employees where DeptID = @DeptID
END

Declare @countEmp int
Execute spEmpCount 60, @countEmp Output
print @countEmp

sp_depends spEmpNameDeptID

sp_help sp_helptext
sp_help sp_help
sp_helptext sp_help
sp_helptext sp_helptext