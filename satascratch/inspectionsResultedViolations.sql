-- Inspections That Resulted In Violations
-- You're given a dataset of health inspections. Count the number of inspections that resulted in a violation for 'Roxanne Cafe' for each year. If an inspection resulted in a violation, there will be a value in the 'violation_id' column. Output the number of inspections by year in ascending order.


select 
    DATE_PART('year', inspection_date),
    COUNT(violation_id) violations
from sf_restaurant_health_violations
WHERE business_name LIKE 'Roxanne Cafe'
GROUP BY 1
ORDER BY violations ASC
;