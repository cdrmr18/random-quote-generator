/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela"
  },
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    source: "Mother Teresa"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." ,
    source: "Helen Keller"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle"
  },
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    source: "Maya Angelou"
  },
  {
    quote: "Love the life you live. Live the life you love.",
    source: "Bob Marley",
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "",
    citation: "Oh, the Places You'll Go!",
    year: 2012
  },
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(value) {
  randomNumber = Math.floor(Math.random() * (value.length + 1))
  return value[randomNumber]
}


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);