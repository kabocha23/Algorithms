-- No Order Customers
-- Find customers who didn't place orders from 2019-02-01 to 2019-03-01. Output customer's first name.


WITH feb_orders AS (    
    SELECT 
        id,
        first_name,
        co.*
    FROM customers c
    LEFT JOIN (
        SELECT
            cust_id,
            order_date
        FROM orders
        WHERE order_date BETWEEN '2019-02-01' AND '2019-03-01'
    ) co ON c.id = co.cust_id
)

SELECT
    first_name
FROM feb_orders
WHERE order_date IS NULL
;