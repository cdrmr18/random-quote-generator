/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array with quote, source, citation(optional), and year(optional) keys
***/
const quotes = [
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs",
    tag: "Inspirational"
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
    source: "Mother Teresa",
    tag: "Peace"
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
    source: "Maya Angelou",
    tag: "Perserverance"
  },
  {
    quote: "Love the life you live. Live the life you love.",
    source: "Bob Marley",
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Dr. Seuss",
    citation: "Oh, the Places You'll Go!",
    year: 2012
  },
]


/***
 * `getRandomQuote` function
 * Takes in an array and uses array length for upper value in
 * generating a random number
***/
function getRandomQuote(value) {
  randomNumber = Math.floor(Math.random() * (value.length))
  return value[randomNumber]
}


/***
 * `printQuote` function 
 * Uses getRandomQuote quote object to create a quote display
 * Returns innerHTML quote display showing one quote object 
***/
function printQuote() {
  let quote = getRandomQuote(quotes)
  let quoteDisplay = `
    <p class="quote"> ${quote.quote} </p>
    <p class="source"> ${quote.source}
  `
  if (quote["citation"]) {
    quoteDisplay += `<span class="citation"> ${quote.citation} </span>`
  }

  if (quote["year"]) {
    quoteDisplay += `<span class="year"> ${quote.year} </span>`
  }

  if (quote["tag"]) {
    quoteDisplay += `<span class="tag"> ${quote.tag} </span>`
  }

  quoteDisplay += `</p>`

  return document.getElementById('quote-box').innerHTML = quoteDisplay; 
}

/**  
 * Random page background color generator
 * Changes colors after every click or refresh
**/
function randomColor() {
  let red = Math.floor(Math.random() * 255) + 1
  let green = Math.floor(Math.random() * 255) + 1
  let blue = Math.floor(Math.random() * 255) + 1
  let displayColor = `rgb(${red}, ${green}, ${blue})`
  return document.body.style.backgroundColor = displayColor
}
function autoDisplay() {
   let quote = setInterval(printQuote, 10000)
   let color = setInterval(randomColor, 10000)
   return quote + color
}
/***
 * click event listener for the print quote button
 * Auto display of quotes also generates if no click
 * DO NOT CHANGE THE CODE BELOW!!
***/
autoDisplay() 
 document.getElementById('load-quote').addEventListener("click", printQuote, false);
 document.getElementById('load-quote').addEventListener("click", randomColor, false);