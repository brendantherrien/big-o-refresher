// Given 2 arrays
// Create func that determines whether
// the 2 arrays contain common items

// Input: 2 parameters (arrays)
// Output: true or false

// Obvious but inefficient way: loop through both arrays using nested 
// for loops, checking each element pair O(a*b), close to O(n^2)

// More efficient: Cache first array

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'a'];

const containsCommonItem = (a, b) => {
    // Store first array in object
    let cache = {};
    for (let i = 0; i < a.length; i++) {
        if (!cache[a[i]]) {
            const item = a[i];
            cache[item] = true;
        }
    }
    // Then loop thru second array, check if each item exists on object 
    for (let j = 0; j < b.length; j++) {
        if (cache[b[j]]) {
            return true;
        }
    }
    return false;
};

containsCommonItem(arr1, arr2); // O(a + b)