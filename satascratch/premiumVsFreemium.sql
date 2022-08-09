-- Premium vs Freemium
-- Find the total number of downloads for paying and non-paying users by date. Include only records where non-paying customers have more downloads than paying customers. The output should be sorted by earliest date first and contain 3 columns date, non-paying downloads, paying downloads.

SELECT
    *
FROM (
    SELECT 
        date,
        SUM(CASE WHEN paying_customer = 'yes' THEN downloads END
        ) paying,
        SUM(CASE WHEN paying_customer = 'no' THEN downloads END
        ) non_paying
    FROM ms_user_dimension
    LEFT JOIN ms_acc_dimension
        ON ms_user_dimension.acc_id = ms_acc_dimension.acc_id
    LEFT JOIN ms_download_facts
        ON ms_user_dimension.user_id = ms_download_facts.user_id
    GROUP BY 1
    ORDER BY date
) user_orders
WHERE non_paying > paying
GROUP BY 1,2,3
;