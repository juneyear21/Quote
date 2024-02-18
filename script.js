const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const generate = document.querySelector('.generate');

const randomquote = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(result => {
        quote.textContent = `"`+result.content+`"`;
        author.textContent = "~" + result.author;
        console.log(result)
    });
};

generate.addEventListener('click', randomquote);
