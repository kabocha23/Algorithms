-- Salaries Differences
-- Write a query that calculates the difference between the highest salaries found in the marketing and engineering departments. Output just the difference in salaries.



select 
    max(t.salary) - min(t.salary) salary_diff
from (
    select 
        dept.department,
        max(salary) as salary
    from db_dept dept
    left join db_employee emp 
        on emp.department_id = dept.id
    where dept.department = 'marketing' 
        OR dept.department = 'engineering'
    group by dept.department
) t;