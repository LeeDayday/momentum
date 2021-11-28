const quotes = [
    {
        quote: "Be Yourself; everone else is already taken",
        author: "Oscar Wilde",
    },
    {
        quote: "So many books, so little time",
        author: "Frank Zappa",

    },
    {
        quote: "A room without books is like a body without a soul",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "You only live once, but if you do it right, once is enough",
        author: "Mae West",

    },
    {
        quote: "Be the change that you wish to see in the world",
        author: "Mahatma Gandhi",

    },
    {
        quote: "Without Music, life would be a mistake",
        author: "Friedrich Nietzsche",

    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our ability",
        author: "J.K. Rowling",

    },
    {
        quote: "A woman is like a tea bag; you never know how strong it is until it's in hot water",
        author: "Eleanor Roosevelt",

    },
    {
        quote: "If you don't stand for something you will fall for anything",
        author: "Gordon A. Eadie",
    },
    {
        quote: "I solemnly swear that I am up to no good",
        author: "J.K. Rowling",

    },

]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

// quotes index로 접근할 0~9 랜덤 숫자 생성 
const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;