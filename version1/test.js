// VERSION 1

// 1.
// Write a function that:
// - Logs to the console numbers 1 to 100.
// - However, if the number is a multiple of 3 it should log to the console "This is a multiple of 3"
// - If it's a multiple of 5 it should log "This is a multiple of 5"
// - If it's a multiple of both 3 and 5 it should log "Jackpot!"
// - Otherwise, it should just log the number
// Hint: use the modulo operator (%) to figure out if it's a multiple of 3/5. Make sure the remainder is 0, in order to pass the condition.
// Hint: the order of conditional statements is important!

function numberLogger(){
    for(let i = 1; i < 101; ++i){
        const three = i % 3;
        const five = i % 5;
        if(!three && !five){
            console.log("Jackpot!");
        } else if(!three) {
            console.log("This is a multiple of 3");
        } else if(!five){
            console.log("This is a multiple of 5");
        } else {
            console.log(i);
        }
    }
}
numberLogger();

// 2.
// Using JavaScript only (adding HTML to index.html is NOT allowed), write a function that:
// - Creates a button element (with text "click me!")
// - Creates an empty image element and add it to the document.
// - Inserts an image URL into the <img> tag, when the button is clicked
// - Removes the button after the click
// - Use the following image URL: https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png

const img_url = "https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png";
const button = document.createElement('button');
button.textContent = "Click Me!";
button.addEventListener('click', (event)=>{
    const img =  document.createElement('img');
    img.setAttribute('src', "https://thehub.dk/files/5ad4b4a9f9ac4aa13c3d2d58/logo_upload-6d537cf7e5de664db275b32b3c6ae12d.png");
    img.setAttribute('alt', "It is an image");
    document.body.appendChild(img);
    document.body.removeChild(event.target);
});
document.body.appendChild(button);


// 3.
// Write a function that:
// - Makes an API call using the Fetch API or the regular XMLHttpRequest
// - Use the following API: https://randomuser.me/api?results=3
// - Parse the response and then display the "first" and "last" names of the first three users within the DOM (inside an unordered list)

const url = "https://randomuser.me/api?results=3";

fetch(url)
    .then(response => {
        if(response.status > 299 || response.status < 200) {
            throw new Error(`The server responded with ${response.status}`);
        }
        return response.json();
    })
    .then(data=>{
        const ul = document.createElement('ul');
        console.log(data);
        data.results.forEach((d, i)=>{
            if(i < 3){
                const li = document.createElement('li');
                li.textContent = `${d.name.first} ${d.name.last}`;
                ul.appendChild(li);
            }
        });
        document.body.appendChild(ul);

    })
    .catch(console.error);