// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = 100
for (let score of scores) {
  if (score < minScore) {
    minScore = score;
  }
}

console.log(minScore);
