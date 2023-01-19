const body = document.querySelector("body") as HTMLBodyElement;
const container = document.createElement("div");
const nxtButton = document.createElement("button");
// const prevButton = document.createElement("button");
body.append(container);
container.append(nxtButton);

nxtButton.innerHTML = "Next";
// prevButton.innerHTML = "Prev";



async function jokesData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    
    const printInfo = function(){
    let joke = document.createElement("p");
    let delivery = document.createElement("article");
    
    joke.innerHTML = data.joke;
    container.append(joke);
    if(joke.innerHTML === "undefined"){
        container.append(delivery);
        joke.innerHTML = data.setup;
        delivery.innerHTML = data.delivery;
    }
}

nxtButton.addEventListener("click", function(e){
    // e.preventDefault();
    let joke = document.querySelector("p") as HTMLParagraphElement;
    let delivery = document.querySelector("article") as HTMLElement;
    joke.innerHTML = "";
    delivery.innerHTML = "";
    console.log(data.setup, data.joke);
    jokesData();
})
printInfo();
    
};

jokesData();

