// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
let i = 0;
for (let index of companyName) {
    if (i < 6) {
        i++
    }
    let spelling = `Number ${i} character is ${index}`
    console.log(spelling);
}


