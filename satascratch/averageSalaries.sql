-- Average Salaries
-- Compare each employee's salary with the average salary of the corresponding department.
-- Output the department, first name, and salary of employees along with the average salary of that department.

select 
    es.department, 
    e.first_name, 
    e.salary,
    es.avg_salary
from employee e, (
    select
        department,
        AVG(salary) avg_salary
    from employee
    group by department
) es
where es.department = e.department
;