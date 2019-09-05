-- You have a table scores that contains information about a series of soccer games. Your goal is to determine the winner of the series. A team is declared the winner if it won more games than the other team. If both teams had the same number of wins, then the winner is determined by the better goal difference (the difference between the goals that a team scores and the goals that the opposing team scores on them over all the games). If the goal differences are equal, the winner is the team that scored more goals during away games (i.e. games when it was not the host team). The result is the index of the winning team. If the above criteria are not sufficient for determining the winner, return 0.

-- The scores table contains the following columns:

-- match_id - the unique ID of the match;
-- first_team_score - the score of the 1st team in the current match;
-- second_team_score - the score of the 2nd team in the current match;
-- match_host - the team that is the host of the match (can be 1 or 2).
-- Your task is to return a new table with a single column winner, which can contain 1, 2, or 0.

-- Example

-- For given table scores

-- match_id	first_team_score	second_team_score	match_host
-- 1	3	2	1
-- 2	2	1	2
-- 3	1	2	1
-- 4	2	1	2
-- the output should be

-- winner
-- 1
-- The first team won 3 games out of 4, so it's the winner of the series.

-- [execution time limit] 10 seconds (mysql)


SELECT CASE 
  WHEN team1_wins > 0 THEN 1
  WHEN team1_wins < 0 THEN 2
  WHEN total_goal_diff > 0 THEN 1
  WHEN total_goal_diff < 0 THEN 2
  WHEN home_goal_diff > 0 THEN 1
  WHEN home_goal_diff < 0 THEN 2
  ELSE 0
END winner
FROM
(
  SELECT 
  SUM(IF(team1 > team2, 1, -1)) team1_wins, /* Win-Difference */
  SUM(team1 - team2) total_goal_diff, /* Goal-Difference */
  SUM(IF(host_team = 2, team1, -team2)) home_goal_diff /* Home-Goal-Difference */
  FROM
  (
    SELECT 
    first_team_score AS team1, 
    second_team_score AS team2, 
    match_host AS host_team
    FROM scores
  ) x
) y;
