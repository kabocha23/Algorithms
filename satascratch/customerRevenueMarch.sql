-- Customer Revenue In March
-- Calculate the total revenue from each customer in March 2019. Revenue for each order is calculated by multiplying the order_quantity with the order_cost.
-- Output the revenue along with the customer id and sort the results based on the revenue in descending order.

SELECT 
    cust_id,
    SUM(order_revenue) cust_revenue
FROM orders o
LEFT JOIN (
    SELECT
        id rev_id,
        order_quantity * order_cost order_revenue
    FROM orders
) r ON o.id = r.rev_id
WHERE order_date LIKE '2019-03%'
GROUP BY cust_id
;