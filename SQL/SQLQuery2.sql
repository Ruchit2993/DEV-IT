Create Database Dev_It
Alter Database Dev_It Modify name = Internship
use [Dev_It]
go
sp_renameDB 'Internship','DevIt'

CREATE TABLE Users (
UserID INT PRIMARY KEY,
Email NVARCHAR(100) UNIQUE,
MobileNum INT,
Age INT
); 

Insert into Users (UserID, Email, MobileNum, Age) values (1009,'abc@gmail.com','147852369',20)
Insert into Users (UserID, Email, MobileNum, Age) values (1008,'def@gmail.com','187852369',23)
Insert into Users (UserID, Email, MobileNum, Age) values (1007,'ghi@gmail.com','147856369',55)
Insert into Users (UserID, Email, MobileNum, Age) values (1006,'jkl@gmail.com','147852365',5)
Insert into Users (UserID, Email, MobileNum, Age) values (1005,'mno@gmail.com','147252369',0) --Not Allowed
Insert into Users (UserID) values (1004)
Insert into Users (UserID, Email) values (1003,'abcx@gmail.com')
Insert into Users (UserID, Email, MobileNum, Age) values (1088,'mo@gmail.com','1621355351',158)

Delete from Users Where UserID = 1003
Delete from Users Where UserID = 1005
Delete from Users Where UserID = 1088

Alter Table Users
Add Constraint DF_Users_MobileNum
Default 123456789 for MobileNum

Alter Table Users
Drop Constraint DF_Users_MobileNum

select * from Users

drop Table Users

Alter table Users
Add Constraint DF_Users_Age Check (Age > 0 and Age < 150)
Alter Table Users
Drop Constraint DF_Users_Age

Insert into tblPerson values ('abc@gmail.com')
Insert into tblPerson (Name) values ('def@gmail.com')
Insert into tblPerson (Name) values ('de')
Insert into tblPerson (Name) values ('des')

Select * from Users

Delete from tblPerson where PersonId =1

SET IDENTITY_INSERT tblPerson ON

Insert into tblPerson (PersonId ,Name)  values (1,'def@gmm')
SET IDENTITY_INSERT tblPerson OFF
Insert into tblPerson values ('d')

Delete from Users

DBCC Checkident ('tblPerson',reseed,0)

Select SCOPE_IDENTITY()
Select @@IDENTITY
Select IDENT_CURRENT('Users')

Create Trigger trForInsert on tblPerson for Insert
as
Begin
	Insert into Users values (18,'def@gmssl.com','987123654',23)
End

Select * from tblPerson
Select * from Users
