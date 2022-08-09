-- Highest Salary In Department
-- Find the employee with the highest salary per department.
-- Output the department name, employee's first name along with the corresponding salary.

SELECT
    e.department, 
    e.first_name,
    e.salary
FROM employee e
INNER JOIN ( 
    SELECT 
        department,
        MAX(salary) max_sal
    FROM employee
    GROUP BY 1
) ms
ON e.department = ms.department 
AND e.salary = ms.max_sal
;