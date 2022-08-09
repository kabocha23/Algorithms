-- Number Of Bathrooms And Bedrooms
-- Find the average number of bathrooms and bedrooms for each city’s property types. Output the result along with the city name and the property type.

select
    city,
    property_type,
    AVG(bathrooms) avg_ba,
    AVG(bedrooms) avg_br
from airbnb_search_details
group by 1, 2
order by 1, 2
;