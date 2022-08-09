-- Employee and Manager Salaries
-- Find employees who are earning more than their managers. Output the employee name along with the corresponding salary.

WITH salary_comp AS (
    SELECT 
        id employee_id, 
        first_name employee_name,
        salary employee_salary,
        manager_id,
        mgrs.*
    FROM employee emps
    LEFT JOIN (
        SELECT
            id mgr_id,
            salary mgr_salary
        FROM employee
    ) mgrs
    ON emps.manager_id = mgrs.mgr_id
)

SELECT 
    employee_name,
    employee_salary
FROM salary_comp
WHERE employee_salary > mgr_salary
;