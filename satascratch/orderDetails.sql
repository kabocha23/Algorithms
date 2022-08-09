-- Order Details
-- Find order details made by Jill and Eva.
-- Consider the Jill and Eva as first names of customers.
-- Output the order date, details and cost along with the first name.
-- Order records based on the customer id in ascending order.

SELECT
    cust_id,
    order_date,
    order_details,
    order_cost,
    je.*
FROM orders
INNER JOIN (
    select
        id,
        first_name
    from customers
    WHERE first_name IN (
        'Jill',
        'Eva'
    )
) je ON orders.cust_id = je.id
;