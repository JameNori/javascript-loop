// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = 0;
let maxScore = 10;
// Start coding here
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < maxScore) {
        minScore = scores[i] + minScore;
    }
}

console.log(minScore);
