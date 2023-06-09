
const quoteText = document.querySelector(".quoteText")
const quoteAuthor = document.querySelector(".quoteAuthor")
const quoteBtn = document.querySelector(".newquoteBtn")
quoteBtn.addEventListener("click", generateQuote)

function generateQuote() {
    quoteBtn.innerText = "Loading..."
    quoteBtn.classList.add("newquotebtnLoading")
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(quoteData => showQuote(quoteData))
}

function showQuote(quoteData) {
    quoteBtn.classList.remove("newquotebtnLoading")
    quoteBtn.classList.add("newquoteBtn")
    quoteText.innerText = quoteData.content;
    quoteAuthor.innerHTML = `~${quoteData.author}`;
    quoteBtn.innerText = "New Quote"
}

const soundBtn = document.querySelector('.bxs-volume-full')
soundBtn.addEventListener("click", reproduceQuote)

function reproduceQuote() {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${quoteAuthor.innerText}`)
    utterance.lang = "en-US"
    speechSynthesis.speak(utterance)
}

const copyBtn = document.querySelector(".bxs-copy")
copyBtn.addEventListener("click", copyQuote)

function copyQuote() {
    navigator.clipboard.writeText(quoteText.innerText)
}

const twitterBtn = document.querySelector(".bxl-twitter")
twitterBtn.addEventListener("click", tweetQuote)

function tweetQuote() {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
}

generateQuote();