const body = document.querySelector("body") as HTMLBodyElement;
const container = document.createElement("div");
const nxtButton = document.createElement("button");
const prevButton = document.createElement("button");
body.append(container);
container.append(nxtButton, prevButton);

nxtButton.innerHTML = "Next";
prevButton.innerHTML = "Prev";



async function disneyData() {
    const response = await fetch("https://v2.jokeapi.dev/joke/Programming");
    const data = await response.json();
    
    
    const printInfo = function(){
    let joke = document.createElement("p");
    joke.innerHTML = data.joke;
    container.append(joke);
    if(joke.innerHTML === "undefined"){
        const delivery = document.createElement("p");
        container.append(delivery);
        joke.innerHTML = data.setup;
        delivery.innerHTML = data.delivery;
    }
    }
    
    printInfo();

    nxtButton.addEventListener("click", function(e){
        e.preventDefault();
        console.log("click");
    })
};

disneyData();

