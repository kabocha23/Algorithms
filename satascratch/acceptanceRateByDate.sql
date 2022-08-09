-- Acceptance Rate By Date
-- What is the overall friend acceptance rate by date? Your output should have the rate of acceptances by the date the request was sent. Order by the earliest date to latest.

-- Assume that each friend request starts by a user sending (i.e., user_id_sender) a friend request to another user (i.e., user_id_receiver) that's logged in the table with action = 'sent'. If the request is accepted, the table logs action = 'accepted'. If the request is not accepted, no record of action = 'accepted' is logged.

-- Hint: For the SQL solution, cast your data types as a decimal rather than float in order for your solution to be validated properly. There is a rounding error if your solution is casted as a float.

SELECT
    a.date,
    COUNT(b.user_id_receiver)/COUNT(a.user_id_sender)::decimal acceptance_rate
FROM (
    SELECT
        date,
        user_id_sender,
        user_id_receiver
    FROM fb_friend_requests
    WHERE action LIKE 'sent'
) a LEFT JOIN
(
    SELECT
        date,
        user_id_sender,
        user_id_receiver
    FROM fb_friend_requests
    WHERE action LIKE 'accepted'
) b
ON a.user_id_sender = b. user_id_sender
AND a.user_id_receiver = b.user_id_receiver
GROUP BY a.date
;
