-- Find the customer with the highest total order cost between 2019-02-01 to 2019-05-01. Output their first name, total cost of their items, and the date.

-- For simplicity, you can assume that every first name in the dataset is unique.

WITH oc AS (
    SELECT 
        *
    FROM orders o
    LEFT JOIN customers c ON o.cust_id = c.id
),
oc2 AS (
    SELECT
        cust_id,
        first_name,
        order_date,
        SUM(order_quantity * order_cost) AS total_cost
    FROM oc
    WHERE order_date BETWEEN '2019-02-01' AND '2019-05-01'
    GROUP BY 1,2,3
),
mc AS (
    SELECT 
        MAX(total_cost) max_cost
    FROM oc2
)

SELECT 
    oc2.first_name,
    oc2.order_date,
    oc2.total_cost
FROM oc2
WHERE oc2.total_cost = (SELECT max_cost FROM mc)
;