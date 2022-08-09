-- Top 5 States With 5 Star Businesses
-- Find the top 5 states with the most 5 star businesses. Output the state name along with the number of 5-star businesses and order records by the number of 5-star businesses in descending order. In case there are two states with the same result, sort them in alphabetical order.

select 
    yb.state,
    count(yb.business_id) five_star_bus
from (
    select 
        business_id,
        state,
        stars
    from yelp_business
    WHERE stars = 5.0
    ) yb
    group by 1
order by five_star_bus desc, state asc
limit 5
;