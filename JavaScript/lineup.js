// To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.

// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.

// Example

// For commands = "LLARL", the output should be
// lineUp(commands) = 3.

// Let's say that there are 4 students, and the second one can't tell left from right. In this case, only after the second, third and fifth commands will the students face the same direction.

function lineUp(commands) {
  // count the number of times all student face the same direction
  let count = 0;
  // two students, each facing north arr[0], with south as arr[2], and East and West opposite.
  let student1Pos = 0;
  let student1Dirs = ['North', 'East', 'South', 'West']
  let student2Pos = 0;
  let student2Dirs = ['North', 'West', 'South', 'East']
  for(let i = 0; i < commands.length; i++) {
      if(commands[i] == 'R'){
          let pointer = (i + 1) % commands.length;
          student1Pos = (student1Pos + 1) % 4;
          student2Pos = (student2Pos + 1) % 4;
      } else if (commands[i] == 'L') {
          student1Pos == 0 ? student1Pos = 3 : student1Pos -= 1;
          student2Pos == 0 ? student2Pos = 3 : student2Pos -= 1;
      } else if (commands[i] == 'A') {
          student1Pos = (student1Pos + 2) % 4;
          student2Pos = (student2Pos + 2) % 4;
      }
      student1Dirs[student1Pos] == student2Dirs[student2Pos] ? count++ : null;
  }         
  return count;
}