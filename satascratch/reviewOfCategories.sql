-- Reviews of Categories
-- Find the top business categories based on the total number of reviews. Output the category along with the total number of reviews. Order by total reviews in descending order.

SELECT 
    UNNEST(STRING_TO_ARRAY(categories,';')) category,
    SUM(review_count) reviews
FROM yelp_business 
GROUP BY 1
ORDER BY 2 DESC
;