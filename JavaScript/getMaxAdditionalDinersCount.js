// Meta Coding Puzzles Level 1
// Cafeteria
// Time limit: 5s

// A cafeteria table consists of a row of NN seats, numbered from 11 to NN from left to right. Social distancing guidelines require that every diner be seated such that KK seats to their left and KK seats to their right (or all the remaining seats to that side if there are fewer than KK) remain empty.
// There are currently MM diners seated at the table, the iith of whom is in seat S_iS
// i. No two diners are sitting in the same seat, and the social distancing guidelines are satisfied.
// Determine the maximum number of additional diners who can potentially sit at the table without social distancing guidelines being violated for any new or existing diners, assuming that the existing diners cannot move and that the additional diners will cooperate to maximize how many of them can sit down.
// Please take care to write a solution which runs within the time limit.

// Sample test case #1
// N = 10
// K = 1
// M = 2
// S = [2, 6]
// Expected Return Value = 3
// Sample test case #2
// N = 15
// K = 2
// M = 3
// S = [11, 6, 14]
// Expected Return Value = 1
// Sample Explanation
// In the first case, the cafeteria table has N = 10N=10 seats, with two diners currently at seats 22 and 66 respectively. The table initially looks as follows, with brackets covering the K = 1K=1 seat to the left and right of each existing diner that may not be taken.
//   1 2 3 4 5 6 7 8 9 10
// Three additional diners may sit at seats 44, 88, and 1010 without violating the social distancing guidelines.
// In the second case, only 11 additional diner is able to join the table, by sitting in any of the first 33 seats.

// The goal is to have a sliding window, where we divide the open seats between guests, by the required space per person
// We start by sorting the array of already seated diners, this way we can get the seats between the ends and the first and last person
// then we initialize variables for the solution (canBeSeated), openSeatsStart (begin the sliding window), and openSeats(the window length)
// as we iterate, we check the amount of seats open in the current window, the first seat to the first seated person
// we take the openSeats and divide it by the required spacing plus 1 for the person
// then we move the beginning of the window to K+1 spaces past the seated person
// this gives us the proper buffer since we need to consider social distancing on both sides of the window
// when we reach the last person, we set the window to the last seat - the seat of the last person, plus 1
// finally we divide the remaining seats by K+1
const getMaxAdditionalDinersCount = (N, K, M, S) => {
  S.sort((a, b) => a - b);

  let canBeSeated = 0;
  let openSeatsStart = 1;
  let openSeats = 0;

  for (let i = 0; i < S.length; i++) {
    openSeats = S[i] - openSeatsStart;
    canBeSeated += Math.floor(openSeats / (K + 1));
    openSeatsStart = S[i] + K + 1;
  }
  openSeats = N - openSeatsStart + 1;
  canBeSeated += Math.ceil(openSeats / (K + 1));
  return canBeSeated;
};
//  edge case where Math.ceil is needed at end of seats
//  1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
//  1 0 0 0 0 0 0 0 0  0  0  0  0  0  0  0  0  0  0  0  0
//  openSeatsStart 1 + 1 + 1 : 3
//  openSeats 21 - 3 + 1 : 19
//  19/2 = 9.5
