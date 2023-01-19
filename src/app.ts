const body = document.querySelector("body") as HTMLBodyElement;
const container = document.createElement("div");
container.className = "container";
const nxtButton = document.createElement("button");
body.append(container);
container.append(nxtButton);
let joke = document.createElement("p");
let delivery = document.createElement("article");
nxtButton.innerHTML = "Next";



async function jokesData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    joke.innerHTML = "";
    delivery.innerHTML = "";
    const printInfo = function(){
        joke.innerHTML = data.joke;
        container.append(joke);
        if(joke.innerHTML === "undefined"){
            container.append(delivery);
            joke.innerHTML = data.setup;
            delivery.innerHTML = data.delivery;
        }
    }
    printInfo();
    
};

jokesData();

nxtButton.addEventListener("click", function(){
    jokesData();
})
