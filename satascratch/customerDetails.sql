-- Customer Details
-- Find the details of each customer regardless of whether the customer made an order not.
-- Output customer's first name, last name, and the city along with the corresponding order details.
-- Sort records based on the customer's first name and the order details in ascending order.

select 
    first_name, 
    last_name, 
    city,
    o.*
from customers c
full outer join orders o
on c.id = o.cust_id
;