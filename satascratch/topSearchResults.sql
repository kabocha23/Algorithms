-- Top Search Results
-- You're given a table that contains search results. If the 'position' column represents the position of the search results, write a query to calculate the percentage of search results that were in the top 3 position.

select
    (b.tt_id_ct / count(a.result_id)::float)*100
from fb_search_results a, (
    select
        count(result_id) tt_id_ct
    from fb_search_results
    where position <= 3
) b
group by b.tt_id_ct
;