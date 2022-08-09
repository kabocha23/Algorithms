-- Highest Energy Consumption
-- Find the date with the highest total energy consumption from the Facebook data centers. Output the date along with the total energy consumption across all data centers.

WITH all_regions AS (
    SELECT *
    FROM fb_eu_energy
    UNION ALL
    SELECT *
    FROM fb_asia_energy
    UNION ALL
    SELECT *
    FROM fb_na_energy
),
all_regions_sum AS (
    SELECT
        date,
        SUM(consumption) total_consumed
    FROM all_regions
    GROUP BY 1
),
all_regions_max AS (
    SELECT MAX(total_consumed) max_consumed
    FROM all_regions_sum
)

SELECT 
  *
FROM all_regions_sum
WHERE total_consumed = (
  SELECT max_consumed 
  FROM all_regions_max
);