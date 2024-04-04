export function getQuote() {
    return fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then((res) => res.text())
        .then((quote) => {
            const cleanedText = quote.replace("\\", "");
            return JSON.parse(cleanedText);
        })
}