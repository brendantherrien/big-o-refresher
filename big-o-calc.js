const simpleChallenge = (input) => {

    const anotherFunc = () => {
        console.log("hi");
    };

    let a = 42; // O(1)
    a /= 2; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunc(); // O(n)
        a *= input[i]; // O(n)
    }

    return a; // O(1)
};

// simpleChallenge: O(N)
console.log(simpleChallenge([5, 7, 2]));


// Pairs of array
const nums = [1, 2, 3, 4, 5];

const logPairs = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
};

logPairs(nums); // O(n^2)