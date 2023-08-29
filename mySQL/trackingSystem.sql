-- Your web application tracks the activities of its users using a tracking system. While a user hasn't logged in or signed up, all the user's actions are tracked using anonymous_id and the user_id is null, and afterwards they are tracked using the same anonymous_id and user_id. It is known that after a user logs in or signs up, the user_id is no longer null.

-- You are given the table tracks, which contains the following columns:

-- received_at - the unique timestamp of action;
-- event_name - the name of the action that was performed at this time;
-- anonymous_id - the anonymous ID of user;
-- user_id - the user ID, which can be null.
-- Your task is to find two events for each anonymous_id, which will be the column anonym_id in the returned table. Find the last event where the user was tracked only by anonymous_id (column last_null) and the first event that was tracked by user_id (column first_notnull). The resulting table should be sorted by anonym_id.

-- Note: It is not guaranteed that a user ever logs in or signs up. In this case, the column first_notnull should have a value of null. However, it is guaranteed that for each anonymous_id, there is at least one event where user_id equals null.

-- Example

-- For given table tracks

-- received_at	event_name	anonymous_id	user_id
-- 2016-01-01 09:13:12	buttonClicked	1	NULL
-- 2016-01-02 09:14:15	pageReloaded	3	NULL
-- 2016-02-02 10:15:13	pageRendered	2	NULL
-- 2016-02-03 10:15:23	commentWritten	3	NULL
-- 2016-03-03 11:15:15	avatarUpdated	2	2
-- 2016-03-04 11:15:24	statusUpdated	1	1
-- the output should be

-- anonym_id	last_null	first_notnull
-- 1	buttonClicked	statusUpdated
-- 2	pageRendered	avatarUpdated
-- 3	commentWritten	NULL

CREATE PROCEDURE solution()
BEGIN
WITH
	anon_last AS (
        SELECT
            anonymous_id,
            received_at AS anon_latest,
            event_name
        FROM tracks ta
        WHERE received_at = (
            SELECT MAX(received_at)
            FROM tracks tb
            WHERE ISNULL(tb.user_id)
            AND ta.anonymous_id = tb.anonymous_id
        )
        GROUP BY 1
        ORDER BY 1
    ),
	user_first AS (
        SELECT
            user_id,
            received_at AS user_earliest,
            event_name
        FROM tracks tc
        GROUP BY 1
        ORDER BY 1
    )
SELECT
	al.anonymous_id AS anonym_id,
	al.event_name AS last_null,
	uf.event_name AS first_notnull
FROM anon_last al
LEFT JOIN (
	SELECT
		user_first.user_id,
		user_first.event_name
	FROM user_first
) uf ON al.anonymous_id = uf.user_id;
END