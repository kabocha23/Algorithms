-- Classify Business Type
-- Classify each business as either a restaurant, cafe, school, or other. A restaurant should have the word 'restaurant' in the business name. For cafes, either 'cafe' or 'coffee' can be in the business name. 'School' should be in the business name for schools. All other businesses should be classified as 'other'.

SELECT 
    business_name,
    CASE
        WHEN LOWER(business_name) LIKE '%restaurant%' THEN 'restaurant'
        WHEN LOWER(business_name) LIKE '%school%' THEN 'school'
        WHEN LOWER(business_name) LIKE '%cafe%' 
        OR LOWER(business_name) LIKE '%coffee%' THEN 'cafe'
        ELSE 'other'
    END classification
FROM sf_restaurant_health_violations
;