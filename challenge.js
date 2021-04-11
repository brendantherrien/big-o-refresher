// Retrieve most recent tweet and oldest tweet 
const tweets = ['first tweet', 'strawberry mafia rules', 'last tweet'];

tweets[0];
tweets[tweets.length - 1]; // (both are o(1))

// Compare dates of tweets 
const moreTweets = [
    {
        tweet: 'first tweet',
        year: 2014
    },
    {
        tweet: 'strawberry mafia rules',
        year: 2015
    },
    {
        tweet: 'last tweet',
        year: 2016
    },
];
// This requires nested loop, so O(n^2)
// solution: store data in better format 

'test string'.length; // O(1) in javascript, but depends on lang