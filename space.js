const goodSpaceComplexity = (n) => {
    for (let i = 0; i < n.length; i++){
        console.log("woohoo");
    }
};

goodSpaceComplexity(['a', 'b', 'c']); // O(1)


const loop = (n) => {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = "ice cream";
    }
    return array;
};

console.log(loop(6)); // O(n)
